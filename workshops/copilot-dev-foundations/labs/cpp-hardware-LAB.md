# Module 1: Foundations — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 1 slides. The slides remain the source of truth; this lab adapts the practice work to embedded C++ projects, hardware-facing code review, usage optimization, and delegation guardrails.

Before starting, review the C++ / Hardware Developer Skill from the workshop page.

## Exercise 1: Stage 1 Baseline — Embedded Surfaces and Safety Signals

**⏱️ Time**: 15 min

**📋 Objective**: Map the Copilot surfaces you can use for a firmware or hardware-facing C++ project and identify safety signals before running generated commands.

1. Open an embedded C++ or firmware-style project in VS Code.
2. Create a short note named `cpp-foundations-track-notes.md`.
3. Ask Copilot Chat to identify which surfaces are useful for this project.

```text
I am working in an embedded C++ project. Identify which Copilot surfaces are useful for understanding this codebase: VS Code chat, inline assistance, Copilot CLI, GitHub.com, and cloud or background agents. For each surface, list one safe use and one review gate.
```

4. Ask Copilot CLI for a command explanation before running anything that could change the project.

```text
Explain the safest command sequence to inspect this C++ project structure, compiler configuration, and test entry points. Do not run commands that modify files.
```

**🛡️ Safety checkpoint**: Do not run generated install, build, flash, or device commands until you can explain what files, dependencies, devices, or remote systems they touch.

### ✅ Success Criteria

- ✅ Your notes identify at least three Copilot surfaces and a safe embedded C++ use for each.
- ✅ Your notes include one review gate for generated terminal commands.
- ✅ You captured which commands are read-only and which would need approval before execution.

## Exercise 2: Stage 2 Guided Workflows — Review a Hardware-Facing Helper

**⏱️ Time**: 15 min

**📋 Objective**: Use Ask, Plan, and Agent mode boundaries to review a small hardware-facing C++ helper without handing over unsafe autonomy.

1. Select a small C++ function, driver helper, HAL wrapper, or register access example.
2. Ask for explanation first.

```text
Explain this selected C++ hardware-facing helper. Identify inputs, outputs, hardware assumptions, volatile usage, fixed-width types, and any behavior that should be checked against a datasheet. Do not rewrite the code.
```

3. Ask for a plan before edits.

```text
Create a safe review plan for improving this helper. Separate issues into correctness, readability, build compatibility, and hardware-validation checks. Do not make code changes.
```

4. Add a note that describes when Agent mode would be acceptable and when it would be too risky.

**🛡️ Safety checkpoint**: Agent mode should not edit hardware-facing code unless scope, validation commands, and human review gates are explicit.

### ✅ Success Criteria

- ✅ Your explanation separates code behavior from hardware or datasheet assumptions.
- ✅ Your plan includes review before edits.
- ✅ Your notes identify one safe use and one unsafe use of Agent mode for embedded C++.

## Exercise 3: Stage 3 Optimization — Build Context and Model Routing

**⏱️ Time**: 15 min

**📋 Objective**: Reduce noisy prompting by preparing build context and choosing the right model depth for C++ work.

1. Identify whether the project has `compile_commands.json`, CMake files, or another build configuration.
2. If the project uses CMake, copy this command into your notes as the preferred setup command.

```powershell
cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
```

3. Ask Copilot to classify three C++ tasks by model depth.

```text
For an embedded C++ project, classify these tasks as fast/general model, auto mode, or deeper reasoning model: explain a small function, plan modernization of a driver, diagnose a cross-file build failure. Explain the token and context tradeoff for each.
```

**🛡️ Safety checkpoint**: Do not broaden context to the whole repository when a selected file, symbol, or build configuration answers the question.

### ✅ Success Criteria

- ✅ Your notes identify the available build context signals.
- ✅ Your notes explain why `compile_commands.json` improves C++ context quality.
- ✅ Your model-routing notes reserve deeper reasoning for ambiguity-heavy work.

## Exercise 4: Stage 4 Delegation Readiness — Embedded Agent Guardrails

**⏱️ Time**: 15 min

**📋 Objective**: Draft guardrails for future agentic C++ work without creating agent or skill files in this Foundations module.

1. Create a guardrail draft in your notes.
2. Use this prompt to structure it.

```text
Draft guardrails for a future embedded C++ modernization agent. Include allowed tasks, disallowed tasks, required approvals, validation commands, hardware-safety stop conditions, and what evidence the agent must return. Do not create any files.
```

3. Add two stop conditions that would require a human embedded engineer.

**🛡️ Safety checkpoint**: Foundations may draft guardrails, but concrete `.github\skills` or `.github\agents` artifacts belong in the Agentic module.

### ✅ Success Criteria

- ✅ Your draft names allowed and disallowed embedded C++ agent tasks.
- ✅ Your draft includes validation evidence and stop conditions.
- ✅ You did not create repo-local skill or custom agent files in this module.

*Hands-on lab for Module 1 Foundations — C++ / Hardware skill track*
