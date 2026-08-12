# Agentic Development Slide Manifest

Current source authority:
`content/modules/02-agentic/visual-intent.md`.

Expected slide count: **25**

| # | Exact source title | Source markers | Communication job and native treatment | Minutes |
| ---: | --- | --- | --- | ---: |
| 1 | Agentic Development | `module.md`; `visual-intent.md`; AGT-12, AGT-28 | Establish the human brief → software work → returned evidence → human acceptance split | 0 |
| 2 | Instructions for Agentic Work | AGT-01, AGT-02 | Separate repository-wide, path-specific, agent-specific, and current-task guidance | 3 |
| 3 | Memory and Its Limits | AGT-04, AGT-05 | Separate repository facts, user preferences, and context that must be supplied again | 3 |
| 4 | Context for Long-Running Work | AGT-06, AGT-07 | Contrast focused context with unrelated or stale history | 3 |
| 5 | Context Hierarchy and Instruction Layering | AGT-01–AGT-03 | Detect, expose, resolve, and continue without inventing universal precedence | 4 |
| 6 | Strong Agentic Prompts | AGT-08 | Connect outcome, limits, evidence, and stops to later checkpoints | 3 |
| 7 | Reusable Skills | AGT-09 | Distinguish a reusable procedure from the collaborator and its tools | 3 |
| 8 | Custom Agents | AGT-10 | Define a recurring specialist role with minimal explicit tools and stops | 3 |
| 9 | Tools | AGT-09, AGT-11 | Separate concrete actions from the skill workflow guiding their use | 3 |
| 10 | The Agentic Loop | AGT-12–AGT-14 | Show the observable understand → plan → act → observe → adjust → verify loop, including stop or recover | 4 |
| 11 | Planning Before Action | AGT-08, AGT-13 | Review target, files, checks, risks, and stops before editing | 3 |
| 12 | Approval Boundaries | AGT-11, AGT-14 | Classify actions as allowed, ask first, or prohibited before a consequential request | 4 |
| 13 | Verification and Evidence | AGT-12, AGT-16, AGT-28 | Inspect diff, tests, open risk, and acceptance criteria instead of completion language | 3 |
| 14 | Repository State as a Checkpoint | AGT-14, AGT-15 | Use branch, diff, validation, and commit as review and recovery points with limits | 3 |
| 15 | Security Before and After Push | AGT-32–AGT-38 | Separate focused `/security-review`, push protection, configured code scanning, applicable dependency review, and human validation | 4 |
| 16 | GitHub Actions as Loop Feedback | AGT-16, AGT-17 | Connect a configured repository event to check evidence and the next decision | 3 |
| 17 | Pull Requests as Agent Handoffs | AGT-15, AGT-20, AGT-28 | Package changed work, check evidence, uncertainty, and requested review | 3 |
| 18 | Copilot Cloud Agent | AGT-18–AGT-20 | Choose eligible asynchronous repository work while retaining human review and merge | 3 |
| 19 | Cloud-Agent Handoffs | AGT-08, AGT-19, AGT-21 | Package context, scope, permissions, checks, stops, and return evidence | 3 |
| 20 | Manage Cloud Agents from GitHub Mobile | AGT-39–AGT-46 | Show only start or assign → track status → review diff → iterate → review pull request; keep code review separate | 4 |
| 21 | `Teach Copilot How Your Project Works with `/init`` | AGT-01, AGT-22 | Scaffold, establish real commands, run CLI `/init`, review and correct, then commit | 3 |
| 22 | Agentic Optimization | AGT-23, AGT-24, AGT-31 | Compare noisy and focused work without promising quality or cost savings | 3 |
| 23 | Make Cost-Conscious Choices Before You Start | CREDIT-01, CREDIT-03–CREDIT-08; SRC-01–SRC-07; AGT-23, AGT-24 | Choose supported pre-run controls, then inspect result quality and available usage | 3 |
| 24 | Code Quality, Copilot Review, and Human Acceptance | AGT-25–AGT-30 | Keep diff, Actions, Code Quality, and Copilot review distinct before the human decision | 4 |
| 25 | Your Mission: Hand Off Work with Confidence | `content/missions/agentic/agent-task.md`; `### 🎯 MISSION` | Point to the separate 45-minute scored mission, its Foundations-case or facilitator-starter entry path, safety checkpoint, score envelope, and cumulative evidence export | 45 |

## Timing arithmetic

- Cover: slide 1 = `0` minutes.
- Instruction: six four-minute slides (5, 10, 12, 15, 20, 24) plus 17
  three-minute slides = `(6 × 4) + (17 × 3) = 75` minutes.
- Mission: slide 25 = `45` minutes.
- Module: `0 + 75 + 45 = 120` minutes.

## Objective and priority coverage

- Guidance and context: slides 2–6.
- Human, software-agent, skill, custom-agent, and tool distinctions: slides
  1 and 7–9.
- Observable loops, progress, stopping, recovery, approval, and verification:
  slides 10–15.
- Repository, Actions, pull-request, and cloud-agent evidence: slides 14–21.
- Optimization and AI-credit controls: slides 22–23.
- Code Quality, Copilot review, and retained human authority: slide 24.
- Mission practice and evidence: slide 25.
- Storyboard priorities map exactly to slides 1, 10, 12, 15, and 24:
  `Agentic Development`, `The Agentic Loop`, `Approval Boundaries`,
  `Security Before and After Push`, and
  `Code Quality, Copilot Review, and Human Acceptance`.

## Contract constraints

- Titles and order are exact; older counts and titles are historical only.
- Every slide has exactly one immediately following 3–5 sentence,
  source-mapped speaker-notes HTML comment.
- Fourteen approved static images are integrated on slides 1, 5, 8–13, 17–20,
  23, and 24 through contained module-public paths and native overlays.
  Product UI, code, commands, labels, diagrams, and evidence remain native; no
  additional media or generated teaching text is authorized.
- Security is bounded to AGT-32–AGT-38 and excludes complete-audit,
  universal, automatic, clean-result acceptance, and merge-permission claims.
- Mobile is bounded to AGT-39–AGT-46 and excludes clarification responses,
  unsupported exact controls or status labels, fabricated UI, complete-session
  parity, and automatic review or acceptance claims.
