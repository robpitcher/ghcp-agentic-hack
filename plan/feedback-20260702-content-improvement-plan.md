# Foundations, Agentic, and Advanced Content Improvement Plan from 2026-07-02 Feedback

**Workspace markdown deliverable**: `plan\feedback-20260702-content-improvement-plan.md`
**Session plan copy**: `C:\Users\tmcclell\.copilot\session-state\a17cbebb-04a1-4f14-9608-7c26de9ca99e\plan.md`

This file is the working implementation plan for tightening the Foundations, Agentic, and Advanced modules. It is intended to keep the curriculum focused, practical, and reusable across enterprise audiences without turning the delivery into a broad comparison of tools or platforms.

## Problem and approach

The feedback points to a delivery problem more than a tooling problem: participants want faster ramp-up, more guided practice, and content that feels relevant to real enterprise work. The plan should stay anchored in the three core modules and make them more effective as live workshops, not broaden the scope into a general-purpose multi-tool curriculum.

A specific content issue is that presenter notes are not currently syncing well with the slides and are too verbose. The plan will address that by rewriting slide-level notes into concise, bullet-point talking cues that help the presenter guide the conversation without reading a script or repeating the slide verbatim.

The direction is to:

- keep the workshop centered on Foundations, Agentic, and Advanced,
- keep enterprise-specific skills in the separate repo-local skills library (the existing `workshops/<workshop>/skills/<slug>/SKILL.md` pattern) rather than baking them into module content, so the modules stay generic and reusable,
- keep GitHub Copilot and Microsoft-first guidance at the center of the story,
- avoid making non-Microsoft topics such as Cursor a core teaching focus,
- use a "show, then do" approach with short "try this now" drills before open-ended labs, and give each show/do step an explicit slide pointer so developers know exactly which slide to follow,
- and teach MCP as a concept — what it is and what it means for agentic developers (tools, context, and governance boundaries) — without demonstrating or depending on any specific MCP server.

Primary sources reviewed:

- `feedback\feedback-20260702`
- `site\data\workshops.ts`
- `site\pages\index.astro`
- `site\pages\[workshop]\index.astro`
- `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`
- `workshops\copilot-dev-foundations\copilot-dev-foundations-LAB.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-workshop.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-LAB.md`
- `workshops\copilot-dev-training\skills\cpp-hardware\SKILL.md`

## Feedback themes to address

1. Keep the core storyline anchored in Foundations, Agentic, and Advanced instead of expanding into many unrelated enterprise examples.
2. Reduce lecture weight and presenter back-and-forth by switching to a more systematic, prepared delivery pattern.
3. Add guided hands-on walkthroughs where attendees type along before being released into open-ended labs.
4. Improve the Day 1 ramp for newer users and follow the module agenda more closely.
5. Keep enterprise relevance in the separate skills library (chip/EDA/hardware and other domains as standalone `SKILL.md` skills), not baked into the core modules; the three modules stay generic and reusable.
6. Keep the teaching focus Microsoft-first and GitHub Copilot-centered; do not make non-Microsoft tools a primary topic.
7. Teach MCP conceptually — what it is and what it means for agentic developers — and do not walk through or depend on any specific MCP server (no Confluence, Jira, or Perforce demos).
8. Improve slide presenter notes and lab flow so the modules feel easier to facilitate and easier to follow.

## Current-state observations

1. The curriculum is already organized around three core modules and a logical learning path from Foundations to Agentic to Advanced.
2. The labs are structured and useful, but they are still fairly dense. They would benefit from a clearer entry point and a stronger "show, then do" rhythm.
3. The existing repo-local skills library already covers enterprise-specific contexts (C++/hardware, Appian, IBM i/AS400) as standalone, downloadable skills that live beside the modules — this is the right home for domain relevance, not the module content itself.
4. The current content is still somewhat generic, so learners may not immediately see how the same patterns apply to their own environment.
5. Slidev presenter notes are often too long or too abstract for live facilitation and should be rewritten into concise, bullet-based guidance.
6. MCP should be taught as a concept — what it is and why it matters for agentic developers — rather than through a specific server integration, so the main Copilot and agentic workflow story stays central.

## Implementation todos

1. **Tighten the scope of the plan**
   Keep the implementation focused on the Foundations, Agentic, and Advanced modules and avoid adding a large new curriculum surface.

