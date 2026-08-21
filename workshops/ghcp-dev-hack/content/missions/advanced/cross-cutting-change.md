---
schemaVersion: 1
kind: mission
id: cross-cutting-change
title: Advanced Workflow Evidence Mission
module: advanced
durationMinutes: 30
objectiveRefs:
  - Select appropriate multiagent, subagent, and parallel execution patterns
  - Evaluate ecosystem resources and integration surfaces before enterprise use
  - Apply agent skills and MCP context to governed Copilot code review workflows
  - Debug agent behavior using narrowed context and observable evidence
  - Evaluate agent outcomes against explicit acceptance criteria and recover to a known state
  - Integrate parallel work with dependency ordering, combined validation, rollback, and human acceptance
  - Plan maintainable distribution, deployment, and Day 2 workflows
prerequisites: []
startingState: The participant either reopens an exported Agentic case file with separate Foundations, Agentic, and cumulative totals, or copies the self-serve Advanced starter brief from this mission page and begins immediately. Unearned prior totals are recorded as zero and prior evidence is labeled unavailable.
goal: Extend an Agent Mergewell case through Advanced orchestration, governed integration and review, debugging and recovery, Day 2 operations, and a final human accept, revise, or reject decision.
task: Use your carried-forward case or the Advanced starter brief to complete five governed Advanced operations, integrate their evidence, make the final human decision, and preserve a plain-text export with separate Foundations, Agentic, Advanced, and cumulative totals.
constraints:
  - Keep the same case envelope; do not reset the totals, invent missing evidence, or treat popularity as approval.
  - Count only earned or verified prior points; starting standalone records unavailable prior evidence and zero for any unverified prior total.
  - Keep external discovery, extension, MCP, plugin, or API evaluation read-only until the team has explicit approval.
  - Hints never reduce points, and there is no speed scoring.
evidence:
  - One orchestration decision with ownership and boundary notes
  - One integration matrix that compares the narrowest viable surfaces
  - One governed Copilot code-review control stack with attribution and least-privilege notes
  - One minimal debug and recovery record tied to visible evidence
  - One integrated acceptance and operations record with the explicit human decision plus the final score export
safetyCheckpoints:
  - Purrmission checks provenance, permissions, data scope, and rollback before any integration or distribution recommendation is accepted.
  - Purrmission keeps code-review helpers read-only until the participant can explain attribution, secrets handling, and tool boundaries.
  - Purrmission requires combined evidence and an explicit human accept, revise, or reject decision before the case closes.
  - Purrmission requires the final export to preserve separate module totals rather than a single blended score.
corePath:
  - Choose whether the case needs one agent, a subagent, a multiagent split, or parallel lanes, then justify the boundary.
  - Compare hooks, marketplace extensions, MCP, API or CLI, plugins, or another approved surface and select the narrowest safe option.
  - Define how a skill, MCP surface, or read-only helper contributes evidence to code review without taking merge authority.
  - Test one likely failure with a minimal debug protocol, then record the visible evidence and recovery choice.
  - Integrate the operation evidence, choose a distribution or Day 2 path, make the final human accept, revise, or reject decision, and export the final three-module score envelope.
stretchPath:
  - Earn up to one capped bonus by comparing one alternate integration or distribution path with the same evidence and a tighter governance tradeoff.
debrief:
  - Which Advanced decision most changed the shape of the case you carried forward?
  - What evidence narrowed the integration or debugging path?
  - What will you keep doing after the workshop when you orchestrate or distribute agent workflows?
validation:
  - The participant earns at least 40 core points or records the exact blocker that required facilitator help.
  - Each completed clue includes evidence, a Purrmission checkpoint, and a recorded human choice.
  - The fifth operation ends with an explicit human accept, revise, or reject decision grounded in integrated evidence.
  - The exported case file preserves separate Foundations, Agentic, Advanced, and cumulative totals.
