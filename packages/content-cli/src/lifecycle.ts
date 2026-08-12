import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import fsExtra from "fs-extra";
import matter from "gray-matter";
import { loadCatalog, productionStateSchema, type ProductionState } from "@ghcp/content-schema";
import { repositoryRoot, workshopsRoot } from "./paths.js";

const execFileAsync = promisify(execFile);
const { pathExists, readFile, writeFile } = fsExtra;

type LifecycleRoots = {
  repositoryRoot: string;
  workshopsRoot: string;
};

const defaultRoots: LifecycleRoots = { repositoryRoot, workshopsRoot };

function statePath(workshopId: string, roots: LifecycleRoots): string {
  return path.join(roots.workshopsRoot, workshopId, "content", "production", "production-state.md");
}

async function gitOutput(args: string[], root: string): Promise<string> {
  const result = await execFileAsync("git", args, { cwd: root });
  return result.stdout.trim();
}

export async function gitSnapshot(root = repositoryRoot): Promise<{
  branch: string;
  commit: string;
  dirtyFiles: string[];
}> {
  const [branch, commit, status] = await Promise.all([
    gitOutput(["branch", "--show-current"], root),
    gitOutput(["rev-parse", "HEAD"], root),
    gitOutput(["status", "--porcelain=v1"], root)
  ]);
  return {
    branch: branch || "detached-head",
    commit,
    dirtyFiles: status ? status.split(/\r?\n/) : []
  };
}

export async function loadProductionState(
  workshopId: string,
  roots: LifecycleRoots = defaultRoots
): Promise<{ filePath: string; body: string; state: ProductionState }> {
  const filePath = statePath(workshopId, roots);
  if (!(await pathExists(filePath))) {
    throw new Error(`Production state does not exist: ${filePath}`);
  }
  const parsed = matter(await readFile(filePath, "utf8"));
  return { filePath, body: parsed.content, state: productionStateSchema.parse(parsed.data) };
}

async function saveProductionState(
  filePath: string,
  body: string,
  state: ProductionState
): Promise<void> {
  await writeFile(filePath, matter.stringify(body, state), "utf8");
}

function checkpointId(date: Date): string {
  return `checkpoint-${date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "z").toLowerCase()}`;
}

export async function pauseWorkshop(
  workshopId: string,
  reason: string,
  roots: LifecycleRoots = defaultRoots,
  now = new Date()
): Promise<ProductionState> {
  const loaded = await loadProductionState(workshopId, roots);
  const snapshot = await gitSnapshot(roots.repositoryRoot);
  const updated = productionStateSchema.parse({
    ...loaded.state,
    sessionStatus: "paused",
    branch: snapshot.branch,
    pausedAt: now.toISOString(),
    pauseReason: reason,
    updatedAt: now.toISOString()
  });
  await saveProductionState(loaded.filePath, loaded.body, updated);
  return updated;
}

export async function checkpointWorkshop(
  workshopId: string,
  roots: LifecycleRoots = defaultRoots,
  now = new Date()
): Promise<ProductionState> {
  const loaded = await loadProductionState(workshopId, roots);
  const snapshot = await gitSnapshot(roots.repositoryRoot);
  if (snapshot.dirtyFiles.length > 0) {
    throw new Error(
      `Checkpoint requires a clean worktree. Commit or explicitly preserve these files first:\n${snapshot.dirtyFiles.join("\n")}`
    );
  }
  const updated = productionStateSchema.parse({
    ...loaded.state,
    branch: snapshot.branch,
    lastValidatedCommit: snapshot.commit,
    checkpointId: checkpointId(now),
    updatedAt: now.toISOString()
  });
  await saveProductionState(loaded.filePath, loaded.body, updated);
  return updated;
}

async function commitIsAncestor(expected: string, current: string, root: string): Promise<boolean> {
  try {
    await execFileAsync("git", ["merge-base", "--is-ancestor", expected, current], { cwd: root });
    return true;
  } catch {
    return false;
  }
}

export async function workshopStatus(
  workshopId: string,
  roots: LifecycleRoots = defaultRoots
): Promise<string> {
  const loaded = await loadProductionState(workshopId, roots);
  const snapshot = await gitSnapshot(roots.repositoryRoot);
  const state = loaded.state;
  const commitCompatible = await commitIsAncestor(state.lastValidatedCommit, snapshot.commit, roots.repositoryRoot);
  return [
    `Workshop: ${state.workshop}`,
    `Phase: ${state.phase} (${state.sessionStatus})`,
    `Initiative: ${state.currentInitiative}`,
    `Owner: ${state.currentOwner}`,
    `Next owner: ${state.nextOwner}`,
    `Next human gate: ${state.nextHumanGate}`,
    `Resume task: ${state.resumeTask}`,
    `Paid generation: ${state.paidGeneration}`,
    `Release: ${state.releaseState}`,
    `Timing: ${state.timing.allocatedMinutes}/${state.timing.totalMinutes} minutes (${state.timing.source})`,
    `Checkpoint: ${state.checkpointId} at ${state.lastValidatedCommit.slice(0, 12)}`,
    `Repository: ${snapshot.branch}@${snapshot.commit.slice(0, 12)} (${snapshot.dirtyFiles.length} dirty path(s))`,
    `Checkpoint ancestry: ${commitCompatible ? "compatible" : "diverged"}`,
    `Blockers: ${state.blockers.length > 0 ? state.blockers.join("; ") : "none"}`
  ].join("\n");
}

