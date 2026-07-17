# Foundations VS Code Chat Navigation QA Report

## Scope

Reviewed the replacement Foundations lab in `workshops\copilot-dev-foundations\copilot-dev-foundations-LAB.md` against the Foundations workshop source and slide presenter notes.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | The lab follows the workshop sections: Copilot surfaces and governance, inline assistance and Ask/Plan/Agent, tokenomics and model routing, then context windows and delegation guardrails. |
| Step clarity | Passing | Steps name VS Code Chat entry points, Activity Bar, Command Palette, Chat input, mode picker, `#` picker, Configure Tools, approvals, files changed bar, Source Control, model picker, Copilot status area, Agent Debug Panel, and Chat Debug View. |
| Scenario alignment | Passing | The lab keeps Copilot Quest as the starter thread and provides notes/guardrails for Module 2 without asking learners to create agent or skill files. |
| Usage/context coverage | Passing | Exercise 3 asks learners to inspect available usage/account surfaces, model routing, Auto availability, context scope, debug evidence, and optional CLI `/usage`, `/context`, and `/model` comparison. |

## Findings

### Passing: Foundations starts in VS Code Chat

- **Evidence**: Exercise 1 starts by opening VS Code, opening Chat from the Activity Bar or Command Palette, and locating Chat input, mode picker, `#` picker, Configure Tools, approvals, and files changed controls.
- **Impact**: Participants learn where to move in VS Code before they are asked to compare CLI or agentic execution modes.
- **Recommendation**: Keep VS Code Chat as the default Foundations surface and leave CLI as optional comparison evidence.

### Passing: Usage and model guidance handles environment variance

- **Evidence**: Exercise 3 tells learners to record "not available in my environment" when usage, model, debug, credit, or account-plan surfaces are unavailable.
- **Impact**: The lab remains accurate across Copilot plans, enterprise policy states, and UI rollout differences without inventing guaranteed token or credit displays.
- **Recommendation**: Continue asking for available evidence instead of exact numbers when plan or tenant policy can change what learners see.

### Passing: Foundations/Agentic artifact boundary is preserved

- **Evidence**: Exercise 4 explicitly says Foundations drafts guardrails while Agentic creates concrete agent and skill files.
- **Impact**: The module sequence stays intact: Foundations prepares context and safe delegation criteria; Agentic creates repo-local Copilot artifacts.
- **Recommendation**: Keep deterministic tests checking that Foundations does not create agent or skill files.

## Recommended follow-up

- Run `npm run test:curriculum-qa`.
- Run `npm run test:labs`.
- If instructors want a deeper live check, run participant validation manually in a configured VS Code environment.

*QA report for Foundations VS Code Chat navigation lab replacement*