2. **Define a show-then-do teaching pattern with slide pointers**
   For each major section, add a short facilitator walkthrough, a guided repeat step, and then a small variation or "try this now" drill. Give every show/do step an explicit on-slide pointer (e.g., a `Slide topic (1 slide)` marker labeled "Show me" / "Now you try") so developers can see exactly which slide drives each hands-on beat.

3. **Keep enterprise skills in the separate skills library (not in modules)**
   Do not bake domain examples into module content. Add or expand standalone skills in the repo-local skills library (`workshops/<workshop>/skills/<slug>/SKILL.md`) and register them in `site/data/workshops.ts`. The three modules remain generic; skills provide the optional enterprise relevance as separate downloadable pages.

4. **Rework labs into short guided drills**
   Introduce lighter, more focused exercises that let learners try the same prompt, command, or workflow before they branch into a larger challenge.

5. **Rewrite presenter notes for live delivery**
   Convert the current notes into short bullet points that cue the presenter on the key message, the safety or optimization point, and a natural talking path for the slide. Each note should be concise, slide-specific, and structured as presenter guidance rather than long prose or a verbatim script.

6. **Teach MCP as a concept, not a server**
   Where MCP appears, cover the key concepts only — what MCP is, how it exposes tools/context to agents, and what it means for agentic developers and governance. Do not demonstrate, configure, or depend on any specific MCP server (no Confluence, Jira, or Perforce walkthroughs).

7. **Avoid non-Microsoft distractions in the core content**
   Do not make Cursor or other non-Microsoft tools a main teaching topic; only mention them if they are clearly relevant and framed as an optional comparison.

8. **Validate the updated content contract**
   If changes are implemented later, keep the workshop, LAB, quiz, slidev notes, and site metadata aligned and validate with the existing build path.

9. **Strengthen AI slide generator anti-drift instructions (do first)**
   Before rewriting any section content, harden the `> **Slide generation instructions**:` block at the top of every `*-workshop.md` so AI slide generator stops summarizing, merging, or dropping source material. Content edits in the todos above must preserve these hardened instructions rather than overwrite them. Apply the strengthened block below to all four core/optional decks (`copilot-dev-foundations`, `copilot-dev-agentic`, `copilot-dev-advanced`, `copilot-optimization`) and mirror the guidance into `.github/copilot-instructions.md` so new workshop files inherit it.

   10. **Review instructions and README for needed changes**
      After the content and AI slide generator changes are defined, review the repo instructions and docs for anything that must be updated to match: `.github/copilot-instructions.md`, `.github/instructions/slidev.instructions.md`, `.github/instructions/astro.instructions.md`, and the root `README.md` (plus any workshop-level READMEs). Confirm the show-then-do slide-pointer convention, the separate-skills-library rule, the MCP-concept-only guidance, and the hardened AI slide generator instructions are all reflected in the guidance docs, and update them where they are stale or missing.

   ## AI slide generator anti-drift instruction block

   The current instruction block already says "do not summarize away source meaning" and forces dedicated title/overview/objectives slides, but it has fidelity gaps that let AI slide generator stray:

- It never tells AI slide generator to honor the `Slide topic (N slide)` markers, which appear 20–31 times per file, so topics get merged or split freely.
- Nothing prevents dropped bullets/table rows, paraphrased code/commands/prompts, added intro/recap/marketing content, or reworded Safety/Optimization callouts.

Replace the fidelity bullets with the following hardened block (adjust the title token per file, e.g. `# Module ...` vs `# Copilot ...`):

