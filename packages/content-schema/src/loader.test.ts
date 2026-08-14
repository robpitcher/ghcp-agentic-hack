import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ContentValidationError, loadCatalog } from "./loader.js";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe("loadCatalog", () => {
  it("validates character references even when a workshop has no storyboard", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-content-"));
    temporaryDirectories.push(root);
    const workshop = path.join(root, "workshops", "test-workshop");
    await mkdir(path.join(workshop, "content", "modules", "01-intro"), { recursive: true });
    await mkdir(path.join(workshop, "content", "characters", "guide"), { recursive: true });
    await writeFile(
      path.join(workshop, "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
description: Test content validation.
format: custom
duration: 1 hour
level: basic
audience: [Developers]
modules: [intro]
lastReviewed: 2026-07-28
---
`
    );
    await writeFile(
      path.join(workshop, "content", "modules", "01-intro", "module.md"),
      `---
schemaVersion: 1
kind: module
id: intro
title: Introduction
description: Introductory module.
duration: 1 hour
objectives: [Learn the basics]
slides: content/modules/01-intro/slides.md
status: draft
---
`
    );
    await writeFile(path.join(workshop, "content", "modules", "01-intro", "slides.md"), "# Slides");
    await writeFile(
      path.join(workshop, "content", "characters", "guide", "character.md"),
      `---
schemaVersion: 1
kind: character
id: guide
title: Guide
description: Workshop guide.
visualTraits: [Purple jacket]
continuityRules: [Keep the jacket]
referenceImages: [content/characters/guide/references/missing.png]
status: draft
---
`
    );

    await expect(loadCatalog(root)).rejects.toBeInstanceOf(ContentValidationError);
  });

  it("rejects storyboard references that point to the wrong content kind", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-content-"));
    temporaryDirectories.push(root);
    const workshop = path.join(root, "workshops", "test-workshop");
    await mkdir(path.join(workshop, "content", "modules", "01-intro"), { recursive: true });
    await mkdir(path.join(workshop, "content", "storyboards", "opening"), { recursive: true });
    await writeFile(
      path.join(workshop, "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
description: Test content validation.
format: custom
duration: 1 hour
level: basic
audience: [Developers]
modules: [intro]
lastReviewed: 2026-07-28
---
`
    );
    await writeFile(
      path.join(workshop, "content", "modules", "01-intro", "module.md"),
      `---
schemaVersion: 1
kind: module
id: intro
title: Introduction
description: Introductory module.
duration: 1 hour
objectives: [Learn the basics]
slides: content/modules/01-intro/slides.md
status: draft
---
`
    );
    await writeFile(path.join(workshop, "content", "modules", "01-intro", "slides.md"), "# Slides");
    await writeFile(
      path.join(workshop, "content", "storyboards", "opening", "storyboard.md"),
      `---
schemaVersion: 1
kind: storyboard
id: opening
title: Opening
purpose: Open the workshop.
targetDurationSeconds: 10
aspectRatio: "16:9"
scenes: [content/modules/01-intro/module.md]
status: draft
---
`
    );

    await expect(loadCatalog(root)).rejects.toThrow("scene reference does not point to a validated scene");
  });

  it("enforces generated slide counts and manifest titles", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-content-"));
    temporaryDirectories.push(root);
    const workshop = path.join(root, "workshops", "test-workshop");
    const moduleRoot = path.join(workshop, "content", "modules", "01-intro");
    await mkdir(moduleRoot, { recursive: true });
    await writeFile(
      path.join(workshop, "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
description: Test content validation.
format: custom
duration: 1 hour
level: basic
audience: [Developers]
modules: [intro]
lastReviewed: 2026-07-28
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
objectives: [Learn the basics]
slides: content/modules/01-intro/slides.md
generation:
  expectedSlides: 2
  manifest: content/modules/01-intro/slide-manifest.md
  imageProvider: gpt-image-2
  visualStyle: Minimal
status: draft
---
`
    );
    await writeFile(
      path.join(moduleRoot, "slides.md"),
      `---
theme: ghcp
---

# Wrong title

<!--
First sentence. Second sentence. Third sentence.
-->
`
    );
    await writeFile(
      path.join(moduleRoot, "slide-manifest.md"),
      `| # | Source | Topic | Type | Exact source title | Visual |
|---:|---|---|---|---|---|
| 1 | H1 | Intro | Cover | Introduction | Native |
| 2 | H2 | Next | Content | Next steps | Native |
`
    );

    await expect(loadCatalog(root)).rejects.toThrow("expected 2 slides but found 1 H1 slide titles");

    await writeFile(
      path.join(moduleRoot, "slides.md"),
      `---
theme: ghcp
---

# Introduction

<!--
First sentence. Second sentence. Third sentence.
-->

---

# Teach the project with \`/init\`

<!--
First sentence. Second sentence. Third sentence.
-->
`
    );
    await writeFile(
      path.join(moduleRoot, "slide-manifest.md"),
      `| # | Source | Topic | Type | Exact source title | Visual |
|---:|---|---|---|---|---|
| 1 | H1 | Intro | Cover | Introduction | Native |
| 2 | H2 | Next | Content | Teach the project with \`/init\` | Native |
`
    );

    await expect(loadCatalog(root)).resolves.toMatchObject({
      workshops: [{ modules: [{ data: { id: "intro" } }] }]
    });

    await writeFile(
      path.join(moduleRoot, "slides.md"),
      `---
theme: ghcp
---

# Introduction

<!--
First sentence. Second sentence. Third sentence.
-->

---
hide: true
---

# Superseded introduction

---

# Teach the project with \`/init\`

<!--
First sentence. Second sentence. Third sentence.
-->
`
    );

    await expect(loadCatalog(root)).resolves.toMatchObject({
      workshops: [{ modules: [{ data: { id: "intro" } }] }]
    });

    await writeFile(
      path.join(moduleRoot, "slides.md"),
      (await readFile(path.join(moduleRoot, "slides.md"), "utf8")).replace("hide: true", "disabled: true")
    );

    await expect(loadCatalog(root)).resolves.toMatchObject({
      workshops: [{ modules: [{ data: { id: "intro" } }] }]
    });

    await writeFile(
      path.join(moduleRoot, "slides.md"),
      (await readFile(path.join(moduleRoot, "slides.md"), "utf8")).replace("disabled: true", "disabled: false")
    );

    await expect(loadCatalog(root)).rejects.toThrow("expected 2 slides but found 3 H1 slide titles");
  });

  it("reconciles delivery variant module phase minutes", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-content-"));
    temporaryDirectories.push(root);
    const workshop = path.join(root, "workshops", "test-workshop");
    const moduleRoot = path.join(workshop, "content", "modules", "01-intro");
    await mkdir(moduleRoot, { recursive: true });
    await writeFile(
      path.join(workshop, "workshop.md"),
      `---
schemaVersion: 1
kind: workshop
id: test-workshop
title: Test Workshop
description: Test delivery variants.
format: custom
duration: 1 hour
level: basic
audience: [Developers]
modules: [intro]
deliveryVariants:
  - id: compact
    title: Compact
    description: Compact delivery.
    days:
      - id: day-one
        title: Day one
        start: "09:00"
        end: "10:00"
        agenda:
          - id: content
            type: module-content
            title: Content
            start: "09:00"
            end: "09:20"
            module: intro
          - id: mission
            type: mission
            title: Mission
            start: "09:20"
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

    await expect(loadCatalog(root)).rejects.toThrow(
      'delivery variant "compact" module-content minutes for "intro" (20) must equal 30'
    );
  });
});
