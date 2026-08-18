# Foundations Mission Scavenger Hunt Contract

Status: approved by workshop owner on 2026-08-07; partially superseded by workshop owner on 2026-08-18

Initiative: `foundations-mission-scavenger-hunt`

## Implementation status (2026-08-18)

The workshop owner approved a revised Foundations mission on 2026-08-18. The
implemented mission at
`workshops/ghcp-dev-hack/content/missions/foundations/context-and-prompts.md`
is now authoritative for clue titles, clue tasks, prompts, hints, the starter
file decision, and body guidance. It replaces the five `Operation ...` clue
sections below with five prompt-driven experiments, drops the copyable
`case-file.md` starter in favour of participant-authored context, and adds a
scoring table, glossary, and 45-minute timing guide.

This contract remains authoritative for the participant promise, harness
parity, the point bands, and the completion threshold. Those are unchanged and
still match the leaderboard kit:

- Core clues are worth 5, 10, 10, 10, and 15 points, for a core maximum of 50
- Mission completion threshold is 40 core points
- Optional bonus work is capped at 10 points
- Hints are always free and never reduce points

Sections below that describe clue titles, clue tasks, or the `case-file.md`
starter are retained for history and are superseded by the implemented mission.

## Mission goal

Build a verified Copilot case file by choosing an approved harness, finding five operating clues, proving safe decisions, and carrying one bounded task into Agentic Development.

## Participant promise

- One continuous, individual, self-paced mission
- 45 minutes total
- One new local practice repository; no existing participant or customer repository required
- Same core clues, points, completion threshold, and evidence across supported Copilot harnesses
- Local scorecard works without a leaderboard or swag

## Choose your field gadget

Agent Mergewell has three field tools ready. Participants choose how they want to start:

- VS Code
- GitHub Copilot CLI
- GitHub Copilot app

The mission page presents all three as large cards participants can choose with a mouse or keyboard. Choosing one reveals short instructions for that route, and participants may switch at any time.

The GitHub Copilot app is its own standalone, agent-native desktop experience, not an IDE extension or GitHub Desktop. Its route keeps the complete Copilot session in the app and uses inspectable plan, file, terminal, and diff canvases. Participants can complete the same core clues through any of the three routes.

## Local practice repository

Create a new safe local practice repository named `mergewell-field-notes` now. There is no repository to download or find, and participants must not use an existing work or customer repository.

Create a folder named `mergewell-field-notes` in an approved local location, open it in the selected gadget, initialize it as a Git repository, and add a README. For the GitHub Copilot app route, add that folder as a local project and start a local session; the app keeps local sessions in isolated Git worktrees.

Publishing to GitHub.com is optional and must follow organization policy; the mission works locally.

Copy the supplied `case-file.md` starter into the repository. The mission page provides one button that copies this complete content:

```markdown
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
```

**Sample input:**

- `["Context", "  Safety  ", "context", "", "Models"]`

**Success checks:**

- Extra spaces are trimmed.
- Empty items are removed.
- Duplicates are removed regardless of capitalization.
- The first-seen spelling and order are preserved.
- The participant can explain the proposed result before accepting any change.

**Expected result:**

- `["Context", "Safety", "Models"]`

Participants may substitute a similarly small, non-confidential practice task when it preserves the same evidence contract.

## Timing

| Phase | Minutes |
| --- | ---: |
| Mission briefing and field-kit choice | 5 |
| Five-clue core hunt | 25 |
| Optional bonus route | 5 |
| Case-file export | 5 |
| Individual/group debrief | 5 |
| **Total** | **45** |

## Core clues

Core maximum: 50 points. Mission completion threshold: 40 points.

Every core clue includes a **Need a hint?** control. Hints reveal one at a time: first a gentle nudge, then clearer direction, then a starter example. Using hints does not reduce points; asking for help is part of safe, effective engineering.

### FND-CLUE-01 — Operation Pick Your Gadget (5 points)

