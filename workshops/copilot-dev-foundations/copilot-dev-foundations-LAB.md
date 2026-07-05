# Module 1: Foundations Content Refresh — Hands-On Lab

## Overview

This lab creates the **Copilot Quest starter** — a Wordle-style CLI word game that Module 2 will extend. Exercises move from baseline recognition to guided workflow use, then optimization decisions, then delegation-readiness guardrails so the result is a reusable game starter for the rest of the sequence.

- **Total time**: ~30 minutes
- **Prerequisites**:
  - VS Code with GitHub Copilot enabled
  - GitHub Copilot CLI installed from <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>
  - Any local multi-file repository

## Exercise 1: Stage 1 Baseline — Surfaces, Safety, and Governance Signals

**⏱️ Time**: 8 min  
**📋 Objective**: Identify Copilot surfaces, select safe context boundaries, and confirm governance-aware review ownership

**Warm-up (try this now)**: Ask Copilot for a quick orientation check.

```text
List three places I can use GitHub Copilot and one safe beginner task for each.
```

Expected result: Copilot returns IDE, terminal, GitHub/browser, cloud, or Copilot app surfaces where available with low-risk tasks you can review.

1. Create a note named `copilot-quest-foundations-notes.md` in your workshop notes, or use this starter template in any notes app.

```markdown
# Copilot Quest Foundations Notes

### Copilot Surfaces

| Surface | Where I found it | Safe beginner task | Review gate |
| --- | --- | --- | --- |
| VS Code Chat | | | |
| Inline completion or inline chat | | | |
| Copilot CLI | | | |
| GitHub.com or browser | | | |
| Cloud, app, or background agent if available | | | |

### Copilot Quest Starter

- One-sentence game description:

### Governance

- Privacy or IP control:
- Human review owner:
```

2. Open VS Code and find Copilot Chat. Use the Chat icon in the Activity Bar, or open the Command Palette and run `Chat: Open Chat`.
3. In the notes table, list where you can access Copilot in your workflow, including IDE, browser/GitHub.com, terminal, cloud, or Copilot app experiences where available.
4. Write a one-sentence description of **Copilot Quest** — the word game you want to build for this repo or project.
5. Create a small selection in an open file: highlight a function, paragraph, or configuration block that is safe to share. In VS Code Chat, run one scoped request with `#selection`.

```text
Explain this selected code or text using only #selection. Return one sentence about what context you used.
```

6. Open a single file in the editor and run a second scoped request with `#file`.

```text
Explain the purpose of #file in this request. Return one sentence about how this differs from #selection.
```

7. Open Copilot CLI installation guidance at <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>, then record one CLI feature you expect to use safely.
8. Open the VS Code integrated terminal or another terminal in the repository root. Confirm Copilot CLI is installed and review available interactive commands:

```powershell
copilot --help
copilot help commands
```

9. Open the interactive CLI with `copilot`. Inside the interactive CLI, run `/settings` and `/help`, then ask:

```text
List the top 3 folders a new contributor should read first.
```

10. In `copilot-quest-foundations-notes.md`, note one enterprise privacy or IP control your team should enforce by default, such as content exclusions, duplicate detection, retention expectations, or admin policy.
11. Record who owns review of generated suggestions before any code is accepted.

**🛡️ Safety checkpoint**: Treat all output as draft, review generated commands before execution, and define the human review gate before accepting any suggestion.

### ✅ Success Criteria

- ✅ Identified IDE, browser/GitHub.com, terminal, cloud, or Copilot app surfaces where available
- ✅ Ran scoped chat requests with `#selection` and `#file`
- ✅ Located Copilot CLI installation guidance and named one key feature
- ✅ Ran an interactive CLI prompt safely
- ✅ Stated explicit human review ownership
- ✅ Captured one governance control to reduce unsafe default behavior
- ✅ Defined the starter-kit theme you will extend in later modules

## Exercise 2: Stage 2 Guided Workflows — Inline Assistance and Built-in Copilot Experiences

**⏱️ Time**: 8 min  
**📋 Objective**: Practice inline assistance and compare built-in Copilot experiences such as Ask, Plan, and Agent with scoped context

**Warm-up (try this now)**: Run one safe scoped explanation in VS Code chat.

```text
Explain what #selection does in GitHub Copilot chat in one short paragraph.
```

Expected result: Copilot explains that `#selection` limits context to the highlighted code or text.

