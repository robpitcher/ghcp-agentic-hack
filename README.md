# GHCP Agentic Hack Content Repo

This repo is the content hub for Copilot hack workshops: slide decks, labs, quizzes, and a static site that publishes everything to GitHub Pages.

## Quick start: run or prep a hack

Use this flow for a first local preview:

1. Install dependencies.
2. Build the site and Slidev decks.
3. Run a local preview at the same base path used in production.

```bash
npm install
npm run preview:local
```

Open: <http://localhost:4201/ghcp-agentic-hack/>

If port `4201` is already in use, choose another port:

```bash
npm run preview:local -- --port=4202
```

> **Important**: Do not change the base path to `/` for local testing. Production uses `/ghcp-agentic-hack/`.

`npm run preview:local` runs `npm run build:all` first, prepares `dist/local-preview/ghcp-agentic-hack/`, and serves the result. Use `npm run preview:local -- --no-build` only when you already have a current `dist/site/` build.

## Prerequisites

| Need | Requirement |
|---|---|
| Site, decks, and tests | Node.js 22 and npm |
| PPTX conversion | Python plus `python-pptx` and `Pillow` |
| Lab usability tests | Playwright Chromium, installed with `npx playwright install chromium` |
| Participant execution tests | VS Code `code` CLI, GitHub Copilot extensions, Copilot CLI, and active authentication |

For PPTX conversion dependencies:

```bash
pip install python-pptx Pillow
```

## What should I run?

| Task | Command | Expected result |
|---|---|---|
| Preview everything locally | `npm run preview:local` | Builds decks and site, then serves <http://localhost:4201/ghcp-agentic-hack/> |
| Rebuild without serving | `npm run build:all` | Writes the complete GitHub Pages output to `dist/site/` |
| Check Astro site changes only | `npm run build:site` | Builds site routes without rebuilding Slidev decks |
| Validate workshop, lab, quiz, Slidev, or QA content alignment | `npm run test:curriculum-qa` | Runs deterministic curriculum QA checks |
| Validate rendered lab pages and copyable blocks | `npm run test:labs` | Runs safe Playwright checks used by CI |
| Run live participant checks manually | `npm run test:labs:participant` | Exercises local VS Code and Copilot CLI surfaces |
| Convert a PPTX deck | `npm run convert:pptx -- <workshop-folder-name>` | Extracts slide images and writes the `.slidev.md` deck |
| Combine split PPTX parts | `npm run convert:pptx:parts -- <workshop-folder-name>` | Combines `-part-*` PPTX files into one Slidev deck |

> **Important**: To update one slide image without losing presenter notes, replace the existing PNG under `public/images/<workshop-folder-name>/` and leave the `*.slidev.md` file unchanged. Re-run `convert:pptx` only when you intentionally want to regenerate the whole Slidev deck; conversion overwrites the deck and recreates presenter-note TODO placeholders.

## Repo layout (what to edit)

```text
workshops/
  copilot-dev-training/      # Parent curriculum metadata
  copilot-dev-foundations/   # Module 1 content
  copilot-dev-agentic/       # Module 2 content
  copilot-dev-advanced/      # Module 3 content
public/images/               # Shared slide image assets
site/                        # Astro pages and layouts
scripts/build-site.mjs       # Full build orchestrator
scripts/convert-pptx.py      # PPTX -> Slidev/image pipeline
themes/github/               # Shared Slidev theme
```

Each module folder typically contains:

- `<module>-workshop.md` (source-of-truth narrative content)
- `<module>.slidev.md` (slides)
- `<module>-LAB.md` (hands-on lab)
- `<module>-QUIZ.md` (interactive quiz)

Treat `*-workshop.md` as the authoritative source for the module. Labs, quizzes, presenter notes, and generated Slidev decks should reflect the same section order, scope, tables, diagrams, prompts, and key concepts.

## Hack workflow (content updates)

1. Edit the module files in `workshops/<module>/`.
2. Check the companion files for consistency before rebuilding:
   - `*-LAB.md` mirrors workshop section order and exercise scope.
   - `*-QUIZ.md` only asks about concepts covered in the workshop.
   - `*.slidev.md` presenter notes accurately reflect the workshop content.
   - `presenter.md`, when present, stays section-aligned with facilitation prompts.
3. Follow the content conventions:
   - **Show, then do**: each hands-on beat gets an explicit slide pointer (`Slide topic (1 slide): Show me …` / `Now you try …`) so developers know which slide to follow.
   - **MCP is conceptual**: teach what MCP is and why it matters for agentic developers; do not demo a specific MCP server.
   - **Enterprise skills stay in the separate skills library** (`workshops/<workshop>/skills/<slug>/SKILL.md`), not baked into module content.
   - **Keep the hardened slide-generation instruction header** at the top of each `*-workshop.md` intact.
