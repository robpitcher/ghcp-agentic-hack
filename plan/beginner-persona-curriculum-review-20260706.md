# Beginner Persona Curriculum Review

## Scope

Reviewed the core Foundations, Agentic, and Advanced module materials from the perspective of a learner with no prior GitHub Copilot experience.

| Module | Files reviewed |
|--------|----------------|
| Foundations | `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`, `copilot-dev-foundations-LAB.md`, `copilot-dev-foundations-QUIZ.md`, `presenter.md`, `copilot-dev-foundations.slidev.md` |
| Agentic | `workshops\copilot-dev-agentic\copilot-dev-agentic-workshop.md`, `copilot-dev-agentic-LAB.md`, `copilot-dev-agentic-QUIZ.md`, `presenter.md`, `copilot-dev-agentic.slidev.md` |
| Advanced | `workshops\copilot-dev-advanced\copilot-dev-advanced-workshop.md`, `copilot-dev-advanced-LAB.md`, `copilot-dev-advanced-QUIZ.md`, `presenter.md`, `copilot-dev-advanced.slidev.md` |

This was a document-based curriculum review. I did not perform live Copilot, VS Code UI, CLI, hook, MCP, plugin, or marketplace execution because those checks depend on the learner environment and organization policy.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Beginner learning path | Passing with gaps | The modules progress from surfaces and safe scoped context, to skills/custom agents, to orchestration, integrations, debugging, and deployment readiness. Labs use Copilot Quest as a shared build thread and mostly provide exact paths, prompts, templates, evidence fields, and safety checkpoints. |
| Source-truth alignment | Gap | Agentic and Advanced Slidev deck counts match their workshop contracts. Foundations does not: the source says the deck is planned for 24 slides and forbids unmarked wrap-up slides, but the generated Slidev deck has 25 image-backed slides and skips from `slide-21` to `slide-23`. |
| Lab step clarity | Passing with gaps | Labs are generally usable by beginners because they name files such as `.github\skills\copilot-quest-guessing\SKILL.md`, `.github\agents\copilot-quest-implementer.agent.md`, `.github\hooks\copilot-quest-session.json`, and `copilot-quest-orchestration-package.md`. A few success criteria ask for artifacts or decisions that are conditional or not explicitly requested. |
| Scenario alignment | Passing | Core labs consistently use Copilot Quest rather than asking learners to invent unrelated tasks. Foundations prepares notes and guardrails without creating skill or agent files; Agentic creates the repo-local skill and custom agent; Advanced governs and orchestrates the earlier kit. |
| Quiz quality | Passing | Foundations has 10 questions, Agentic has 13, and Advanced has 12. Each reviewed quiz question has four options, one answer comment, and an explanation aligned to the workshop concepts. |
| Presenter notes | Passing | Presenter files are section-aligned and keep discussion prompts outside workshop source files. Slidev decks have substantive presenter notes and no TODO placeholders. |

## Can a brand-new Copilot learner navigate the material?

Yes, with instructor support and a prepared environment. The curriculum explains where Copilot lives, where to click or type first, how to scope context, how to avoid unsafe escalation, and how to collect review evidence. The labs are unusually strong for beginners because they include copyable prompts, concrete artifact names, exact repository paths, expected evidence templates, and rollback language for advanced surfaces.

The main risk is not conceptual coverage; it is learner load. A learner with no Copilot experience can follow Foundations and Agentic if Copilot CLI and VS Code Chat surfaces are available. Advanced is navigable but dense: it asks learners to inspect hooks, Extensions, MCP discovery commands, APIs/CLI, plugins, Agent Debug Log, Chat Debug View, and deployment paths in 30 minutes of lab time. That works as a guided exposure lab, but not as a fully self-paced beginner lab unless the instructor actively demos where each surface appears and confirms which surfaces are unavailable in the room.

## Findings

### Blocking: Foundations Slidev deck does not match the source slide contract

- **Evidence**: `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md:15` forbids extra recap, wrap-up, section-divider, or handoff slides unless explicitly marked. `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md:17` says the planned deck is 24 slides. `workshops\copilot-dev-foundations\copilot-dev-foundations.slidev.md:202`, `:211`, `:220`, and `:229` show the generated deck continues with `slide-23`, `slide-24`, `slide-25`, and `slide-26`, creating 25 image-backed slides and skipping `slide-22`.
- **Impact**: A new learner may still receive the concepts, but the deck is not traceable to the workshop contract. For instructors, this weakens confidence that every slide maps to the intended source marker and that no generated visual content drifted.
- **Recommendation**: Regenerate or reconcile the Foundations deck with a slide manifest. Either update the workshop contract if a closing slide is intentionally required or remove the extra unmarked wrap-up slide and fix the missing `slide-22` numbering/reference.

### Consistency gap: Foundations Exercise 2 has a success criterion that is not directly requested

