# Module 1: Foundations — Hands-On Lab

## Overview

This lab creates the **Copilot Quest starter** while teaching the Foundations operating model from the slide deck. You will start in **VS Code Chat**, learn where Copilot controls live, practice scoped context, compare Ask/Plan/Agent behavior, inspect usage and model signals, and draft delegation guardrails for Module 2.

The lab is VS Code-first:

- Use VS Code Chat as the primary surface.
- Use inline completion and inline chat from the editor.
- Use the `#` picker for scoped context such as `#selection`, `#file`, `#codebase`, and `#problems` where available.
- Use Configure Tools, permissions, files changed review controls, and Source Control before accepting edits.
- Use usage, model, context, and debug surfaces that are available in your environment.
- Use Copilot CLI only as optional comparison evidence if it is installed.

**Total time**: ~30 minutes

**Prerequisites**:

- VS Code with GitHub Copilot and GitHub Copilot Chat installed and signed in
- Git installed
- A local workspace where you can create notes
- Optional: GitHub Copilot CLI installed if you want terminal comparison evidence

> **Note**: UI availability can vary by VS Code version, Copilot plan, policy, and rollout. If a surface is unavailable, record "not available in my environment" and continue with the closest visible evidence.

## Exercise 1: Stage 1 Baseline — VS Code Chat, Surfaces, and Governance Signals

**⏱️ Time**: 8 min
**📋 Objective**: Open and navigate VS Code Chat, identify Copilot surfaces, select safe context boundaries, and capture governance-aware review ownership.

**Warm-up (try this now)**:

```text
List three places I can use GitHub Copilot and one safe beginner task for each.
```

Expected result: Copilot returns IDE, terminal, GitHub/browser, cloud, or Copilot app surfaces where available with low-risk tasks you can review.

1. Open VS Code.
2. Open Chat from the Activity Bar. If you do not see it, open the Command Palette and run `Chat: Open Chat`.
3. Locate these Chat areas and record whether each is visible:

| Chat area | What to look for | Visible? |
|-----------|------------------|----------|
| Chat input | Where prompts are typed | Yes/No |
| Mode or experience picker | Ask, Edit, Plan, Agent, or equivalent choices where available | Yes/No |
| `#` picker | Context sources such as `#selection`, `#file`, `#codebase`, or `#problems` | Yes/No |
| Configure Tools | Tool selection for Agent mode | Yes/No |
| Permissions or approvals | Default approvals, bypass approvals, or policy-managed state | Yes/No |
| Files changed bar | Review area when Agent proposes edits | Yes/No |

4. Create a note named `copilot-quest-foundations-notes.md` in VS Code Explorer.
5. Paste this starter template into the note:

```markdown
# Copilot Quest Foundations Notes

### Copilot surfaces

| Surface | Where I found it | Safe beginner task | Review gate |
|---------|------------------|--------------------|-------------|
| VS Code Chat | | | |
| Inline completion or inline chat | | | |
| Copilot CLI if installed | | | |
| GitHub.com or browser | | | |
| Cloud, app, or background agent if available | | | |

### Copilot Quest starter

- One-sentence game description:

### Chat navigation evidence

| VS Code Chat control | Available? | Evidence |
|----------------------|------------|----------|
| Chat input | | |
| Mode picker | | |
| `#` picker | | |
| Configure Tools | | |
| Approval controls | | |
| Files changed bar | | |

### Governance

- Privacy or IP control:
- Human review owner:
```

6. Write this Copilot Quest starter description in your note:

```text
Copilot Quest is a Wordle-like CLI word game used to practice safe, scoped Copilot workflows.
```

7. Open any safe local file or your notes file. Highlight a small paragraph or code block that is safe to share.
8. In VS Code Chat, type `#` and select `#selection` if available. Run this prompt:

```text
Explain this selected code or text using only #selection. Return one sentence about what context you used.
```

9. Open a single file in the editor. Use `#file` if available and run this prompt:

```text
Explain the purpose of #file in this request. Return one sentence about how this differs from #selection.
```

10. Optional CLI comparison: If Copilot CLI is installed, open the VS Code integrated terminal and run:

```powershell
copilot --help
```

11. In `copilot-quest-foundations-notes.md`, record one enterprise privacy or IP control your team should enforce by default, such as content exclusions, duplicate detection, retention expectations, or admin policy.
12. Record who owns human review before any generated suggestion is accepted.

**🛡️ Safety checkpoint**: Treat all output as draft, share only safe context, and define the human review gate before accepting any suggestion.

### ✅ Success Criteria

- ✅ Opened VS Code Chat from the Activity Bar or Command Palette
- ✅ Located Chat input, mode picker, `#` picker, Configure Tools, approval controls, or recorded unavailable surfaces
- ✅ Created `copilot-quest-foundations-notes.md`
- ✅ Identified Copilot surfaces and safe beginner tasks
- ✅ Ran scoped Chat requests with `#selection` and `#file` where available
- ✅ Captured one governance control and one human review owner
- ✅ Defined the Copilot Quest starter without creating agent or skill files