> Agent Mergewell has reached for the CLI and the IDE gadget at the same time. Purrmission has placed one paw on the launch button.

**What to do**

1. Confirm the new `mergewell-field-notes` practice repository is open.
2. Choose VS Code, Copilot CLI, or the GitHub Copilot app.
3. Write down what you chose.
4. Name one thing Copilot may use for this case and one thing it must not touch.

**Gadget hint**

- CLI: open the `mergewell-field-notes` repository folder, then note the CLI version and allowed context.
- VS Code: open the `mergewell-field-notes` repository folder, then note the Copilot extension and allowed file, selection, or workspace.
- GitHub Copilot app: add or open `mergewell-field-notes` as a local project, start a local session, and note the app version, project, and allowed folder.

**Add to your case file:** `My gadget`, `Copilot may use`, and `Copilot must not use`.

**Need a hint?**

1. Create the `mergewell-field-notes` folder first, then open or add it in your selected gadget.
2. Look for version/help information, the active Copilot extension, or the app's current local project and session.
3. Starter: `My practice repository is ___. My gadget is ___. Copilot may use ___. Copilot must not use ___.`

🐈‍⬛ **Purrmission check:** Use only the new practice repository. If a location, account, or publishing option is unclear, write `confirm with administrator` and do not guess.

### FND-CLUE-02 — Operation Pack the Clue Bag (10 points)

> Mergewell's Clue Wrangler can carry an entire workspace. Your job is to stop him from packing the office coffee machine too.

**What to do**

1. For this clue, your context comes only from your prompt, the supplied `case-file.md`, and optionally one new file for the function.
2. Explicitly attach or reference `case-file.md` in your selected gadget.
3. Ask Copilot to propose a small function, in a language you know, that meets the four success checks in that file.
4. Record what you gave Copilot and one unrelated file or piece of information you deliberately left out.

**Gadget hint**

- CLI: from the practice repository, tell Copilot to use `case-file.md` and, if needed, one new implementation file. Do not assume every file in the folder is needed.
- VS Code: attach or reference `case-file.md`; include one new implementation file only if Copilot needs somewhere to write the function.
- GitHub Copilot app: in the local session, direct Copilot to use `case-file.md` and, if needed, one new implementation file. Keep unrelated project files out of the request.

**Add to your case file:** Your exact prompt, the files you supplied, and one unrelated item you intentionally excluded.

**Need a hint?**

1. Your first context item is your prompt. Your second is the supplied `case-file.md`.
2. Reference or attach `case-file.md`, then add at most one new file where the function can be written.
3. Starter: `Read case-file.md and propose a ___ function that meets all four checks. Use only case-file.md and ___. Do not use or change other files.`

🐈‍⬛ **Purrmission check:** No secrets, customer code, unrelated files, or broad workspace context.

### FND-CLUE-03 — Operation Use the Right-Sized Gadget (10 points)

> Mergewell once deployed a shoulder launcher for a job that needed a sticky note. Purrmission still has the incident report.

**What to do**

1. Use the same field-notes task for three passes so you can compare increasing levels of action.
2. Explain only: ask how to solve the task without changing files.
3. Plan only: ask for implementation steps and validation checks without changing files.
4. Bounded implementation: allow Copilot to write the function in one new file, then inspect the result.
5. Decide which pass gave you enough help, which one took action, and what additional access the implementation required.
6. Choose the smallest useful interaction for this task and explain when you would stop at explanation or planning instead.

**Gadget hint**

- CLI: run three separate turns—instructions to explain only, plan only, and then make one bounded change. Use named modes only when they are available in the installed version.
- VS Code: use Ask, Plan, and Agent with the same task. Before using Agent, limit its change to one new implementation file.
- GitHub Copilot app: run an explanation-only turn, use Plan for the second pass, and then allow one bounded implementation. Keep the permission mode no broader than that single-file change.

