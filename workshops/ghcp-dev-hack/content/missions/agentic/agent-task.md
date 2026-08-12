---
schemaVersion: 1
kind: mission
id: agent-task
title: 'Your Mission: Hand Off Work with Confidence'
module: agentic
durationMinutes: 45
objectiveRefs:
  - Apply instructions, memory boundaries, context hierarchy, and strong prompts to long-running agentic work
  - Operate an observable agentic loop with deliberate planning, tool control points, progress checks, stop decisions, and recovery
  - Choose a supported product control before an agentic task and verify afterward whether the result justified the AI credits used
prerequisites: []
startingState: The participant has an approved Copilot harness with either their Foundations case already available or the copyable Agentic starter case, plus the Agentic practice task.
goal: Carry your Foundations case forward and confidently delegate, monitor, and verify one well-scoped agentic task.
task: Use your chosen approved Copilot harness to prepare, delegate, inspect, and decide on one well-scoped change from your case or the Agentic starter task.
constraints:
  - Work only within the files or content named in your case or starter task unless you explicitly stop, re-brief, and record the scope change.
  - Use one approved Copilot harness or surface for the main run; any second-harness check is optional bonus evidence.
  - Use the validation available in your environment or the supplied no-runtime verification checklist.
  - Hints never reduce points, and there is no speed scoring.
evidence:
  - An updated Agent Mergewell case file with separate Foundations, Agentic, and cumulative totals
  - The delegation brief or prompt that initiated the main implementation pass
  - The reviewed changes plus validation output or completed no-runtime verification checklist
  - A final accept, revise, reject, stop, or recover decision with rationale
safetyCheckpoints:
  - Purrmission verifies that the carried-forward case, practice task, and named scope are the only context in use.
  - Purrmission pauses any request for unrelated files, package installs, network access, destructive commands, or unrecoverable actions until the human narrows or stops the work.
  - Purrmission requires a visible validation or recovery check before the final human decision.
corePath:
  - Resume the Foundations case already in your harness or paste in the Agentic starter case, then establish the shared boundary you will use to judge the work.
  - Turn that boundary into a clear delegation brief and choose an available pre-run control that fits the task.
  - Review the plan and observe whether the implementation continues to match the agreed intent.
  - Examine the result and its validation evidence, record any recovery, and make the human decision.
  - Export the updated case file so Advanced can consume separate Foundations, Agentic, and cumulative totals.
stretchPath:
  - Earn up to one capped bonus by tightening the brief after a drift signal, comparing evidence in a second approved harness, or capturing a better usage or control observation without widening scope.
debrief:
  - Which instruction or scope boundary most improved the delegated result?
  - What evidence made you accept, revise, reject, stop, or recover?
  - What should the Advanced mission inherit from this case besides the score total?
validation:
  - The participant earns at least 40 core points or records the exact blocker that required facilitator help.
  - Every completed clue includes evidence, a Purrmission checkpoint, and an explicit human decision or stop note.
  - The exported case file preserves separate Foundations, Agentic, and cumulative totals for Advanced.
casePacket:
  - 'Continuing from Foundations: resume the case already in your harness and use its recorded follow-up task.'
  - 'Starting with Agentic: copy the browser app below into a file named `case-dashboard.html`, open it in a browser, and use it as your practice task. No installation, repository access, or Foundations catch-up is required.'
  - 'Starter situation: a workshop team records verified case notes in this dashboard. The current note-submission experience is not safe or reliable enough to hand to the next teammate.'
  - 'Starter outcome: improve note submission so blank notes are rejected with useful feedback, user-entered characters are shown as text rather than interpreted as page markup, a valid note appears once, and the form is ready for another note.'
  - 'Starter boundary: keep the solution inside `case-dashboard.html`; preserve the existing purpose and visual design; do not add packages, network calls, or unrelated features.'
  - 'Starter no-runtime verification: open the file in a browser; try a blank note, a normal note, and `<strong>field report</strong>`; inspect the behavior and the changed file before deciding whether the result meets the outcome.'
  - If you continue from Foundations, use the outcome, boundaries, and validation appropriate to your carried-forward task instead of the starter checks.
