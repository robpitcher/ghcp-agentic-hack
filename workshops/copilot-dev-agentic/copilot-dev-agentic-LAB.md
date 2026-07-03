# Module 2: Intermediate (Agentic) — Hands-On Lab

## Overview

This lab extends the **Copilot Quest starter** into a practical Stage 5-6 workflow kit that learners can reuse after class. The exercises mirror the workshop sequence: first separate strong prompts from instructions, memory, and skills while creating a repo-local skill; then create a bounded custom agent and practice tool-control handoffs; finally map background/cloud execution, `/init`, instruction layering, and optimization controls to readiness evidence. Use the Module 1 reusable checklist, prompt asset, and delegation guardrails as starting points.

- **Stage 5**: CLI power-user precision with strong prompts, controlled autonomy, explicit stop conditions, and better Ask/Plan/Agent choices
- **Stage 6**: Multi-agent orchestration with role-based handoffs, tool boundaries, validation evidence, and conflict resolution
- **Stage 6 → 7 bridge**: readiness guardrails that test whether the workflow is auditable, policy-aware, observable, and safe to scale

- **Total time**: ~30 minutes
- **Prerequisites**:
  - Module 1 completion
  - VS Code with GitHub Copilot
  - Local repository with `.github/` folder access

## Exercise 1: Strong Prompt and Stage 5 Skill Creation

**⏱️ Time**: 10 min
**📋 Objective**: Separate a strong prompt from instructions, memory, and a reusable repo-local skill, then choose Ask, Plan, or Agent based on task complexity

**Warm-up (try this now)**:

```text
Classify this guidance into strong-prompt fields, instruction, memory, and skill fields: "For guess validation changes, keep scope small, run the smallest relevant test, stop if tests fail, and ask before changing dependencies."
```

Expected result: you should get Task, Scope, Constraints, Definition of Done, and Off-Ramp fields, plus separate instruction, memory, and skill file candidates.

1. Pick one deterministic coding task in your repo, such as improving guess validation, scoring, feedback messages, or another bounded behavior learners can verify quickly.
2. Write the task first as a strong prompt with these fields: Task, Scope, Constraints, Definition of Done, and Off-Ramp.
3. Classify any durable team rule into instructions, any stable non-sensitive reusable fact into memory, and any repeatable execution pattern into a skill.
4. Create `.github/skills/copilot-quest-guessing/SKILL.md` as the Stage 5 repo-local skill artifact.
5. Add target scope, task, constraints, definition of done, off-ramp, and at least one explicit acceptance gate such as "stop if tests fail" or "ask before changing dependencies."
6. Use the Ask/Plan/Agent decision matrix to choose an execution mode for the task: Ask for low complexity, Plan for medium complexity, or Agent for high complexity with branching evidence.
7. Run the task once using the chosen mode and capture the evidence required by your definition of done.
8. If the task was delegated, compare output quality, review burden, token or tool overhead, and whether delegation actually improved the outcome.
9. Save a short note beside the skill showing what stayed in instructions and memory rather than inside `SKILL.md`.

**🛡️ Safety checkpoint**: Do not place secrets, sensitive data, regulated data, or non-negotiable policy in memory or inside the skill when it should live in instructions.

### ✅ Success Criteria

- ✅ Wrote a strong prompt with Task, Scope, Constraints, Definition of Done, and Off-Ramp
- ✅ Classified the task guidance into instructions, memory, and skill design
- ✅ Created `.github/skills/copilot-quest-guessing/SKILL.md` with explicit trust boundaries
- ✅ Used the Ask/Plan/Agent matrix to justify the execution mode
- ✅ Captured evidence for the definition of done before acceptance
- ✅ Saved a reusable Stage 5 skill asset to the repo-local kit

## Exercise 2: Stage 6 Custom Agent Handoff and Tool-Control Drill

**⏱️ Time**: 10 min
**📋 Objective**: Create a constrained custom agent and orchestrate a two-role workflow with bounded loops, constrained tool use, verifiable handoff contracts, and clear human checkpoints