**Add to your case file:** What each pass produced, which pass first gave you enough help, what extra access implementation required, and your smallest useful choice.

**Need a hint?**

1. Start with the words `Explain how to solve this without changing any files.`
2. Next request a plan with validation checks. Only after reviewing both should you allow one new file to be created.
3. Starter: `___ was the smallest useful choice because it gave me ___. The implementation needed permission to ___, but it did not need ___.`

🐈‍⬛ **Purrmission check:** The implementation pass may change only one new file. Stop if Copilot reaches beyond the supplied task or requests broader access.

### FND-CLUE-04 — Operation Read the Gauges (10 points)

> A light is blinking on Mergewell's console. He says it is "probably encouraging." Purrmission would like evidence.

**What to do**

1. Find one thing your Copilot harness can show you about its context, selected model, usage, references, or proposed change.
2. Record exactly what you observed.
3. Finish this sentence: `This tells me ___, but it does not prove ___.`

**Gadget hint**

- CLI: use only controls documented for your installed version. If a control is missing, record the version and write `not available`.
- VS Code: inspect an available reference, model choice, usage view, or changed-content view and note any plan or availability limit.
- GitHub Copilot app: inspect an available model, permission mode, session detail, or canvas and record exactly what the app shows.

**Add to your case file:** One observed fact and the completed `does not prove` sentence.

**Need a hint?**

1. Look for any visible reference, model name, context summary, usage indicator, or proposed-change view.
2. Check the harness menu or help for controls available in your installed version. Missing information is still a useful finding when you record it honestly.
3. Starter: `I observed ___. This tells me ___, but it does not prove ___.`

🐈‍⬛ **Purrmission check:** Do not spend credits just to earn points, and do not treat one result as a universal rule.

### FND-CLUE-05 — Operation Seal the Case (15 points)

> Mergewell is ready to stamp the case `SOLVED`. Purrmission has hidden the stamp until you verify the evidence.

**What to do**

1. Compare Copilot's answer or proposed change with all four success checks.
2. Write one thing Copilot was allowed to do and one thing it was not allowed to do.
3. Try the supplied field-note sample or explain how you would check it.
4. Decide: accept, revise, or reject.
5. Explain the evidence behind your decision.

**Gadget hint**

- CLI: review the output and any proposed file or command scope before deciding.
- VS Code: review the output and any proposed file, selection, or workspace scope before deciding.
- GitHub Copilot app: inspect the diff and any terminal or validation evidence before deciding whether to accept the result.

**Add to your case file:** Allowed action, prohibited action, check result, decision, and reason.

**Need a hint?**

1. Read the four success checks one at a time and compare each with Copilot's result.
2. Check extra spaces, an empty item, the `Context`/`context` duplicate, and the expected order. A failed check means revise or reject.
3. Starter: `I ___ this result because check ___ showed ___. Copilot was allowed to ___ but not ___.`

🐈‍⬛ **Purrmission check:** The small case does not need repository-wide write access, network access, destructive commands, or unrelated files.

## Optional bonus routes

Bonus cap: 10 points total. Complete at most one route for score.

### BONUS-HARNESS — Operation New Territory (10 points)

> Mergewell has found an unfamiliar gadget. Surprisingly, Purrmission wants you to press one carefully labeled button.

Repeat one meaningful step from clues 2–5 in a second approved Copilot harness. Record what felt different and which harness gave you clearer evidence. Downloading, installing, signing in, or opening the product earns no points.

### BONUS-APP — Operation App Recon (10 points)

> The standalone GitHub Copilot app has opened a new control room. Mergewell needs a careful field test.

If the app was not your primary gadget, add `mergewell-field-notes` as a local project, start a local session, repeat one meaningful step from clues 2–5, and inspect the resulting plan, file, terminal, or diff canvas. Explain what the app made easier to steer or verify. Downloading, installing, signing in, adding a project, or opening a session alone earns no points.

