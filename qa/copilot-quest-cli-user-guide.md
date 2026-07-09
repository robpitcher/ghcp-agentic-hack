# Copilot Quest CLI User Guide

## Purpose

Use this guide to complete the same workflow modeled by `tests\copilot-cli-session.spec.ts`: create initial planning context, initialize a new Copilot project in the CLI, create Copilot instructions, create a custom agent, create a repo-local skill, request memory, create a simple agentic loop, plan a Wordle-like game called Copilot Quest, execute the plan, and review token usage plus remaining AI credits.

## Prerequisites

- GitHub Copilot CLI is installed and authenticated.
- VS Code is installed.
- Git is installed.
- You are comfortable using VS Code Explorer, the VS Code integrated terminal, and Copilot CLI in a new local workspace.

> **Note**: Use VS Code Explorer or Copilot CLI to create and edit files. Use the integrated terminal only for commands such as `git init`, `copilot init`, validation, and Copilot CLI sessions.

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

- VS Code Explorer shows the new workspace.
- `README.md` describes Copilot Quest.
- The VS Code Source Control view shows `README.md` as an untracked change.

## Step 2: Create an initial project plan before Copilot init

`copilot init` works best when the repository already contains enough context for Copilot to infer the project goal, intended stack, and workflow. Before initializing instructions, create a small plan file in VS Code.

In VS Code Explorer, select **New File** and create `PROJECT-PLAN.md`. Paste this content and save the file:

```markdown
# Copilot Quest Project Plan

## Goal

Build Copilot Quest as a small Wordle-like CLI word game that demonstrates agentic GitHub Copilot workflows.

## Initial scope

- Five-letter secret word.
- Six guesses per round.
- Per-letter feedback for correct position, present in another position, and absent.
- Input validation for guess length and allowed characters.
- Tests for duplicate-letter scoring.
- README instructions for running and testing the game.

## Copilot setup expectations

- Initialize repository instructions after this plan exists so Copilot can detect the intended project shape.
- Create a repo-local custom agent for Copilot Quest planning, implementation, review, and testing.
- Create a repo-local skill that tells Copilot how to behave for Copilot Quest work.
- Request memory for the durable Copilot Quest scenario.
```

Expected evidence:

- VS Code Explorer shows `PROJECT-PLAN.md`.
- The plan names the game goal, implementation scope, validation expectations, and Copilot setup tasks.
- The VS Code Source Control view shows both `README.md` and `PROJECT-PLAN.md` as untracked changes.

## Step 3: Initialize Copilot instructions

In the VS Code integrated terminal, run Copilot's project initialization command:

```powershell
copilot init
```

Review `.github\copilot-instructions.md` from VS Code Explorer.

Expected evidence:

- `.github\copilot-instructions.md` exists.
- The file contains project guidance informed by `README.md` and `PROJECT-PLAN.md`.

## Step 4: Start a named Copilot CLI session

In the VS Code integrated terminal, start an interactive session so you can use slash commands such as `/usage`, `/context`, `/memory`, and `/exit`:

```powershell
copilot --name "copilot-quest-build" --enable-memory --allow-all
```

Inside the session, check the loaded environment:

```text
/env
```

Then check memory status:

```text
/memory
```

Expected evidence:

- The session starts in the Copilot Quest workspace.
- Memory is available or the CLI explains why it is unavailable.
- The footer or statusline shows usage or remaining credit information when configured.

## Step 5: Create or refine Copilot instructions

`copilot init` creates the starter `.github\copilot-instructions.md` file. In the Copilot CLI session, explicitly refine that file so it gives Copilot clear project behavior for Copilot Quest.

Paste this prompt into the Copilot CLI session:

```text
Review README.md, PROJECT-PLAN.md, and .github/copilot-instructions.md. Update .github/copilot-instructions.md with concise project instructions for Copilot Quest.

Include:

- Copilot Quest is a Wordle-like CLI word game.
- Prefer small, testable changes.
- Keep game rules readable and deterministic.
- Validate scoring logic, especially duplicate letters.
- Use VS Code Explorer, Source Control, /diff, and Copilot CLI for file creation and review.
- Before large edits, plan the next small change, validate it, review the diff, and decide whether to continue.
```

Review the generated or updated file:

```text
/diff
```

Open `.github\copilot-instructions.md` from VS Code Explorer and confirm it contains Copilot Quest-specific instructions.

Expected evidence:

- `.github\copilot-instructions.md` references Copilot Quest.
- The instructions include validation expectations and a small-change workflow.
- The instructions tell Copilot to review diffs and avoid broad unrelated edits.

## Step 6: Create a repo-local custom agent

Paste this prompt into the Copilot CLI session:

```text
Create .github/agents/copilot-quest.agent.md as a repo-local custom agent for Copilot Quest, a Wordle-like CLI word game.

The agent should help plan, implement, review, and test Copilot Quest features. Include activation criteria, expected files to inspect, safety and review gates, validation expectations, stop conditions, and a concise response contract. Keep it focused on the game scenario and repo-local development.
```

Review the generated file:

```text
/diff
```

Open `.github\agents\copilot-quest.agent.md` from VS Code Explorer and review the file before continuing.

Expected evidence:

- `.github\agents\copilot-quest.agent.md` exists.
- The agent references Copilot Quest and Wordle-like gameplay.
- The agent includes activation criteria, safety gates, validation, and stop conditions.

