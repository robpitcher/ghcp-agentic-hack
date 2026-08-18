import { execFile } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import fsExtra from "fs-extra";
import { loadCatalog, type ContentCatalog } from "@ghcp/content-schema";
import { repositoryRoot } from "./paths.js";

const { copy, pathExists, readdir, remove } = fsExtra;
const execFileAsync = promisify(execFile);

export type LeaderboardEnvironment = "test" | "production";

export const DEFAULT_LEADERBOARD_KIT_PATH = "artifacts/leaderboard-kit";

/** Kit entries that are never published; they are local build output or dependencies. */
const EXCLUDED_KIT_ENTRIES = new Set(["node_modules", "sample-site", "site", ".git"]);

export interface LeaderboardPublishPlan {
  workshopId: string;
  environment: LeaderboardEnvironment;
  repository: string;
  standingsUrl: string;
  submissionUrl: string;
  kitDirectory: string;
  files: string[];
}

export function resolveLeaderboardEnvironment(value: string | undefined): LeaderboardEnvironment {
  if (value === undefined || value === "test") return "test";
  if (value === "production") return "production";
  throw new Error(`Unknown leaderboard environment: ${value}. Use test or production.`);
}

async function listKitFiles(kitDirectory: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(kitDirectory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    if (EXCLUDED_KIT_ENTRIES.has(entry.name)) continue;
    const relative = prefix === "" ? entry.name : `${prefix}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...(await listKitFiles(path.join(kitDirectory, entry.name), relative)));
    } else if (entry.isFile()) {
      files.push(relative);
    }
  }

  return files;
}

export async function planLeaderboardPublish(
  workshopId: string,
  environment: LeaderboardEnvironment,
  catalog: ContentCatalog,
  root = repositoryRoot
): Promise<LeaderboardPublishPlan> {
  const entry = catalog.workshops.find((candidate) => candidate.workshop.data.id === workshopId);
  if (!entry) throw new Error(`Unknown workshop: ${workshopId}`);

  const leaderboard = entry.workshop.data.leaderboard;
  if (!leaderboard) throw new Error(`Workshop ${workshopId} does not declare a leaderboard.`);

  const target = leaderboard.environments[environment];
  const kitRelativePath = leaderboard.kitPath ?? DEFAULT_LEADERBOARD_KIT_PATH;
  const kitDirectory = path.resolve(entry.root, kitRelativePath);
  const withinWorkshop = path.relative(entry.root, kitDirectory);
  if (withinWorkshop.startsWith("..") || path.isAbsolute(withinWorkshop)) {
    throw new Error(`The leaderboard kit path escapes the workshop root: ${kitRelativePath}`);
  }
  if (!(await pathExists(kitDirectory))) {
    throw new Error(`The leaderboard kit directory does not exist: ${kitRelativePath}`);
  }

  const files = await listKitFiles(kitDirectory);
  if (!files.includes("leaderboard.config.json")) {
    throw new Error(`The leaderboard kit is missing leaderboard.config.json: ${kitRelativePath}`);
  }

  return {
    workshopId,
    environment,
    repository: target.repository,
    standingsUrl: target.standingsUrl,
    submissionUrl: target.submissionUrl,
    kitDirectory: path.relative(root, kitDirectory).split(path.sep).join("/"),
    files
  };
}

async function runGit(cwd: string, args: string[]): Promise<string> {
  const { stdout } = await execFileAsync("git", args, { cwd, maxBuffer: 10 * 1024 * 1024 });
  return stdout.trim();
}

/**
 * Automation needs an explicit token; interactive use relies on the local Git
 * credential helper. The token is only ever placed in the remote URL, and the
 * remote is rewritten before the clone directory is reported or removed.
 */
function cloneUrl(repository: string, token: string | undefined): string {
  if (!token) return `https://github.com/${repository}.git`;
  return `https://x-access-token:${token}@github.com/${repository}.git`;
}

export interface LeaderboardPublishResult extends LeaderboardPublishPlan {
  published: boolean;
  commit?: string;
  reason?: string;
}

export async function publishLeaderboard(
  workshopId: string,
  environmentOption: string | undefined,
  options: { dryRun?: boolean; message?: string; token?: string } = {},
  root = repositoryRoot
): Promise<LeaderboardPublishResult> {
  const environment = resolveLeaderboardEnvironment(environmentOption);
  const catalog = await loadCatalog(root);
  const plan = await planLeaderboardPublish(workshopId, environment, catalog, root);

  if (options.dryRun) {
    return { ...plan, published: false, reason: "dry run" };
  }

  const token = options.token ?? process.env.LEADERBOARD_REPO_TOKEN ?? process.env.GH_TOKEN;
  const workingDirectory = await mkdtemp(path.join(os.tmpdir(), "ghcp-leaderboard-"));

  try {
    await runGit(workingDirectory, ["clone", "--depth", "1", cloneUrl(plan.repository, token), "checkout"]);
    const checkout = path.join(workingDirectory, "checkout");

    for (const entry of await readdir(checkout)) {
      if (entry === ".git") continue;
      await remove(path.join(checkout, entry));
    }

    for (const file of plan.files) {
      await copy(path.join(root, ...plan.kitDirectory.split("/"), ...file.split("/")), path.join(checkout, ...file.split("/")));
    }

    const status = await runGit(checkout, ["status", "--porcelain"]);
    if (status === "") {
      return { ...plan, published: false, reason: "the published leaderboard already matches the kit" };
    }

    const message = options.message ?? `Publish the ${plan.workshopId} leaderboard kit to ${environment}`;
    await runGit(checkout, ["add", "-A"]);
    await runGit(checkout, [
      "-c",
      "user.name=ghcp-content-cli",
      "-c",
      "user.email=ghcp-content-cli@users.noreply.github.com",
      "commit",
      "-m",
      message
    ]);
    await runGit(checkout, ["push", "origin", "HEAD"]);
    const commit = await runGit(checkout, ["rev-parse", "HEAD"]);

    return { ...plan, published: true, commit };
  } catch (error) {
    throw new Error(
      `Publishing the ${environment} leaderboard to ${plan.repository} failed: ${
        error instanceof Error ? redactToken(error.message, token) : String(error)
      }`
    );
  } finally {
    await rm(workingDirectory, { recursive: true, force: true });
  }
}

function redactToken(message: string, token: string | undefined): string {
  if (!token) return message;
  return message.split(token).join("***");
}