casePacket:
  - 'Normal path: start from the exported Agentic case file and reuse the same envelope in place.'
  - 'Standalone path: in VS Code or the Copilot app, create `advanced-case-brief.md` and copy the full starter brief below into it; in Copilot CLI, paste the full brief into a fresh session. No facilitator, Agentic export, build, or prior module is required.'
  - 'Prior totals: copy only earned or verified prior totals, record zero for every unverified prior total, and label prior evidence unavailable rather than recreating it.'
  - 'Optional leaderboard handoff: export only an alias plus separate Foundations, Agentic, and Advanced module scores and the calculated cumulative total; keep evidence, prompts, diffs, and repository content local.'
  - Mission completion never depends on the optional leaderboard.
starterFile:
  name: advanced-case-brief.md
  content: |-
    # Advanced Case Brief — Operation Wide Net

    Use this brief if you are starting at Advanced, or if your Agentic export is
    not available. It is deliberately small, self-contained, and safe to reason
    about without cloning a real system. You do not need to build it.

    ## The situation

    Agent Mergewell's team runs a small internal service made of four parts:

    | Part | What it does | Owner |
    | --- | --- | --- |
    | `case-api` | HTTP endpoints for case records | Team A |
    | `case-worker` | Background jobs that update cases | Team A |
    | `notify-svc` | Sends case notifications | Team B |
    | `shared-logging` | Logging helper used by all three | Nobody, effectively |

    ## The requested change

    Compliance has asked for one cross-cutting change:

    > Every case record read or write must emit a structured audit event with the
    > actor, the case id, the action, and a timestamp. Audit events must never
    > include case body text or personal data.

    This touches all four parts. `shared-logging` must change first, and the
    other three must adopt it. `notify-svc` belongs to another team.

    ## What is already known

    - `case-api` and `case-worker` have tests. `notify-svc` has almost none.
    - `shared-logging` has no owner and no release process.
    - There is a code-review bottleneck: one reviewer approves everything.
    - A previous audit-logging attempt leaked case body text into logs and was
      rolled back. Nobody wrote down why it happened.
    - The team wants this in production within two weeks.

    ## Your Advanced scenario

    Treat this as the case you are carrying. Across the five operations you will:

    1. Decide how to split this work across agent runs, and where each run stops.
    2. Choose the narrowest integration surface for getting audit evidence out.
    3. Decide how an automated review helper contributes without taking merge authority.
    4. Plan the minimal debug protocol for the "leaked case body text" failure.
    5. Integrate the evidence, choose the Day 2 path, and record the final human decision.

    ## Prior module totals

    - Foundations total: ___ (record 0 if you did not complete or verify it)
    - Agentic total: ___ (record 0 if you did not complete or verify it)
    - Prior evidence: available / unavailable

    Recording zero here is honest and costs you nothing. Your Advanced score is
    earned entirely inside this mission.

    ## Advanced evidence log

    - Operation 1 — orchestration choice:
    - Operation 2 — integration surface:
    - Operation 3 — governed review path:
    - Operation 4 — debug protocol and recovery:
    - Operation 5 — integration, Day 2 choice, and final human decision:
    - Advanced core total: ___ / 50
    - Advanced bonus total: ___ / 10
harnesses:
  - id: copilot-cli
    title: GitHub Copilot CLI
    description: Use Copilot from the terminal for bounded comparison, review, and debug planning.
    instructions:
      - Keep each Advanced clue scoped to the current decision and the carried-forward case file.
      - Record visible command, context, and output evidence instead of summarizing from memory.
  - id: ide-extension
    title: VS Code
    description: Use VS Code to compare options, inspect evidence, and document decisions in one workspace.
    instructions:
      - Attach only the case file, comparison notes, and files needed for the current clue.
      - Keep diffs, prompts, and evidence visible when you record the human decision.
  - id: copilot-app
    title: GitHub Copilot app
    description: Use the standalone app to inspect plans, files, and evidence canvases while keeping the case envelope intact.
    instructions:
      - Keep the local project and the case file boundary explicit at the start of each clue.
      - Use the app's visible plan, files, or diff canvases as evidence rather than relying on summary text alone.
