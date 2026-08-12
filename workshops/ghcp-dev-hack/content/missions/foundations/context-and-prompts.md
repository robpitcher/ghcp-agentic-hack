---
schemaVersion: 1
kind: mission
id: context-and-prompts
title: Agent Mergewell's Foundations Scavenger Hunt
module: foundations
durationMinutes: 45
objectiveRefs:
  - Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
  - Apply VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes to real engineering tasks
  - Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution
  - Detect context rot and apply context window hygiene practices
  - Apply the autonomy spectrum and least-privilege delegation before escalating to agentic patterns
prerequisites: []
startingState: Participants have VS Code with GitHub Copilot, GitHub Copilot CLI, or the standalone GitHub Copilot app.
goal: Build a verified Copilot case file by choosing a gadget, finding five operating clues, proving safe decisions, and carrying one bounded task into Agentic Development.
task: Complete Agent Mergewell's five-clue scavenger hunt, bank evidence with every point, and export the case file for the next mission.
constraints:
  - Do not use confidential, customer, or unrelated repository content.
  - Do not guess organization policy, product availability, or unsupported commands.
  - Do not grant repository-wide, network, destructive, or unrelated-file access for the bounded case.
  - Do not spend credits, install software, or broaden permissions merely to earn points.
evidence:
  - A local case file with the selected gadget, clues found, evidence, score, safety boundaries, verdict, and follow-up task
  - A short explanation of what the evidence proves and what it does not prove
safetyCheckpoints:
  - Purrmission checks context, permissions, product availability, spending, and the final accept/revise/reject decision.
corePath:
  - Choose VS Code, Copilot CLI, or the GitHub Copilot app.
  - Complete the five core clues and record evidence for each.
  - Use progressive hints whenever the next safe step is unclear.
  - Export the case file and choose one bounded follow-up task for Agentic Development.
stretchPath:
  - Earn one capped bonus by trying an unfamiliar approved Copilot harness, investigating the GitHub Copilot app, or completing the policy-safe app walkthrough.
debrief:
  - Which clue changed how you will use Copilot?
  - Which piece of evidence made you accept, revise, or reject the result?
  - What will the software agent inherit from this case file in Agentic Development?
validation:
  - The participant earns at least 40 core points or explains which blocked clue requires facilitator help.
  - Every completed clue has evidence and a Purrmission safety check.
  - The exported case file contains one bounded follow-up task for Agentic Development.
casePacket:
  - Create a new safe local practice repository named `mergewell-field-notes` now; there is no repository to download or find.
  - Create a folder named `mergewell-field-notes` in an approved local location, open it in your selected gadget, initialize it as a Git repository, and add a README.
  - 'GitHub Copilot app route: add the local folder as a project and start a local session. The app keeps local sessions in isolated Git worktrees.'
  - Publishing to GitHub.com is optional and must follow your organization policy; the mission works with the local repository.
  - Copy the supplied `case-file.md` starter into the repository, then ask Copilot to help complete its task.
starterFile:
  name: case-file.md
  content: |-
    # Agent Mergewell Field Notes

    ## Task

    Write a small function, in a language you know, that cleans this list of field-note topics:

    `["Context", "  Safety  ", "context", "", "Models"]`

    ## Success checks

    - Trim extra spaces.
    - Remove empty items.
    - Remove duplicates regardless of capitalization.
    - Preserve the first-seen spelling and order.

    Expected result:

    `["Context", "Safety", "Models"]`

    Explain the proposed result before accepting any change.
harnesses:
  - id: copilot-cli
    title: GitHub Copilot CLI
    description: Work with Copilot from the terminal.
    instructions:
      - Use a focused session in a scratch or approved folder.
      - State the allowed context and expected evidence before asking Copilot to act.
  - id: ide-extension
    title: VS Code
    description: Work with GitHub Copilot in VS Code.
    instructions:
      - Open the `mergewell-field-notes` repository folder in VS Code.
      - Select or attach only the content needed for the current clue.
  - id: copilot-app
    title: GitHub Copilot app
    description: Work with Copilot in its standalone agent-native desktop experience.
    instructions:
      - Add the `mergewell-field-notes` folder as a local project and start a local session.
      - Use the app's files, terminal, plan, and diff canvases to steer and inspect the work.
