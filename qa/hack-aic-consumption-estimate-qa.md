# Hack AI Credit Consumption Estimate QA Report

## Scope

Reviewed the source, lab, and quiz artifacts for:

- `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`
- `workshops\copilot-dev-foundations\copilot-dev-foundations-LAB.md`
- `workshops\copilot-dev-foundations\copilot-dev-foundations-QUIZ.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-QUIZ.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-workshop.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-LAB.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-QUIZ.md`

The estimate uses GitHub Copilot's usage-based billing model documented at <https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>: chat, CLI, agent, and code-review interactions consume GitHub AI Credits based on tokens; paid-plan code completions and next-edit suggestions do not consume AI Credits.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | Workshop lab indicators map to LAB exercises: Foundations has four indicators and four exercises, Agentic has three indicators and three exercises, Advanced has three indicators and three exercises. |
| Step clarity | Passing | Labs provide concrete artifact names and templates such as `copilot-quest-foundations-notes.md`, `.github\skills\copilot-quest-guessing\SKILL.md`, `.github\agents\copilot-quest-implementer.agent.md`, and `copilot-quest-orchestration-package.md`. |
| Scenario alignment | Passing | All three modules use the Copilot Quest build thread and preserve the boundary that Foundations drafts guardrails, Agentic creates repo-local skill and agent artifacts, and Advanced produces orchestration/debug/deployment evidence. |
| Quiz format | Passing | Foundations has 10 questions, Agentic has 13, and Advanced has 12. Every question has four options, one `<!--answer: X-->` comment, and one explanation comment. |
| AIC planning | Needs budget note | Labs intentionally include repeated Chat, CLI, Ask/Plan/Agent, agent-mode, debug, and optional cloud/background activities. This is appropriate for the learning goals but should be treated as a per-attendee credit burn, not just an instructor demo cost. |

## Estimated GitHub AI Credit consumption

These are per-attendee estimates for completing the labs. They exclude static reading, Slidev rendering, site quizzes, terminal-only commands, and inline code completion. They include Chat, Copilot CLI prompts, agent-mode runs, debug prompts, and likely reruns.

| Module | Main credit drivers | Expected paid interactions | Standard model estimate |
|--------|---------------------|----------------------------|-------------------------|
| Foundations | Scoped Chat requests, CLI prompt, Ask/Plan/Agent comparison, usage/model routing comparison, guardrail refinement | 16-22 | 45-120 AICs |
| Agentic | Skill drafting, task scoping, optional implementation run, custom-agent handoff, verifier pass, Stage 7 readiness scoring | 12-18 plus 1-2 agentic loops | 110-280 AICs |
| Advanced | Orchestration planning, integration comparison, debug repro, `#debugEventsSnapshot`, `/troubleshoot`, packaging decision | 10-16 plus 1 debug/agent run | 90-220 AICs |
| Full learner path | All three modules and labs | 38-56 plus 2-4 agent/debug loops | 245-620 AICs |

Use these planning bands:

| Usage pattern | Per-attendee full-path estimate | Notes |
|---------------|----------------------------------|-------|
| Lightweight / Auto-first | 80-220 AICs | Learners mostly use fast/default models, small context, and avoid long agent loops. |
| Standard workshop path | 245-620 AICs | Most realistic for learners using VS Code Chat, Copilot CLI, Agent mode, and a few reruns. |
| Heavy agent/cloud path | 700-1,800+ AICs | Learners choose powerful models, attach broad context, use background/cloud agents, or rerun failed agent loops. |

Instructor live demos are a separate shared cost. If the instructor runs every major demo once, plan roughly 180-470 AICs total for instructor activity, depending on model and context size. Cohort planning formula:

```text
Estimated event AICs = (attendee count * per-attendee path estimate) + instructor demo AICs
```

Examples:

| Cohort size | Lightweight / Auto-first | Standard workshop path | Heavy agent/cloud path |
|-------------|--------------------------|-------------------------|------------------------|
| 10 learners | 980-2,670 AICs | 2,630-6,670 AICs | 7,180-18,470+ AICs |
| 25 learners | 2,180-5,970 AICs | 6,305-15,970 AICs | 17,680-45,470+ AICs |
| 50 learners | 4,180-11,470 AICs | 12,430-31,470 AICs | 35,180-90,470+ AICs |

## Findings

### Improvement: Add an explicit event budget note

- **Evidence**: Foundations Exercise 3 teaches GitHub AI Credits, usage visibility, model routing, and budget guardrails, but the curriculum does not yet give facilitators an event-level credit planning table.
- **Impact**: Instructors may underestimate total consumption because learner labs include their own Chat, CLI, Agent, debug, and optional cloud/background runs.
- **Recommendation**: Add a short facilitator note or README section with the per-attendee planning bands above and the cohort formula.

### Improvement: Make model-routing defaults visible before the labs

- **Evidence**: Foundations Exercise 3 asks learners to compare Auto routing and one explicit model option. Agentic and Advanced then add agentic loops, debugging, and optional background/cloud choices.
- **Impact**: Learners who choose powerful or long-context models early can burn several times more credits without improving the exercise outcome.
- **Recommendation**: Tell facilitators to start with Auto or a lightweight/default model for orientation, scoping, and checklist prompts, then escalate only for implementation, debugging, or multi-step reasoning.

### Improvement: Track optional cloud/background use separately

- **Evidence**: Agentic Exercise 3 asks learners to compare Local, Copilot CLI/background, and Cloud options; Advanced Exercise 3 includes debug and deployment evidence.
- **Impact**: Optional background/cloud agent runs can dominate the estimate, especially if learners retry failed runs or attach broad repository context.
- **Recommendation**: Ask learners to record whether they used local, background, or cloud execution in the lab notes so post-event usage can be reconciled against the estimate.

## Recommended follow-up

- Add a facilitator-facing AIC budget note to the workshop README or parent workshop page.
- Keep quizzes as site-rendered knowledge checks; do not ask learners to answer quiz questions through Copilot unless the event intentionally budgets for it.
- Consider a "budget mode" facilitation option that disables optional cloud/background runs for large cohorts.

*QA report for hack AI credit consumption across Foundations, Agentic, and Advanced modules*