1. Create or open a scratch file for a low-risk **Copilot Quest** note, helper, or test stub. Use an inline completion by starting a comment or function name and pausing for Copilot's suggestion before accepting or rejecting it.
2. Select a small block in the editor. Open inline chat from the editor context menu or Command Palette, then ask for a bounded transformation such as "make this comment clearer" or "turn this note into a checklist."
3. Keep the same selected block highlighted and run one slash command in VS Code Chat:

```text
/fix #selection
```

4. Open the chat mode or experience selector in Copilot Chat and try the same request in Ask, Plan, and Agent where those experiences are available in your environment. If one is unavailable, write "not available in my environment" in your notes.
5. Add this comparison table to `copilot-quest-foundations-notes.md`.

```markdown
### Ask / Plan / Agent Comparison

| Experience | What I asked | What it returned | Review gate before accepting |
| --- | --- | --- | --- |
| Ask | | | |
| Plan | | | |
| Agent | | | |

- Safest experience for low-risk understanding:
- Rule for staying in Ask or Plan:
- Response I rejected or revised because it proposed unclear multi-file edits:
```

6. Identify which built-in experience is safest for a low-risk understanding task and why.
7. Capture one rule for when you should stay in Ask or Plan instead of escalating to Agent.
8. Reject or revise any response that proposes unclear multi-file edits.

**🛡️ Safety checkpoint**: Validate generated edits before acceptance and reject unclear multi-file proposals.

### ✅ Success Criteria

- ✅ Used an inline completion for a low-risk flow edit
- ✅ Used inline chat for a bounded selected transformation
- ✅ Used at least one slash command with scoped context
- ✅ Compared built-in Ask, Plan, and Agent behavior
- ✅ Chose a stage-appropriate mode with rationale
- ✅ Captured one escalation rule for Agent mode
- ✅ Added or refined one reusable instruction for the starter kit

## Exercise 3: Stage 3 Optimization — Tokens, GitHub AI Credits, Billing, Models, and Context

**⏱️ Time**: 7 min  
**📋 Objective**: Make cost and quality decisions using token scope, GitHub AI Credits awareness, usage dashboards, model routing, and context hygiene

**Warm-up (try this now)**: Ask Copilot to turn real usage guidance into a practical checklist.

```text
Using https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio as a reference point, create a practical usage-check checklist for VS Code chat and Copilot CLI: include opening usage from the GitHub/Copilot icon in the bottom-right status area of VS Code, CLI `/usage` for usage, CLI `/context` for context-window token usage, CLI `/model` for model routing, GitHub billing/settings for monthly AI credit usage, and when Auto model selection is the lowest-cost first choice.
```

Expected result: Copilot returns concrete usage entry points and commands, explains which ones show session/context usage versus monthly account usage, and notes why Auto is usually the first model-routing choice.

1. Add this usage and routing template to `copilot-quest-foundations-notes.md`.

```markdown
### Usage and Model Routing

| Check | Where I found it | Evidence captured |
| --- | --- | --- |
| VS Code usage entry point | | |
| CLI `/usage` | | |
| CLI `/context` | | |
| CLI `/model` | | |
| Monthly account or team usage | | |

| Prompt scope | Quality signal | Token or context signal | Route selected |
| --- | --- | --- | --- |
| Broad prompt | | | |
| `#file` or `#selection` prompt | | | |
```

2. Ask one broad prompt, then ask a scoped `#file` or `#selection` prompt for the same objective.
3. Compare quality and token impact signals in the table.
4. Check the available session or monthly usage view in your environment, or write where your team reviews that usage. In VS Code Chat, open usage from the GitHub/Copilot icon in the bottom-right status area; in Copilot CLI try `/usage`, `/context`, and `/model`.
5. Re-run the scoped prompt with Auto model routing if available, then compare with one explicitly selected model option if your environment offers it.
6. Use the real-world usage checklist before choosing a route:

```text
Using https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio as a reference point, create a practical usage-check checklist for VS Code chat and Copilot CLI: include opening usage from the GitHub/Copilot icon in the bottom-right status area of VS Code, CLI `/usage` for usage, CLI `/context` for context-window token usage, CLI `/model` for model routing, GitHub billing/settings for monthly AI credit usage, and when Auto model selection is the lowest-cost first choice.
```