coreClues:
  - id: pick-your-gadget
    title: Operation Pick Your Gadget
    points: 5
    objectiveRef: Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
    scene: Agent Mergewell reaches for the CLI and IDE gadgets at the same time. Purrmission puts one paw on the launch button.
    actions:
      - Confirm the new `mergewell-field-notes` practice repository is open.
      - Choose VS Code, Copilot CLI, or the GitHub Copilot app.
      - Write down what you chose.
      - Name one thing Copilot may use for this case and one thing it must not touch.
    routes:
      - harness: copilot-cli
        instructions:
          - Open the `mergewell-field-notes` repository folder, then note the CLI version and allowed context.
      - harness: ide-extension
        instructions:
          - Open the `mergewell-field-notes` repository folder, then note VS Code, the Copilot extension, and the allowed file, selection, or workspace.
      - harness: copilot-app
        instructions:
          - Add or open `mergewell-field-notes` as a local project, start a local session, and note the app version, project, and allowed folder.
    evidence: 'Add `My gadget`, `Copilot may use`, and `Copilot must not use` to the case file.'
    hints:
      - Create the `mergewell-field-notes` folder first, then open or add it in your selected gadget.
      - Look for version/help information, the active Copilot extension, or the app's current local project and session.
      - 'Starter: My practice repository is ___. My gadget is ___. Copilot may use ___. Copilot must not use ___.'
    safetyCheckpoint: Use only the new practice repository. If a location, account, or publishing option is unclear, write `confirm with administrator` and do not guess.
  - id: pack-the-clue-bag
    title: Operation Pack the Clue Bag
    points: 10
    objectiveRef: Apply VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes to real engineering tasks
    scene: Mergewell's Clue Wrangler can carry an entire workspace. Stop him from packing the office coffee machine too.
    actions:
      - 'For this clue, your context comes only from your prompt, the supplied `case-file.md`, and optionally one new file for the function.'
      - Explicitly attach or reference `case-file.md` in your selected gadget.
      - Ask Copilot to propose a small function, in a language you know, that meets the four success checks in that file.
      - Record what you gave Copilot and one unrelated file or piece of information you deliberately left out.
    routes:
      - harness: copilot-cli
        instructions:
          - From the practice repository, tell Copilot to use `case-file.md` and, if needed, one new implementation file. Do not assume every file in the folder is needed.
      - harness: ide-extension
        instructions:
          - Attach or reference `case-file.md`; include one new implementation file only if Copilot needs somewhere to write the function.
      - harness: copilot-app
        instructions:
          - In the local session, direct Copilot to use `case-file.md` and, if needed, one new implementation file. Keep unrelated project files out of the request.
    evidence: Add the exact prompt, the files you supplied, and one unrelated item you intentionally excluded.
    hints:
      - Your first context item is your prompt. Your second is the supplied `case-file.md`.
      - Reference or attach `case-file.md`, then add at most one new file where the function can be written.
      - 'Starter: Read `case-file.md` and propose a ___ function that meets all four checks. Use only `case-file.md` and ___. Do not use or change other files.'
    safetyCheckpoint: Do not include secrets, customer code, unrelated files, or broad workspace context.
  - id: right-sized-gadget
    title: Operation Use the Right-Sized Gadget
    points: 10
    objectiveRef: Apply VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes to real engineering tasks
    scene: Mergewell once deployed a shoulder launcher for a job that needed a sticky note. Purrmission still has the incident report.
    actions:
      - Use the same field-notes task for three passes so you can compare increasing levels of action.
      - 'Explain only: ask how to solve the task without changing files.'
      - 'Plan only: ask for implementation steps and validation checks without changing files.'
      - 'Bounded implementation: allow Copilot to write the function in one new file, then inspect the result.'
      - Decide which pass gave you enough help, which one took action, and what additional access the implementation required.
      - Choose the smallest useful interaction for this task and explain when you would stop at explanation or planning instead.
    routes:
      - harness: copilot-cli
        instructions:
          - Run three separate turns—instructions to explain only, plan only, and then make one bounded change. Use named modes only when they are available in the installed version.
      - harness: ide-extension
        instructions:
          - Use VS Code Ask, Plan, and Agent with the same task. Before using Agent, limit its change to one new implementation file.
      - harness: copilot-app
        instructions:
          - Run an explanation-only turn, use Plan for the second pass, and then allow one bounded implementation. Keep the permission mode no broader than that single-file change.
    evidence: Add what each pass produced, which pass first gave you enough help, what extra access implementation required, and your smallest useful choice.
    hints:
      - Start with the words `Explain how to solve this without changing any files.`
      - Next request a plan with validation checks. Only after reviewing both should you allow one new file to be created.
      - 'Starter: ___ was the smallest useful choice because it gave me ___. The implementation needed permission to ___, but it did not need ___.'
    safetyCheckpoint: The implementation pass may change only one new file. Stop if Copilot reaches beyond the supplied task or requests broader access.
  - id: read-the-gauges
    title: Operation Read the Gauges
    points: 10
    objectiveRef: Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution
    scene: A light blinks on Mergewell's console. He says it is probably encouraging. Purrmission would like evidence.
    actions:
      - Find one thing the selected harness can show about context, model, usage, references, or a proposed change.
      - Record exactly what you observed.
      - 'Finish: This tells me ___, but it does not prove ___.'
    routes:
      - harness: copilot-cli
        instructions:
          - Use only controls documented for the installed version; record `not available` when a control is missing.
      - harness: ide-extension
        instructions:
          - Inspect an available reference, model choice, usage view, or changed-content view and note any availability limit.
      - harness: copilot-app
        instructions:
          - Inspect an available model, permission mode, session detail, or canvas and record exactly what the app shows.
    evidence: Add one observed fact and the completed `does not prove` sentence.
    hints:
      - Look for a visible reference, model name, context summary, usage indicator, or proposed-change view.
      - Check the harness menu or help for controls available in your installed version. Missing information is useful when recorded honestly.
      - 'Starter: I observed ___. This tells me ___, but it does not prove ___.'
    safetyCheckpoint: Do not spend credits just to earn points or treat one result as a universal rule.
  - id: seal-the-case
    title: Operation Seal the Case
    points: 15
    objectiveRef: Apply the autonomy spectrum and least-privilege delegation before escalating to agentic patterns
    scene: Mergewell is ready to stamp the case SOLVED. Purrmission hides the stamp until the evidence is verified.
    actions:
      - Compare Copilot's answer or proposed change with all four success checks.
      - Write one thing Copilot was allowed to do and one thing it was not allowed to do.
      - Try the supplied field-note sample or explain how you would check it.
      - Decide to accept, revise, or reject.
      - Explain the evidence behind the decision.
    routes:
      - harness: copilot-cli
        instructions:
          - Review the output and any proposed file or command scope before deciding.
      - harness: ide-extension
        instructions:
          - Review the output and any proposed file, selection, or workspace scope before deciding.
      - harness: copilot-app
        instructions:
          - Inspect the app's diff and any terminal or validation evidence before deciding whether to accept the result.
    evidence: Add the allowed action, prohibited action, check result, decision, and reason.
    hints:
      - Read the four success checks one at a time and compare each with Copilot's result.
      - Check extra spaces, an empty item, the `Context`/`context` duplicate, and the expected order. A failed check means revise or reject.
      - 'Starter: I ___ this result because check ___ showed ___. Copilot was allowed to ___ but not ___.'
    safetyCheckpoint: This case does not need repository-wide write access, network access, destructive commands, or unrelated files.
