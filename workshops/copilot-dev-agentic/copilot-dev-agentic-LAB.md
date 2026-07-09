# Module 2: Intermediate (Agentic) — Hands-On Lab

## Overview

This lab turns the Agentic module concepts into one end-to-end **Copilot Quest** workflow. You will create project context, Copilot instructions, memory guidance, a repo-local skill, a custom agent, a simple agentic loop, an implementation plan, validation evidence, and usage/debug evidence.

Choose one surface and stay with it for the full lab:

| Path | Recommended for | Use when you want |
|------|-----------------|-------------------|
| **VS Code Chat** | Most participants | Agent mode, Configure Tools, Agent Customizations, files changed review, Keep/Undo controls, and debug panels in one visible UI |
| **Copilot CLI** | CLI-ready participants | Terminal-first sessions, `copilot init` or interactive `/init`, `/plan`, `/diff`, `/usage`, `/context`, `/memory`, `/share`, and CLI transcript evidence |

Both paths produce the same required workflow kit:

- `README.md`
- `PROJECT-PLAN.md`
- `.github\copilot-instructions.md`
- `.github\agents\copilot-quest.agent.md`
- `.github\skills\copilot-quest\SKILL.md`
- `AGENTIC-LOOP.md`
- `copilot-quest-vscode-session-notes.md` or `copilot-quest-cli-session.md`

**Total time**: ~30 minutes

**Prerequisites**:

- Module 1 completion
- VS Code with GitHub Copilot and GitHub Copilot Chat installed and signed in
- Git installed
- Optional: GitHub Copilot CLI installed and authenticated if choosing the CLI path

> **Note**: VS Code Chat is the recommended default path. Use the CLI path only if you already have Copilot CLI available and want terminal-first session evidence.

## Exercise 1: Strong Prompt and Stage 5 Surface Selection

**⏱️ Time**: 10 min
**📋 Objective**: Create project context before initialization, choose a Chat or CLI execution surface, and prepare a strong prompt boundary for the Copilot Quest workflow.

**Warm-up (try this now)**:

```text
Classify this Copilot Quest task guidance into strong-prompt fields, instruction candidates, memory candidates, and skill candidates: "Build a Wordle-like CLI game with small testable changes, validate duplicate-letter scoring, review every diff, and stop before changing dependencies or broad project structure."
```

Expected result: you should get Task, Scope, Constraints, Definition of Done, and Off-Ramp fields, plus separate instruction, memory, and skill candidates.

1. Open VS Code.
2. Select **File > Open Folder**.
3. Create or select a folder named `copilot-quest`.
4. Select **Open**.
5. In VS Code Explorer, select **New File** and create `README.md`.
6. Paste this content into `README.md` and save the file:

```markdown
# Copilot Quest

Copilot Quest is a Wordle-like CLI word game used to practice agentic GitHub Copilot workflows.
```

7. In VS Code Explorer, select **New File** and create `PROJECT-PLAN.md`.
8. Paste this content into `PROJECT-PLAN.md` and save the file:

```markdown
# Copilot Quest Project Plan

### Goal

Build Copilot Quest as a small Wordle-like CLI word game that demonstrates agentic GitHub Copilot workflows.

### Initial scope

- Five-letter secret word.
- Six guesses per round.
- Per-letter feedback for correct position, present in another position, and absent.
- Input validation for guess length and allowed characters.
- Tests for duplicate-letter scoring.
- README instructions for running and testing the game.

### Copilot setup expectations

- Create or initialize `.github/copilot-instructions.md` after this plan exists so Copilot has project intent.
- Create a repo-local custom agent for Copilot Quest planning, implementation, review, and testing.
- Create a repo-local skill that tells Copilot how to behave for Copilot Quest work.
- Request memory for the durable Copilot Quest scenario when memory is available.
- Use a simple observe, plan, act, validate, review, and decide loop.
```

9. Open the VS Code integrated terminal with **Terminal > New Terminal** and initialize Git:

```powershell
git init
```

10. Choose your execution path and record it in your notes.