coreClues:
  - id: split-the-squad
    title: Operation Split the Squad
    points: 10
    objectiveRef: Select appropriate multiagent, subagent, and parallel execution patterns
    scene: Mergewell maps the case into lanes while Purrmission blocks any split that does not have clear ownership.
    actions:
      - Choose whether the case needs a single focused flow, a subagent, a multiagent split, or parallel work.
      - Name the ownership boundary, expected evidence, and merge control for that choice.
      - Choose the execution shape only after the split is clear. A sequential run is simplest; `/fleet` can coordinate independent CLI tasks; separate worktrees isolate parallel file changes. Record the cost or coordination limit that stops you from creating more lanes.
      - Explain one pattern you rejected and why it would be too broad or too costly.
    routes:
      - harness: copilot-cli
        instructions:
          - Ask for a structured comparison of the pattern choices and keep the answer tied to the carried-forward case.
      - harness: ide-extension
        instructions:
          - Use a native note or comparison table so the ownership and evidence columns remain visible.
      - harness: copilot-app
        instructions:
          - Use the plan or files canvas to keep the orchestration map observable while you record the decision.
    evidence: Add the chosen pattern, rejected pattern, ownership boundary, and acceptance signal.
    hints:
      - Start with the smallest pattern that can still keep the evidence attributable.
      - A subagent or parallel split should narrow work, not duplicate the parent context.
      - Use parallel lanes only for independent work. Put shared dependencies first and keep final integration under one named human owner.
      - 'Starter: I chose ___ because ___. I rejected ___ because ___.'
    safetyCheckpoint: Stop if a proposed pattern widens scope without a clearer owner, evidence contract, or merge gate.
  - id: vet-the-surface
    title: Operation Vet the Surface
    points: 10
    objectiveRef: Evaluate ecosystem resources and integration surfaces before enterprise use
    scene: Mergewell lines up five integration doors while Purrmission checks the badges, locks, and rollback handles.
    actions:
      - Compare at least three relevant surfaces: hooks react to events; marketplace extensions add packaged capabilities; MCP supplies governed context or tools; Work IQ via MCP adds permission-aware Microsoft 365 context; API or CLI offers a narrow explicit operation; plugins bundle reusable capabilities.
      - If you discover an option in the Awesome Copilot list or another catalog, treat the listing as a lead to vet, not as approval.
      - Record permissions, provenance, data scope, observability, enterprise review, and rollback for each option.
      - Choose the narrowest surface that still satisfies the case.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the comparison as a text matrix with the same columns for every surface.
      - harness: ide-extension
        instructions:
          - Use a native table or checklist so missing provenance or rollback evidence remains obvious.
      - harness: copilot-app
        instructions:
          - Keep the comparison visible in one session and make the chosen tradeoff explicit.
    evidence: Add the comparison matrix and the final selected surface.
    hints:
      - Read-only evidence surfaces usually beat broader write-capable integrations when they meet the task.
      - A useful discovery resource is not yet an approval record.
      - Permission to retrieve workplace context is not permission to present it. Check audience, sensitivity, tenant policy, and data scope before recommending Work IQ or another MCP source.
      - 'Starter: I chose ___ because it needed ___ permissions and still provided ___ evidence.'
    safetyCheckpoint: Do not recommend an integration whose provenance, permissions, or rollback path you cannot explain.
  - id: govern-the-review
    title: Operation Govern the Review
    points: 10
    objectiveRef: Apply agent skills and MCP context to governed Copilot code review workflows
    scene: Mergewell adds one helper to the review desk while Purrmission keeps the merge button under human lock.
    actions:
      - Decide whether a skill, MCP surface, or another read-only helper adds evidence to code review for this case.
      - Record attribution, tool allowlisting, least privilege, secrets handling, and what the helper must not decide.
      - State whether the same governed skill or MCP source may be used by Copilot code review, a cloud agent, both, or neither. Keep each consumer's permissions and evidence separate.
      - Explain how the human reviewer keeps acceptance and merge authority.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the review helper description read-only and evidence-focused; do not drift into autonomous merge behavior.
      - harness: ide-extension
        instructions:
          - Capture the review flow as ordered steps from diff to evidence to human decision.
      - harness: copilot-app
        instructions:
          - Use the visible plan or diff context to show where the helper contributes evidence and where it stops.
    evidence: Add the governed review flow and the human authority statement.
    hints:
      - The helper may add context or evidence, but the reviewer still owns acceptance.
      - If you cannot attribute the helper's evidence, tighten the review path.
      - 'Starter: The helper may ___. It must not ___. The human reviewer keeps ___ authority.'
    safetyCheckpoint: Stop if the proposed review flow hides attribution, grants unnecessary write access, or implies automatic acceptance.
  - id: debug-the-failure
    title: Operation Debug the Failure
    points: 10
    objectiveRef: Debug agent behavior using narrowed context and observable evidence
    scene: A failed run blinks on the console, and Purrmission insists on a smaller repro before anyone blames the whole system.
    actions:
      - Name one likely failure mode for the carried-forward case, such as context, instruction conflict, tool order, or permission drift.
      - Write the smallest safe repro prompt or protocol that could confirm or disprove it.
      - Choose the visible evidence source that fits the failure: the VS Code Agents window, a CLI transcript, an app plan or diff canvas, or repository and check output. Do not claim hidden reasoning.
      - Run the smallest safe repro when available, or walk it as a bounded tabletop check, then record the visible result and whether to recover, revise, or roll back before changing architecture.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the repro prompt short enough to prove one hypothesis at a time, and save the relevant command and output.
      - harness: ide-extension
        instructions:
          - Tie the repro and recovery choice to visible files, outputs, or diffs instead of a conversational summary.
      - harness: copilot-app
        instructions:
          - Use the visible canvases to record the evidence that confirms or disproves the failure mode and the recovery choice.
    evidence: Add the failure hypothesis, minimal repro, visible result, and recover, revise, or rollback choice.
    hints:
      - 'Debug one variable at a time: context, instruction order, tool call, or permission.'
      - A smaller repro is usually safer than another full rerun.
      - 'Starter: I suspect ___. I would test it by ___. I would inspect ___ before changing the design.'
    safetyCheckpoint: Stop before broadening the workflow or adding tools; preserve the known-good state and recover or roll back if the smaller repro fails its criterion.
  - id: ship-the-decision
    title: Operation Ship the Decision
    points: 10
    objectiveRef: Integrate parallel work with dependency ordering, combined validation, rollback, and human acceptance
    scene: Mergewell assembles the governed evidence into the final Day 2 packet while Purrmission holds the case open until a human accepts, revises, or rejects it.
    actions:
      - Assemble the orchestration, integration-surface, governed-review, and debug or recovery evidence; record dependency order, worktree or lane ownership when used, combined acceptance checks, unresolved uncertainty, and the known-good rollback point.
      - Choose a distribution or Day 2 path, then record owner, audience, provenance, policy fit, support expectation, rollout stop condition, and rollback.
      - End the operation by comparing the integrated evidence with the acceptance checks, recording exactly one human decision—accept, revise, or reject—and sealing the export with separate Foundations, Agentic, Advanced, and cumulative totals plus the final integration and operations evidence.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the integrated evidence and distribution note specific to the intended audience and maintenance boundary, then record the human decision.
      - harness: ide-extension
        instructions:
          - Use a small checklist or table so combined checks, owner, rollback, support, and final decision remain explicit.
      - harness: copilot-app
        instructions:
          - Capture the integrated proof and rollout path in the same envelope, keep the support and rollback owners visible, and record the final human decision.
    evidence: Add the integrated acceptance checks, operations path, owner and rollback notes, explicit accept, revise, or reject decision, and final separate module and cumulative totals.
    hints:
      - Start by putting the four earlier evidence records in dependency order; do not infer a passing combined result from separate checks.
      - If an acceptance check is unresolved, choose revise or reject and keep the known-good rollback point rather than forcing acceptance.
      - 'Starter: Combined evidence shows ___. I choose accept/revise/reject because ___. Day 2 owner: ___. Rollback: ___. Foundations: __ core + __ bonus = __; Agentic: __ core + __ bonus = __; Advanced: __/50 core + __/10 bonus = __; cumulative: ___.'
      - 'Copy-paste closeout: "Dependency order: ___. Combined checks: ___. Unresolved: ___. Known-good rollback: ___. Distribution: ___. Owner/support: ___. Stop condition: ___. Human decision: accept/revise/reject because ___."'
    safetyCheckpoint: Stop if combined evidence is missing, a blocker remains unresolved, or provenance, owner, support, stop condition, and rollback are not explicit; do not deploy or label the case accepted.
