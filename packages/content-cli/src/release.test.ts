import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";
import { loadCatalog, releaseManifestSchema } from "@ghcp/content-schema";
import { repositoryRoot } from "./paths.js";
import { exportPublicRelease, filterCatalogForRelease, validateApprovedRelease } from "./release.js";

const execFileAsync = promisify(execFile);
const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

describe("portfolio release selection", () => {
  it("includes only explicitly selected modules", async () => {
    const catalog = await loadCatalog(repositoryRoot);
    const release = releaseManifestSchema.parse({
      schemaVersion: 1,
      kind: "release-manifest",
      id: "foundations-review",
      title: "Foundations review",
      status: "draft",
      commit: "0".repeat(40),
      createdAt: "2026-08-04T18:00:00.000Z",
      workshops: [{ id: "ghcp-dev-hack", modules: ["foundations"] }]
    });

    const selected = filterCatalogForRelease(catalog, release);

    expect(selected.workshops).toHaveLength(1);
    expect(selected.workshops[0]?.workshop.data.modules).toEqual(["foundations"]);
    expect(selected.workshops[0]?.modules.map((module) => module.data.id)).toEqual(["foundations"]);
  });

  it("rejects modules that are not in the selected workshop", async () => {
    const catalog = await loadCatalog(repositoryRoot);
    const release = releaseManifestSchema.parse({
      schemaVersion: 1,
      kind: "release-manifest",
      id: "invalid-release",
      title: "Invalid release",
      status: "draft",
      commit: "0".repeat(40),
      createdAt: "2026-08-04T18:00:00.000Z",
      workshops: [{ id: "ghcp-dev-hack", modules: ["missing-module"] }]
    });

    expect(() => filterCatalogForRelease(catalog, release)).toThrow("unknown module");
  });

  it("allows only the release manifest to change after the reviewed content commit", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-release-"));
    temporaryDirectories.push(root);
    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["config", "user.email", "test@example.com"], { cwd: root });
    await execFileAsync("git", ["config", "user.name", "Test"], { cwd: root });
    await writeFile(path.join(root, "content.md"), "reviewed");
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Reviewed content"], { cwd: root });
    const commit = (await execFileAsync("git", ["rev-parse", "HEAD"], { cwd: root })).stdout.trim();
    await mkdir(path.join(root, "releases"));
    const manifest = `---
schemaVersion: 1
kind: release-manifest
id: test-release
title: Test release
status: approved
commit: ${commit}
createdAt: 2026-08-04T18:00:00.000Z
approvedBy: Workshop owner
approvedAt: 2026-08-04T18:05:00.000Z
workshops:
  - id: test-workshop
    modules:
      - introduction
---
`;
    await writeFile(path.join(root, "releases", "test-release.md"), manifest);
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Approve release"], { cwd: root });

    await expect(validateApprovedRelease("releases/test-release.md", root)).resolves.toMatchObject({
      id: "test-release"
    });

    await writeFile(path.join(root, "content.md"), "changed after review");
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Unexpected content change"], { cwd: root });
    await expect(validateApprovedRelease("releases/test-release.md", root)).rejects.toThrow(
      "content changed"
    );
  });

  it("exports only selected buildable content and omits lifecycle production files", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-public-export-"));
    temporaryDirectories.push(root);
    await mkdir(path.join(root, ".github", "public-release"), { recursive: true });
    await mkdir(path.join(root, "apps", "portal", "src"), { recursive: true });
    await mkdir(path.join(root, "packages"), { recursive: true });
    await mkdir(path.join(root, "scripts"), { recursive: true });
    await mkdir(path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "public"), {
      recursive: true
    });
    await mkdir(path.join(root, "workshops", "test-workshop", "content", "production"), { recursive: true });
    await mkdir(path.join(root, "workshops", "test-workshop", "content", "storyboards", "intro", "scenes"), {
      recursive: true
    });
    await mkdir(path.join(root, "workshops", "test-workshop", "content", "characters", "guide"), {
      recursive: true
    });
    await mkdir(path.join(root, "workshops", "test-workshop", "assets"), { recursive: true });
    await writeFile(path.join(root, "package.json"), '{"private":true}');
    await writeFile(path.join(root, ".gitignore"), "node_modules/\n");
    await writeFile(path.join(root, ".gitattributes"), "*.mp4 filter=lfs diff=lfs merge=lfs -text\n");
    await writeFile(path.join(root, "pnpm-lock.yaml"), "lockfileVersion: '9.0'\n");
    await writeFile(path.join(root, "pnpm-workspace.yaml"), "packages: []\n");
    await writeFile(path.join(root, "tsconfig.base.json"), "{}\n");
    await writeFile(path.join(root, "scripts", "preview-local.mjs"), "");
    await writeFile(path.join(root, ".github", "public-release", "pages.yml"), "name: Public Pages\n");
    await writeFile(path.join(root, ".github", "public-release", "README.md"), "# Public release\n");
    await writeFile(
      path.join(root, "workshops", "test-workshop", "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
lifecycleVersion: 2
description: Test workshop
format: custom
duration: 30 minutes
totalMinutes: 30
schedule:
  instructionMinutes: 30
  missionMinutes: 0
  discussionMinutes: 0
  mediaPlaybackMinutes: 0
  setupAndTransitionsMinutes: 0
  breaksMinutes: 0
  contingencyMinutes: 0
runOfShow:
  - id: introduction
    type: module
    title: Introduction
    minutes: 30
    module: introduction
level: basic
audience:
  - Developers
modules:
  - introduction
lastReviewed: 2026-08-05
---

# Test Workshop
`
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "module.md"),
      `---
schemaVersion: 1
kind: module
id: introduction
title: Introduction
description: Introduction module
duration: 30 minutes
totalMinutes: 30
timing:
  instructionMinutes: 30
  missionMinutes: 0
  discussionMinutes: 0
  mediaPlaybackMinutes: 0
  setupAndTransitionsMinutes: 0
  breaksMinutes: 0
  contingencyMinutes: 0
objectives:
  - Learn the introduction
slides: content/modules/01-intro/slides.md
sourceDocuments:
  - content/modules/01-intro/source.md
  - content/storyboards/intro/storyboard.md
assets:
  - assets/diagram.txt
status: published
---
`
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "slides.md"),
      "# Introduction"
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "source.md"),
      "# Source"
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "public", "poster.txt"),
      "poster"
    );
    await writeFile(path.join(root, "workshops", "test-workshop", "assets", "diagram.txt"), "diagram");
    await writeFile(
      path.join(root, "workshops", "test-workshop", "assets", "diagram.txt.json"),
      JSON.stringify({
        schemaVersion: 1,
        id: "diagram",
        kind: "image",
        provider: "gpt-image-2",
        deployment: "test",
        promptHash: "0".repeat(64),
        source: "content/modules/01-intro/prompt.txt",
        createdAt: "2026-08-05T18:00:00.000Z",
        reviewStatus: "approved",
        location: "assets/diagram.txt"
      })
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "modules", "01-intro", "prompt.txt"),
      "Generate a diagram"
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "storyboards", "intro", "storyboard.md"),
      `---
schemaVersion: 1
kind: storyboard
id: intro
title: Intro Storyboard
purpose: Explain the introduction
targetDurationSeconds: 4
aspectRatio: "16:9"
characters:
  - content/characters/guide/character.md
scenes:
  - content/storyboards/intro/scenes/opening.md
status: published
---
`
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "storyboards", "intro", "scenes", "opening.md"),
      `---
schemaVersion: 1
kind: scene
id: opening
title: Opening
durationSeconds: 4
visualDirection: Open the workshop
status: published
---
`
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "characters", "guide", "character.md"),
      `---
schemaVersion: 1
kind: character
id: guide
title: Guide
description: Workshop guide
visualTraits:
  - Clear silhouette
continuityRules:
  - Keep the same clothing
referenceImages:
  - assets/diagram.txt
status: published
---
`
    );
    await writeFile(
      path.join(root, "workshops", "test-workshop", "content", "production", "production-state.md"),
      `---
schemaVersion: 1
kind: production-state
workshop: test-workshop
lifecycleVersion: 2
phase: release-review
sessionStatus: awaiting-human
currentInitiative: public-release
currentOwner: Test
nextOwner: Test
nextHumanGate: Approve release
resumeTask: approve-release
timing:
  totalMinutes: 30
  allocatedMinutes: 30
  source: workshop.md
paidGeneration: not-approved
releaseState: approved
branch: main
lastValidatedCommit: "${"0".repeat(40)}"
checkpointId: public-release
updatedAt: 2026-08-05T18:00:00.000Z
---
`
    );
    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["config", "user.email", "test@example.com"], { cwd: root });
    await execFileAsync("git", ["config", "user.name", "Test"], { cwd: root });
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Reviewed content"], { cwd: root });
    const commit = (await execFileAsync("git", ["rev-parse", "HEAD"], { cwd: root })).stdout.trim();
    await mkdir(path.join(root, "releases"));
    await writeFile(
      path.join(root, "releases", "test-release.md"),
      `---
schemaVersion: 1
kind: release-manifest
id: test-release
title: Test release
status: approved
commit: ${commit}
createdAt: 2026-08-05T18:00:00.000Z
approvedBy: Workshop owner
approvedAt: 2026-08-05T18:05:00.000Z
workshops:
  - id: test-workshop
    modules:
      - introduction
---
`
    );
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Approve release"], { cwd: root });

    const output = await exportPublicRelease("releases/test-release.md", "public-export", root);
    const exportedCatalog = await loadCatalog(output);
    const exportedWorkshop = await readFile(
      path.join(output, "workshops", "test-workshop", "workshop.md"),
      "utf8"
    );

    expect(exportedCatalog.workshops[0]?.modules.map((module) => module.data.id)).toEqual(["introduction"]);
    expect(exportedWorkshop).not.toContain("lifecycleVersion");
    await expect(
      readFile(path.join(output, "workshops", "test-workshop", "content", "production", "production-state.md"))
    ).rejects.toThrow();
    await expect(readFile(path.join(output, ".github", "workflows", "pages.yml"), "utf8")).resolves.toContain(
      "Public Pages"
    );
    await expect(readFile(path.join(output, "release-provenance.json"), "utf8")).resolves.toContain(commit);
    await expect(
      readFile(
        path.join(output, "workshops", "test-workshop", "content", "modules", "01-intro", "prompt.txt"),
        "utf8"
      )
    ).resolves.toContain("Generate a diagram");
    await expect(
      readFile(
        path.join(
          output,
          "workshops",
          "test-workshop",
          "content",
          "storyboards",
          "intro",
          "scenes",
          "opening.md"
        ),
        "utf8"
      )
    ).resolves.toContain("Open the workshop");
  });
});