**Warm-up (try this now)**:

```text
Draft a two-role handoff for implementing guess feedback and verifying edge cases. Name each role, its allowed tools, loop stop condition, output, and evidence required before handoff.
```

Expected result: you should get a simple implementer-to-verifier contract with visible evidence expectations and explicit tool boundaries.

1. Choose a task that can be split into two independent subtasks, such as implementing guess feedback while separately validating test coverage or edge-case handling.
2. Create `.github/agents/copilot-quest-implementer.agent.md` as the implementation role.
3. Add purpose, allowed scope, disallowed scope, allowed tools, required approval before edits, loop stop condition, validation evidence, and escalation behavior to the custom agent.
4. Define a second verifier role as a reviewed handoff prompt or checklist, and be explicit that it inspects evidence rather than broadening implementation scope.
5. Run the workflow and capture one handoff artifact from each role, such as a diff summary, failed-test note, verification checklist, command output, or unresolved-risk list.
6. Resolve one conflict or gap before final synthesis, and record how the team decided which role had authority to proceed.
7. Record the custom agent and handoff contract in the workflow kit so Module 3 can reuse it for orchestration of Copilot Quest.

**🛡️ Safety checkpoint**: Treat tool invocation as a control point. Do not accept implementation output without separate verification evidence.

### ✅ Success Criteria

- ✅ Created `.github/agents/copilot-quest-implementer.agent.md` as one workflow role
- ✅ Created role definitions with explicit handoff contracts
- ✅ Documented allowed tools, constrained parameters, and loop stop conditions
- ✅ Produced at least one validated artifact per role
- ✅ Logged one conflict-resolution decision with rationale
- ✅ Saved a reusable handoff template for later modules

## Exercise 3: Stage 6 to Stage 7 Guardrail Mapping

**⏱️ Time**: 10 min
**📋 Objective**: Evaluate whether your Stage 6 flow is ready for Stage 7 operational scaling and identify the controls needed for background/cloud execution, `/init` scaffolding, instruction layering, and validation cadence

**Warm-up (try this now)**:

```text
Score a Stage 6 handoff for auditability, policy compliance, rollback path, execution mode, and validation cadence. Mark any missing evidence as "not Stage 7 ready."
```

Expected result: you should get a quick readiness snapshot with at least one evidence gap or confirmation point.

1. Use your Exercise 2 workflow as the baseline so the readiness discussion stays grounded in a real handoff pattern rather than a hypothetical one.
2. Decide whether the workflow should remain local and synchronous, move to a background task, or move to a cloud agent. Justify the choice using duration, parallelizability, environment needs, data sensitivity, and review path.
3. Score the workflow against five readiness checks: auditability, policy compliance, rollback path, instruction-layer coverage, and validation cadence.
4. Identify one missing control that would block Stage 7 scaling, such as missing approval gates, weak logging, unclear ownership, broad tool permissions, unclear instruction precedence, or no safe rollback plan.
5. Propose one lightweight guardrail improvement and specify where it should be enforced, for example in organization or repository instructions, tool permissions, hooks, review steps, `/init` scaffolding, or the skill file.
6. Add a short note describing how Module 3 should interpret this workflow when it becomes an orchestration package for Copilot Quest, including what must remain human-approved before broader rollout.

**🛡️ Safety checkpoint**: If readiness evidence is incomplete, mark the workflow as "not Stage 7 ready" and do not scale it to background or cloud execution.

### ✅ Success Criteria

- ✅ Completed a readiness score across all five checks
- ✅ Chose local, background, or cloud execution with a clear rationale
- ✅ Identified at least one blocking control gap
- ✅ Proposed one concrete guardrail location to close the gap
- ✅ Captured a handoff note for the orchestration/deployment module

*Hands-on lab for Module 2: Intermediate (Agentic) — GitHub Copilot Developer Training*