```markdown
> **Slide generation instructions**:
> - Brand the deck with GitHub and Microsoft visual identity.
> - Use corporate minimal styling: clean layouts, restrained color, high readability, light backgrounds for all slide types (cover, section, content, comparison, summary).
> - Keep slides professional and uncluttered, with clear hierarchy and consistent typography.
> - **Honor every `Slide topic (N slide)` marker exactly**: produce N slides for that topic, one topic per slide. Never merge two topics onto one slide, and never split one topic across extra slides.
> - **Generate one slide per bullet-grouped topic and preserve every bullet and table row.** Do not drop, collapse, or condense list items or comparison rows.
> - Generate dedicated slides for the title (`# ...`), `## Workshop Overview`, and `### Learning Objectives`; do not skip or merge these.
> - **Treat workshop wording as authoritative — do not summarize, paraphrase, or reword away meaning.** Minor connector-word edits are allowed only for flow.
> - **Reproduce code blocks, prompts, commands, and numeric values verbatim** — never truncate or rewrite them.
> - **Do not add content that is not in the source**: no AI-authored intro, recap, agenda, transitions, or marketing phrasing.
> - Preserve the section order and numbering exactly as written.
> - Render **AI Safety Moment** and **Usage Optimization** callouts in distinct badged content boxes, keeping their wording verbatim so the tip category is instantly recognizable.
> - Control slide layout deliberately so content stays readable and structured on-slide.
> - Generate visual imagery that directly represents the slide wording and reinforces its meaning.
```

> **Important**: The show-then-do rewrites and new drills in the todos above change slide *content* but must retain this hardened instruction block verbatim at the top of each `*-workshop.md`. Treat the block as a fixed header that survives content edits. (Skills are added in the separate library, not inside these files.)

## Suggested content improvements to include in the recommendation report

1. **Make every module "show, then do."** Start each major concept with a short facilitator demonstration using exact prompts or commands, then immediately have attendees repeat it. Each demonstration and repeat step gets its own slide pointer so developers know which slide to follow.
2. **Add short "try this now" drills with slide pointers.** Use bite-sized exercises after each concept block so learners practice before moving on, and label the driving slide (e.g., "Show me" / "Now you try") so the hands-on beat is unmistakable on-slide.
3. **Keep a single core teaching path.** Foundations, Agentic, and Advanced remain the backbone; enterprise relevance lives in the separate skills library beside the modules rather than inside module content.
4. **Use the separate skills library for relevance.** Domain examples (chip/EDA/hardware, legacy modernization, app/API engineering, platform/operations) are standalone `SKILL.md` skills, not lanes embedded in the modules.
5. **Keep the examples Microsoft-first.** Use GitHub Copilot and GitHub ecosystem patterns as the primary examples and make any external-tool discussion clearly optional.
6. **Teach MCP conceptually.** Cover what MCP is and what it means for agentic developers (tools, context, governance); do not walk through or depend on any specific MCP server.
7. **Use real artifact outputs.** Each drill should produce something useful such as a prompt checklist, handoff note, review checklist, agent contract, or safe integration plan.
8. **Shorten and improve slide support.** Presenter notes should guide the speaker with concise bullets, not read like a script or a long essay. Each note should match the slide's purpose and give the presenter a clear talking path for the content.
9. **Make the labs feel approachable.** The first step should be simple and successful, with a clear expectation for what learners will see and learn.
10. **Improve slide artifact quality.** Remove generic or marketing-heavy phrasing and make sure the slide content is consistent with the workshop story.

## Skills library model (separate from modules)

Enterprise relevance is delivered through the **separate repo-local skills library**, not by embedding lanes into module content. Each skill is a standalone, downloadable `SKILL.md` under `workshops/<workshop>/skills/<slug>/` and is registered in `site/data/workshops.ts`. Modules reference the library only as an optional "for your domain, see these skills" pointer.

Each skill should follow a consistent structure so the library stays reusable:

| Field | Purpose |
|-------|---------|
| Audience profile | Who the skill is for and what they likely build or maintain |
| Skill or asset | The repo-local skill content and any starter artifact it provides |
| Demo flow | One short walkthrough with exact prompts and expected output |
| Practice variation | A short learner-driven variation using the same pattern |
| Safety constraints | Review gates, data redaction, and approval boundaries |
| Success artifact | What learners leave with, such as a checklist, handoff note, or review plan |

Existing and candidate skills:

- **C++/hardware** (exists) — hardware-safe review, verification checklists, and build-log summarization.
- **Appian** and **IBM i/AS400** (exist) — enterprise/legacy domain skills.
- **Additional enterprise skills** (candidates) — app/API engineering, legacy modernization, or platform/operations, added to the library as needed without touching module content.

## Notes and considerations

- Keep the three modules as the primary curriculum and do not turn the plan into a broad tool-comparison exercise.
- Do not make Cursor or other non-Microsoft tools a default teaching path.
- Keep enterprise domain content in the separate skills library; do not bake skills into module slides or labs.
- Teach MCP conceptually only — no specific MCP server demos or dependencies.
- If implementation happens later, update the workshop source, LAB, quiz, slidev presenter notes, and any site metadata together.
- Treat the recommendations as both content edits and facilitation improvements, since some of the feedback is about delivery style as well as repository content.