starterFile:
  name: case-dashboard.html
  content: |-
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Agent Mergewell Case Dashboard</title>
      <style>
        :root {
          color-scheme: light;
          font-family: Arial, sans-serif;
          background: #f6f8fa;
          color: #1f2328;
        }
        body {
          margin: 0;
          padding: 2rem;
        }
        main {
          max-width: 42rem;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border: 1px solid #d0d7de;
          border-radius: 0.75rem;
        }
        label, textarea, button {
          display: block;
          width: 100%;
          box-sizing: border-box;
        }
        textarea {
          min-height: 6rem;
          margin: 0.5rem 0 1rem;
          padding: 0.75rem;
        }
        button {
          padding: 0.75rem;
          border: 0;
          border-radius: 0.4rem;
          background: #1f883d;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
        #status {
          min-height: 1.5rem;
          color: #57606a;
        }
        li {
          margin-block: 0.5rem;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>Case handoff notes</h1>
        <p>Record the evidence the next teammate needs to continue the case.</p>

        <label for="case-note">New verified note</label>
        <textarea id="case-note"></textarea>
        <button id="add-note" type="button">Add note</button>
        <p id="status" role="status" aria-live="polite">No note added yet.</p>

        <h2>Verified notes</h2>
        <ul id="notes">
          <li>Permission boundary reviewed by the case owner.</li>
        </ul>
      </main>

      <script>
        const input = document.querySelector("#case-note");
        const notes = document.querySelector("#notes");
        const status = document.querySelector("#status");
        const addButton = document.querySelector("#add-note");

        addButton.addEventListener("click", () => {
          const note = input.value;
          notes.innerHTML += `<li>${note}</li>`;
          status.textContent = "Note added.";
        });
      </script>
    </body>
    </html>
harnesses:
  - id: copilot-cli
    title: GitHub Copilot CLI
    description: Use Copilot from the terminal while keeping the case, practice scope, and validation method visible.
    instructions:
      - Start in the chosen practice location and keep the request scoped to the named content.
      - Ask for a plan before permitting edits, then run your available validation or complete the no-runtime checklist.
  - id: ide-extension
    title: VS Code
    description: Use VS Code chat and agent features with only the selected practice content in scope.
    instructions:
      - Attach only the case and practice content needed for the current clue.
      - Review the proposed changes, then use your available validation or complete the no-runtime checklist.
  - id: copilot-app
    title: GitHub Copilot app
    description: Use the standalone app with the selected practice content in a local project or session.
    instructions:
      - Keep the session scoped to the case and named practice content.
      - Inspect the plan, changed content, and available verification evidence before deciding whether to continue.
coreClues:
  - id: open-the-case
    title: Operation Open the Case
    points: 10
    objectiveRef: Apply instructions, memory boundaries, context hierarchy, and strong prompts to long-running agentic work
    scene: 'Your situation: You are responsible for unfinished work from Foundations or the starter case. Before another agent works on it, you need a shared understanding of the problem and its limits.'
    actions:
      - 'Your decision: What does Copilot need to know about the intended outcome, useful context, evidence of success, and limits before it can propose an approach? Capture that shared understanding in a short boundary note.'
      - 'How to approach it: Read the case as the person who must approve the result. Describe the change in behavior you need, the context Copilot may use, the evidence you will inspect, and where the work must stop. Leave implementation choices open.'
      - 'Why it matters: Without a clear starting agreement, plausible work can still solve the wrong problem. The note gives you something concrete to compare with the plan and final result.'
    routes:
      - harness: copilot-cli
        instructions:
          - Note the current practice location, named scope, and validation method before you ask Copilot to do anything.
      - harness: ide-extension
        instructions:
          - Open only the selected practice content, then note which workspace or selection boundaries you will keep.
      - harness: copilot-app
        instructions:
          - Start a local session with the selected practice content and record the boundary you will allow Copilot to inspect.
    evidence: Save your chosen harness, carried-forward score, and boundary note.
    hints:
      - Keep an untouched copy of the practice content so you can recover from a bad run.
      - Continue with the Foundations case already in your harness, or paste the copyable Agentic starter case to begin fresh.
      - 'Unrelated example: For an onboarding-document update, a useful boundary note could explain that a new teammate must complete setup successfully, that only the onboarding document is relevant, and that build scripts are outside the task. It would not dictate the wording of the revised document.'
    safetyCheckpoint: Stop if the harness opens unrelated folders, asks for network or package access, or blurs which files are in scope.
  - id: write-the-brief
    title: Operation Write the Brief
    points: 10
    objectiveRef: Apply instructions, memory boundaries, context hierarchy, and strong prompts to long-running agentic work
    scene: 'Your situation: You understand the case, but Copilot still needs a useful handoff. Too little context invites guessing; too many instructions can prevent it from proposing a good approach.'
    actions:
      - 'Your decision: How will you explain the problem and boundaries while leaving the solution open? Choose an available model, context, reasoning, or session control that fits the work, then ask Copilot to propose a plan.'
      - 'How to approach it: Build the brief from your boundary note, then ask for a plan rather than an immediate change. Look for a plan that connects the requested outcome to relevant work and validation without introducing extra goals.'
      - 'Why it matters: The proposed plan is your first opportunity to discover whether Copilot understood the handoff before changes are made.'
    routes:
      - harness: copilot-cli
        instructions:
          - Put the brief in the prompt itself and ask for a plan before using any edit-capable mode or follow-up.
      - harness: ide-extension
        instructions:
          - Use Ask or Plan first, then copy the approved brief into the implementation turn only after you accept the plan.
      - harness: copilot-app
        instructions:
          - Capture the brief in the session, review the plan canvas, and do not move to implementation until the scope and stop conditions are explicit.
    evidence: Save your delegation brief, the control you chose, Copilot's proposed plan, and why you did or did not authorize it.
    hints:
      - The brief should explain the problem and boundaries, not prescribe the solution Copilot must discover.
      - The plan is your first evidence that Copilot understood the handoff; disagreement here is a reason to clarify, not push ahead.
    safetyCheckpoint: Do not let Copilot infer scope from the whole workspace; the brief must name the boundary, checks, and stop conditions.
  - id: watch-the-loop
    title: Operation Watch the Loop
    points: 10
    objectiveRef: Operate an observable agentic loop with deliberate planning, tool control points, progress checks, stop decisions, and recovery
    scene: 'Your situation: Copilot has begun working from the plan you reviewed. You remain accountable while it makes choices, uses tools, and produces a result.'
    actions:
      - 'Your decision: When should the work continue, pause for clarification, stop, or return to a revised brief? Base that decision on whether Copilot still appears to be solving the agreed problem within the agreed limits.'
      - 'How to approach it: Keep the approved plan and the agent activity visible. Check meaningful changes against the brief, especially when Copilot makes a new assumption, requests a tool or permission, or touches something the plan did not mention.'
      - 'Why it matters: Delegation does not transfer accountability. Watching for new assumptions, access requests, or expanding scope lets you intervene before drift becomes an accepted result.'
    routes:
      - harness: copilot-cli
        instructions:
          - Keep the terminal transcript visible so you can compare the plan, the commands, and the changed files in sequence.
      - harness: ide-extension
        instructions:
          - Use the pending change list, diff, or chat plan to compare the proposed work with the actual edits before accepting the result.
      - harness: copilot-app
        instructions:
          - Compare the plan, files, and diff canvases so the observable loop stays visible while the agent works.
    evidence: Save a short comparison of the plan and what actually happened, including any point where you continued, paused, stopped, or recovered.
    hints:
      - Observation is not micromanagement. Focus on whether the work still matches the agreement and whether new risk has appeared.
      - A useful recovery restores shared understanding; it does not need to hide or erase the first attempt.
    safetyCheckpoint: Stop immediately if Copilot proposes package installs, network access, destructive commands, or changes outside the named scope.
  - id: verify-the-evidence
    title: Operation Verify the Evidence
    points: 10
    objectiveRef: Operate an observable agentic loop with deliberate planning, tool control points, progress checks, stop decisions, and recovery
    scene: 'Your situation: Copilot says the task is complete. That statement describes its status, not whether the result is correct, useful, safe, or ready for you to own.'
    actions:
      - 'Your decision: What evidence do you need before you can judge this result? Examine the changes yourself and use available validation—or the no-runtime checklist—to test the claims that matter.'
      - 'How to approach it: Review the changed content separately from Copilot''s summary. Test the expected behavior, at least one edge case, and the agreed boundary; then identify any important claim that your checks did not establish.'
      - 'Why it matters: A passing check can answer one question while missing another. Human review connects the evidence back to the original intent and exposes uncertainty that still needs attention.'
    routes:
      - harness: copilot-cli
        instructions:
          - Use native diff and available command output so you can compare the changes with the validation result in one place.
      - harness: ide-extension
        instructions:
          - Inspect the editor diff or source control view, then run available validation or complete the no-runtime checklist.
      - harness: copilot-app
        instructions:
          - Inspect the diff canvas and available verification evidence before deciding whether the result is acceptable.
    evidence: Save the changes you reviewed, the validation result, and what that evidence supports or leaves uncertain.
    hints:
      - Revisit your original intent if the result looks plausible but the evidence does not answer the question you meant to test.
      - 'Different evidence answers different questions: scope, correctness, usability, and safety are not interchangeable.'
    safetyCheckpoint: Do not accept a green result if the diff widened scope, hid uncertainty, or skipped the recorded human review.
  - id: close-the-handoff
    title: Operation Close the Handoff
    points: 10
    objectiveRef: Choose a supported product control before an agentic task and verify afterward whether the result justified the AI credits used
    scene: 'Your situation: The work and its evidence are now in front of you. You—not Copilot—must decide what happens next and preserve the useful context for Advanced.'
    actions:
      - 'Your decision: Does the complete case record justify accepting the result, revising it, rejecting it, stopping, or recovering? Also decide what unresolved question, risk, or opportunity Advanced should inherit.'
      - 'How to approach it: Compare the final result and validation with the original brief. If an important gap remains, choose the response that fits the evidence rather than forcing an acceptance. Record the score only after making that decision.'
      - 'Why it matters: Closing a handoff means owning the decision, not merely receiving output. Preserving the reasoning and remaining uncertainty lets the next mission build on real evidence.'
    routes:
      - harness: copilot-cli
        instructions:
          - Note any visible CLI context, model, or session-control evidence honestly, including `not available` when the installed version does not show it.
      - harness: ide-extension
        instructions:
          - Record any visible model, usage, or changed-content evidence you can inspect in your installed version without guessing missing features.
      - harness: copilot-app
        instructions:
          - Record the session, model, permission, or diff evidence visible in the app and keep the claim narrower than the observed UI.
    evidence: Add the final decision, separate Foundations and Agentic totals, cumulative total, and the Advanced handoff question or scenario.
    hints:
      - Closing the handoff means taking responsibility for the decision and preserving enough context for the next mission.
      - Bonus points are capped at 10 even if you finish more than one bonus clue.
    safetyCheckpoint: Do not claim a fixed credit saving, speed advantage, or universal model behavior from one mission run.
bonusClues:
  - id: tighten-and-retry
    title: Operation Tighten and Retry
    points: 10
    objectiveRef: Operate an observable agentic loop with deliberate planning, tool control points, progress checks, stop decisions, and recovery
    scene: 'Your situation: The first attempt exposed a misunderstanding or drift. You have an opportunity to improve the handoff without hiding what happened.'
    actions:
      - 'Your decision: What part of the shared understanding needs clarification before a retry, and is another attempt justified? Revise the brief without prescribing the answer.'
      - 'How to approach it: Use the first attempt to locate the misunderstanding, change only the direction needed to address it, and compare the retry with the original result.'
      - 'Why it matters: Comparing both attempts shows whether clearer direction improved the work and turns a failed handoff into reusable learning.'
    evidence: Add the before-and-after brief line plus the recovery result.
    hints:
      - Recovery earns bonus only when you compare the first pass with the narrowed retry.
      - Preserve both attempts so the comparison remains evidence rather than hindsight.
    safetyCheckpoint: Do not hide the failed or drifted first pass; recovery evidence must remain visible.
  - id: cross-harness-check
    title: Operation Cross-Harness Check
    points: 10
    objectiveRef: Operate an observable agentic loop with deliberate planning, tool control points, progress checks, stop decisions, and recovery
    scene: 'Your situation: The main run is complete, but another approved Copilot surface may present the same evidence differently.'
    actions:
      - 'Your decision: Would inspecting the completed evidence in a second harness make an important part of the work clearer? If so, compare the same case without beginning another implementation.'
      - 'How to approach it: Bring the completed case and existing evidence into the second approved harness, inspect the same result, and note whether the different view changes your confidence or reveals a missed question.'
      - 'Why it matters: A second view can strengthen or challenge your judgment, but one experience does not establish that a harness is universally better.'
    evidence: Add the second harness, the evidence inspected, and the comparison.
    hints:
      - Use the second harness for inspection, not for a second uncontrolled implementation.
      - Compare clarity of evidence, not convenience alone.
    safetyCheckpoint: Keep the recovery and evidence review local; do not broaden permissions or create a second implementation branch just to earn bonus points.
  - id: control-room-observation
    title: Operation Control-Room Observation
    points: 10
    objectiveRef: Choose a supported product control before an agentic task and verify afterward whether the result justified the AI credits used
    scene: 'Your situation: Your harness may show a model, context, control, or usage signal. The signal is visible evidence, but its meaning is limited.'
    actions:
      - 'Your decision: Did any visible signal meaningfully inform how you directed or evaluated this handoff? Record only what was actually available in your harness.'
      - 'How to approach it: Choose one visible signal, describe how it affected a real decision in this mission, and name a conclusion that the signal alone cannot justify. Record `not available` when your harness exposes no useful signal.'
      - 'Why it matters: Separating observation from inference prevents a single run from becoming an unsupported claim about cost, quality, speed, or model behavior.'
    evidence: Add the observation and the completed sentence.
    hints:
      - Honest `not available` evidence is better than an invented claim.
      - Keep the conclusion narrow enough that another participant could verify it from the same screen or transcript.
    safetyCheckpoint: Do not spend credits, rerun the whole task, or change models solely to hunt for bonus points.
completionPoints: 40
bonusPointCap: 10
carryForward:
  artifact: Agent Mergewell case file
  produces:
    - Separate Foundations, Agentic, and cumulative totals
    - The chosen approved harness and delegation brief
    - Allowed and excluded context for the delegated task
    - Plan-versus-result notes and any recovery step
    - Reviewed diff, validation output, and final decision
    - One well-scoped Advanced follow-up scenario or question
  consumes:
    - Foundations case already in the chosen harness or the copyable Agentic starter case
  fallback: The copyable Agentic starter case supplies everything needed to begin this module, while the completed reference remains recovery-only.
leaderboard:
  optional: true
  aliasOnly: true
  instructions:
    - Keep any public or shared leaderboard alias-only; mission evidence and repository content stay local.
    - Export only the totals needed for the optional separately implemented event board.
    - Co-winners are based on the highest verified cumulative total; there is no speed scoring.
status: draft
---

# Your Mission: Hand Off Work with Confidence

### 🎯 MISSION

## Mission goal

Carry your Foundations case forward and confidently delegate, monitor, and verify one well-scoped agentic task.

## Choose your starting point

- **Continuing from Foundations:** reopen the case already in your chosen harness and use the follow-up task you recorded.
- **Starting with Agentic:** copy the Agentic starter case below into your chosen harness. You can begin immediately without completing Foundations first.
- **Your score:** starting fresh does not reduce your Agentic score, but unearned Foundations points remain zero.

## Timing guide

- **0-5 minutes:** open your case and practice task, then confirm the scope and validation method.
- **5-15 minutes:** write and approve the delegation brief plus one supported pre-run control choice.
- **15-30 minutes:** observe the plan and the main implementation pass, then stop or recover if scope drifts.
- **30-38 minutes:** review the diff and run validation.
- **38-45 minutes:** make the final decision and export separate Foundations, Agentic, and cumulative totals for Advanced.

## Accessibility and fallback

Hints are always available and never reduce points. Pair with a facilitator or partner if you need help copying the starter case, reviewing changes, or working around a device or accessibility limit. If your environment has no runnable validation, use the supplied no-runtime verification checklist and record that path honestly.

## Recovery-only completed reference

`workshops/ghcp-dev-hack/content/missions/agentic/fixtures/completed-reference/` is recovery-only. Open it only after you have attempted the mission or when a facilitator explicitly moves you into recovery mode.
