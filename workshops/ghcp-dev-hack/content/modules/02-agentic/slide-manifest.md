# Agentic Development Slide Manifest

Current source authority:
`content/modules/02-agentic/visual-intent.md`.

Expected slide count: **23**

| # | Exact source title | Source markers | Communication job and native treatment | Minutes |
| ---: | --- | --- | --- | ---: |
| 1 | Module 2: Agentic Development — Workshop Guide | `module.md`; `workshop.md`; `opening-slides-concept.md`; `visual-intent.md`; AGT-12, AGT-28; character briefs | Establish module identity and the human → bounded software collaborator → safety guardian role hierarchy. Temporarily reuse the approved `approval-boundary-human-decision.png` contained and unmodified; this fallback is not approval of the new-scene candidate. | 1 |
| 2 | Session Agenda | `module.md`; `workshop.md`; `copilot-dev-agentic-workshop.md` “Instruction architecture”; Foundations slide 2 | Present the instructional route and separate 45-minute mission without adding dividers | 1 |
| 3 | Agentic Development | `module.md`; `visual-intent.md`; AGT-12, AGT-28 | Establish the human brief → software work → returned evidence → human acceptance split | 1 |
| 4 | Instructions for Agentic Work | AGT-01, AGT-02 | Separate repository-wide, path-specific, agent-specific, and current-task guidance | 2 |
| 5 | Memory and Its Limits | AGT-04, AGT-05 | Separate repository facts, user preferences, and context that must be supplied again | 2 |
| 6 | Context for Long-Running Work | AGT-06, AGT-07 | Contrast focused context with unrelated or stale history | 2 |
| 7 | Context Hierarchy and Instruction Layering | AGT-01–AGT-03 | Detect, expose, resolve, and continue without inventing universal precedence | 4 |
| 8 | Strong Agentic Prompts | AGT-08 | Connect outcome, limits, evidence, and stops to later checkpoints | 3 |
| 9 | Reusable Skills | AGT-09 | Distinguish a reusable procedure from the collaborator and its tools | 3 |
| 10 | Custom Agents | AGT-10 | Define a recurring specialist role with minimal explicit tools and stops | 3 |
| 11 | Tools | AGT-09, AGT-11 | Separate concrete actions from the skill workflow guiding their use | 3 |
| 12 | The Agentic Loop | AGT-12–AGT-14 | Show the observable understand → plan → act → observe → adjust → verify loop, including stop or recover | 4 |
| 13 | Planning Before Action | AGT-08, AGT-13 | Review target, files, checks, risks, and stops before editing | 3 |
| 14 | Approval Boundaries | AGT-11, AGT-14 | Classify actions as allowed, ask first, or prohibited before a consequential request | 4 |
| 15 | Verification and Evidence | AGT-12, AGT-16, AGT-28 | Inspect diff, tests, open risk, and acceptance criteria instead of completion language | 3 |
| 16 | Security Before and After Push | AGT-32–AGT-38 | Separate focused `/security-review`, push protection, configured code scanning, applicable dependency review, and human validation | 4 |
| 17 | GitHub Actions as Loop Feedback | AGT-16, AGT-17 | Connect a configured repository event to check evidence and the next decision | 3 |
| 18 | Pull Requests as Agent Handoffs | AGT-15, AGT-20, AGT-28 | Package changed work, check evidence, uncertainty, and requested review | 3 |
| 19 | Copilot Cloud Agent | AGT-18–AGT-20 | Choose eligible asynchronous repository work while retaining human review and merge | 3 |
| 20 | Teach Copilot How Your Project Works with `/init` | AGT-01, AGT-22 | Scaffold, establish real commands, run CLI `/init`, review and correct, then commit | 3 |
| 21 | Make Cost-Conscious Choices Before You Start | CREDIT-01, CREDIT-03–CREDIT-08; SRC-01–SRC-07; AGT-23, AGT-24 | Choose supported pre-run controls, then inspect result quality and available usage | 3 |
| 22 | Code Quality, Copilot Review, and Human Acceptance | AGT-25–AGT-30 | Keep diff, Actions, Code Quality, and Copilot review distinct before the human decision | 4 |
| 23 | Your Mission: Hand Off Work with Confidence | `content/missions/agentic/agent-task.md`; `### 🎯 MISSION` | Point to the separate 45-minute scored mission, its Foundations-case or facilitator-starter entry path, safety checkpoint, score envelope, and cumulative evidence export | 45 |

