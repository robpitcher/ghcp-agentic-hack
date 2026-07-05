# Module 2: Agentic Patterns — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 2 slides. The slides remain the source of truth; this lab teaches you to create and govern agentic artifacts that make GitHub Copilot follow C++ / Hardware Developer Skill behavior.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. Treat it as the model for what a domain skill should do: instruct Copilot about tools, context, constraints, safety gates, validation, and output expectations.

## Exercise 1: Strong Prompt and Embedded Skill Creation

**⏱️ Time**: 20 min

**📋 Objective**: Create a repo-local skill package that instructs Copilot how to behave for recurring embedded C++ review work.

1. Open VS Code Chat or Copilot CLI in the embedded C++ repository. If you use VS Code, open Chat from the Activity Bar or Command Palette; if you use Copilot CLI, open a terminal at the repository root and start interactive mode with `copilot`.
2. In VS Code, open Chat, select the Configure gear in the Chat view header, and review Agent Customizations > **Skills**. Record whether you see built-in, extension-provided, or workspace skills.
3. Use this default embedded C++ scenario for this exercise. If your project does not have an exact GPIO helper, apply the same review pattern to a small hardware-facing HAL wrapper, register accessor, or driver helper.

```text
Review a small GPIO/register helper for fixed-width integer use, volatile/register access assumptions, hardware side effects, dynamic allocation risk, validation evidence, and human-review stop conditions. Keep the work focused on review and planning before edits.
```
4. Create the skill folder and file. In VS Code, you can use Agent Customizations > Skills as an orientation surface, then create the repo-local file in Explorer. You can right-click the Explorer and create folders manually, or run:

```powershell
New-Item -ItemType Directory -Force -Path .github\skills\embedded-cpp-review
New-Item -ItemType File -Force -Path .github\skills\embedded-cpp-review\SKILL.md
```

If you cannot write to the repo during class, create the same path in your project notes and label it as a draft:

```text
.github/skills/embedded-cpp-review/SKILL.md
```

5. Use this strong prompt to generate content for `.github/skills/embedded-cpp-review/SKILL.md` as a Copilot behavior package, not a lab. If your VS Code version exposes `/create-skill`, you may use it as a drafting shortcut, but still save and review the final repo-local skill at `.github\skills\embedded-cpp-review\SKILL.md`. Paste the result into the file or into your project-notes draft.

```text
Create a repo-local Copilot skill for reviewing a small embedded C++ GPIO/register helper. Write it as Copilot-facing behavior instructions, not a participant lab. Include activation criteria, preferred tools and context, fixed-width integer rules, volatile/register review checks, dynamic allocation restrictions, hardware side-effect safety gates, output contract, validation evidence, and stop conditions. Keep it focused on review and planning before edits.
```

6. Compare the generated draft to the downloaded C++ / Hardware Developer Skill using this checklist.

```markdown
# Embedded C++ Skill Review Checklist

- Activation criteria are clear.
- Scope is limited to embedded C++ review and planning.
- Fixed-width integer, volatile/register, dynamic allocation, and memory-safety rules are present.
- The skill requires build, static-analysis, simulator, or hardware validation evidence.
- The skill asks before changing compiler flags, hardware behavior, or dependencies.
- The skill does not include secrets, board credentials, customer identifiers, or proprietary datasheet excerpts.
```

7. Edit the draft to tighten any unsafe language that implies generated low-level code can be trusted without build, static analysis, simulator, or hardware validation.

**🛡️ Safety checkpoint**: Do not store secrets, board credentials, customer identifiers, or proprietary datasheet excerpts in memory or skill files.

### ✅ Success Criteria

- ✅ Your skill draft includes task, scope, constraints, definition of done, and off-ramp language.
- ✅ Your skill draft uses the provided embedded GPIO/register helper review scenario rather than Copilot Quest.
- ✅ Your skill draft tells Copilot how to behave rather than walking the participant through a lab.
- ✅ Your draft includes embedded C++ safety rules and validation evidence.
- ✅ Your draft avoids sensitive memory content and unsafe autonomy claims.

## Exercise 2: Custom Agent Handoff and Tool-Control Drill

**⏱️ Time**: 20 min

**📋 Objective**: Draft a custom agent handoff for embedded C++ modernization with explicit tool and approval boundaries.

1. Open VS Code Chat or Copilot CLI and keep the C++ / Hardware Developer Skill visible in a browser tab or editor pane.
2. In VS Code, open Chat, select the Configure gear, and review Agent Customizations > **Agents**. Notice built-in and custom agents, then return to the repository file you will create.
3. Create the agent folder and file. In VS Code, you can right-click the Explorer and create folders manually, or run:

