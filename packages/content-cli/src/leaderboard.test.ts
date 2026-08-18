import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { ContentCatalog } from "@ghcp/content-schema";
import {
  DEFAULT_LEADERBOARD_KIT_PATH,
  planLeaderboardPublish,
  resolveLeaderboardEnvironment
} from "./leaderboard.js";

const environments = {
  test: {
    repository: "mfm-se-dev-org/ghcp-dev-hack-leaderboard",
    submissionUrl: "https://github.com/mfm-se-dev-org/ghcp-dev-hack-leaderboard/issues/new?template=leaderboard-submission.yml",
    standingsUrl: "https://expert-adventure-386owy8.pages.github.io/"
  },
  production: {
    repository: "tammym-demos/ghcp-dev-hack-leaderboard",
    submissionUrl: "https://github.com/tammym-demos/ghcp-dev-hack-leaderboard/issues/new?template=leaderboard-submission.yml",
    standingsUrl: "https://tammym-demos.github.io/ghcp-dev-hack-leaderboard/"
  }
};

let root = "";
let workshopRoot = "";

function catalogFor(kitPath?: string): ContentCatalog {
  return {
    workshops: [
      {
        root: workshopRoot,
        workshop: {
          data: {
            id: "ghcp-dev-hack",
            leaderboard: { optional: true, aliasOnly: true, eventId: "ghcp-dev-hack", kitPath, environments }
          }
        }
      }
    ]
  } as unknown as ContentCatalog;
}

beforeEach(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), "ghcp-leaderboard-test-"));
  workshopRoot = path.join(root, "workshops", "ghcp-dev-hack");
  const kit = path.join(workshopRoot, DEFAULT_LEADERBOARD_KIT_PATH);
  await mkdir(path.join(kit, "src"), { recursive: true });
  await mkdir(path.join(kit, "node_modules"), { recursive: true });
  await mkdir(path.join(kit, "sample-site"), { recursive: true });
  await writeFile(path.join(kit, "leaderboard.config.json"), "{}", "utf8");
  await writeFile(path.join(kit, "src", "leaderboard.mjs"), "export {};", "utf8");
  await writeFile(path.join(kit, "node_modules", "ignored.js"), "", "utf8");
  await writeFile(path.join(kit, "sample-site", "index.html"), "", "utf8");
});

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

describe("leaderboard environment selection", () => {
  it("defaults to test and rejects unknown environments", () => {
    expect(resolveLeaderboardEnvironment(undefined)).toBe("test");
    expect(resolveLeaderboardEnvironment("test")).toBe("test");
    expect(resolveLeaderboardEnvironment("production")).toBe("production");
    expect(() => resolveLeaderboardEnvironment("staging")).toThrow(/test or production/);
  });
});

describe("leaderboard publish plan", () => {
  it("targets the declared repository for each environment", async () => {
    const production = await planLeaderboardPublish("ghcp-dev-hack", "production", catalogFor(), root);
    expect(production.repository).toBe(environments.production.repository);
    expect(production.standingsUrl).toBe(environments.production.standingsUrl);

    const test = await planLeaderboardPublish("ghcp-dev-hack", "test", catalogFor(), root);
    expect(test.repository).toBe(environments.test.repository);
  });

  it("publishes kit sources but never build output or dependencies", async () => {
    const plan = await planLeaderboardPublish("ghcp-dev-hack", "test", catalogFor(), root);

    expect(plan.files).toContain("leaderboard.config.json");
    expect(plan.files).toContain("src/leaderboard.mjs");
    expect(plan.files.some((file) => file.startsWith("node_modules/"))).toBe(false);
    expect(plan.files.some((file) => file.startsWith("sample-site/"))).toBe(false);
    expect(plan.kitDirectory).toBe(`workshops/ghcp-dev-hack/${DEFAULT_LEADERBOARD_KIT_PATH}`);
  });

  it("refuses a kit path that escapes the workshop root", async () => {
    await expect(planLeaderboardPublish("ghcp-dev-hack", "test", catalogFor("../../secrets"), root)).rejects.toThrow(
      /escapes the workshop root/
    );
  });

  it("reports a missing kit instead of publishing an empty repository", async () => {
    await expect(planLeaderboardPublish("ghcp-dev-hack", "test", catalogFor("artifacts/absent"), root)).rejects.toThrow(
      /does not exist/
    );
  });

  it("rejects an unknown workshop", async () => {
    await expect(planLeaderboardPublish("absent", "test", catalogFor(), root)).rejects.toThrow(/Unknown workshop/);
  });
});