bonusClues:
  - id: compare-one-narrower-route
    title: Operation Compare One Narrower Route
    points: 10
    objectiveRef: Evaluate ecosystem resources and integration surfaces before enterprise use
    scene: Purrmission points to a smaller side door, and Mergewell checks whether it solves the case with less risk.
    actions:
      - Compare your selected integration or distribution path with one narrower alternative.
      - Record what evidence or capability you would lose and what risk you would reduce.
      - Explain whether the narrower route should replace your original choice.
    evidence: Add the alternate route and the tradeoff summary.
    hints:
      - 'Compare one dimension at a time: permissions, provenance, support, or rollback.'
      - A narrower route wins only if it still satisfies the case.
      - 'Starter: The narrower route is ___. It reduces ___ but loses ___.'
    safetyCheckpoint: Do not treat a narrower route as better if it fails the case requirements.
  - id: read-only-evidence-drill
    title: Operation Read-only Evidence Drill
    points: 10
    objectiveRef: Apply agent skills and MCP context to governed Copilot code review workflows
    scene: Mergewell tests a helper at the review desk while Purrmission tapes over every control that could write or merge.
    actions:
      - Describe one additional read-only evidence source you would allow in review.
      - Record the exact question it answers and the boundary it must not cross.
      - Explain why the added evidence is worth the coordination cost.
    evidence: Add the read-only helper, answered question, and boundary note.
    hints:
      - The best extra helper answers one unresolved question without changing authority.
      - If the helper creates more ambiguity than clarity, skip it.
      - 'Starter: I would add ___ to answer ___. It must not ___.'
    safetyCheckpoint: Keep the added helper read-only and attributable.
  - id: day-two-tightenup
    title: Operation Day 2 Tighten-up
    points: 10
    objectiveRef: Plan maintainable distribution, deployment, and Day 2 workflows
    scene: Mergewell drafts the next step, and Purrmission circles the owner, rollback, and support pager before approving it.
    actions:
      - Add one Day 2 improvement to ownership, telemetry, rollback, or support.
      - Explain why it matters before broader rollout.
      - Record how it would change the deployment or maintenance plan.
    evidence: Add the improvement and the updated deployment note.
    hints:
      - Pick the improvement that removes the biggest operational blind spot.
      - Day 2 planning is a governance improvement, not a speed bonus.
      - 'Starter: Before broader rollout I would add ___ because ___.'
    safetyCheckpoint: Do not promise a Day 2 workflow you cannot own or support.
