# Core vs Skill-Track Scenario QA Report

## Scope

Reviewed scenario and task-source alignment across the core Agentic lab, C++ / Hardware Agentic lab, and durable authoring standards:

- `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md`
- `workshops\copilot-dev-agentic\labs\cpp-hardware-LAB.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`
- `workshops\copilot-dev-agentic\presenter.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic.slidev.md`
- `.github\copilot-instructions.md`
- `.github\skills\lab-track-author\SKILL.md`
- `.github\skills\curriculum-qa\SKILL.md`

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | Agentic workshop, lab, presenter notes, and Slidev notes now reference the same Copilot Quest validation/feedback task for the core track. |
| Step clarity | Passing | The core Agentic lab now supplies the exact task, acceptance boundaries, target discovery prompt, evidence expectations, skill template, agent scope, and verifier checklist. |
| Scenario alignment | Passing | Core Agentic uses Copilot Quest; C++ Agentic uses an embedded GPIO/register helper review scenario rather than Copilot Quest. |
| Standards reuse | Passing | Repo instructions, lab-track authoring skill, and curriculum QA skill now require core labs to use the core build thread and skill tracks to use domain scenarios. |

## Findings

### Improvement completed: Replace invented core Agentic task with Copilot Quest task

- **Evidence**: `copilot-dev-agentic-LAB.md` now gives the five-letter guess validation and feedback task directly and carries it through the skill, custom agent, verifier, and readiness workflow.
- **Impact**: Learners no longer have to invent a coding task and can build the Copilot Quest solution across Module 2.
- **Recommendation**: Keep core Agentic tasks tied to Copilot Quest unless the workshop source intentionally changes the shared build thread.

### Improvement completed: Keep C++ track domain-specific

- **Evidence**: `labs\cpp-hardware-LAB.md` now uses a GPIO/register helper review scenario focused on fixed-width integers, `volatile`, hardware assumptions, validation evidence, and human-review stop conditions.
- **Impact**: Embedded developers practice the same Agentic concepts without being forced into the Copilot Quest word-game domain.
- **Recommendation**: Future skill tracks should use their own domain scenarios while preserving shared module concepts.

## Recommended follow-up

- Apply the same scenario-alignment QA when authoring Appian, IBM i / AS400, or additional technology tracks.

*QA report for core vs skill-track scenario alignment*
