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
  - Plan maintainable distribution, deployment, and Day 2 workflows
prerequisites:
  - Complete the Agentic mission or receive a facilitator-verified carry-forward case file.
startingState: The participant has an exported Agentic case file with separate Foundations, Agentic, and cumulative totals plus one bounded Advanced follow-up scenario.
goal: Carry the same case envelope through Advanced orchestration, integration, review, debugging, and deployment decisions, then export the final three-module total.
task: Reuse the Agent Mergewell case file to make five governed Advanced decisions and preserve a final plain-text export with separate Foundations, Agentic, Advanced, and cumulative totals.
constraints:
  - Keep the same case envelope; do not reset the totals, invent missing evidence, or treat popularity as approval.
  - Keep external discovery, extension, MCP, plugin, or API evaluation read-only until the team has explicit approval.
  - Hints never reduce points, and there is no speed scoring.
evidence:
  - One orchestration decision with ownership and boundary notes
  - One integration matrix that compares the narrowest viable surfaces
  - One governed Copilot code-review control stack with attribution and least-privilege notes
  - One minimal debug protocol tied to visible evidence
  - One distribution or Day 2 recommendation plus the final cumulative export
safetyCheckpoints:
  - Purrmission checks provenance, permissions, data scope, and rollback before any integration or distribution recommendation is accepted.
  - Purrmission keeps code-review helpers read-only until the participant can explain attribution, secrets handling, and tool boundaries.
  - Purrmission requires the final export to preserve separate module totals rather than a single blended score.
corePath:
  - Choose whether the case needs one agent, a subagent, a multiagent split, or parallel lanes, then justify the boundary.
  - Compare hooks, marketplace extensions, MCP, API or CLI, plugins, or another approved surface and select the narrowest safe option.
  - Define how a skill, MCP surface, or read-only helper contributes evidence to code review without taking merge authority.
  - Turn one likely failure into a minimal debug protocol with visible evidence.
  - Recommend a distribution or Day 2 path, then export the final three-module score envelope.
stretchPath:
  - Earn up to one capped bonus by comparing one alternate integration or distribution path with the same evidence and a tighter governance tradeoff.
debrief:
  - Which Advanced decision most changed the shape of the case you carried forward?
  - What evidence narrowed the integration or debugging path?
  - What will you keep doing after the workshop when you orchestrate or distribute agent workflows?
validation:
  - The participant earns at least 40 core points or records the exact blocker that required facilitator help.
  - Each completed clue includes evidence, a Purrmission checkpoint, and a recorded human choice.
  - The exported case file preserves separate Foundations, Agentic, Advanced, and cumulative totals.
casePacket:
  - 'Normal path: start from the exported Agentic case file and reuse the same envelope in place.'
  - Facilitator-approved late entry may use a verified carry-forward case file that already contains Foundations and Agentic totals.
  - Keep public sharing alias-only and out of the repository; the mission evidence stays local.
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
      - 'Starter: I chose ___ because ___. I rejected ___ because ___.'
    safetyCheckpoint: Stop if a proposed pattern widens scope without a clearer owner, evidence contract, or merge gate.
  - id: vet-the-surface
    title: Operation Vet the Surface
    points: 10
    objectiveRef: Evaluate ecosystem resources and integration surfaces before enterprise use
    scene: Mergewell lines up five integration doors while Purrmission checks the badges, locks, and rollback handles.
    actions:
      - Compare at least three relevant surfaces such as hooks, marketplace extensions, MCP, API or CLI, plugins, or another approved option.
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
      - Record the exact evidence you would inspect before changing architecture.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the repro prompt short enough to prove one hypothesis at a time.
      - harness: ide-extension
        instructions:
          - Tie the repro to visible files, outputs, or diffs instead of a conversational summary.
      - harness: copilot-app
        instructions:
          - Use the visible canvases to note which evidence would confirm the failure mode.
    evidence: Add the failure hypothesis, the minimal repro, and the evidence map.
    hints:
      - 'Debug one variable at a time: context, instruction order, tool call, or permission.'
      - A smaller repro is usually safer than another full rerun.
      - 'Starter: I suspect ___. I would test it by ___. I would inspect ___ before changing the design.'
    safetyCheckpoint: Do not broaden the workflow or add new tools until the smaller repro tells you that the current evidence is insufficient.
  - id: ship-the-decision
    title: Operation Ship the Decision
    points: 10
    objectiveRef: Plan maintainable distribution, deployment, and Day 2 workflows
    scene: Mergewell seals the final packet for Day 2 while Purrmission checks rollout, support, and rollback.
    actions:
      - Choose a distribution path such as repository sharing, Marketplace, Agent Package Manager, or another approved option.
      - Record owner, audience, provenance, rollback, support expectation, and policy fit.
      - Add Advanced core points, any capped bonus, and the final cumulative total to the case file.
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the distribution note specific to the intended audience and maintenance boundary.
      - harness: ide-extension
        instructions:
          - Use a small checklist or table so owner, rollback, and support fields remain explicit.
      - harness: copilot-app
        instructions:
          - Capture the rollout decision in the same envelope and keep the human support or rollback owner visible.
    evidence: Add the distribution choice, owner and rollback notes, and the final three-module totals.
    hints:
      - The right distribution path changes when the audience, support model, or rollback needs change.
      - Bonus remains capped at 10 even if more than one bonus clue is completed.
      - 'Starter: I would distribute this through ___ because ___. The final cumulative total is ___.'
    safetyCheckpoint: Do not recommend deployment without provenance, owner, rollback, and support evidence.
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
    - The debug protocol and evidence map
    - The distribution choice plus owner, rollback, and support notes
  consumes:
    - Exported Agentic case file
  fallback: A facilitator may provide a verified carry-forward case file for legitimate late entry, but the final export must still preserve separate prior totals.
leaderboard:
  optional: true
  aliasOnly: true
  instructions:
    - Export only alias-safe totals for the optional separately implemented event leaderboard.
    - Keep evidence, prompts, diffs, and repository content local.
    - Highest verified cumulative totals are co-winners; there is no speed scoring.
status: draft
---

# Advanced Workflow Evidence Mission

### 🎯 MISSION

## Mission goal

Carry the same case envelope through Advanced orchestration, integration, review, debugging, and deployment decisions, then export the final three-module total.

## Carry-forward envelope

Reuse the exported Agentic case file in place. Preserve separate Foundations, Agentic, and cumulative totals when you begin, then add Advanced totals without resetting or blending the earlier modules.

## Timing guide

- **0-5 minutes:** reopen the carried-forward case and choose the Advanced scenario.
- **5-10 minutes:** make the orchestration decision.
- **10-15 minutes:** compare and choose the narrowest safe integration surface.
- **15-20 minutes:** define the governed code-review helper path.
- **20-25 minutes:** write the minimal debug protocol.
- **25-30 minutes:** choose the distribution path and export the final cumulative total.

## Accessibility and fallback

Hints are always available and never reduce points. If a surface is unavailable on your device or plan, record `not available`, use the facilitator-approved alternative, and keep the same evidence envelope. Public sharing remains optional and alias-only outside the repository.