7. Note when a fast/general-purpose model is enough and when higher-cost reasoning is justified.
8. Record one context-rot warning sign and one reset strategy.
9. Add one budget guardrail for your workflow, such as a spend trigger, escalation threshold, or review gate before high-cost mode changes.
10. Draft a short prompt template or checklist that Module 2 can reuse for adding guesses, scoring, and hints to the game.

**🛡️ Safety checkpoint**: Do not optimize cost by skipping tests, validation, or security checks.

### ✅ Success Criteria

- ✅ Compared broad vs scoped context behavior
- ✅ Checked or identified session/monthly usage visibility
- ✅ Captured one AI-credit-aware routing decision
- ✅ Documented one billing or budget guardrail for model usage
- ✅ Checked usage signals and explained why Auto, a fast model, or a reasoning model fit the task
- ✅ Documented one context reset trigger
- ✅ Produced one reusable prompt/checklist asset for the next module

## Exercise 4: Stage 4 Delegation Readiness — Custom Agent Guardrails

**⏱️ Time**: 7 min  
**📋 Objective**: Draft least-privilege guardrails for a future custom agent without creating agent or skill files yet

In this exercise, you are not building the custom agent yet. You are writing the "rules of the road" that Module 2 will turn into a real agent file. Think of a guardrail as a short boundary that tells a future agent what it may do, what it must not do, and when it must stop for human review.

**What you will create**: a short Module 2 handoff note named `copilot-quest-agent-guardrails.md` or saved in your workshop notes.

### Step 1: Watch first — compare a broad guardrail with a safer one

The instructor will show two possible guardrails for a future Copilot Quest helper.

| Broad and risky | Narrower and safer |
|-----------------|--------------------|
| "Update any files needed to improve the game." | "Suggest one low-risk single-file change for guess feedback, explain the diff, and stop before editing if the scope expands." |

Notice why the safer version is easier to review: it names the task, limits file scope, requires explanation, and includes a stop rule.

### Step 2: Now you try — ask Copilot for one boundary

```text
Write one guardrail for a custom agent that may only suggest low-risk single-file changes.
```

Expected result: Copilot should return a narrow permission or review rule you can carry forward into the future Module 2 agent instructions. If it suggests broad file access, automatic edits, or unclear ownership, ask it to tighten the rule.

### Step 3: Make it concrete for Copilot Quest

Use this small template to draft your handoff note:

```markdown
# Copilot Quest Agent Guardrails

**Purpose**
Help with one low-risk Copilot Quest change at a time.

**Allowed scope**
- Suggest one single-file change related to guess feedback, scoring, hints, or tests.
- Explain the expected diff before any edit is accepted.

**Not allowed**
- Do not change dependencies.
- Do not edit multiple files without asking.
- Do not skip tests or review.

**Stop and ask when**
- The task needs more than one file.
- The acceptance criteria are unclear.
- A command would install, delete, publish, or contact an external service.

**Module 2 handoff**
Turn this checklist into a repo-local custom agent and companion skill in Module 2.
```

### Step 4: Improve one guardrail

Ask Copilot to tighten your draft:

```text
Review this guardrail checklist. Remove one unnecessary permission, add one ambiguity stop rule, and explain which risk each change reduces.
```

Expected result: You should have one improved permission boundary and one clear off-ramp for ambiguity.

### Step 5: Save the handoff for Module 2

Save your note where you can find it in the next module. Do **not** create `.github/skills` or `.github/agents` files yet. In Module 2, you will use this note to create the real skill and custom-agent artifacts.

**🛡️ Safety checkpoint**: Keep tool permissions minimal and reject unclear or high-blast-radius tasks.

### ✅ Success Criteria

- ✅ Drafted custom-agent guardrails without creating agent or skill files
- ✅ Created a Module 2 handoff note with purpose, allowed scope, not-allowed scope, stop rules, and handoff guidance
- ✅ Compared a broad risky guardrail with a narrower safer guardrail
- ✅ Asked Copilot for one low-risk single-file boundary and tightened it if it was too broad
- ✅ Improved one guardrail by removing an unnecessary permission or adding an ambiguity stop rule
- ✅ Confirmed the real skill and custom-agent files will be created in Module 2, not Foundations
- ✅ Saved the handoff note where you can reuse it in the next module

*Hands-on lab for Module 1: Foundations Content Refresh — GitHub Copilot Developer Training*