| Choose | If your environment has | First setup action |
|--------|--------------------------|--------------------|
| **VS Code Chat** | GitHub Copilot Chat extension signed in | Open Chat, select Agent mode, open **Configure Tools**, and keep **Default Approvals** |
| **Copilot CLI** | `copilot` command authenticated | Run `copilot init`, then start an interactive CLI session |

11. If you choose **VS Code Chat**, open Chat from the Activity Bar or Command Palette. Select **Agent** mode, open **Configure Tools**, keep **Default Approvals**, and use the `#` picker to inspect focused context such as `#file:README.md` and `#file:PROJECT-PLAN.md`.
12. If you choose **Copilot CLI**, run this command in the VS Code integrated terminal after `README.md` and `PROJECT-PLAN.md` exist. In an interactive CLI session, `/init` is the equivalent initialization concept.

```powershell
copilot init
```

13. If you choose **Copilot CLI**, start the interactive session:

```powershell
copilot --name "copilot-quest-build" --enable-memory --allow-all
```

14. Use this strong prompt boundary for the rest of the lab:

```text
Task: Build Copilot Quest as a small Wordle-like CLI game.
Scope: Create project instructions, one repo-local skill, one custom agent, one agentic loop, a small game implementation, tests, README updates, and usage evidence.
Constraints: Prefer small testable changes, keep game rules deterministic, do not change dependencies or broad project structure without approval, and review every diff before acceptance.
Definition of Done: Required artifacts exist, duplicate-letter scoring is validated, implementation evidence is captured, and usage/debug evidence is recorded.
Off-Ramp: Stop and ask if validation fails twice, if dependency changes seem necessary, or if the selected surface cannot create the required artifact.
```

**🛡️ Safety checkpoint**: Do not put secrets, personal data, customer data, credentials, or regulated data into memory, prompts, instructions, skills, custom agents, or session notes.

### ✅ Success Criteria

- ✅ Created `README.md` with the Copilot Quest scenario
- ✅ Created `PROJECT-PLAN.md` before creating or initializing Copilot instructions
- ✅ Selected either the VS Code Chat path or Copilot CLI path
- ✅ Opened the relevant setup surface: Configure Tools and `#` picker for Chat, or `copilot init` and interactive session for CLI
- ✅ Captured a strong prompt with Task, Scope, Constraints, Definition of Done, and Off-Ramp

## Exercise 2: Stage 6 Custom Agent, Skill, and Agentic Loop Handoff

**⏱️ Time**: 10 min
**📋 Objective**: Create durable Copilot instructions, request safe memory, create a repo-local skill, create a custom agent, and define a simple bounded agentic loop.

**Warm-up (try this now)**:

```text
Draft a simple handoff for Copilot Quest that names the instruction file, memory fact, skill file, custom agent file, loop phases, validation evidence, and stop condition.
```

Expected result: you should get a workflow kit outline with visible evidence expectations and explicit boundaries.

1. Use your chosen path for every prompt in this exercise.
2. If using **VS Code Chat**, paste prompts into Agent mode and review changes with the files changed bar, inline diff, **Keep**, **Undo**, **Undo All**, and Source Control view.
3. If using **Copilot CLI**, paste prompts into the interactive session and review changes with:

```text
/diff
```

4. Create or refine `.github\copilot-instructions.md`.

```text
Review README.md, PROJECT-PLAN.md, and any existing .github/copilot-instructions.md. Create or update .github/copilot-instructions.md with concise project instructions for Copilot Quest.

Include:

- Copilot Quest is a Wordle-like CLI word game.
- Prefer small, testable changes.
- Keep game rules readable and deterministic.
- Validate scoring logic, especially duplicate letters.
- Use the selected surface's review controls before accepting changes.
- Before large edits, plan the next small change, validate it, review the diff, and decide whether to continue.
```

5. Request safe memory for the scenario.

```text
Remember this durable project fact if memory is enabled: Copilot Quest is a Wordle-like word guessing game, and repo-local Copilot agents and skills should use that scenario.

Confirm whether memory was stored, unavailable, blocked by policy, or requires manual approval.
```