4. Rebuild and preview:

```bash
npm run preview:local
```

5. Run the smallest validation command that covers the change.
6. Spot-check module links from the landing page and workshop page.

## Common content tasks

| Task | Edit | Then run |
|---|---|---|
| Update workshop source, LAB, QUIZ, presenter notes, Slidev, or QA reports | `workshops/<module>/...` or `qa/...` | `npm run test:curriculum-qa` |
| Update lab headings, rendered lab copy, commands, or prompt blocks | `workshops/<module>/*-LAB.md` | `npm run test:labs` |
| Update only Astro pages, layouts, or metadata | `site/...` or `site/data/workshops.ts` | `npm run build:site` |
| Add or change a Slidev deck | `workshops/<module>/*.slidev.md` | `npm run build:all` |
| Add a local technology skill | `workshops/<workshop>/skills/<skill-slug>/SKILL.md` and `site/data/workshops.ts` if needed | `npm run build:all` |

## Add a new module to an existing workshop

Create the module files under `workshops/<module-folder>/`, then update the site metadata.

Workshop and module metadata is centralized in `site/data/workshops.ts`. Add the module to the correct workshop's `modules` array there; do not duplicate metadata in the Astro pages.

- `folder`: exact folder name in `workshops/`
- `label`: display name
- `desc`: short module summary
- `icon`: emoji or SVG

Then run:

```bash
npm run build:all
```

## Build commands

| Command | Purpose |
|---|---|
| `npm run build:all` | Build all Slidev decks, Astro site, and merged output in `dist/site/` |
| `npm run build:site` | Build Astro site only |
| `npm run dev:site` | Astro dev server for site development |
| `npm run preview:local` | Build everything, create a local Pages-style preview under `/ghcp-agentic-hack/`, and serve it at <http://localhost:4201/ghcp-agentic-hack/> |
| `npm run test:curriculum-qa` | Run deterministic workshop/LAB/QUIZ/Slidev alignment and curriculum QA checks |
| `npm run test:labs` | Run safe Playwright lab usability checks used by CI |
| `npm run test:labs:participant` | Run opt-in participant-mode lab checks against local VS Code and Copilot CLI |
| `npm run convert:pptx -- <workshop-folder-name>` | Convert PPTX into slide images + `.slidev.md` deck |
| `npm run convert:pptx:parts -- <workshop-folder-name>` | Combine `-part-*` PPTX files into one Slidev deck |

## Lab usability and participant execution tests

The deployment workflow runs `npm run test:labs` on branch pushes. These tests are safe for CI: they build and preview the Astro lab pages, navigate them like a participant, verify exercise anchors, and confirm every copyable command or prompt block renders and copies correctly.

Live participant execution is intentionally opt-in and only runs when you execute it manually:

```bash
npm run test:labs:participant
```

Use this on a workstation configured like a hackathon participant machine. It checks that `code` and `copilot` are installed, verifies the VS Code Copilot extensions are present, executes terminal command blocks, and sends lab prompt blocks through Copilot CLI prompt mode. This may consume Copilot usage and depends on your local authentication, so it is not part of the automatic branch-push deployment loop.

## PPTX conversion workflow

PPTX files are conversion inputs and live under `source/pptx/`. They are not the source of truth; keep `*-workshop.md` authoritative and use converted Slidev output as the rendered deck.

Small classes can use one source file and one PPTX:

```text
source/pptx/<workshop-folder-name>.pptx
```

```bash
npm run convert:pptx -- <workshop-folder-name>
```

Larger classes can split the source into generation packets, export one PPTX per part, and combine them during conversion:

```text
workshops/<workshop-folder-name>/<workshop-folder-name>-workshop-part-1.md
workshops/<workshop-folder-name>/<workshop-folder-name>-workshop-part-2.md
source/pptx/<workshop-folder-name>-part-1.pptx
source/pptx/<workshop-folder-name>-part-2.pptx
```

```bash
npm run convert:pptx:parts -- <workshop-folder-name>
```

If the single PPTX is not present, `npm run convert:pptx -- <workshop-folder-name>` also auto-detects `-part-*` files and combines them in numeric order.

After conversion, review the generated `.slidev.md` deck and presenter notes against the rendered slide images. Replace placeholder or generic notes with useful talk track guidance before publishing.

## Draft workshops

To hide a workshop from normal builds, add a `.draft` file inside that workshop folder.

To include drafts locally:

```powershell
$env:SHOW_DRAFTS = "true"
npm run build:all
```

## Deployment

Use a feature branch and pull request for changes. Branch pushes run the safe lab usability workflow; merging to `main` builds and publishes `dist/site/` to GitHub Pages via `.github/workflows/pages.yml`.

Published URL: <https://tammym-demos.github.io/ghcp-agentic-hack/>
