# GHCP Agentic Hack Content Repo

This repo is the content hub for Copilot hack workshops: slide decks, labs, quizzes, and a static site that publishes everything to GitHub Pages.

## If you are here to run or prep a hack

Use this flow:

1. Install dependencies.
2. Build the site and slides.
3. Run local preview at the same base path used in production.
4. Edit workshop content and rebuild.

```bash
npm install
npm run build:all
```

```powershell
New-Item -ItemType Junction -Path dist\local-preview\ghcp-agentic-hack -Target (Resolve-Path dist\site).Path -Force
npx http-server dist/local-preview -p 4201 -c-1 --cors -s
```

Open: <http://localhost:4201/ghcp-agentic-hack/>

> **Important**: Do not change the base path to `/` for local testing. Production uses `/ghcp-agentic-hack/`.

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

- `<module>.slidev.md` (slides)
- `<module>-LAB.md` (hands-on lab)
- `<module>-QUIZ.md` (interactive quiz)
- `<module>-workshop.md` (source-of-truth narrative content)

## Hack workflow (content updates)

1. Edit the module files in `workshops/<module>/`.
2. Keep slides and lab aligned when either one changes (sections, tables, diagrams, ordering).
3. Follow the content conventions:
   - **Show, then do**: each hands-on beat gets an explicit slide pointer (`Slide topic (1 slide): Show me …` / `Now you try …`) so developers know which slide to follow.
   - **MCP is conceptual**: teach what MCP is and why it matters for agentic developers; do not demo a specific MCP server.
   - **Enterprise skills stay in the separate skills library** (`workshops/<workshop>/skills/<slug>/SKILL.md`), not baked into module content.
   - **Keep the hardened slide-generation instruction header** at the top of each `*-workshop.md` intact.
4. Rebuild and preview:

```bash
npm run build:all
```

5. Spot-check module links from the landing page and workshop page.

## Add a new module to an existing workshop

Workshop and module metadata is centralized in `site/data/workshops.ts`. Add the module to the correct workshop's `modules` array there (do not duplicate metadata in the Astro pages):

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
| `npm run convert:pptx -- <workshop-folder-name>` | Convert PPTX into slide images + `.slidev.md` deck |
| `npm run convert:pptx:parts -- <workshop-folder-name>` | Combine `-part-*` PPTX files into one Slidev deck |

## PPTX conversion workflow

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

## Draft workshops

To hide a workshop from normal builds, add a `.draft` file inside that workshop folder.

To include drafts locally:

```powershell
$env:SHOW_DRAFTS = "true"
npm run build:all
```

## Deployment

Push to `main` to deploy automatically via `.github/workflows/pages.yml`. The workflow builds and publishes `dist/site/` to GitHub Pages.

Published URL: <https://tammym-demos.github.io/ghcp-agentic-hack/>