6. If using **Copilot CLI**, optionally inspect memory status:

```text
/memory
```

7. Create `.github\skills\copilot-quest\SKILL.md`.

```text
Create .github/skills/copilot-quest/SKILL.md as a repo-local Copilot skill for Copilot Quest, a Wordle-like CLI word game.

Write the skill as Copilot-facing behavior instructions, not a participant lab. Include when to use the skill, what context to inspect, implementation preferences, game-rule constraints, testing expectations, safety checks, output format, and stop conditions.
```

8. Create `.github\agents\copilot-quest.agent.md`.

```text
Create .github/agents/copilot-quest.agent.md as a repo-local custom agent for Copilot Quest, a Wordle-like CLI word game.

The agent should help plan, implement, review, and test Copilot Quest features. Include activation criteria, expected files to inspect, safety and review gates, validation expectations, stop conditions, and a concise response contract. Keep it focused on the game scenario and repo-local development.
```

9. Create `AGENTIC-LOOP.md`.

```text
Create AGENTIC-LOOP.md for Copilot Quest.

Document a simple agentic loop with these phases:

1. Observe: inspect README.md, PROJECT-PLAN.md, .github/copilot-instructions.md, the custom agent, the skill, and the current diff.
2. Plan: choose the next smallest game change and name expected files plus validation.
3. Act: make only that change.
4. Validate: run the relevant test or command and capture the result.
5. Review: inspect the selected surface's diff and source-control evidence.
6. Decide: continue with the next loop, fix a failed validation, or stop and summarize.

Keep the loop beginner-friendly and specific to Copilot Quest.
```

10. In VS Code, open the Chat Configure gear and **Agent Customizations** view. Confirm where Instructions, Skills, and Agents appear in your environment. If a surface is unavailable, record "not available in my environment."
11. Capture one handoff note in `copilot-quest-workflow-kit-notes.md`.

```markdown
# Copilot Quest Workflow Kit Notes

- Selected surface: VS Code Chat / Copilot CLI
- Copilot instructions created:
- Memory result:
- Skill path:
- Custom agent path:
- Agentic loop path:
- Review controls used:
- Stop condition:
- Evidence captured:
```

**🛡️ Safety checkpoint**: Treat skills and custom agents as reusable workflow assets. Review their trust boundaries before using them for implementation work.

### ✅ Success Criteria

- ✅ Created or refined `.github\copilot-instructions.md`
- ✅ Requested memory and recorded whether it was stored, unavailable, blocked, or approval-required
- ✅ Created `.github\skills\copilot-quest\SKILL.md` with explicit trust boundaries
- ✅ Created `.github\agents\copilot-quest.agent.md` with purpose, scope, validation, and stop conditions
- ✅ Created `AGENTIC-LOOP.md` with observe, plan, act, validate, review, and decide phases
- ✅ Located Agent Customizations where available
- ✅ Saved `copilot-quest-workflow-kit-notes.md`

## Exercise 3: Stage 6 to Stage 7 Guardrail Mapping and Usage Evidence

**⏱️ Time**: 10 min
**📋 Objective**: Plan and execute the Wordle-like game using a bounded agentic loop, map guardrails for Stage 7 readiness, review the generated changes, and capture usage, context, debug, or credit evidence.

**Warm-up (try this now)**:

```text
Score this workflow for readiness: project instructions exist, memory is requested, skill and custom agent files exist, the agentic loop has validation and review steps, and usage evidence will be captured before exit. Mark any missing evidence as "not Stage 7 ready."
```

Expected result: you should get a readiness snapshot with at least one explicit evidence requirement.

1. Ask Copilot to plan before coding.
2. If using **VS Code Chat**, paste this prompt into Agent mode.
3. If using **Copilot CLI**, first enter plan mode:

```text
/plan
```

4. Use this planning prompt:

```text
Do not edit files yet. Create an implementation plan for Copilot Quest, a Wordle-like CLI word game.

Use README.md, PROJECT-PLAN.md, .github/copilot-instructions.md, .github/agents/copilot-quest.agent.md, .github/skills/copilot-quest/SKILL.md, and AGENTIC-LOOP.md as context.

Plan a small TypeScript or JavaScript command-line app with:

- A five-letter secret word.
- Six guesses.
- Per-letter feedback for correct position, present in another position, and absent.
- Input validation.
- A replay-friendly game loop.
- Unit tests for scoring duplicate letters.
- A README section explaining how to run and test the game.

Before coding, list the files you expect to create or modify, the validation commands you will run, and any assumptions.
```

5. Review the plan. Confirm it names expected files, validation commands, assumptions, and duplicate-letter scoring tests.
6. Execute the plan with your selected surface.

```text
Execute the plan using the AGENTIC-LOOP.md workflow. Create the Copilot Quest CLI game, tests, and README updates. Keep the implementation small, readable, and runnable from this repository. Run the planned validation commands only after showing which command you will run, then report the result.
```

7. If validation fails, use a targeted correction prompt.

```text
Fix only the issues found in the current diff or validation output. Do not rewrite unrelated files. Re-run the relevant validation command after the fix.
```

8. Review the changes before acceptance:

| Surface | Required review evidence |
|---------|--------------------------|
| VS Code Chat | Files changed bar, inline diff, **Keep**, **Undo**, **Undo All**, Source Control view, and Agent Debug evidence where available |
| Copilot CLI | `/diff`, command output, validation result, `/context`, `/usage`, and `/share` transcript evidence |

9. If using **VS Code Chat**, capture usage and debug evidence:

```text
Open the model picker, Copilot status menu, Developer: Open Agent Debug Panel or Show Agent Debug Logs, Show Chat Debug View, and record available model, usage, credit, debug, and tool-call evidence.
```

10. If using **Copilot CLI**, capture context and usage evidence:

```text
/context
```

```text
/usage
```

```text
/share copilot-quest-cli-session.md
```

11. Create the relevant session note file.
12. For **VS Code Chat**, create `copilot-quest-vscode-session-notes.md`.
13. For **Copilot CLI**, create `copilot-quest-cli-session.md` with `/share` or create a manual note if sharing is unavailable.

```markdown
# Copilot Quest Session Notes

### Surface

- VS Code Chat / Copilot CLI:

### Artifacts created

- README.md:
- PROJECT-PLAN.md:
- .github/copilot-instructions.md:
- .github/agents/copilot-quest.agent.md:
- .github/skills/copilot-quest/SKILL.md:
- AGENTIC-LOOP.md:

### Memory result

- Stored, unavailable, blocked by policy, or manual approval required:

### Plan summary

- Files planned:
- Validation commands planned:
- Assumptions:

### Implementation result

- Files changed:
- Validation result:
- Review decision:

### Usage and debug evidence

- Model:
- Context or token evidence:
- AI credit, premium request, or usage evidence:
- Debug or transcript evidence:

### Stage 7 readiness

| Check | Ready? | Evidence | Gap |
|-------|--------|----------|-----|
| Auditability | Yes/No | | |
| Policy compliance | Yes/No | | |
| Rollback path | Yes/No | | |
| Instruction-layer coverage | Yes/No | | |
| Validation cadence | Yes/No | | |
```

14. Mark the workflow "not Stage 7 ready" if usage evidence, validation evidence, review evidence, or rollback evidence is missing.

**🛡️ Safety checkpoint**: Do not scale this workflow to background or cloud execution unless data sensitivity, permissions, logs, usage, validation cadence, and review gates are approved.

### ✅ Success Criteria

- ✅ Created a concrete implementation plan before coding
- ✅ Executed the plan with a bounded agentic loop
- ✅ Validated duplicate-letter scoring or recorded the validation gap
- ✅ Reviewed generated changes before acceptance
- ✅ Captured usage, context, debug, credit, or transcript evidence
- ✅ Completed Stage 7 readiness notes across all five checks
- ✅ Identified at least one blocker or confirmed the workflow is ready to carry into Module 3

*Hands-on lab for Module 2: Intermediate (Agentic) — GitHub Copilot Developer Training*