## Step 7: Create a repo-local skill

Paste this prompt into the same Copilot CLI session:

```text
Create .github/skills/copilot-quest/SKILL.md as a repo-local Copilot skill for Copilot Quest, a Wordle-like CLI word game.

Write the skill as Copilot-facing behavior instructions, not a participant lab. Include when to use the skill, what context to inspect, implementation preferences, game-rule constraints, testing expectations, safety checks, output format, and stop conditions.
```

Review the generated file:

```text
/diff
```

Open `.github\skills\copilot-quest\SKILL.md` from VS Code Explorer and review the file before continuing.

Expected evidence:

- `.github\skills\copilot-quest\SKILL.md` exists.
- The skill tells Copilot how to behave for Copilot Quest work.
- The skill is not written as a human lab guide.

## Step 8: Add memory for the game scenario

Paste this prompt into the Copilot CLI session:

```text
Remember this durable project fact if memory is enabled: Copilot Quest is a Wordle-like word guessing game, and repo-local Copilot agents and skills should use that scenario.

Confirm whether memory was stored, unavailable, or requires manual approval.
```

Then check memory status:

```text
/memory
```

Expected evidence:

- Copilot confirms memory was requested or explains why it could not be stored.
- The memory text avoids secrets and stays focused on durable project context.

## Step 9: Create a simple agentic loop

Create a small workflow artifact that learners can follow while building the game.

Paste this prompt into the Copilot CLI session:

```text
Create AGENTIC-LOOP.md for Copilot Quest.

Document a simple agentic loop with these phases:

1. Observe: inspect README.md, PROJECT-PLAN.md, .github/copilot-instructions.md, the custom agent, the skill, and the current diff.
2. Plan: choose the next smallest game change and name expected files plus validation.
3. Act: make only that change.
4. Validate: run the relevant test or command and capture the result.
5. Review: inspect /diff and VS Code Source Control.
6. Decide: continue with the next loop, fix a failed validation, or stop and summarize.

Keep the loop beginner-friendly and specific to Copilot Quest.
```

Review the generated file:

```text
/diff
```

Open `AGENTIC-LOOP.md` from VS Code Explorer and confirm the loop is clear enough to follow during implementation.

Expected evidence:

- `AGENTIC-LOOP.md` exists.
- The loop includes observe, plan, act, validate, review, and decide phases.
- The loop tells learners when to continue, fix, or stop.

## Step 10: Create a build plan for Copilot Quest

Ask Copilot to plan before coding:

```text
/plan
```

Then paste this planning prompt:

```text
Create an implementation plan for Copilot Quest, a Wordle-like CLI word game.

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

## Step 11: Execute the plan

After reviewing the plan, tell Copilot to implement it:

```text
Execute the plan. Create the Copilot Quest CLI game, tests, and README updates. Keep the implementation small, readable, and runnable from this repository. Run the planned validation commands and report the results.
```

Review the changes:

```text
/diff
```

Use VS Code Explorer and the Source Control view to inspect the generated source files, tests, and README updates.

If the diff is acceptable, keep the changes. If not, ask Copilot for a targeted correction:

```text
Fix only the issues found in the current diff. Do not rewrite unrelated files. Re-run the validation commands after the fix.
```

Expected evidence:

- Game source files exist.
- Tests exist and cover scoring behavior.
- README includes run and test instructions.
- Copilot reports validation results.

## Step 12: Review token usage and remaining credits

Use these interactive commands during or after the session:

```text
/context
```

```text
/usage
```

```text
/statusline
```

Use `/context` to inspect token usage and large context consumers. Use `/usage` to view AI credit usage, token breakdown, cached input, output tokens, and usage-limit progress. Use `/statusline` to configure footer items such as AI credits used this session or monthly AI credit usage when available.

Before exiting, capture the final usage summary:

```text
/exit
```

Expected evidence:

- `/context` shows current context-window token usage.
- `/usage` shows session AI credit usage and token breakdown.
- The footer, statusline, or exit summary shows remaining credits or legacy premium-request information, depending on your account.

## Step 13: Save or share the session transcript

Inside the Copilot CLI session, export the transcript:

```text
/share copilot-quest-session.md
```

Expected evidence:

- `copilot-quest-session.md` exists.
- The transcript includes the agent, skill, memory request, plan, implementation summary, and usage review.

## Completion checklist

| Check | Evidence |
|-------|----------|
| Initial project plan created | `PROJECT-PLAN.md` exists before `copilot init` |
| New project initialized | `.github\copilot-instructions.md` exists |
| Copilot instructions refined | `.github\copilot-instructions.md` references Copilot Quest and validation expectations |
| Custom agent created | `.github\agents\copilot-quest.agent.md` exists |
| Repo-local skill created | `.github\skills\copilot-quest\SKILL.md` exists |
| Memory requested | `/memory` output or Copilot confirmation |
| Agentic loop created | `AGENTIC-LOOP.md` exists |
| Wordle game planned | Copilot plan lists files, tests, validation, and assumptions |
| Plan executed | Game source, tests, and README updates exist |
| Usage reviewed | `/context`, `/usage`, `/statusline`, or `/exit` output captured |
| Session exported | `copilot-quest-session.md` exists |

*User guide for completing the Copilot Quest CLI session workflow*