### BONUS-CONSTRAINED — Operation Respect the Perimeter (10 points)

> Purrmission has blocked the installation. Going around her is not a bonus objective.

If policy, accessibility, Copilot plan, network access, or setup prevents a second harness or the GitHub Copilot app, use the facilitator's app walkthrough. Identify one canvas you would use, one question you would ask before accepting a change, and why bypassing the restriction would be the wrong move.

## Carry-forward case file

The scorecard exports:

- Participant-selected alias, optional and local only
- Chosen Copilot gadget
- Whether the GitHub Copilot app route or bonus was completed
- Clues found and total score
- The exact request and its success checklist
- What was shared with Copilot and what was kept out
- Why the participant chose Ask, Plan, inline help, or Agent
- The gauge reading and what it did not prove
- What Copilot was and was not allowed to do
- The final check and accept/revise/reject decision
- One small follow-up task for the next mission

In Agentic Development, participants reopen this same case file, hand the follow-up task to a software agent, and add what changed, what permissions were used, how they checked the result, and whether they accepted it. In Advanced Workflows, they reopen the expanded case again and add how work was coordinated, how integrations were checked, how problems were investigated, and what would be needed to run the solution safely.

For legitimate later-module entry, the facilitator provides a clearly labeled starter case file with the same fields. The starter is a fallback, not the normal progressive path.

## Scorecard and leaderboard

- Browser state remains local to the participant's device.
- The portal stores no account, identity, repository content, or evidence remotely.
- Participants can reset state and copy/export a plain-text case file.
- A facilitator may provide an event-specific shared leaderboard outside the repository.
- Leaderboard participation uses a participant-selected alias and self-reported total only.
- Public ranking and swag are optional; the mission never promises a prize.

## Final slide contract

Exact title: `Your Mission Starts Now`

Draft native bullets:

- Choose VS Code, Copilot CLI, or the GitHub Copilot app
- Hunt five clues and bank evidence with every point
- Try another Copilot gadget for bonus evidence
- Carry one bounded case file into Agentic Development

Presenter-note contract: Explain that this is one continuous 45-minute mission rather than four independent cases. Ask participants to choose VS Code, Copilot CLI, or the standalone GitHub Copilot app, then follow Agent Mergewell's clues while Purrmission checks their evidence and safety decisions. Clarify that the app is a complete agent-native desktop experience with local sessions in isolated Git worktrees and inspectable canvases; it does not hand Copilot work to VS Code. End by telling participants that their exported case file becomes the starting point for the Agentic Development mission, with leaderboard participation and swag always optional. [Sources: Foundations mission artifact; `github/github` “GitHub Copilot app” repository README and v1.1.5 release notes, reviewed 2026-08-07.]

Visual: reuse the approved `assets/images/foundations/mission-readiness.png`.

## Source review

| Source | Reviewed | Material use and caveat |
| --- | --- | --- |
| [GitHub Copilot app](https://github.com/github/app) | 2026-08-07 | Official product repository; verifies the standalone agent-native desktop experience, local sessions in isolated Git worktrees, and plan/files/terminal/diff canvases |
| [GitHub Copilot app v1.1.5](https://github.com/github/app/releases/tag/v1.1.5) | 2026-08-07 | Verifies local-clone onboarding, folder-based projects, Plan mode, permission modes, and current canvas behavior; exact UI remains version-sensitive |
| [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli) | 2026-08-03 existing review | Supports current CLI setup terminology; installed-version differences must be recorded rather than guessed |
| [Use chat in VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) | 2026-08-03 existing review | Supports IDE context references and chat/agent behavior; exact controls remain release-specific |

## Human decision

The workshop owner approved this exact mission, scoring, carry-forward, leaderboard, character voice, progressive hint, and final-slide contract on 2026-08-07. Approval authorizes typed schema/catalog/portal implementation and Foundations source/deck edits; it does not authorize push, release, deployment, or publication.
