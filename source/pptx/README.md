# PPTX Source Files

Drop generated PPTX files here for conversion into Slidev decks.

## Usage

For smaller classes, use one PPTX:

```bash
# Place your file
# source/pptx/copilot-dev-foundations.pptx

# Convert it
npm run convert:pptx -- copilot-dev-foundations

# Preview the result
npx slidev workshops/copilot-dev-foundations/copilot-dev-foundations.slidev.md
```

For larger classes, use split PPTX inputs and combine them into one Slidev deck:

```bash
# Generate slides from source packets first
# workshops/copilot-dev-foundations/copilot-dev-foundations-workshop-part-1.md
# workshops/copilot-dev-foundations/copilot-dev-foundations-workshop-part-2.md

# Place your files
# source/pptx/copilot-dev-foundations-part-1.pptx
# source/pptx/copilot-dev-foundations-part-2.pptx

# Convert and combine them
npm run convert:pptx:parts -- copilot-dev-foundations
```

## Naming Convention

Name a single PPTX file with the **exact workshop folder name**:

| Workshop Module | Expected Filename |
|----------------|-------------------|
| Module 1: Foundations | `copilot-dev-foundations.pptx` |
| Module 2: Agentic | `copilot-dev-agentic.pptx` |
| Module 3: Advanced | `copilot-dev-advanced.pptx` |
| Module 4: Hack | `copilot-dev-hack.pptx` |

For split decks, append `-part-1`, `-part-2`, and so on:

```text
copilot-dev-foundations-part-1.pptx
copilot-dev-foundations-part-2.pptx
```

## Updating One Slide Image Without Rewriting Notes

If you only need to replace the visual for an existing slide, do **not** re-run the PPTX conversion. The converter rewrites the matching `*.slidev.md` deck and can replace hand-authored presenter notes with TODO placeholders.

Use this safer workflow instead:

1. Update the source PPTX so the offline source stays current.
2. Export only the changed slide as a PNG at the same dimensions as the existing deck images, typically `1376x768`.
3. Replace the matching file in `public/images/<workshop-folder-name>/`, keeping the existing `slide-NN-HASH.png` filename when possible.
4. Leave `workshops/<workshop-folder-name>/<workshop-folder-name>.slidev.md` unchanged so the existing presenter notes are preserved.

If the exported filename must change, update only that slide's `background:` path in the Slidev file and keep the existing notes block below it.

## Notes

- PPTX files are **gitignored** (they're large binary files)
- Re-running the conversion overwrites previous output, including the generated Slidev file
- `npm run convert:pptx -- <workshop-folder-name>` uses the single PPTX when present; otherwise it auto-detects split `-part-*` files
- Review and adjust the generated Slidev deck after conversion
- Install dependencies: `pip install python-pptx Pillow`
