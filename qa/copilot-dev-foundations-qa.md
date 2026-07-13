# Module 1 Foundations QA Report

## Scope

Reviewed `source\pptx\GHCP-Foundations-2026-07-06.pptx`,
`workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`,
`copilot-dev-foundations-LAB.md`, `copilot-dev-foundations-QUIZ.md`,
`presenter.md`, and the converted `copilot-dev-foundations.slidev.md`.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| PPTX conversion | Passing | The 41 presentation-visible PPTX slides were rendered as full-slide images; hidden scaffolding and retired slides were excluded. |
| Presenter notes | Passing | All PPTX speaker notes persist in Slidev comments. Notes were added only for the two slides without PPTX notes and the quote slide that contained only an attribution caveat. |
| Source-truth alignment | Blocking | The workshop contract specifies 24 slides, including a Session Agenda and 18 source topics. The PPTX has 41 visible slides, omits the required agenda, adds a Learning Objectives slide, and expands or introduces topics beyond the workshop. |
| LAB alignment | Blocking | The Exercise 4 transition says learners create a custom-agent starter, while the workshop and LAB explicitly limit Foundations to a guardrail handoff note and defer agent or skill files to Module 2. |
| Concept boundaries | Blocking | The PPTX introduces secure execution sandboxes, memory and policy boundaries, harness evaluation, named model recommendations, and model price tables that are not in the Foundations workshop source. |
| Visual review | Gap | The rendered slides are legible and complete, but several slides contain dense text and small pricing or context diagrams that should be checked at presentation distance. |

## Findings

### Blocking: Deck structure contradicts the workshop generation contract

- **Evidence**: The workshop requires 24 slides: title, Session Agenda, 18 marked
  topics, and four LAB transitions. The converted PPTX contains 41 visible slides,
  has no Session Agenda slide, and includes a separate Learning Objectives slide.
- **Impact**: Instructors cannot use the workshop timing and slide sequence as
  written, and future deterministic alignment checks cannot treat the deck as a
  faithful rendering of the source.
- **Recommendation**: Revise the workshop source to authorize the expanded deck,
  or revise the PPTX to the existing 24-slide contract before release.

### Blocking: Exercise 4 crosses the Foundations artifact boundary

- **Evidence**: The Exercise 4 transition slide says learners create a
  "constrained custom-agent starter." The LAB says to save
  `copilot-quest-agent-guardrails.md` and explicitly says not to create
  `.github\skills` or `.github\agents` files until Module 2.
- **Impact**: Learners may create Module 2 artifacts early and bypass the intended
  least-privilege planning and handoff step.
- **Recommendation**: Change the slide to say learners create a constrained
  guardrail handoff note for a future custom agent.

### Consistency gap: Advanced concepts appear without source or quiz support

- **Evidence**: Slides cover secure execution environments, memory and policy
  boundaries, harness evaluation, exact model families, and model price tables.
  These concepts are not present in the Foundations workshop or quiz.
- **Impact**: The deck teaches material learners are not prepared to practice or
  assess, and exact model and pricing guidance can become stale quickly.
- **Recommendation**: Remove these slides from Foundations or add explicit,
  source-backed workshop, LAB, and quiz coverage with dated references.

### Consistency gap: LAB transition labels drift from companion files

- **Evidence**: Exercise 2 uses "Guided Workflow Repetition" instead of the LAB's
  "Guided Workflows — Inline Assistance and Built-in Copilot Experiences."
  Exercise 3 abbreviates GitHub AI Credits as "AIC."
- **Impact**: Learners and instructors must infer which LAB section matches the
  transition slide.
- **Recommendation**: Use the companion LAB exercise titles verbatim.

## Recommended follow-up

- Decide whether the expanded 41-slide PPTX or the 24-slide workshop contract is
  authoritative, then synchronize the workshop, LAB, quiz, and deck.
- Correct the Exercise 4 artifact language before presenting Foundations.

*QA report for Module 1 Foundations — GitHub Copilot Developer Training*
