# Module 2 Agentic QA Report

## Scope

Reviewed `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`, `copilot-dev-agentic-LAB.md`, `copilot-dev-agentic-QUIZ.md`, `presenter.md`, and `copilot-dev-agentic.slidev.md`.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | Workshop lab indicators map to three LAB exercises in order. |
| Learner journey | Passing | The lab extends Copilot Quest into a workflow kit with strong prompts, a repo-local skill, a custom agent, handoff evidence, and guardrail mapping. |
| Artifact boundary | Passing | Agentic is where `.github\skills\copilot-quest-guessing\SKILL.md` and `.github\agents\copilot-quest-implementer.agent.md` are created. |
| Quiz coverage | Passing | Quiz questions cover instructions, memory, strong prompts, agents, skills, Ask/Plan/Agent, loops, tools, background/cloud agents, `/init`, and instruction layering. |
| Slide/presenter support | Passing with manual review | Slidev presenter notes are present; generated visual content should still be reviewed against the workshop source. |

## QA notes

- The Agentic lab is the concrete artifact-creation point for the curriculum.
- The lab should continue distinguishing prompt guidance, instructions, memory, skills, and custom agents because this is the main learner handoff into Advanced orchestration.

## Recommended follow-up

- If future labs require runnable project verification, add a deterministic sample repository or scaffold command instead of relying on live model output.
- Keep tool-control and stop-condition evidence explicit in success criteria.

*QA report for Module 2 Agentic — GitHub Copilot Developer Training*