## Hidden slides

These slides stay authored in `slides.md` with `hide: true`, so they are
excluded from the presented deck and from the numbered contract above. They
remain available for reference and can be restored by removing `hide: true`
and adding the row back to the table.

- Repository State as a Checkpoint (AGT-14, AGT-15)
- Cloud-Agent Handoffs (AGT-08, AGT-19, AGT-21)
- Manage Cloud Agents from GitHub Mobile (AGT-39–AGT-46)
- Agentic Optimization (AGT-23, AGT-24, AGT-31)

The visible slide preceding each hidden slide carries the transition that leads
into the next visible slide, so the delivered narrative stays continuous:
slide 15 hands off to `Security Before and After Push`, slide 19 hands off to
`Teach Copilot How Your Project Works with /init`, and slide 20 hands off to
`Make Cost-Conscious Choices Before You Start`.

## Timing arithmetic

- Openers and preserved operating split: slides 1–3 =
  `1 + 1 + 1 = 3` instruction minutes.
- Adjacent guidance and context: slides 4–6 =
  `2 + 2 + 2 = 6` instruction minutes.
- Remaining instruction: five four-minute slides
  (7, 12, 14, 16, 22) plus 11 three-minute slides =
  `(5 × 4) + (11 × 3) = 53` minutes.
- Instruction total: `3 + 6 + 53 = 62` minutes.
- Mission: slide 23 = `45` minutes.
- Presented total: `62 + 45 = 107` minutes.
- The module and workshop schedules still reserve 120 minutes. The 13 minutes
  released by the four hidden slides stay as facilitator buffer for discussion,
  questions, and setup inside the existing route; no section learning coverage
  is removed, because the hidden material is optional reinforcement.

## Objective and priority coverage

- Opening role hierarchy and route: slides 1–2.
- Guidance and context: slides 4–8.
- Human, software-agent, skill, custom-agent, and tool distinctions: slides
  1, 3, and 9–11.
- Observable loops, progress, stopping, recovery, approval, and verification:
  slides 12–16.
- Repository, Actions, pull-request, and cloud-agent evidence: slides 16–20.
- AI-credit controls: slide 21.
- Code Quality, Copilot review, and retained human authority: slide 22.
- Mission practice and evidence: slide 23.
- Existing storyboard priorities sit on slides 3, 12, 14, 16, and 22:
  `Agentic Development`, `The Agentic Loop`, `Approval Boundaries`,
  `Security Before and After Push`, and
  `Code Quality, Copilot Review, and Human Acceptance`.

## Contract constraints

- Titles and order of the visible slides are exact; older counts and titles are
  historical only.
- Speaker notes are free-form presenter material. Write, rewrite, shorten, or
  restructure them however you like: `pnpm validate` no longer checks note
  sections, their order, their wording, or a `Timebox:` line, and a slide may
  carry no notes at all. The conventional
  `Timebox / Talk track / Transition / Audience question / Response guidance /
  Payoff / Sources` shape is a useful default, not a requirement.
- The `Minutes` column stays a valid number on every row and remains the
  authoritative schedule reference along with the timing arithmetic above.
- Approved static image assets are integrated on visible slides 3, 7, 10, 11,
  13–15, 18, 19, 21, and 22 through contained module-public paths and native
  overlays; `cloud-agent-bounded-brief.png` and
  `mobile-cloud-agent-oversight.png` now sit on hidden slides and are not
  presented. Slide 1 temporarily reuses the already declared
  `approval-boundary-human-decision.png` contained and unmodified; this
  governed fallback neither represents nor approves the new title-scene
  candidate. Slide 12 uses the approved deterministic 30-second native
  animation. Product UI, code, commands, labels, diagrams, and evidence remain
  native; no additional media or generated teaching text is authorized.
- Security is bounded to AGT-32–AGT-38 and excludes complete-audit,
  universal, automatic, clean-result acceptance, and merge-permission claims.
- Mobile is bounded to AGT-39–AGT-46 and excludes clarification responses,
  unsupported exact controls or status labels, fabricated UI, complete-session
  parity, and automatic review or acceptance claims.