## Exercise 2: Stage 2 Guided Workflows — Inline Assistance and Built-in Copilot Experiences

**⏱️ Time**: 8 min
**📋 Objective**: Move between editor assistance, inline chat, VS Code Chat, Ask/Plan/Agent experiences, tool configuration, approval controls, and review controls.

**Warm-up (try this now)**:

```text
Explain what #selection does in GitHub Copilot Chat in one short paragraph.
```

Expected result: Copilot explains that `#selection` limits context to the highlighted code or text.

1. Create or open a scratch file named `copilot-quest-scratch.md` in VS Code Explorer.
2. Type this heading and pause to observe whether inline completion suggests text:

```markdown
# Copilot Quest Starter Ideas
```

3. Accept, reject, or edit the inline completion. Record your choice in `copilot-quest-foundations-notes.md`.
4. Select a short block in `copilot-quest-scratch.md`.
5. Open inline chat from the editor context menu or Command Palette and ask:

```text
Turn this selected note into a three-item checklist.
```

6. Keep the same selected block highlighted and run this scoped Chat request:

```text
Explain how the built-in Ask, Plan, and Agent experiences would handle #selection differently for this change.
```

7. Swap the scope from `#selection` to `#file` and run:

```text
Explain how the built-in Ask, Plan, and Agent experiences would handle #file differently for this change.
```

8. Open the mode or experience picker in Chat and inspect Ask, Plan, Agent, or equivalent choices. Record which choices are available.
9. If Agent mode is available, select **Configure Tools** and keep only low-risk tools for this beginner task, such as repository search and file-reading tools. Leave terminal, web, and external service tools off unless your instructor approves them.
10. Open the permissions or approvals picker. Keep **Default Approvals** for this exercise.
11. If Agent proposes file edits, use the files changed bar above the chat input, inline diff, **Keep**, **Undo**, **Undo All**, or Source Control view before accepting anything. If those controls are unavailable, record where you expected them to appear.
12. Add this comparison table to `copilot-quest-foundations-notes.md`:

```markdown
### Ask / Plan / Agent comparison

| Experience | What I asked | Tools or context enabled | What it returned | Review gate before accepting |
|------------|--------------|--------------------------|------------------|------------------------------|
| Ask | | | | |
| Plan | | | | |
| Agent | | | | |

- Safest experience for low-risk understanding:
- Rule for staying in Ask or Plan:
- Response I rejected or revised because it proposed unclear multi-file edits:
```

13. Capture one rule for when you should stay in Ask or Plan instead of escalating to Agent.

**🛡️ Safety checkpoint**: Higher autonomy requires narrower scope, stronger approval gates, and explicit human review before accepting changes.

### ✅ Success Criteria

- ✅ Used or inspected inline completion for a low-risk note
- ✅ Used inline chat for a bounded selected transformation
- ✅ Compared `#selection` and `#file`
- ✅ Located Ask, Plan, Agent, or recorded unavailable modes
- ✅ Used Configure Tools or the `#` picker to limit context and tools
- ✅ Kept Default Approvals or documented why a broader mode was unavailable or not appropriate
- ✅ Located Keep/Undo, Undo All, Restore Checkpoint, Fork, or Source Control review controls where available
- ✅ Captured one escalation rule for Agent mode

## Exercise 3: Stage 3 Optimization — Tokens, GitHub AI Credits, Usage Visibility, Models, and Context

**⏱️ Time**: 7 min
**📋 Objective**: Find available usage and context signals, compare broad versus scoped prompts, inspect model routing, and document a cost-aware decision.

**Warm-up (try this now)**:

```text
Create a practical usage-check checklist for VS Code Chat: include where to look for Copilot usage or account status, where to inspect model selection, how to compare broad versus scoped context, and when Auto model selection is the lowest-cost first choice.
```

Expected result: Copilot returns concrete usage, model, and context entry points with caveats for environment differences.

1. Add this template to `copilot-quest-foundations-notes.md`:

```markdown
### Usage, context, and model routing

| Check | Where I found it | Evidence captured | Available? |
|-------|------------------|-------------------|------------|
| VS Code Copilot status or account area | | | |
| Usage, credits, or premium request view | | | |
| Model picker | | | |
| Auto model route | | | |
| Context source list or `#` picker | | | |
| Agent Debug Panel or Chat Debug View | | | |
| Monthly account or team usage outside VS Code | | | |

| Prompt scope | Quality signal | Context or token signal | Route selected |
|--------------|----------------|-------------------------|----------------|
| Broad prompt | | | |
| `#file` or `#selection` prompt | | | |

### Context hygiene

- Context rot warning sign:
- Reset, summarize, or re-scope strategy:
- Budget or usage guardrail:
```

2. Ask one broad prompt:

```text
Give me ideas for building Copilot Quest.
```

3. Ask a scoped prompt for the same objective with `#file` or `#selection` where available:

```text
Using only #file, suggest one small next step for the Copilot Quest starter and explain why the context is sufficient.
```

4. Compare the answer quality and review burden between the broad prompt and scoped prompt.
5. Open the VS Code Copilot or GitHub status area. Record any visible usage, account, plan, credit, premium request, or policy information. If unavailable, record "not available in my environment."
6. Open the model picker in Chat. Record the selected model, whether Auto is available, and any visible cost or routing indicators.
7. Use this prompt to convert what you found into a routing rule:

```text
Turn my usage and model observations into one reusable model-routing rule and one cost-savings tip for Copilot Quest.
```

8. If Agent Debug evidence is available, run **Developer: Open Agent Debug Panel** or **Show Agent Debug Logs** from the Command Palette. Record one available signal such as tool calls, requests, Summary, or Agent Flow Chart.
9. If Chat Debug evidence is available, open **Show Chat Debug View** and record what evidence would be useful for troubleshooting. Do not copy secrets or sensitive payloads into your notes.
10. Optional CLI comparison: If Copilot CLI is installed and you are comfortable using it, compare VS Code evidence with:

```text
/usage
```

```text
/context
```

```text
/model
```

11. Record one context-rot warning sign and one reset strategy.
12. Add one budget or usage guardrail, such as "check usage before switching away from Auto" or "reset noisy context before retrying a failing broad prompt."

**🛡️ Safety checkpoint**: Do not optimize cost by skipping tests, validation, security checks, or human review.

### ✅ Success Criteria

- ✅ Compared broad versus scoped context behavior
- ✅ Checked or identified VS Code usage/account visibility
- ✅ Inspected model routing and recorded whether Auto is available
- ✅ Captured one AI-credit-aware or usage-aware routing decision
- ✅ Documented one context reset trigger
- ✅ Recorded one budget or usage guardrail
- ✅ Recorded debug or context evidence where available without copying sensitive payloads

## Exercise 4: Stage 4 Delegation Readiness — Context Windows, Autonomy, and Guardrails

**⏱️ Time**: 7 min
**📋 Objective**: Draft least-privilege guardrails for a future custom agent without creating agent or skill files yet.

In this exercise, you are not building the custom agent yet. You are writing the "rules of the road" that Module 2 will turn into real repo-local artifacts. This preserves the curriculum boundary: Foundations drafts guardrails, while Agentic creates the concrete agent and skill files.

**Warm-up (try this now)**:

```text
Draft a least-privilege guardrail checklist for a future Copilot Quest helper that can only suggest low-risk single-file changes and must stop before dependencies, broad architecture, or unclear multi-file edits.
```

Expected result: Copilot returns purpose, allowed scope, not-allowed scope, approval gate, and escalation off-ramp.

1. Create `copilot-quest-agent-guardrails.md` in VS Code Explorer.
2. Paste this template:

```markdown
# Copilot Quest Agent Guardrails

### Purpose

Help with one low-risk Copilot Quest change at a time.

### Allowed scope

- Suggest one single-file change related to guess feedback, scoring, hints, tests, or documentation.
- Explain the expected diff before any edit is accepted.

### Not allowed

- Do not change dependencies.
- Do not edit multiple files without asking.
- Do not skip tests, validation, or review.
- Do not handle secrets, credentials, regulated data, or customer data.

### Approval gate

- Human owner:
- Review control to use:
- Validation evidence required:

### Stop condition

- Stop if the task needs more than one file.
- Stop if tests fail and the cause is unclear.
- Stop if the request touches dependencies, security, or shared infrastructure.

### Module 2 handoff

- Guidance that should become instructions:
- Stable non-sensitive fact that may become memory:
- Repeated workflow that may become a skill:
- Future custom agent purpose:
```

3. Ask Copilot to tighten the guardrails:

```text
Review this Copilot Quest guardrail note. Tighten it for least privilege, clear approval gates, context-window hygiene, and safe escalation. Do not create agent or skill files.
```

4. Open the Source Control view and review the new notes files.
5. Confirm that this Foundations lab did **not** create agent or skill files.
6. Complete the Module 2 handoff section.
7. Mark the workflow "not ready for delegation" if it lacks an owner, validation evidence, rollback path, or clear stop condition.

**🛡️ Safety checkpoint**: Do not delegate implementation until scope, permissions, validation, review, and rollback are explicit.

### ✅ Success Criteria

- ✅ Created `copilot-quest-agent-guardrails.md`
- ✅ Drafted least-privilege guardrails for a future custom agent
- ✅ Preserved the boundary by completing Foundations without creating agent or skill files
- ✅ Included context-window hygiene and context-rot reset guidance
- ✅ Named a human owner, review gate, validation evidence, and stop condition
- ✅ Captured a Module 2 handoff note for instructions, memory, skill, and future custom agent creation

*Hands-on lab for Module 1: Foundations — GitHub Copilot Developer Training*