completionPoints: 40
bonusPointCap: 10
carryForward:
  artifact: Agent Mergewell case file
  produces:
    - Separate Foundations, Agentic, Advanced, and cumulative totals
    - The orchestration choice and boundary rationale
    - The integration comparison and chosen surface
    - The governed review helper plan and human authority note
    - The debug protocol, visible result, and recovery choice
    - The integrated acceptance checks, distribution or Day 2 choice, owner, rollback, support notes, and explicit final human decision
  consumes:
    - Exported Agentic case file on the continuing path
    - Self-serve Advanced starter brief on the standalone path
  fallback: The standalone path never recreates Agentic evidence or points; it preserves only earned or verified prior totals, records zero for unverified prior totals, and labels prior evidence unavailable.
leaderboard:
  optional: true
  aliasOnly: true
  instructions:
    - Export only an alias, separate Foundations, Agentic, and Advanced module scores, and the calculated cumulative total for the optional separately implemented event leaderboard.
    - Keep evidence, prompts, diffs, and repository content local.
    - Mission completion never depends on leaderboard submission; there is no speed or popularity scoring.
  submission:
    moduleOption: Advanced
    steps:
      - Finish the mission and read your Advanced core and bonus totals from the scorecard.
      - Open the leaderboard submission form and choose `Advanced` as the module.
      - 'Use a made-up alias rather than your real name. Your alias and score are published on the shared workshop board, so avoid your real name, work username, email, employer, or customer names.'
      - Copy the alias saved in the alias box on this page so it matches the one you used for Foundations and Agentic.
      - Submit one issue for this module using the same alias you used for Foundations and Agentic, so your module scores add up into one standing.
      - Advanced clues are worth 10 points each, so core totals use 10-point values.
      - Submit each module separately; the board adds your three module totals into the cumulative standing.
      - Only verified module submissions count toward final standings, and tied highest verified totals are announced as co-winners after the event closes.