- **Evidence**: `workshops\copilot-dev-foundations\copilot-dev-foundations-LAB.md:155` says learners should have "Added or refined one reusable instruction for the starter kit." The Exercise 2 steps ask learners to compare Ask, Plan, and Agent, use Configure Tools, use the `#` picker, locate review controls, and capture an escalation rule, but they do not explicitly provide a reusable-instruction template or a required place to save that instruction.
- **Impact**: A beginner may finish every visible step and still not know what instruction they were expected to add, where to put it, or what "starter kit" means at that point in the module.
- **Recommendation**: Add a short step before the success criteria with a starter template, such as "Add one reusable instruction to `copilot-quest-foundations-notes.md` under `### Reusable Instructions`," or remove the criterion.

### Consistency gap: Agentic Exercise 2 requires a conflict log even when no conflict occurs

- **Evidence**: `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md:213` says "If the implementer and verifier disagree" learners should write a decision note. `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md:225` makes "Logged one conflict-resolution decision with rationale" a mandatory success criterion.
- **Impact**: A learner whose implementer and verifier agree cannot satisfy the success criteria without inventing a conflict. That is especially confusing for a new user trying to understand whether the lab "worked."
- **Recommendation**: Change the success criterion to "Logged one conflict-resolution decision if a conflict occurred, or recorded 'no conflict' with the evidence reviewed." Alternatively, add a small simulated disagreement prompt so every learner has a conflict to resolve.

### Improvement: Agentic Exercise 1 should add a rollback or scratch-branch cue before running the task

- **Evidence**: `workshops\copilot-dev-agentic\copilot-dev-agentic-LAB.md:97` asks learners to run the validation/feedback task once using the chosen mode and capture evidence.
- **Impact**: The surrounding steps include tool limits and default approvals, so the lab is safe in principle. A brand-new Copilot user may still be surprised when Agent mode edits files in a real repository and may not know how to recover if the result is unwanted.
- **Recommendation**: Add one beginner cue before running the task: create or confirm a scratch branch, inspect the files changed bar, and know how to use Undo, Undo All, or `git diff` before accepting. This reinforces the review controls already taught in Foundations.

### Improvement: Advanced lab works best as a guided lab, not a fully self-paced beginner lab

- **Evidence**: `workshops\copilot-dev-advanced\copilot-dev-advanced-LAB.md:120` creates a draft hook, `:145` validates JSON, `:151` gives rollback, `:155` asks learners to find MCP surfaces, `:162` asks them to inspect plugin support and `plugin.json` metadata, and `:254-277` walks through Agent Debug Log, Chat Debug View, `#debugEventsSnapshot`, `/troubleshoot`, and the debug-data persistence warning.
- **Impact**: The steps are accurate and concrete, but the density is high for a learner with no prior Copilot experience. The lab may feel like a checklist of many unfamiliar surfaces unless the instructor pauses to show which surfaces exist in the current environment and which ones learners should mark as unavailable.
- **Recommendation**: Add a short "environment variance" checkpoint at the start of Advanced Exercise 2 and Exercise 3. Ask learners to mark surfaces as "available," "not available," or "policy blocked" before filling evidence fields, so unavailable UI does not feel like learner failure.

## Module-by-module beginner notes

### Foundations

Foundations is the strongest entry point for a new user. It starts with Copilot surfaces, scoped context, Copilot CLI orientation, privacy/IP controls, Ask/Plan/Agent comparisons, usage and model routing, context rot, and delegation guardrails. The lab provides concrete note templates and avoids creating `.github\skills` or `.github\agents` artifacts too early, which preserves the module boundary.

The lab should work if prerequisites are met: VS Code with Copilot, Copilot CLI, and a safe repository or scratch notes location. The biggest beginner friction is that product surfaces may vary, but the lab often handles this by telling learners to write "not available in my environment." The slide deck needs source-contract cleanup before release.

### Agentic

Agentic builds well on Foundations. It gives a concrete Copilot Quest validation/feedback task, explains strong prompts versus instructions, memory, and skills, creates `.github\skills\copilot-quest-guessing\SKILL.md`, then creates `.github\agents\copilot-quest-implementer.agent.md`. The lab includes starter templates, explicit trust boundaries, allowed and disallowed scope, stop conditions, evidence capture, and readiness scoring.

The lab should work for beginners with instructor support. The main clarity issue is the mandatory conflict-resolution success criterion. The task execution step would also benefit from one explicit rollback or scratch-branch reminder before learners let an agent edit a real repository.

### Advanced

Advanced covers the required advanced concepts and keeps risky setup governed. Hooks include validation and rollback. MCP remains conceptual. Marketplace and plugin work is framed as trust review before enablement. Debug evidence includes VS Code and Copilot CLI alternatives, and Day 2 is explicitly kept separate from the lab deliverable.

The lab can work for beginners as a guided capability-discovery exercise. It is likely too dense for a fully self-paced novice unless the room has a prepared environment checklist and the instructor normalizes unavailable or policy-blocked surfaces.

## Recommended follow-up

1. Fix the Foundations Slidev/source contract mismatch before delivery.
2. Clarify the Foundations Exercise 2 reusable-instruction success criterion.
3. Clarify the Agentic Exercise 2 conflict-resolution success criterion.
4. Add explicit beginner rollback or scratch-branch cues before Agentic task execution.
5. Add Advanced environment-variance checkpoints for hooks, MCP, plugins, debug panels, and CLI alternatives.

*Beginner-persona QA review for Foundations, Agentic, and Advanced GitHub Copilot Developer Training modules*
