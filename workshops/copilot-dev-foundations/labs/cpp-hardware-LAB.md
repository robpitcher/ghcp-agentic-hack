# Module 1: Foundations — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 1 slides. The slides remain the source of truth; this lab teaches you to apply the C++ / Hardware Developer Skill so GitHub Copilot uses embedded C++ context, safety gates, and validation expectations while you practice the shared Foundations concepts.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. Treat it as Copilot behavior guidance: it tells GHCP how to inspect build context, use C++ tools, stop for hardware risk, and return evidence.

## Exercise 1: Stage 1 Baseline — Embedded Surfaces and Safety Signals

**⏱️ Time**: 15 min

**📋 Objective**: Map the Copilot surfaces you can use for a firmware or hardware-facing C++ project and identify safety signals before running generated commands.

1. Open an embedded C++ or firmware-style project in VS Code.
2. Create a short note named `cpp-foundations-track-notes.md` and paste this starter table.

```markdown
# C++ Foundations Track Notes

| Surface | Where I found it | C++ use | Tool or context source | Review gate |
| --- | --- | --- | --- | --- |
| VS Code Chat | | | | |
| Inline assistance | | | | |
| Copilot CLI | | | | |
| GitHub.com or browser | | | | |
| Cloud or background agent if available | | | | |
```

3. Open the C++ / Hardware Developer Skill from the workshop page. Read the sections named `Activation Criteria`, `Context and Tool Preferences`, and `Safety Gates`.
4. Open Copilot Chat from the VS Code Activity Bar or Command Palette, then ask Copilot Chat to apply the skill while identifying useful surfaces.

```text
Use the C++ / Hardware Developer Skill. I am working in an embedded C++ project. Identify which Copilot surfaces are useful for understanding this codebase: VS Code chat, inline assistance, Copilot CLI, GitHub.com, and cloud or background agents. For each surface, list one safe use, one tool or context source you would prefer, and one review gate.
```

5. Open the VS Code integrated terminal or another terminal at the repository root. Ask Copilot CLI for a command explanation before running anything that could change the project.

```text
Use the C++ / Hardware Developer Skill output contract. Explain the safest command sequence to inspect this C++ project structure, compiler configuration, and test entry points. Do not run commands that modify files.
```

**🛡️ Safety checkpoint**: Do not run generated install, build, flash, or device commands until you can explain what files, dependencies, devices, or remote systems they touch.

### ✅ Success Criteria

- ✅ Your notes identify at least three Copilot surfaces and a safe embedded C++ use for each.
- ✅ Your notes include one review gate for generated terminal commands.
- ✅ Your notes name at least two C++ skill behaviors Copilot should follow.
- ✅ You captured which commands are read-only and which would need approval before execution.

## Exercise 2: Stage 2 Guided Workflows — Review a Hardware-Facing Helper

**⏱️ Time**: 15 min

**📋 Objective**: Use Ask, Plan, and Agent mode boundaries to review a small hardware-facing C++ helper without handing over unsafe autonomy.

1. Open a small C++ function, driver helper, HAL wrapper, or register access example in VS Code.
2. Select only the function or helper you want reviewed. In Copilot Chat, ask for explanation first, explicitly invoking the C++ skill output contract.

```text
Use the C++ / Hardware Developer Skill. Explain this selected C++ hardware-facing helper. Identify inputs, outputs, hardware assumptions, volatile usage, fixed-width types, and any behavior that should be checked against a datasheet. Return Summary, Context used, Build or hardware assumptions, Findings, Risks and safety gates, Recommended next step, Validation evidence or commands, and Open questions. Do not rewrite the code.
```

3. Keep the same selection and ask for a plan before edits.

```text
Use the C++ / Hardware Developer Skill. Create a safe review plan for improving this helper. Separate issues into correctness, readability, build compatibility, and hardware-validation checks. Do not make code changes.
```

4. Add this Agent-mode decision note to `cpp-foundations-track-notes.md`.

```markdown
### Agent Mode Decision

- Safe Agent mode use:
- Too risky for Agent mode:
- Required validation command or evidence:
- Human reviewer:
```

**🛡️ Safety checkpoint**: Agent mode should not edit hardware-facing code unless scope, validation commands, and human review gates are explicit.

### ✅ Success Criteria

- ✅ Your explanation separates code behavior from hardware or datasheet assumptions.
- ✅ Your plan includes review before edits.
- ✅ Copilot's answer follows the skill output contract closely enough to be auditable.
- ✅ Your notes identify one safe use and one unsafe use of Agent mode for embedded C++.

## Exercise 3: Stage 3 Optimization — Build Context and Model Routing

**⏱️ Time**: 15 min

**📋 Objective**: Reduce noisy prompting by preparing build context and choosing the right model depth for C++ work.

1. Use VS Code Explorer or Search to look for `compile_commands.json`, `CMakeLists.txt`, `Makefile`, or another build configuration.
2. Use the skill's `Context and Tool Preferences` section to identify which discovered file is the best context source for Copilot.
3. Add this build-context note to `cpp-foundations-track-notes.md`.

```markdown
### Build Context

- Build configuration found:
- Best context file or folder:
- Why this helps Copilot:
- Command that is safe to copy into notes:
```

4. If the project uses CMake, copy this command into your notes as the preferred setup command.

```powershell
cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
```

5. Ask Copilot to classify three C++ tasks by model depth.

```text
Use the C++ / Hardware Developer Skill. For an embedded C++ project, classify these tasks as fast/general model, auto mode, or deeper reasoning model: explain a small function, plan modernization of a driver, diagnose a cross-file build failure. Explain the token and context tradeoff for each and name the narrowest useful context source.
```

**🛡️ Safety checkpoint**: Do not broaden context to the whole repository when a selected file, symbol, or build configuration answers the question.

### ✅ Success Criteria

- ✅ Your notes identify the available build context signals.
- ✅ Your notes explain why `compile_commands.json` improves C++ context quality.
- ✅ Your notes connect model choice to the skill's context and validation expectations.
- ✅ Your model-routing notes reserve deeper reasoning for ambiguity-heavy work.

## Exercise 4: Stage 4 Delegation Readiness — Embedded Agent Guardrails

**⏱️ Time**: 15 min

**📋 Objective**: Draft guardrails for future agentic C++ work without creating agent or skill files in this Foundations module.

1. Add this guardrail draft section to `cpp-foundations-track-notes.md`.

```markdown
### Future Embedded Agent Guardrails

- Allowed tasks:
- Disallowed tasks:
- Required approvals:
- Validation commands:
- Hardware-safety stop conditions:
- Evidence the agent must return:
- Human embedded engineer stop conditions:
```

2. Use this prompt to structure it.

```text
Use the C++ / Hardware Developer Skill as the source for domain behavior. Draft guardrails for a future embedded C++ modernization agent. Include allowed tasks, disallowed tasks, required approvals, validation commands, hardware-safety stop conditions, and what evidence the agent must return. Do not create any files.
```

3. Add two stop conditions that would require a human embedded engineer.

**🛡️ Safety checkpoint**: Foundations may draft guardrails, but concrete `.github\skills` or `.github\agents` artifacts belong in the Agentic module.

### ✅ Success Criteria

- ✅ Your draft names allowed and disallowed embedded C++ agent tasks.
- ✅ Your draft includes validation evidence and stop conditions.
- ✅ Your draft reuses the skill's safety gates instead of inventing unrelated C++ rules.
- ✅ You did not create repo-local skill or custom agent files in this module.

*Hands-on lab for Module 1 Foundations — C++ / Hardware skill track*
