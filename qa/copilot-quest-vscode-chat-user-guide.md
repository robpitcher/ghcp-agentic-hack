# Copilot Quest VS Code Chat User Guide

## Purpose

Use this guide to complete the Copilot Quest workflow with the VS Code GitHub Copilot Chat extension instead of Copilot CLI. Learners create planning context, Copilot instructions, a custom agent, a repo-local skill, memory, a simple agentic loop, a Wordle-like game plan, implementation changes, and usage evidence from VS Code.

## Prerequisites

- VS Code is installed.
- The GitHub Copilot and GitHub Copilot Chat extensions are installed and signed in.
- Git is installed.
- You can use VS Code Explorer, Source Control, Chat, Agent mode, Agent Customizations, and the integrated terminal.

> **Note**: Create and review files in VS Code. Use the integrated terminal only for commands such as `git init`, package scripts, validation, and test runs.

## Step 1: Create a new Copilot Quest workspace

Use VS Code to create and open the workspace:

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

Open the VS Code integrated terminal with **Terminal > New Terminal** and initialize Git:

```powershell
git init
```

Expected evidence:

- VS Code Explorer shows the `copilot-quest` workspace.
- `README.md` describes Copilot Quest.
- The Source Control view shows `README.md` as an untracked change.

## Step 2: Create an initial project plan

Before asking Copilot to create instructions or implementation files, give the repository planning context.

In VS Code Explorer, select **New File** and create `PROJECT-PLAN.md`. Paste this content and save the file:

```markdown
# Copilot Quest Project Plan

## Goal

Build Copilot Quest as a small Wordle-like CLI word game that demonstrates agentic GitHub Copilot workflows in VS Code Chat.

## Initial scope

- Five-letter secret word.
- Six guesses per round.
- Per-letter feedback for correct position, present in another position, and absent.
- Input validation for guess length and allowed characters.
- Tests for duplicate-letter scoring.
- README instructions for running and testing the game.

## Copilot setup expectations

- Create `.github/copilot-instructions.md` after this plan exists so Copilot has project intent.
- Create a repo-local custom agent for Copilot Quest planning, implementation, review, and testing.
- Create a repo-local skill that tells Copilot how to behave for Copilot Quest work.
- Request memory for the durable Copilot Quest scenario when memory is available.
- Use a simple observe, plan, act, validate, review, and decide loop.
```

Expected evidence:

- VS Code Explorer shows `PROJECT-PLAN.md`.
- The plan names the game goal, implementation scope, validation expectations, and Copilot setup tasks.
- The Source Control view shows both `README.md` and `PROJECT-PLAN.md` as untracked changes.

## Step 3: Open VS Code Chat in Agent mode

Open the Chat view from the VS Code Activity Bar or Command Palette.

1. Select the Chat mode picker.
2. Choose **Agent** mode.
3. Select **Configure Tools**.
4. Keep approvals conservative, such as **Default Approvals**, unless your instructor tells you otherwise.
5. Use the `#` picker to add focused context when needed, such as `#file:README.md` or `#file:PROJECT-PLAN.md`.

Expected evidence:

- Chat is in Agent mode.
- Tools and approval settings are visible before Copilot edits files or runs commands.
- The prompt references only the files needed for the current step.

## Step 4: Create Copilot instructions

Paste this prompt into VS Code Chat Agent mode:

```text
Using #file:README.md and #file:PROJECT-PLAN.md, create .github/copilot-instructions.md for this repository.

The instructions should tell Copilot:

- Copilot Quest is a Wordle-like CLI word game.
- Prefer small, testable changes.
- Keep game rules readable and deterministic.
- Validate scoring logic, especially duplicate letters.
- Use VS Code Explorer, Source Control, Chat diff review, and focused context references for file creation and review.
- Before large edits, plan the next small change, validate it, review the diff, and decide whether to continue.

Create the file now and summarize what you added.
```

Use the files changed bar, inline diff, and Source Control view to review the change. Keep the file only after you confirm it matches the project plan.

Expected evidence:

- `.github\copilot-instructions.md` exists.
- The instructions reference Copilot Quest.
- The instructions include validation expectations and a small-change workflow.

## Step 5: Create a repo-local custom agent

Open **Chat Configure** or **Agent Customizations** so learners can see where custom agents are discovered. Then paste this prompt into Agent mode:

```text
Create .github/agents/copilot-quest.agent.md as a repo-local custom agent for Copilot Quest, a Wordle-like CLI word game.

The agent should help plan, implement, review, and test Copilot Quest features. Include activation criteria, expected files to inspect, safety and review gates, validation expectations, stop conditions, and a concise response contract. Keep it focused on the game scenario and repo-local VS Code development.
```

Review the generated file with VS Code's files changed bar, inline diff, and Source Control view.

Expected evidence:

- `.github\agents\copilot-quest.agent.md` exists.
- The agent references Copilot Quest and Wordle-like gameplay.
- The agent includes activation criteria, safety gates, validation, and stop conditions.

## Step 6: Create a repo-local skill

Open **Chat Configure** or **Agent Customizations** so learners can see where repo-local skills are discovered. Then paste this prompt into Agent mode:

```text
Create .github/skills/copilot-quest/SKILL.md as a repo-local Copilot skill for Copilot Quest, a Wordle-like CLI word game.

Write the skill as Copilot-facing behavior instructions, not a participant lab. Include when to use the skill, what context to inspect, implementation preferences, game-rule constraints, testing expectations, safety checks, output format, and stop conditions.
```

Review the generated file with VS Code's files changed bar, inline diff, and Source Control view.

Expected evidence:

