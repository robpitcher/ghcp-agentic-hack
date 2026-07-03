# Module 3: Advanced Content Refresh (Stage 7-8) — Hands-On Lab

## Overview

This lab extends the **Copilot Quest** Stage 5-6 Workflow Kit into the **Orchestration Package**. Exercises now mirror the Advanced module order: orchestration and trusted discovery, governed integration surfaces, then debugging, deployment, and Day 2 readiness.

- **Total time**: ~30 minutes
- **Prerequisites**:
  - Completion of Modules 1 and 2
  - Access to a project suitable for advanced experimentation
  - Permission to test approved integrations only

## Exercise 1: Stage 7 Orchestration and Discovery Plan

**⏱️ Time**: 10 min
**📋 Objective**: Choose between multiagents, subagents, and fleet-style execution while adding a trusted-discovery review step

**Warm-up (try this now)**:

```text
For a Copilot Quest scoreboard scenario, decide whether one agent, subagents, multiagents, or fleet-style execution is appropriate. Name the owner, boundaries, review evidence, and one merge-control rule.
```

Expected result: You have a safe orchestration choice before designing the full package.

1. Choose one medium-scope scenario that could realistically extend Copilot Quest, such as hints, daily puzzle mode, or a scoreboard.
2. Decide whether the work should use one agent, subagents, multiagents, or fleet-style parallel execution.
3. If you choose subagents or multiagents, define scoped prompts, minimal permissions, expected outputs, and audit evidence for each delegated role.
4. If you choose fleet-style execution, prove the tasks are independent and explain why parallelism saves net time or AICs.
5. Add one quick-look resource from Brady Gaster's Squad or the Awesome Copilot skills catalog as discovery input, then document credibility and enterprise-compatibility checks before reuse.
6. Save the result as the first page of your Copilot Quest orchestration package.

**🛡️ Safety checkpoint**: Assign ownership for final merge decisions, preserve human approval before side-effecting actions, and treat curated resources as review inputs rather than automatic approvals.

### ✅ Success Criteria

- ✅ Chose one safe orchestration pattern with rationale
- ✅ Defined ownership, boundaries, output expectations, and merge controls
- ✅ Identified when fleet-style parallelism is or is not justified
- ✅ Added a resource-vetting step for Squad or the Awesome Copilot skills catalog
- ✅ Captured the scenario as an orchestration-package artifact

## Exercise 2: Stage 7 Integration Due-Diligence Matrix

**⏱️ Time**: 10 min
**📋 Objective**: Compare hooks, Extension Marketplace, MCP, API/CLI, and plugins for one bounded scenario

**Warm-up (try this now)**:

```text
For a bounded Copilot Quest task, compare hooks, Extension Marketplace, MCP, API/CLI, and plugins. Recommend the simplest safe integration surface based on permissions, observability, data scope, enterprise review, and rollback.
```

Expected result: You have a conceptual integration recommendation without configuring any real server, extension, or plugin.

1. Pick one bounded task, such as fetching a word list, updating the scoreboard, or validating a generated answer.
2. Fill a five-row matrix for hooks, Extension Marketplace, MCP, API/CLI, and plugins.
3. For each row, document permissions, data scope, observability, provenance or publisher trust, validation path, and rollback option.
4. Keep MCP conceptual: describe tool/context boundaries and security review needs without configuring a specific server.
5. Choose the simplest safe surface and explain why the other options add unnecessary risk or overhead.
6. Add one enforceable hook/checkpoint your team would require before accepting changes.

**🛡️ Safety checkpoint**: Use only approved tools/endpoints, avoid sensitive data in prompts/logs, and document trust boundaries before enabling extensions, plugins, or MCP servers.

### ✅ Success Criteria

- ✅ Compared all five integration surfaces in the required order
- ✅ Included marketplace publisher trust and plugin supply-chain checks
- ✅ Described MCP as a governed concept without a server walkthrough
- ✅ Selected the simplest safe surface with rationale
- ✅ Defined one enforceable hook/checkpoint tied to acceptance or release approval

## Exercise 3: Stage 8 Debug, Deploy, and Day 2 Hack Plan

**⏱️ Time**: 10 min
**📋 Objective**: Produce a Stage 8 package covering minimal debugging, deployment path choice, and Day 2 hack execution

**Warm-up (try this now)**:

```text
Write a five-item Day 2 go/no-go gate: minimal repro status, permissions, tests, rollback, and owner sign-off.
```

Expected result: You have a lightweight readiness checklist to expand into the full decision package.

1. Simulate one failed chat or agent run and write the smallest safe repro prompt that narrows context, tool-call order, permissions, or instruction conflicts.
2. Draft a deploy checklist for a custom agent package: capabilities, permissions, provenance, tests, version owner, rollback, and support expectations.
3. Choose one distribution or packaging path — GitHub Repo, Marketplace, or Agent Package Manager (APM) — and justify why it fits the audience and governance model.
4. Build a Day 2 hack proposal with:

   - One core objective
   - One explicit non-goal
   - One model or agent strategy
   - One success criterion
   - One fallback if integration fails

5. Treat the result as the deployable capstone for the full Copilot Quest build.

**🛡️ Safety checkpoint**: No deployment or demo without documented permissions, provenance checks, governance sign-off, and rollback plan.

### ✅ Success Criteria

- ✅ Produced a minimal debug protocol with narrowed context
- ✅ Included GitHub Repo, Marketplace, or Agent Package Manager (APM) as the selected distribution or packaging pathway
- ✅ Delivered a scoped Day 2 plan with model strategy, fallback, and release gate
- ✅ Produced a capstone artifact that closes the module sequence

*Hands-on lab for Module 3: Advanced Content Refresh (Stage 7-8) — GitHub Copilot Developer Training*