export async function resumeWorkshop(
  workshopId: string,
  roots: LifecycleRoots = defaultRoots
): Promise<string> {
  const loaded = await loadProductionState(workshopId, roots);
  const snapshot = await gitSnapshot(roots.repositoryRoot);
  if (!(await commitIsAncestor(loaded.state.lastValidatedCommit, snapshot.commit, roots.repositoryRoot))) {
    throw new Error(
      `Recorded checkpoint ${loaded.state.lastValidatedCommit} is not an ancestor of current HEAD ${snapshot.commit}. Reconcile repository history before resuming.`
    );
  }
  const lifecycleArtifacts = [
    ...loaded.state.approvedArtifacts,
    ...loaded.state.activeTracks.flatMap((track) => (track.artifact ? [track.artifact] : [])),
    loaded.state.timing.source
  ];
  for (const artifact of lifecycleArtifacts) {
    const artifactPath = path.resolve(roots.workshopsRoot, workshopId, ...artifact.split("/"));
    if (!(await pathExists(artifactPath))) {
      throw new Error(`Approved lifecycle artifact is missing: ${artifact}`);
    }
  }
  return workshopStatus(workshopId, roots);
}

function clock(minutes: number): string {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  return `${Math.floor(normalized / 60).toString().padStart(2, "0")}:${(normalized % 60).toString().padStart(2, "0")}`;
}

export async function workshopRunOfShow(
  workshopId: string,
  start = "09:00",
  roots: LifecycleRoots = defaultRoots,
  variantId?: string
): Promise<string> {
  const catalog = await loadCatalog(roots.repositoryRoot);
  const entry = catalog.workshops.find((candidate) => candidate.workshop.data.id === workshopId);
  if (!entry) throw new Error(`Workshop does not exist: ${workshopId}`);
  const variants = entry.workshop.data.deliveryVariants ?? [];
  const selectedVariantId = variantId ?? entry.workshop.data.defaultDeliveryVariant;
  if (selectedVariantId || (variants.length > 0 && !entry.workshop.data.runOfShow)) {
    const selected = variants.find((variant) => variant.id === selectedVariantId) ?? (
      !selectedVariantId && variants.length === 1 ? variants[0] : undefined
    );
    if (!selected) {
      throw new Error(
        selectedVariantId
          ? `Delivery variant does not exist: ${selectedVariantId}`
          : `Select a delivery variant: ${variants.map((variant) => variant.id).join(", ")}`
      );
    }
    const totalMinutes = selected.days.reduce(
      (total, day) =>
        total + day.agenda.reduce((dayTotal, block) => {
          const [startHours, startMinutes] = block.start.split(":").map(Number);
          const [endHours, endMinutes] = block.end.split(":").map(Number);
          return dayTotal + ((endHours ?? 0) * 60 + (endMinutes ?? 0)) - ((startHours ?? 0) * 60 + (startMinutes ?? 0));
        }, 0),
      0
    );
    const lines = [
      `# ${entry.workshop.data.title}: ${selected.title}`,
      "",
      selected.description,
      "",
      `Total: ${totalMinutes} minutes across ${selected.days.length} day(s)`,
      "",
      "| Day | Start | End | Minutes | Type | Block | Module |",
      "| --- | --- | --- | ---: | --- | --- | --- |"
    ];
    for (const day of selected.days) {
      for (const block of day.agenda) {
        const [startHours, startMinutes] = block.start.split(":").map(Number);
        const [endHours, endMinutes] = block.end.split(":").map(Number);
        const minutes = ((endHours ?? 0) * 60 + (endMinutes ?? 0)) - ((startHours ?? 0) * 60 + (startMinutes ?? 0));
        lines.push(
          `| ${day.title} | ${block.start} | ${block.end} | ${minutes} | ${block.type} | ${block.title} | ${block.module ?? "—"} |`
        );
      }
    }
    return lines.join("\n");
  }
  if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(start)) {
    throw new Error("Start time must use 24-hour HH:mm format");
  }
  const runOfShow = entry.workshop.data.runOfShow;
  if (!runOfShow || entry.workshop.data.totalMinutes === undefined) {
    throw new Error(`Workshop does not define lifecycle v2 timing: ${workshopId}`);
  }
  const [hours, minutes] = start.split(":").map(Number);
  let cursor = (hours ?? 0) * 60 + (minutes ?? 0);
  const lines = [
    `# ${entry.workshop.data.title} Run of Show`,
    "",
    `Total: ${entry.workshop.data.totalMinutes} minutes`,
    "",
    "| Start | End | Minutes | Type | Block |",
    "| --- | --- | ---: | --- | --- |"
  ];
  for (const block of runOfShow) {
    const end = cursor + block.minutes;
    lines.push(`| ${clock(cursor)} | ${clock(end)} | ${block.minutes} | ${block.type} | ${block.title} |`);
    cursor = end;
  }
  return lines.join("\n");
}
