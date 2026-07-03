# Module 1: Foundations Content Refresh — Hands-On Lab

## Overview

This lab creates the **Copilot Quest starter** — a Wordle-style CLI word game that Module 2 will extend. Exercises move from baseline recognition to guided workflow use, then optimization decisions, then custom-agent guardrails so the result is a reusable game starter for the rest of the sequence.

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

1. List where you can access Copilot in your workflow, including IDE, browser/GitHub.com, terminal, cloud, or Copilot app experiences where available.
2. Write a one-sentence description of **Copilot Quest** — the word game you want to build for this repo or project.
3. In VS Code chat, run one scoped request with `#selection` and one with `#file`.
4. Open Copilot CLI installation guidance at <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>, then record one CLI feature you expect to use safely.
5. In terminal, confirm Copilot CLI is installed and review available interactive commands:

```powershell
copilot --help
copilot help commands
```

Then open the interactive CLI with `copilot`, run `/settings` and `/help`, and ask:

```text
List the top 3 folders a new contributor should read first.
```

6. Note one enterprise privacy or IP control your team should enforce by default, such as content exclusions, duplicate detection, retention expectations, or admin policy.
7. Record who owns review of generated suggestions before any code is accepted.

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

1. Use an inline completion for a low-risk comment, helper, or test stub related to **Copilot Quest**.
2. Select a small block and ask inline chat for a bounded transformation.
3. Run one slash command against selected code:

```text
/fix #selection
```

4. Switch the same request through built-in Ask, Plan, and Agent experiences and compare output.
5. Identify which built-in experience is safest for a low-risk understanding task and why.
6. Capture one rule for when you should stay in Ask or Plan instead of escalating to Agent.
7. Reject or revise any response that proposes unclear multi-file edits.

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

1. Ask one broad prompt, then ask a scoped `#file` or `#selection` prompt for the same objective.
2. Compare quality and token impact signals.
3. Check the available session or monthly usage view in your environment, or write where your team reviews that usage. In VS Code Chat, open usage from the GitHub/Copilot icon in the bottom-right status area; in Copilot CLI try `/usage`, `/context`, and `/model`.
4. Re-run the scoped prompt with Auto model routing if available, then compare with one explicitly selected model option if your environment offers it.
5. Use the real-world usage checklist before choosing a route:

```text
Using https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio as a reference point, create a practical usage-check checklist for VS Code chat and Copilot CLI: include opening usage from the GitHub/Copilot icon in the bottom-right status area of VS Code, CLI `/usage` for usage, CLI `/context` for context-window token usage, CLI `/model` for model routing, GitHub billing/settings for monthly AI credit usage, and when Auto model selection is the lowest-cost first choice.
```

6. Note when a fast/general-purpose model is enough and when higher-cost reasoning is justified.
7. Record one context-rot warning sign and one reset strategy.
8. Add one budget guardrail for your workflow, such as a spend trigger, escalation threshold, or review gate before high-cost mode changes.
9. Draft a short prompt template or checklist that Module 2 can reuse for adding guesses, scoring, and hints to the game.

**🛡️ Safety checkpoint**: Do not optimize cost by skipping tests, validation, or security checks.

### ✅ Success Criteria

- ✅ Compared broad vs scoped context behavior
- ✅ Checked or identified session/monthly usage visibility
- ✅ Captured one AI-credit-aware routing decision
- ✅ Documented one billing or budget guardrail for model usage
- ✅ Checked usage signals and explained why Auto, a fast model, or a reasoning model fit the task
- ✅ Documented one context reset trigger
- ✅ Produced one reusable prompt/checklist asset for the next module

## Exercise 4: Stage 4 Delegation — Custom Agent Guardrails

**⏱️ Time**: 7 min  
**📋 Objective**: Create a constrained custom-agent starter that applies least-privilege scope, explicit approval, and escalation behavior

**Warm-up (try this now)**: Ask Copilot to draft one safe delegation boundary before creating files.

```text
Write one guardrail for a custom agent that may only suggest low-risk single-file changes.
```

Expected result: Copilot returns a narrow permission or review rule you can copy into the starter agent instructions.

1. Create `.github/agents/foundations-helper.agent.md` with a narrow, single-purpose scope.
2. Add a purpose statement for low-risk single-file suggestions related to **Copilot Quest**.
3. Add allowed scope, disallowed scope, required approval before edits, and an off-ramp for ambiguity.
4. Ask the agent to suggest one low-risk change in a single file.
5. Review proposed edits before acceptance and reject any request for broader permissions.
6. Document which least-privilege boundary kept the task safe.
7. Add a handoff note for Module 2 that states what the custom agent may help with and what still requires human review.

**🛡️ Safety checkpoint**: Keep tool permissions minimal and reject unclear or high-blast-radius tasks.

### ✅ Success Criteria

- ✅ Created a custom-agent starter file
- ✅ Added explicit purpose, scope, approval, and escalation guardrails
- ✅ Tested one constrained low-risk delegation path
- ✅ Reviewed suggested edits before acceptance
- ✅ Documented one Stage 4 delegation policy
- ✅ Captured a handoff note for the next module

*Hands-on lab for Module 1: Foundations Content Refresh — GitHub Copilot Developer Training*
