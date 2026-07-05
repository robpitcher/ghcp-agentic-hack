# All-Module Show/Tell Clarity QA Report

## Scope

Reviewed and updated learner-facing show/tell clarity across the core curriculum and C++ / Hardware track:

- `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`
- `workshops\copilot-dev-foundations\copilot-dev-foundations-LAB.md`
- `workshops\copilot-dev-foundations\labs\cpp-hardware-LAB.md`
- `workshops\copilot-dev-foundations\presenter.md`
- `workshops\copilot-dev-foundations\copilot-dev-foundations.slidev.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md`
- `workshops\copilot-dev-agentic\labs\cpp-hardware-LAB.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-workshop.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced-LAB.md`
- `workshops\copilot-dev-advanced\labs\cpp-hardware-LAB.md`
- `workshops\copilot-dev-advanced\presenter.md`
- `workshops\copilot-dev-advanced\copilot-dev-advanced.slidev.md`
- `.github\skills\lab-track-author\SKILL.md`
- `.github\skills\curriculum-qa\SKILL.md`
- `.github\copilot-instructions.md`

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | Foundations and Advanced workshop guidance now names the VS Code, Copilot CLI, and integration surfaces learners must use or evaluate. |
| Step clarity | Passing | Labs now name exact notes files, product entry points, terminal commands, configuration paths, templates, validation evidence, and rollback/disable actions. |
| Advanced integration walkthroughs | Passing | Advanced labs now walk learners through Copilot/agent hook configuration, extension discovery, conceptual MCP review, deterministic API/CLI evidence, and plugin trust review. |
| Skill and instruction reuse | Passing | Lab-track authoring, curriculum QA, and repo instructions now require show/tell setup and discovery standards for future tracks. |
| Artifact boundaries | Passing | Foundations still drafts guardrails only; Agentic creates concrete skills/agents; Advanced governs and orchestrates existing or draft integration surfaces. |

## Findings

### Improvement completed: Add where/how guidance for Copilot surfaces

- **Evidence**: Foundations labs now show how to open VS Code Chat, use `#selection` and `#file`, open Copilot CLI interactive mode, and capture usage/model evidence.
- **Impact**: Beginners can follow the surface walkthrough without relying on instructor-only verbal instructions.
- **Recommendation**: Keep product entry points paired with every new Copilot surface introduced in future modules.

### Improvement completed: Add setup and rollback evidence for Advanced integrations

- **Evidence**: Advanced labs now include `.github\hooks\*.json` hook setup, JSON validation, rollback commands, Extension Marketplace review, conceptual MCP boundary review, read-only `gh` CLI evaluation, and plugin supply-chain checks.
- **Impact**: Learners practice how to safely evaluate advanced concepts instead of only comparing them abstractly.
- **Recommendation**: Keep MCP conceptual unless a future workshop source explicitly adds a live server walkthrough.

### Improvement completed: Update authoring and QA standards

- **Evidence**: `.github\skills\lab-track-author\SKILL.md`, `.github\skills\curriculum-qa\SKILL.md`, and `.github\copilot-instructions.md` now require exact entry points, setup/discovery steps, validation evidence, and rollback/disable guidance.
- **Impact**: Future skill tracks and curriculum QA reviews should catch vague "compare," "set up," or "review" instructions before learners see them.
- **Recommendation**: Apply the same show/tell clarity standard to future Appian and IBM i / AS400 tracks.

## Recommended follow-up

- Manually verify product UI labels in the target teaching environment before delivery because VS Code and Copilot preview surfaces can vary by tenant, extension version, and policy.

*QA report for all-module show/tell clarity*
