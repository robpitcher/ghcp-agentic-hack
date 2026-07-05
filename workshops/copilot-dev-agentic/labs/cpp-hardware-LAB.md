# Module 2: Agentic Patterns — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 2 slides. The slides remain the source of truth; this lab teaches you to create and govern agentic artifacts that make GitHub Copilot follow C++ / Hardware Developer Skill behavior.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. Treat it as the model for what a domain skill should do: instruct Copilot about tools, context, constraints, safety gates, validation, and output expectations.

## Exercise 1: Strong Prompt and Embedded Skill Creation

**⏱️ Time**: 20 min

**📋 Objective**: Create a repo-local skill package that instructs Copilot how to behave for recurring embedded C++ review work.

1. Create a draft folder path in your project notes for the skill artifact.

```text
.github/skills/embedded-cpp-review/SKILL.md
```

2. Use a strong prompt to generate the skill content as a Copilot behavior package, not a lab.

```text
Create a repo-local Copilot skill for embedded C++ review. Write it as Copilot-facing behavior instructions, not a participant lab. Include activation criteria, preferred tools and context, fixed-width integer rules, volatile/register review checks, dynamic allocation restrictions, safety gates, output contract, validation evidence, and stop conditions. Keep it focused on review and planning before edits.
```

3. Compare the generated draft to the downloaded C++ / Hardware Developer Skill.
4. Review the result and tighten any unsafe language that implies generated low-level code can be trusted without build, static analysis, or hardware validation.

**🛡️ Safety checkpoint**: Do not store secrets, board credentials, customer identifiers, or proprietary datasheet excerpts in memory or skill files.

### ✅ Success Criteria

- ✅ Your skill draft includes task, scope, constraints, definition of done, and off-ramp language.
- ✅ Your skill draft tells Copilot how to behave rather than walking the participant through a lab.
- ✅ Your draft includes embedded C++ safety rules and validation evidence.
- ✅ Your draft avoids sensitive memory content and unsafe autonomy claims.

## Exercise 2: Custom Agent Handoff and Tool-Control Drill

**⏱️ Time**: 20 min

**📋 Objective**: Draft a custom agent handoff for embedded C++ modernization with explicit tool and approval boundaries.

1. Create a draft path in your project notes for the agent artifact.

```text
.github/agents/embedded-cpp-modernizer.agent.md
```

2. Ask Copilot to draft the custom agent handoff.

```text
Use the C++ / Hardware Developer Skill as the domain behavior source. Draft a custom agent definition for embedded C++ modernization. It may inspect files, propose plans, and run approved build or test commands. It must not flash hardware, change compiler flags, modify register behavior, or edit production code without explicit approval. Include required evidence and stop conditions.
```

3. Mark each possible tool use as low, medium, or high risk.

**🛡️ Safety checkpoint**: Treat terminal, dependency, flashing, and remote-device commands as tool-control points that require approval and visible evidence.

### ✅ Success Criteria

- ✅ Your agent draft separates planning, editing, validation, and hardware actions.
- ✅ Your tool-risk map identifies at least one high-risk hardware action.
- ✅ Your agent draft references skill behavior instead of embedding a separate C++ tutorial.
- ✅ Your draft requires human approval before edits with hardware or build impact.

## Exercise 3: Background and Cloud Readiness for C++ Validation

**⏱️ Time**: 15 min

**📋 Objective**: Decide when background or cloud agents are appropriate for C++ validation work.

1. Review three candidate tasks.

```text
Use the C++ / Hardware Developer Skill. Classify these embedded C++ tasks as Ask, Plan, Agent, background agent, or cloud agent: explain a GPIO helper, plan a driver modernization, run a long static-analysis matrix, update a register map from a datasheet, and triage independent compiler warnings. Explain the permission boundary, context source, and validation evidence for each.
```

2. Write a handoff checklist for a long-running C++ validation task.
3. Include the setup context that `/init` or repository instructions should capture.

**🛡️ Safety checkpoint**: Use background or cloud execution only when work is long-running or parallelizable and the environment has the right tools, permissions, and review path.

### ✅ Success Criteria

- ✅ Your classification uses the lightest effective mode for each task.
- ✅ Your checklist includes setup, permissions, validation commands, and review evidence.
- ✅ Your checklist explains how the C++ skill guides agent behavior.
- ✅ Your notes explain how `/init` or instructions reduce repeated setup prompting.

*Hands-on lab for Module 2 Agentic Patterns — C++ / Hardware skill track*
