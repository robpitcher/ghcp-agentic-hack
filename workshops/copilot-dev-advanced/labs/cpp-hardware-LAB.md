# Module 3: Advanced Topics — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 3 slides. The slides remain the source of truth; this lab teaches you to orchestrate, govern, debug, and package workflows that use the C++ / Hardware Developer Skill as the domain behavior layer.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. In this module, treat it as the behavior contract that agents, subagents, hooks, and deployment plans must preserve.

## Exercise 1: Orchestration and Trusted Discovery for Firmware Work

**⏱️ Time**: 20 min

**📋 Objective**: Decide when multiagents, subagents, or fleet execution make sense for embedded C++ tasks.

1. Create a notes file named `embedded-cpp-orchestration-package.md`, or add the template below to your existing project notes.

```markdown
# Embedded C++ Orchestration Package

### Page 1: Orchestration and Trusted Discovery

### Work Lanes

| Lane | Independent? | Shared hardware or code risk | Validation evidence | Owner |
| --- | --- | --- | --- | --- |
| Driver review | Yes/No | | | |
| Unit-test scaffolding | Yes/No | | | |
| Static-analysis triage | Yes/No | | | |
| Documentation cleanup | Yes/No | | | |

### Orchestration Choice

- Selected pattern: Single-agent / Subagent / Multiagent / Fleet-style execution
- Why this pattern fits:
- Merge owner:
- Hardware-safety risk:

### Trusted Discovery

- External skill or example reviewed:
- Source credibility:
- License review:
- Enterprise compatibility:
- Reuse decision:

### Required Skill Behaviors

- Behavior every agent or subagent must preserve:
```

2. Fill the Work Lanes table with three independent C++ work lanes that could be separated safely.
3. Use this prompt to evaluate orchestration choices through the C++ skill behavior contract, then complete the Orchestration Choice section.

```text
Use the C++ / Hardware Developer Skill as the behavior contract. For an embedded C++ modernization effort, compare single-agent, subagent, multiagent, and fleet-style execution for these lanes: driver review, unit-test scaffolding, static-analysis triage, and documentation cleanup. Identify ownership, evidence, merge control, validation expectations, and hardware-safety risks.
```

4. Add one trusted discovery action for external skills or examples, including source credibility and license review.
5. Complete the Required Skill Behaviors section with the parts of the C++ skill every subagent must preserve.

**🛡️ Safety checkpoint**: Do not parallelize tasks that share hardware behavior, register semantics, compiler flags, or timing assumptions without a clear merge owner.

### ✅ Success Criteria

- ✅ Your plan identifies which C++ tasks are independent enough for parallel work.
- ✅ Your plan includes evidence and merge-control expectations.
- ✅ Your plan names the C++ skill behaviors that must survive delegation.
- ✅ Your trusted discovery note includes credibility, licensing, and enterprise-compatibility review.

## Exercise 2: Integration Due Diligence for Embedded Tooling

**⏱️ Time**: 20 min

**📋 Objective**: Build a due-diligence matrix for hooks, extensions, MCP as a concept, API/CLI, and plugins in C++ workflows.

1. Add this section to `embedded-cpp-orchestration-package.md` as `Page 2: Integration Due Diligence`.

```markdown
### Page 2: Integration Due Diligence

| Surface | Permissions | Telemetry | Data scope | Versioning | Rollback | Approval gate | Preserves skill safety gates? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hooks | | | | | | | |
| Extension Marketplace | | | | | | | |
| MCP | Conceptual only: tool/context boundary and security review | | | | | | |
| API/CLI | | | | | | | |
| Plugins | | | | | | | |

### Deterministic API/CLI Example

- Command or endpoint:
- Why it is safer than a custom plugin:
- Inputs:
- Outputs:
- Approval or logging requirement:
```

2. Use this prompt to fill the matrix.

```text
Use the C++ / Hardware Developer Skill as the domain behavior contract. Create a governance matrix for adding Copilot-adjacent tooling to an embedded C++ workflow. Compare hooks, marketplace extensions, MCP as a governed concept, deterministic API/CLI scripts, and plugins. Include permissions, telemetry, data scope, versioning, rollback, approval gates, and how each option preserves the skill's safety gates.
```

3. Add one deterministic API/CLI example that is safer than a custom plugin by completing the Deterministic API/CLI Example section.

**🛡️ Safety checkpoint**: Plugin and extension enablement can change trust, permissions, telemetry, and data-access boundaries; review provenance before enablement.

### ✅ Success Criteria

- ✅ Your matrix covers all five integration surfaces.
- ✅ Your API/CLI example is deterministic, approved, observable, and scoped.
- ✅ Your matrix explains how integration choices preserve or enforce skill behavior.
- ✅ Your plugin or extension review includes provenance, versioning, rollout, and rollback.

## Exercise 3: Debug, Deploy, and Day 2 Hack Readiness

**⏱️ Time**: 20 min

**📋 Objective**: Prepare a Day 2 C++ hack plan that keeps agent behavior debuggable and deployment-ready.

1. Add this section to `embedded-cpp-orchestration-package.md` as `Page 3: Debug, Deploy, and Day 2 Readiness`.

```markdown
### Page 3: Debug, Deploy, and Day 2 Readiness

### Minimal Repro Plan

- Surprising agent behavior:
- Narrowed files or context:
- Expected C++ skill behavior:
- Actual behavior:
- Tool-call evidence:
- Instruction layers to inspect:
- Permission checks:
- Validation commands:

### Deployment Path Comparison

| Path | Audience | Governance fit | Provenance review | Rollback plan | Decision |
| --- | --- | --- | --- | --- | --- |
| GitHub Repo | | | | | |
| Marketplace | | | | | |
| Agent Package Manager | | | | | |

### Day 2 Readiness Checklist

- Repository setup:
- Instruction files:
- C++ / Hardware Developer Skill package:
- Custom agent:
- Validation commands:
- Static analysis:
- Hardware or simulator validation:
- PR review:
- Rollback plan:
```

2. Draft a minimal reproduction prompt for surprising agent behavior.

```text
Create a minimal repro plan for a Copilot agent that changed an embedded C++ helper unexpectedly. Include narrowed context, selected files, the C++ / Hardware Developer Skill behavior that should have applied, tool-call evidence, instruction layers, permission checks, and validation commands.
```

3. Compare deployment paths for your future embedded C++ agent or skill by filling the Deployment Path Comparison table.
4. Create a Day 2 readiness checklist.

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