- `.github\skills\copilot-quest\SKILL.md` exists.
- The skill tells Copilot how to behave for Copilot Quest work.
- The skill is not written as a human lab guide.

## Step 7: Add memory for the game scenario

Paste this prompt into VS Code Chat:

```text
Remember this durable project fact if memory is enabled: Copilot Quest is a Wordle-like word guessing game, and repo-local Copilot agents and skills should use that scenario.

Confirm whether memory was stored, unavailable, blocked by policy, or requires manual approval.
```

Expected evidence:

- Copilot confirms memory was requested or explains why it could not be stored.
- The memory text avoids secrets and stays focused on durable project context.
- If memory is unavailable, the learner records that result in their notes or session transcript.

## Step 8: Create a simple agentic loop

Paste this prompt into Agent mode:

```text
Create AGENTIC-LOOP.md for Copilot Quest.

Document a simple agentic loop with these phases:

1. Observe: inspect README.md, PROJECT-PLAN.md, .github/copilot-instructions.md, the custom agent, the skill, and the current diff.
2. Plan: choose the next smallest game change and name expected files plus validation.
3. Act: make only that change.
4. Validate: run the relevant test or command and capture the result.
5. Review: inspect VS Code's files changed bar, inline diffs, and Source Control view.
6. Decide: continue with the next loop, fix a failed validation, or stop and summarize.

Keep the loop beginner-friendly and specific to Copilot Quest.
```

Expected evidence:

- `AGENTIC-LOOP.md` exists.
- The loop includes observe, plan, act, validate, review, and decide phases.
- The loop tells learners when to continue, fix, or stop.

## Step 9: Create a build plan for Copilot Quest

Ask Copilot to plan before coding. Paste this prompt into Agent mode:

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

Expected evidence:

- Copilot returns a concrete plan before editing.
- The plan names files, validation commands, and assumptions.
- The plan includes tests for duplicate-letter scoring.

## Step 10: Execute the plan in Agent mode

After reviewing the plan, paste this prompt into Agent mode:

```text
Execute the plan using the AGENTIC-LOOP.md workflow. Create the Copilot Quest CLI game, tests, and README updates. Keep the implementation small, readable, and runnable from this repository. Run the planned validation commands only after showing which command you will run, then report the result.
```

Use VS Code's approval prompts, files changed bar, inline diff, **Keep**, **Undo**, **Undo All**, and Source Control view to review the changes. If a validation fails, ask Copilot for a targeted correction:

```text
Fix only the issues found in the current diff or validation output. Do not rewrite unrelated files. Re-run the relevant validation command after the fix.
```

Expected evidence:

- Game source files exist.
- Tests exist and cover scoring behavior.
- README includes run and test instructions.
- Copilot reports validation results.
- The learner reviewed and kept or rejected changes intentionally.

## Step 11: Review context, debug evidence, and usage

Use VS Code surfaces to understand context and usage:

1. Open the model picker in Chat and note the selected model and any visible relative cost or usage indicators.
2. Open the Copilot status menu from the VS Code status bar and check available account, plan, or usage entries.
3. Run **Developer: Open Agent Debug Panel** or **Show Agent Debug Logs** from the Command Palette.
4. Review agent load events, tool calls, LLM requests, Summary, and Agent Flow Chart if available.
5. Open **Show Chat Debug View** for raw request and response payload evidence when available.
6. Use `#debugEventsSnapshot` or `/troubleshoot` if instructed by your facilitator.

Expected evidence:

- The learner can identify the model used for the session.
- The learner captures available usage, remaining-credit, premium-request, or account-plan evidence from the Copilot status/model surfaces.
- The learner captures debug evidence for tool calls, requests, and validation commands.

> **Important**: VS Code debug data may not persist across sessions. Capture screenshots or notes before closing VS Code.

## Step 12: Save the session evidence

Create `copilot-quest-vscode-session-notes.md` in VS Code Explorer and record:

```markdown
# Copilot Quest VS Code Session Notes

## Artifacts created

- .github/copilot-instructions.md
- .github/agents/copilot-quest.agent.md
- .github/skills/copilot-quest/SKILL.md
- AGENTIC-LOOP.md

## Memory result

- Stored, unavailable, blocked by policy, or manual approval required:

## Plan summary

- Files planned:
- Validation commands planned:
- Assumptions:

## Implementation result

- Files changed:
- Validation result:
- Review decision:

## Usage and debug evidence

- Model:
- Visible usage or remaining-credit evidence:
- Debug panel evidence:
- Chat debug evidence:
```

Expected evidence:

- `copilot-quest-vscode-session-notes.md` exists.
- Notes include artifacts, memory result, plan, implementation result, validation, review decision, and usage evidence.

## Completion checklist

| Check | Evidence |
|-------|----------|
| Initial project plan created | `PROJECT-PLAN.md` exists before instructions |
| Copilot instructions created | `.github\copilot-instructions.md` exists |
| Custom agent created | `.github\agents\copilot-quest.agent.md` exists |
| Repo-local skill created | `.github\skills\copilot-quest\SKILL.md` exists |
| Memory requested | Chat response records stored, unavailable, blocked, or approval-required result |
| Agentic loop created | `AGENTIC-LOOP.md` exists |
| Wordle game planned | Copilot plan lists files, tests, validation, and assumptions |
| Plan executed | Game source, tests, and README updates exist |
| Changes reviewed | Files changed bar, inline diff, Keep/Undo, or Source Control review completed |
| Usage reviewed | Model, status, usage, credit, premium-request, or debug evidence captured |
| Session notes saved | `copilot-quest-vscode-session-notes.md` exists |

*User guide for completing the Copilot Quest workflow with VS Code Chat*
