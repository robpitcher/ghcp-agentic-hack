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

## Notes

- PPTX files are **gitignored** (they're large binary files)
- Re-running the conversion overwrites previous output
- `npm run convert:pptx -- <workshop-folder-name>` uses the single PPTX when present; otherwise it auto-detects split `-part-*` files
- Review and adjust the generated Slidev deck after conversion
- Install dependencies: `pip install python-pptx Pillow`
