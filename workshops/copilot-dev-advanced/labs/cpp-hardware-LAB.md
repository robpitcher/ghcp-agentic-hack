# Module 3: Advanced Topics — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 3 slides. The slides remain the source of truth; this lab teaches you to orchestrate, govern, debug, and package workflows that use the C++ / Hardware Developer Skill as the domain behavior layer.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. In this module, treat it as the behavior contract that agents, subagents, hooks, and deployment plans must preserve.

## Exercise 1: Orchestration and Trusted Discovery for Firmware Work

**⏱️ Time**: 20 min

**📋 Objective**: Decide when multiagents, subagents, or fleet execution make sense for embedded C++ tasks.

1. List three independent C++ work lanes that could be separated safely.
2. Use this prompt to evaluate orchestration choices through the C++ skill behavior contract.

```text
Use the C++ / Hardware Developer Skill as the behavior contract. For an embedded C++ modernization effort, compare single-agent, subagent, multiagent, and fleet-style execution for these lanes: driver review, unit-test scaffolding, static-analysis triage, and documentation cleanup. Identify ownership, evidence, merge control, validation expectations, and hardware-safety risks.
```

3. Add one trusted discovery action for external skills or examples, including source credibility and license review.
4. Note which parts of the skill every subagent must preserve.

**🛡️ Safety checkpoint**: Do not parallelize tasks that share hardware behavior, register semantics, compiler flags, or timing assumptions without a clear merge owner.

### ✅ Success Criteria

- ✅ Your plan identifies which C++ tasks are independent enough for parallel work.
- ✅ Your plan includes evidence and merge-control expectations.
- ✅ Your plan names the C++ skill behaviors that must survive delegation.
- ✅ Your trusted discovery note includes credibility, licensing, and enterprise-compatibility review.

## Exercise 2: Integration Due Diligence for Embedded Tooling

**⏱️ Time**: 20 min

**📋 Objective**: Build a due-diligence matrix for hooks, extensions, MCP as a concept, API/CLI, and plugins in C++ workflows.

1. Create a table with these rows: hooks, Extension Marketplace, MCP, API/CLI, and plugins.
2. Use this prompt to fill the matrix.

```text
Use the C++ / Hardware Developer Skill as the domain behavior contract. Create a governance matrix for adding Copilot-adjacent tooling to an embedded C++ workflow. Compare hooks, marketplace extensions, MCP as a governed concept, deterministic API/CLI scripts, and plugins. Include permissions, telemetry, data scope, versioning, rollback, approval gates, and how each option preserves the skill's safety gates.
```

3. Add one deterministic API/CLI example that is safer than a custom plugin.

**🛡️ Safety checkpoint**: Plugin and extension enablement can change trust, permissions, telemetry, and data-access boundaries; review provenance before enablement.

### ✅ Success Criteria

- ✅ Your matrix covers all five integration surfaces.
- ✅ Your API/CLI example is deterministic, approved, observable, and scoped.
- ✅ Your matrix explains how integration choices preserve or enforce skill behavior.
- ✅ Your plugin or extension review includes provenance, versioning, rollout, and rollback.

## Exercise 3: Debug, Deploy, and Day 2 Hack Readiness

**⏱️ Time**: 20 min

**📋 Objective**: Prepare a Day 2 C++ hack plan that keeps agent behavior debuggable and deployment-ready.

1. Draft a minimal reproduction prompt for surprising agent behavior.

```text
Create a minimal repro plan for a Copilot agent that changed an embedded C++ helper unexpectedly. Include narrowed context, selected files, the C++ / Hardware Developer Skill behavior that should have applied, tool-call evidence, instruction layers, permission checks, and validation commands.
```

2. Compare deployment paths for your future embedded C++ agent or skill.
3. Create a Day 2 readiness checklist.

```text
Create a Day 2 readiness checklist for an embedded C++ Copilot hack. Include repository setup, instruction files, C++ / Hardware Developer Skill package, custom agent, validation commands, static analysis, hardware or simulator validation, PR review, and rollback plan.
```

**🛡️ Safety checkpoint**: Deployment readiness requires evidence, provenance, permission review, validation, and rollback before a reusable agent or skill is shared broadly.

### ✅ Success Criteria

- ✅ Your minimal repro plan uses narrowed context and evidence from tools, permissions, and instructions.
- ✅ Your deployment comparison names GitHub Repo, Marketplace, and Agent Package Manager paths where relevant.
- ✅ Your deployment plan treats the skill as the reusable behavior package for Copilot.
- ✅ Your Day 2 checklist includes validation, review, and rollback steps.

*Hands-on lab for Module 3 Advanced Topics — C++ / Hardware skill track*