bonusClues:
  - id: new-territory
    title: Operation New Territory
    points: 10
    objectiveRef: Apply VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes to real engineering tasks
    scene: Mergewell finds an unfamiliar gadget. Surprisingly, Purrmission wants one carefully labeled button pressed.
    actions:
      - Repeat one meaningful step from clues 2–5 in a second approved Copilot harness.
      - Record what felt different and which harness gave clearer evidence.
    evidence: Add the repeated clue, second harness, meaningful result, and comparison.
    hints:
      - Choose one clue you already completed successfully.
      - Repeat only its smallest meaningful step in the second harness.
      - 'Starter: In ___ I observed ___. In ___ I observed ___. The clearer evidence came from ___.'
    safetyCheckpoint: Downloading, installing, signing in, or opening the product alone earns no points.
  - id: app-recon
    title: Operation App Recon
    points: 10
    objectiveRef: Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
    scene: The standalone GitHub Copilot app has opened a new control room. Mergewell needs a careful field test.
    actions:
      - If the app was not your primary gadget, add `mergewell-field-notes` as a local project and start a local session.
      - Repeat one meaningful step from clues 2–5 and inspect the resulting plan, file, terminal, or diff canvas.
      - Explain what the app made easier to steer or verify.
    evidence: Add the repeated clue, canvas evidence, and comparison with the primary gadget.
    hints:
      - Choose one clue you already completed and repeat only its smallest meaningful step.
      - Inspect the plan, Files, terminal, or diff canvas instead of trusting the chat summary alone.
      - 'Starter: The app showed ___ in the ___ canvas. That helped me verify ___ better than ___.'
    safetyCheckpoint: Downloading, installing, signing in, adding a project, or opening a session alone earns no bonus points.
  - id: respect-the-perimeter
    title: Operation Respect the Perimeter
    points: 10
    objectiveRef: Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
    scene: Purrmission blocks the installation. Going around her is not a bonus objective.
    actions:
      - Use the facilitator's GitHub Copilot app walkthrough.
      - Identify one app canvas you would use and one question you would ask before accepting a change.
      - Explain why bypassing the restriction would be wrong.
    evidence: Add the capability, review question, and no-bypass explanation.
    hints:
      - Watch how the app exposes plans, files, terminal activity, or diffs in a canvas.
      - Ask what evidence you would need before accepting the session result.
      - 'Starter: I would use ___ to check ___. I would not bypass the restriction because ___.'
    safetyCheckpoint: Respect device policy, accessibility, Copilot plan, network, and setup constraints.
completionPoints: 40
bonusPointCap: 10
carryForward:
  artifact: Agent Mergewell case file
  produces:
    - Chosen Copilot gadget
    - Clues found and total score
    - Exact request and success checklist
    - Shared and excluded context
    - Interaction choice and reason
    - Gauge reading and evidence limit
    - Permission boundary and final verdict
    - One bounded follow-up task for Agentic Development
  consumes: []
  fallback: A facilitator-provided starter case file supports legitimate later-module entry without replacing the normal progressive path.
leaderboard:
  optional: true
  aliasOnly: true
  instructions:
    - Scoring stays in the local scorecard unless the participant opts into the external alias leaderboard.
    - Use a participant-selected alias and self-reported total only.
    - The facilitator may provide an event-specific leaderboard outside the repository.
    - No speed score or time-based tie-breaker applies.
    - Public ranking and swag are optional; the mission never promises a prize.
status: draft
---

# Agent Mergewell's Foundations Scavenger Hunt

### 🎯 MISSION

## Mission goal

Build a verified Copilot case file by choosing a gadget, finding five operating clues, proving safe decisions, and carrying one bounded task into Agentic Development.

Hints are always available and never reduce the score. Asking for help is part of safe, effective engineering.
