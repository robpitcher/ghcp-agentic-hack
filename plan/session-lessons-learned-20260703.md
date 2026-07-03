# Session Lessons Learned — Agentic and Advanced Workshop Alignment

## What was repeatable

The work exposed a repeatable content-development loop for AI-generated workshop decks:

1. Start from the planning contract.
2. Compare the source workshop guide against the plan.
3. Verify the companion LAB and QUIZ mirror the same section order, terminology, and safety/optimization callouts.
4. Inspect the generated Slidev/PPTX output for slide count, topic order, speaker-note quality, and drift from the source.
5. Rubber-duck the accuracy risks, especially named product features and emerging ecosystem terms.
6. Tighten the source prompt/instructions where generation drift occurred.
7. Capture the lesson as a reusable checklist before regenerating slides.

The repeatable part was not the specific module content. The repeatable part was the contract check: plan topic → workshop marker → LAB exercise → QUIZ question → generated slide → presenter note.

## Findings from this session

| Area | Lesson |
|------|--------|
| Source alignment | Agentic and Advanced workshop guides mostly matched `plan20260615-moments.md` for topic coverage and AI Safety / Usage Optimization placement. |
| Generated decks | Image-based Slidev/PPTX output made exact text verification difficult, and speaker notes were generic or truncated in places. |
| Slide-generation drift | slide-generation tool added or renamed slide concepts when the source did not force a manifest-first generation pass. |
| Terminology | Advanced content mixed `AI credits` and `AICs`; AIC wording should stay consistent with the planning document. |
| Product accuracy | Agent Package Manager should be framed as an ecosystem packaging option, not implied as the same kind of official GitHub deployment surface as repo or Marketplace distribution. |

## Repeatable loop for future development

Use this loop for each module refresh:

1. **Plan**: Write or update the module moment plan with exact topic names, AI Safety Moment callouts, and Usage Optimization callouts.
2. **Author**: Update `*-workshop.md` first because it is the source of truth.
3. **Map**: Create a manifest table before slide generation: slide number, source marker, source line/topic, slide type, exact source title.
4. **Generate**: Feed slide-generation tool only the workshop source and require the manifest to be preserved exactly.
5. **Convert**: Run the PPTX conversion pipeline to produce full-bleed Slidev image slides.
6. **Hydrate notes**: Replace generated or placeholder Slidev comments with 3-5 sentence presenter notes mapped to the manifest row.
7. **Synchronize**: Check LAB exercises and QUIZ questions against the same manifest and section order.
8. **Rubber duck**: Review for terminology drift, product accuracy, unsafe claims, and examples that imply unapproved tooling.
9. **Validate**: Run the smallest site or markdown validation that covers changed files.
10. **Capture**: Add a short lessons-learned entry when the loop reveals a reusable rule.

## Checklist for future deck QA

- Every `Slide topic (1 slide)` marker appears once in the generated deck.
- Every `### 🔬 LAB` marker has one transition slide.
- No unmarked recap, section-divider, anti-pattern, synthesis, wrap-up, or handoff slide appears unless explicitly marked in the workshop source.
- Slide titles preserve exact source wording.
- AI Safety Moment and Usage Optimization callouts appear in distinct badged boxes.
- Code blocks, prompts, commands, URLs, and numeric values are verbatim.
- Speaker notes are mapped to the same source marker and are not generic, clipped, or truncated.
- LAB and QUIZ files use the same topic order and terminology as the workshop source.
- Emerging product or ecosystem names are checked before being presented as official GitHub features.

## Practical improvement made

The Slide-generation headers in the Agentic and Advanced workshop guides now require a slide manifest, exact slide-title preservation, no unmarked generated slides, terminology preservation, and regeneration when speaker notes are clipped or generic. Advanced materials now use AIC terminology consistently and describe Agent Package Manager (APM) as an ecosystem packaging option.

*Session lessons learned for Agentic and Advanced workshop alignment*