status: draft
---

# Advanced Workflow Evidence Mission

### 🎯 MISSION

## Mission goal

Extend the same Agent Mergewell case through Advanced orchestration, governed integration and review, debugging and recovery, Day 2 operations, and a final human accept, revise, or reject decision.

## Choose your starting point

- **Continuing from Agentic:** reopen the case already in your chosen harness and keep your earlier module totals intact.
- **Starting with Advanced:** copy the Advanced starter brief on this page into your chosen harness and begin immediately. You do not need a facilitator, an Agentic export, or any earlier module.
- **Starting with Advanced:** in VS Code or the Copilot app, create `advanced-case-brief.md` and copy the full starter brief into it. In Copilot CLI, paste the full brief into a fresh session. You do not need to build the fictional system.
- **Your score:** starting fresh does not reduce your Advanced score, but unearned earlier points remain zero.

## Carry-forward envelope

Reuse the exported Agentic case file in place. Preserve separate Foundations, Agentic, and cumulative totals when you begin, then add Advanced totals without resetting or blending the earlier modules.

If the Agentic export is unavailable, copy the Advanced starter brief from this mission page instead. Carry forward only earned or verified prior totals, record zero for unverified prior totals, and label prior evidence unavailable instead of recreating it. Recording zero costs you nothing here; your Advanced score is earned entirely inside this mission.

## Scoring and close

Each module is scored and submitted on its own. Missing Foundations or Agentic never blocks you here.

| Item | Points |
| --- | --- |
| Operation Split the Squad | 10 |
| Operation Vet the Surface | 10 |
| Operation Govern the Review | 10 |
| Operation Debug the Failure | 10 |
| Operation Ship the Decision | 10 |
| **Core total** | **50** |
| Bonus work (capped) | 10 |
| **Module maximum** | **60** |

Forty core points completes the mission. Hints are always free and never reduce your score, and there is no speed or popularity scoring. Submit this module's total separately; the board adds your three module totals together. Overall leaders are the people who complete every module and pick up the bonus points, so finishing at 40 is a pass, not a podium.

Operation Ship the Decision closes the case only after you integrate the evidence and record an explicit human accept, revise, or reject decision.

## Timing guide

- **0-5 minutes:** open your carried-forward case or copy the starter brief, then choose the Advanced scenario.
- **5-10 minutes:** make the orchestration decision.
- **10-15 minutes:** compare and choose the narrowest safe integration surface.
- **15-20 minutes:** define the governed code-review helper path.
- **20-25 minutes:** run or walk the minimal debug protocol and record the recovery choice.
- **25-30 minutes:** integrate the evidence, choose the Day 2 path, make the final human accept, revise, or reject decision, and export separate module and cumulative totals.

Use short matrix entries and one-sentence decisions. You are designing and evaluating a governed workflow in 30 minutes, not implementing the fictional four-service system.

## Copy-paste final export

```text
Foundations: __ core + __ bonus = __ (evidence available/unavailable)
Agentic: __ core + __ bonus = __ (evidence available/unavailable)
Advanced: __ core + __ bonus = __
Cumulative: __
Orchestration and owner: __
Chosen integration and governance reason: __
Review helper and human authority: __
Debug evidence and recovery: __
Day 2 owner, stop condition, and rollback: __
Final human decision: accept/revise/reject because __
```

## Words used in this mission

- **Orchestration** — splitting one large job across more than one agent run or session, and deciding where each run stops.
- **Integration surface** — the connection you open to an outside system. The narrowest one that still does the job is usually the right one.
- **Governed review helper** — automated review that advises, while a named human keeps the authority to accept or reject.
- **Debug protocol** — the smallest repeatable set of steps that makes a failure visible before you try to fix it.
- **Day 2 operations** — everything after the change ships: ownership, telemetry, rollback, and support.

## Accessibility and fallback

Hints are always available and never reduce points. If a surface is unavailable on your device or plan, record `not available`, use the facilitator-approved alternative, and keep the same evidence envelope. Optional leaderboard handoff includes only your alias and module scores; evidence stays local, and submission is never required to complete the mission.
