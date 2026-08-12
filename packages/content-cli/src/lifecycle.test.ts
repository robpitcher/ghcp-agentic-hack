import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";
import matter from "gray-matter";
import {
  checkpointWorkshop,
  pauseWorkshop,
  resumeWorkshop,
  workshopRunOfShow,
  workshopStatus
} from "./lifecycle.js";

const execFileAsync = promisify(execFile);
const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

async function fixture(): Promise<{
  root: string;
  workshopsRoot: string;
  statePath: string;
}> {
  const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-lifecycle-"));
  temporaryDirectories.push(root);
  const workshopsRoot = path.join(root, "workshops");
  const productionRoot = path.join(workshopsRoot, "test-workshop", "content", "production");
  const statePath = path.join(productionRoot, "production-state.md");
  await mkdir(productionRoot, { recursive: true });
  await writeFile(path.join(productionRoot, "experience-plan.md"), "# Experience");
  await execFileAsync("git", ["init"], { cwd: root });
  await execFileAsync("git", ["config", "user.email", "test@example.com"], { cwd: root });
  await execFileAsync("git", ["config", "user.name", "Test"], { cwd: root });
  await execFileAsync("git", ["add", "."], { cwd: root });
  await execFileAsync("git", ["commit", "-m", "Initial"], { cwd: root });
  const commit = (await execFileAsync("git", ["rev-parse", "HEAD"], { cwd: root })).stdout.trim();
  await writeFile(
    statePath,
    `---
schemaVersion: 1
kind: production-state
workshop: test-workshop
lifecycleVersion: 2
phase: discovery
sessionStatus: active
activeTracks: []
currentInitiative: workshop-design
currentOwner: Workshop Production Coordinator
nextOwner: Human
nextHumanGate: Content approval
resumeTask: content-review
approvedArtifacts: []
blockers: []
timing:
  totalMinutes: 60
  allocatedMinutes: 60
  source: content/production/experience-plan.md
paidGeneration: not-approved
releaseState: not-ready
branch: main
lastValidatedCommit: ${commit}
checkpointId: checkpoint-initial
updatedAt: 2026-08-04T18:00:00.000Z
---

# State
`
  );
  return { root, workshopsRoot, statePath };
}

describe("workshop lifecycle state", () => {
  it("persists a pause and resumes from repository state", async () => {
    const test = await fixture();
    const roots = { repositoryRoot: test.root, workshopsRoot: test.workshopsRoot };
    await pauseWorkshop("test-workshop", "Dinner break", roots, new Date("2026-08-04T18:30:00.000Z"));
    const parsed = matter(await readFile(test.statePath, "utf8"));
    expect(parsed.data.sessionStatus).toBe("paused");
    expect(parsed.data.pauseReason).toBe("Dinner break");
    await expect(resumeWorkshop("test-workshop", roots)).resolves.toContain("Resume task: content-review");
    await expect(workshopStatus("test-workshop", roots)).resolves.toContain("Timing: 60/60 minutes");
  });

  it("refuses to checkpoint a dirty worktree", async () => {
    const test = await fixture();
    const roots = { repositoryRoot: test.root, workshopsRoot: test.workshopsRoot };
    await expect(checkpointWorkshop("test-workshop", roots)).rejects.toThrow("clean worktree");
  });

  it("renders a selected delivery variant", async () => {
    const test = await fixture();
    const workshopRoot = path.join(test.workshopsRoot, "test-workshop");
    const moduleRoot = path.join(workshopRoot, "content", "modules", "01-intro");
    await mkdir(moduleRoot, { recursive: true });
    await writeFile(
      path.join(workshopRoot, "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
lifecycleVersion: 2
description: Test schedule selection.
format: custom
duration: 1 hour
level: basic
audience: [Developers]
modules: [intro]
deliveryVariants:
  - id: compact
    title: Compact delivery
    description: One compact day.
    days:
      - id: day-one
        title: Day one
        start: "09:00"
        end: "10:00"
        agenda:
          - id: content
            type: module-content
            title: Introduction
            start: "09:00"
            end: "09:30"
            module: intro
          - id: mission
            type: mission
            title: Practice
            start: "09:30"
            end: "10:00"
            module: intro
lastReviewed: 2026-08-05
---
`
    );
    await writeFile(
      path.join(moduleRoot, "module.md"),
      `---
schemaVersion: 1
kind: module
id: intro
title: Introduction
description: Introductory module.
duration: 1 hour
totalMinutes: 60
timing:
  instructionMinutes: 30
  missionMinutes: 30
  discussionMinutes: 0
  mediaPlaybackMinutes: 0
  setupAndTransitionsMinutes: 0
  breaksMinutes: 0
  contingencyMinutes: 0
objectives: [Learn the basics]
slides: content/modules/01-intro/slides.md
status: draft
---
`
    );
    await writeFile(path.join(moduleRoot, "slides.md"), "# Slides");

    const schedule = await workshopRunOfShow(
      "test-workshop",
      "09:00",
      { repositoryRoot: test.root, workshopsRoot: test.workshopsRoot },
      "compact"
    );

    expect(schedule).toContain("# Test Workshop: Compact delivery");
    expect(schedule).toContain("| Day one | 09:30 | 10:00 | 30 | mission | Practice | intro |");
  });
});
