# Agentic Lab Surface Choice QA Report

## Scope

Reviewed the Agentic module lab replacement plan and the updated `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md` against the Agentic workshop source and the two source guide artifacts:

- `qa\copilot-quest-vscode-chat-user-guide.md`
- `qa\copilot-quest-cli-user-guide.md`
- `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | The lab keeps instructions, memory, strong prompts, skills, custom agents, agentic loops, tool control, `/init`, instruction layering, and optimization evidence in the Agentic module. |
| Step clarity | Passing | Each exercise names exact artifacts, VS Code surfaces, Copilot CLI commands, prompts, evidence templates, safety checkpoints, and success criteria. |
| Scenario alignment | Passing | The replacement uses Copilot Quest as the core/general build thread and does not move technology-specific C++ examples into the general lab. |
| Surface choice | Passing | VS Code Chat is the recommended default path; Copilot CLI remains an alternate path. Both paths produce the same workflow kit artifacts. |

## Findings

### Improvement: Surface choice belongs inside the Agentic core lab

- **Evidence**: `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md` now starts with a two-row path table for VS Code Chat and Copilot CLI.
- **Impact**: Participants can choose the available surface without confusing surface choice with the existing technology skill-track picker.
- **Recommendation**: Keep CLI vs Chat inside the lab unless the site later adds a dedicated execution-surface selector separate from skill tracks.

### Improvement: VS Code Chat should be the default

- **Evidence**: The lab marks VS Code Chat as the recommended default because learners can see Agent mode, Configure Tools, Agent Customizations, review controls, Source Control, and debug surfaces.
- **Impact**: Beginners get visible review and approval controls before moving to terminal-first CLI workflows.
- **Recommendation**: Keep the CLI path as the alternate for learners who already have Copilot CLI authenticated and want `/usage`, `/context`, `/memory`, `/share`, and transcript evidence.

### Passing: Agentic artifact boundary is preserved

- **Evidence**: The replacement lab creates `.github\copilot-instructions.md`, `.github\skills\copilot-quest\SKILL.md`, `.github\agents\copilot-quest.agent.md`, and `AGENTIC-LOOP.md`.
- **Impact**: Foundations still avoids creating agent and skill files, while Agentic remains the module where learners create concrete repo-local Copilot artifacts.
- **Recommendation**: Update deterministic tests to expect the new artifact paths and keep Advanced focused on orchestration and governance of these artifacts.

## Recommended follow-up

- Run `npm run test:curriculum-qa`.
- Run `npm run test:labs`.
- If instructors want the site itself to expose a surface selector later, design it as a separate execution-surface picker rather than overloading `skillTracks`.

*QA report for Agentic lab CLI-vs-Chat surface choice*