```powershell
New-Item -ItemType Directory -Force -Path .github\agents
New-Item -ItemType File -Force -Path .github\agents\embedded-cpp-modernizer.agent.md
```

If you cannot write to the repo during class, create the same path in your project notes and label it as a draft:

```text
.github/agents/embedded-cpp-modernizer.agent.md
```

4. Ask Copilot to draft `.github/agents/embedded-cpp-modernizer.agent.md`.

```text
Use the C++ / Hardware Developer Skill as the domain behavior source. Draft a custom agent definition for embedded C++ modernization. It may inspect files, propose plans, and run approved build or test commands. It must not flash hardware, change compiler flags, modify register behavior, or edit production code without explicit approval. Include required evidence and stop conditions.
```

5. Select the custom agent from the Chat agent dropdown or reference it directly in chat if your VS Code version shows the new agent. Use **Configure Tools** to confirm it has only the tools needed for planning, reading files, approved edits, and approved validation.
6. Add this tool-risk map below the draft and mark each possible tool use as low, medium, or high risk.

```markdown
# Embedded C++ Tool-Risk Map

| Tool or action | Risk | Approval required? | Evidence required |
| --- | --- | --- | --- |
| Read source files | Low | No | Files inspected |
| Propose modernization plan | Low | No | Plan summary |
| Edit C++ source | Medium | Yes | Diff summary and tests |
| Run build or unit tests | Medium | Yes | Command and output |
| Change compiler flags | High | Yes | Owner approval and rollback |
| Flash hardware or use remote device | High | Yes | Hardware owner approval and run log |
```

**🛡️ Safety checkpoint**: Treat terminal, dependency, flashing, and remote-device commands as tool-control points that require approval and visible evidence.

### ✅ Success Criteria

- ✅ Your agent draft separates planning, editing, validation, and hardware actions.
- ✅ You located the custom agent in Agent Customizations or the Chat agent dropdown where available.
- ✅ You checked the agent tool boundary with Configure Tools before using it.
- ✅ Your tool-risk map identifies at least one high-risk hardware action.
- ✅ Your agent draft references skill behavior instead of embedding a separate C++ tutorial.
- ✅ Your draft requires human approval before edits with hardware or build impact.

## Exercise 3: Background and Cloud Readiness for C++ Validation

**⏱️ Time**: 15 min

**📋 Objective**: Decide when background or cloud agents are appropriate for C++ validation work.

1. Review the candidate tasks in this prompt and classify each one.

```text
Use the C++ / Hardware Developer Skill. Classify these embedded C++ tasks as Ask, Plan, Agent, background agent, or cloud agent: explain a GPIO helper, plan a driver modernization, run a long static-analysis matrix, update a register map from a datasheet, and triage independent compiler warnings. Explain the permission boundary, context source, and validation evidence for each.
```

2. In VS Code, open the Agent Sessions sidebar from the Activity Bar or select **Show Agent Sessions Sidebar** at the top of Chat. Record whether your current local session appears there and whether it shows pending file changes.
3. Open the agent type or session type picker in the chat input. Compare **Local**, Copilot CLI/background, and **Cloud** options where available. If an option is not available, write "not available in my environment."
4. Write the handoff checklist below for one long-running C++ validation task, such as a static-analysis matrix or compiler-warning triage.

```markdown
# Long-Running C++ Validation Handoff

- Task:
- Recommended mode: Background agent / Cloud agent
- Why this mode fits:
- Required setup:
- Approved commands:
- Required permissions:
- Files or directories in scope:
- Files or actions out of scope:
- Validation evidence required:
- Review owner:
- Stop conditions:
```

5. Add this `/init` or repository-instructions setup context below the checklist.

```markdown
# Setup Context to Capture

- Build system:
- Test command:
- Static-analysis command:
- Supported compiler or toolchain:
- Hardware, simulator, or mock requirement:
- Secrets or credentials that must not be shared:
- Review and rollback expectations:
```

**🛡️ Safety checkpoint**: Use background or cloud execution only when work is long-running or parallelizable and the environment has the right tools, permissions, and review path.

### ✅ Success Criteria

- ✅ Your classification uses the lightest effective mode for each task.
- ✅ Your notes identify where Agent Sessions and the agent/session type picker appear in VS Code where available.
- ✅ Your checklist includes setup, permissions, validation commands, and review evidence.
- ✅ Your checklist explains how the C++ skill guides agent behavior.
- ✅ Your notes explain how `/init` or instructions reduce repeated setup prompting.

*Hands-on lab for Module 2 Agentic Patterns — C++ / Hardware skill track*
