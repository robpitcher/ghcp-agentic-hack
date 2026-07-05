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
4. Create the skill folder and file. In VS Code, you can right-click the Explorer and create folders manually, or run:

```powershell
New-Item -ItemType Directory -Force -Path .github\skills\copilot-quest-guessing
New-Item -ItemType File -Force -Path .github\skills\copilot-quest-guessing\SKILL.md
```

5. Paste this starter template into `.github/skills/copilot-quest-guessing/SKILL.md`.

```markdown
# Copilot Quest Guessing Skill

Use this skill when changing guess validation, scoring, feedback messages, or guess-related tests in the Copilot Quest starter.

### Scope

- Work only on guess-related code, tests, and messages unless the user approves broader changes.
- Prefer the smallest safe edit that satisfies the requested behavior.
- Do not change dependencies, project structure, or unrelated game mechanics without asking first.

### Required Workflow

1. Restate the requested guess behavior.
2. Identify the files or functions likely involved.
3. Propose the smallest change before editing.
4. Run the smallest relevant validation after edits.
5. Stop and report evidence if validation fails.

### Definition of Done

- The requested guess behavior is implemented.
- Existing behavior outside guess handling is unchanged.
- Relevant tests or manual checks pass.
- The final response includes files changed, validation evidence, and any remaining risks.

### Stop Conditions

- Stop if tests fail and the cause is unclear.
- Ask before changing dependencies or broad architecture.
- Ask before editing unrelated scoring, UI, or persistence behavior.
```

6. Ask Copilot to improve the draft while keeping it a skill, not a lab:

```text
Review this SKILL.md draft as a repo-local Copilot skill. Make it beginner-friendly, focused on guess validation work, and explicit about scope, constraints, definition of done, stop conditions, and acceptance gates. Do not add secrets, private data, or broad tool permissions.
```

7. Review the result. Confirm it includes target scope, task, constraints, definition of done, off-ramp, and at least one explicit acceptance gate such as "stop if tests fail" or "ask before changing dependencies."
8. Use the Ask/Plan/Agent decision matrix to choose an execution mode for the task: Ask for low complexity, Plan for medium complexity, or Agent for high complexity with branching evidence.
9. Run the task once using the chosen mode and capture the evidence required by your definition of done.
10. Create `.github/skills/copilot-quest-guessing/notes.md` and paste this review note template.

```markdown
# Copilot Quest Guessing Skill Notes

- Execution mode used: Ask / Plan / Agent
- Validation evidence captured:
- If delegated, did delegation improve output quality? Yes/No
- Review burden:
- Token or tool overhead:
- Guidance kept in instructions instead of `SKILL.md`:
- Stable non-sensitive fact kept in memory instead of `SKILL.md`:
- Repeatable behavior kept in `SKILL.md`:
```

11. Complete the note so it shows what stayed in instructions and memory rather than inside `SKILL.md`.

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
2. Create the custom agent folder and file. In VS Code, you can right-click the Explorer and create folders manually, or run:

```powershell
New-Item -ItemType Directory -Force -Path .github\agents
New-Item -ItemType File -Force -Path .github\agents\copilot-quest-implementer.agent.md
```

3. Paste this starter definition into `.github/agents/copilot-quest-implementer.agent.md`, then customize the task names for your repo.

```markdown
# Copilot Quest Implementer Agent

### Purpose

Implement small, approved Copilot Quest behavior changes after the human reviewer confirms the task scope.

### Allowed Scope

- Guess feedback behavior
- Guess-related tests
- Small documentation notes for the changed behavior

### Disallowed Scope

- Dependency changes
- Broad architecture changes
- Unrelated scoring, persistence, or UI changes

### Allowed Tools

- Read files
- Propose plans
- Edit files after approval
- Run approved test or build commands

### Approval Gate

Ask before editing files, changing dependencies, or running commands that write outside the repository.

### Stop Condition

Stop after one failed validation attempt if the cause is unclear, then report the failure evidence.

### Required Output

- Files changed
- Tests or checks run
- Evidence from each check
- Unresolved risks or follow-up questions
```

4. Define a second verifier role in your notes with this checklist.

```markdown
# Copilot Quest Verifier Handoff

- Implementation scope stayed within the approved task.
- Evidence includes the command or manual check that was run.
- Failed tests or unresolved risks are listed before acceptance.
- No dependency, architecture, or unrelated behavior changes were made.
- The verifier recommends accept, revise, or stop.
```

5. Run the workflow using the implementer role and verifier checklist. Capture one handoff artifact from each role, such as a diff summary, failed-test note, verification checklist, command output, or unresolved-risk list.
6. If the implementer and verifier disagree, write one decision note with the conflict, evidence reviewed, final decision, and human owner who approved it.
7. Save the custom agent file and verifier checklist as the Stage 6 workflow kit so Module 3 can reuse it for orchestration of Copilot Quest.

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

1. Create a notes file named `copilot-quest-stage-7-readiness.md` in your project notes, or add the template below to your existing workflow kit.

```markdown
# Copilot Quest Stage 7 Readiness

### Baseline Workflow

- Exercise 2 workflow used:
- Implementer artifact:
- Verifier artifact:

### Execution Mode Decision

- Recommended mode: Local synchronous / Background task / Cloud agent
- Duration:
- Parallelizable work:
- Environment needs:
- Data sensitivity:
- Review path:

### Readiness Score

| Check | Ready? | Evidence | Gap |
| --- | --- | --- | --- |
| Auditability | Yes/No | | |
| Policy compliance | Yes/No | | |
| Rollback path | Yes/No | | |
| Instruction-layer coverage | Yes/No | | |
| Validation cadence | Yes/No | | |

### Blocking Control Gap

- Missing control:
- Why it blocks Stage 7 scaling:
- Owner:

### Guardrail Improvement

- Guardrail:
- Enforced in:
- Human approval required before:

### Module 3 Handoff

- What Module 3 can reuse:
- What must remain human-approved:
```

2. Use your Exercise 2 workflow as the baseline so the readiness discussion stays grounded in a real handoff pattern rather than a hypothetical one.
3. Decide whether the workflow should remain local and synchronous, move to a background task, or move to a cloud agent. Fill the execution-mode fields using duration, parallelizability, environment needs, data sensitivity, and review path.
4. Score the workflow against the five readiness checks in the table: auditability, policy compliance, rollback path, instruction-layer coverage, and validation cadence.
5. Identify one missing control that would block Stage 7 scaling, such as missing approval gates, weak logging, unclear ownership, broad tool permissions, unclear instruction precedence, or no safe rollback plan.
6. Propose one lightweight guardrail improvement and specify where it should be enforced, for example in organization or repository instructions, tool permissions, hooks, review steps, `/init` scaffolding, or the skill file.
7. Complete the Module 3 handoff section with what can be reused and what must remain human-approved before broader rollout.

**🛡️ Safety checkpoint**: If readiness evidence is incomplete, mark the workflow as "not Stage 7 ready" and do not scale it to background or cloud execution.

### ✅ Success Criteria

- ✅ Completed a readiness score across all five checks
- ✅ Chose local, background, or cloud execution with a clear rationale
- ✅ Identified at least one blocking control gap
- ✅ Proposed one concrete guardrail location to close the gap
- ✅ Captured a handoff note for the orchestration/deployment module

*Hands-on lab for Module 2: Intermediate (Agentic) — GitHub Copilot Developer Training*
