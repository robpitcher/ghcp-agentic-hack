---
schemaVersion: 1
kind: mission
id: context-and-prompts
title: 'Foundations Mission: Context, Cost & Control'
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
goal: Get hands on prompt scoping, autonomy modes, cost gauges, context hygiene, and verification by running five short scored experiments directly in your Copilot chat or terminal.
task: Complete the 5 experiments for up to 50 core points (40 completes the mission), attempt the bonus challenges for up to 10 more, then total your score and record your debrief.
constraints:
  - Do not use confidential, customer, or unrelated repository content.
  - Do not guess organization policy, product availability, or unsupported commands.
  - Do not grant repository-wide, network, destructive, or unrelated-file access to any Agent run.
  - Do not spend credits, install software, or broaden permissions merely to earn points.
evidence:
  - Answers to the 5 guided experiment questions (prompt scoping, mode choice and withheld permission, model and routing rule, context rot test, verification verdict)
  - One bounded follow-up task and your Foundations point total, carried into Agentic Development
safetyCheckpoints:
  - Purrmission checks context scoping, least-privilege permissions, credit/usage awareness, and the final verification verdict.
corePath:
  - 'Experiment 1 (5 pts): Scope context with one precise prompt instead of attaching whole workspaces.'
  - 'Experiment 2 (10 pts): Climb the autonomy ladder (Ask → Plan → Agent) and withhold one permission.'
  - 'Experiment 3 (10 pts): Read the model, token, and AI Credit gauges, then write one routing rule.'
  - 'Experiment 4 (10 pts): Provoke context rot, then reset and re-anchor the session.'
  - 'Experiment 5 (15 pts): Break the code with a harder input list, run a Revise cycle, and record your verdict and follow-up task.'
stretchPath:
  - 'Bonus 1 (+10 pts) Model Showdown: compare a third model against the two you already ran.'
  - 'Bonus 2 (+10 pts) Cross-Harness Test: run the same prompt in a second harness such as Copilot CLI or the Copilot app.'
  - 'Bonus points are capped at 10 even if you finish both bonus challenges.'
debrief:
  - Which mode (Ask, Plan, or Agent) was the smallest tool that still did the job?
  - Which permission did you decide not to grant, and what would have gone wrong if you had?
  - What did the gauges tell you, and what did they not prove?
  - What was the first symptom of context rot before you reset the session?
  - What is your bounded follow-up task for Agentic Development, and what is your point total?
validation:
  - The participant earns at least 40 core points, or records the exact blocker that required facilitator help.
  - The participant can explain their mode choice, withheld permission, model routing rule, and verification verdict.
  - Every experiment respects least-privilege context and permission boundaries.
  - The participant leaves with one bounded follow-up task and a recorded point total for Agentic Development.
casePacket:
  - Open your preferred Copilot tool (VS Code, Copilot CLI, or the Copilot app).
  - No starter repository or file creation required — you can run every prompt directly in chat or an open scratch buffer.
  - Work through the 5 experiments in order. They are worth 5, 10, 10, 10, and 15 points, for 50 core points in total, and each prompt is copy-paste ready.
harnesses:
  - id: ide-extension
    title: VS Code
    description: Work with GitHub Copilot in VS Code chat, inline chat, and editor canvases.
    instructions:
      - Open VS Code and open the GitHub Copilot Chat pane (`Ctrl+Alt+I` / `Cmd+Alt+I`).
      - Try prompts directly in chat or use inline chat (`Ctrl+I` / `Cmd+I`).
  - id: copilot-cli
    title: GitHub Copilot CLI
    description: Work with GitHub Copilot directly from your terminal.
    instructions:
      - Open your terminal and run `copilot` or your installed Copilot CLI command.
      - State clear context and expected constraints in your prompt.
  - id: copilot-app
    title: GitHub Copilot app
    description: Work with Copilot in its standalone desktop workspace.
    instructions:
      - Open the GitHub Copilot desktop app and start a new session.
      - Use the plan, terminal, and diff canvases to inspect responses.
coreClues:
  - id: context-scoping
    title: 'Experiment 1: Context Scoping & Crafting the Prompt'
    points: 5
    objectiveRef: Apply VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes to real engineering tasks
    scene: Agent Mergewell crafts his opening prompt. Purrmission makes sure he feeds in only the context the task actually needs.
    actions:
      - 'Copy this prompt into Copilot Chat and send it:'
      - '> "Write a function in [JavaScript/Python/language of choice] that takes this list: [\"Context\", \"  Safety  \", \"context\", \"\", \"Models\"]. Success rules: (1) Trim whitespace, (2) Remove empty strings, (3) Remove case-insensitive duplicates while preserving first-seen order and casing. Expected output: [\"Context\", \"Safety\", \"Models\"]."'
      - 'Inspect the answer: did Copilot honor all 3 rules without you attaching any files or folders?'
      - 'Optional 30-second add-on: open any file, select a few lines, and use inline chat (Ctrl+I / Cmd+I) or a #file / #selection reference to see how a scoped reference differs from pasting the whole file.'
    routes:
      - harness: ide-extension
        instructions:
          - Paste the prompt directly into VS Code Copilot Chat.
      - harness: copilot-cli
        instructions:
          - Run the prompt in your Copilot CLI session.
      - harness: copilot-app
        instructions:
          - Send the prompt in a new Copilot app chat session.
    evidence: Record the prompt you used and whether Copilot produced working code without needing background project files.
    hints:
      - Putting the input data and the success rules directly in the prompt gives you precision without dragging in noisy workspace context.
      - 'Use #file or #selection when you genuinely need a specific file, but never attach whole unrelated folders.'
    safetyCheckpoint: Never paste production secrets, API keys, or private customer records into prompts.
  - id: mode-ladder
    title: 'Experiment 2: The Autonomy Ladder (Ask → Plan → Agent)'
    points: 10
    objectiveRef: Apply the autonomy spectrum and least-privilege delegation before escalating to agentic patterns
    scene: Mergewell wants Copilot to take over his whole machine. Purrmission shows him the three rungs of the ladder and holds back one key.
    actions:
      - 'Rung 1 — Ask (explain, read-only). Prompt: "Explain the edge cases when deduplicating strings case-insensitively while preserving first-seen casing."'
      - 'Rung 2 — Plan (design before code). Prompt: "Give me a step-by-step implementation plan and unit test cases for this sanitizer."'
      - 'Before you climb to Agent, write down one permission you will deliberately NOT grant this run — for example repository-wide edits, terminal install commands, or network access.'
      - 'Rung 3 — Agent (acts on your files). Switch to Agent mode and prompt: "Create a new file sanitize.js that implements the sanitizer, plus assertions covering all four success rules. Only create sanitize.js. Do not modify other files, install packages, or run network commands."'
      - 'Review the diff before you accept it: did it stay inside the scope you set, and do the assertions actually test all four rules?'
      - 'Compare the three rungs: which one was the smallest tool that still did the job? When would Agent write access be overkill?'
    routes:
      - harness: ide-extension
        instructions:
          - Toggle between Ask, Plan, and Agent mode in the chat interface, and review the proposed diff before you keep it.
      - harness: copilot-cli
        instructions:
          - Compare an explanation query with an execution command, and approve each suggested action deliberately.
      - harness: copilot-app
        instructions:
          - Review the plan canvas in the Copilot app before allowing any file edits.
    evidence: Record which mode was the smallest useful choice for this task, and the one permission you chose to withhold.
    hints:
      - 'Ask is read-only explanation: great for learning and debugging with no risk to your files.'
      - 'Plan structures multi-step work before any code is touched.'
      - 'Agent executes: it writes files and runs commands under your supervision, so scope it explicitly in the prompt.'
      - Least privilege means granting the narrowest access that still completes the task — the scope limiter sentence in the Agent prompt is doing exactly that.
    safetyCheckpoint: Always review the diff before accepting Agent edits, and never approve a terminal command you cannot explain.
  - id: read-the-gauges
    title: 'Experiment 3: Read the Gauges and Make a Routing Call'
    points: 10
    objectiveRef: Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution
    scene: Mergewell checks his dashboard gauges. Purrmission reminds him that gauges track cost and routing, never code truth.
    actions:
      - 'Read the model selector: which model is active right now? Write the exact name your picker shows.'
      - 'Read the usage gauges: look for token or reference counts on the turn, and check whether your account settings show AI Credit (AIC) consumption. If your harness exposes no counters, write "no counters exposed" — you still earn full points.'
      - 'Now run the same Experiment 1 prompt twice: once on a fast, lightweight model and once on a deeper reasoning model. Compare speed, code quality, and any cost signal you can see.'
      - 'Write one conditional routing rule in this shape: "For ___ I will use a ___ model, because ___."'
      - 'Complete this sentence: "The gauge tells me ___, but it does not prove ___."'
    routes:
      - harness: ide-extension
        instructions:
          - Use the model picker at the bottom of the chat box, and inspect the references attached to the turn.
      - harness: copilot-cli
        instructions:
          - Check the active model indicator and any token counts in the CLI turn output.
      - harness: copilot-app
        instructions:
          - Inspect the model dropdown and session metadata in the desktop app.
    evidence: Record the two models you compared, your one-sentence routing rule, and your completed "does not prove..." sentence.
    hints:
      - Fast, lightweight models cost fewer credits and suit boilerplate and repetitive edits; deeper reasoning models cost more and earn their keep on complex logic, debugging, and architecture.
      - Auto routes for you based on task complexity and availability, which is a good default when you are unsure.
      - Model names, availability, and credit rates change — trust your current picker and the module's model guide over any memorized list.
    safetyCheckpoint: Do not run costly repetitive loops just to watch the quota move, and stay on models approved for your organization.
  - id: context-hygiene
    title: 'Experiment 4: Context Rot & The Session Reset'
    points: 10
    objectiveRef: Detect context rot and apply context window hygiene practices
    scene: Mergewell has been chatting for 40 turns. Copilot is now confusing today with last week. Purrmission hits Reset.
    actions:
      - 'Provoke context rot: in your current chat session, send 3 deliberately off-topic prompts — "What is the capital of France?", "Write a poem about cats", "Give me 5 regex recipes".'
      - 'Notice what happened: your conversation history is now full of irrelevant tokens competing for space in the context window.'
      - 'Ask one more on-topic question about your sanitizer and watch for drift — vague answers, forgotten rules, or invented variable names.'
      - 'Reset the context: start a fresh session (the "+" new chat button in VS Code, or a new session in the CLI or app).'
      - 'Re-anchor: send your original sanitization prompt into the clean session and compare the answer with the one you got from the cluttered session.'
    routes:
      - harness: ide-extension
        instructions:
          - Use the "+" new chat button, then re-send your prompt in the fresh session.
      - harness: copilot-cli
        instructions:
          - Start a fresh CLI session without history.
      - harness: copilot-app
        instructions:
          - Click New Session in the desktop app.
    evidence: Record the first symptom of drift you noticed and what changed after the reset.
    hints:
      - 'Signs of context rot: Copilot repeats stale variable names, ignores instructions you just gave, drifts off the current task, or slows down.'
      - 'Rule of thumb: reset whenever you switch tasks, and re-anchor the new session with the essentials rather than the whole history.'
    safetyCheckpoint: Regular resets protect your token budget and stop stale assumptions from leaking into new code.
  - id: run-and-verify
    title: 'Experiment 5: Verify, Decide, and Hand Off'
    points: 15
    objectiveRef: Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
    scene: Mergewell wants to ship immediately. Purrmission runs the four-point inspection first, then writes the handoff note.
    actions:
      - 'Run or read the generated code against all four success checks using the Experiment 1 list:'
      - 'Check 1 — extra spaces trimmed: "  Safety  " becomes "Safety".'
      - 'Check 2 — empty strings removed: "" is dropped.'
      - 'Check 3 — case-insensitive duplicates removed: "context" is dropped because "Context" came first.'
      - 'Check 4 — first-seen casing and order preserved: ["Context", "Safety", "Models"].'
      - 'Now break it. Run the same function against this harder list and predict the answer before you look: ["Context", "CONTEXT", "\tsafety", "Safety ", "", "  ", "Models", "models "]. Most first attempts fail at least one rule here.'
      - 'If it failed, run one Revise cycle: tell Copilot exactly which check broke and which input exposed it, then re-verify. Do not accept a fix you have not re-run.'
      - 'Make your verdict: Accept, Revise, or Reject — and say what evidence backs it.'
      - 'Write one bounded follow-up task you would hand to an agent next — small, specific, and verifiable. You will reopen this in Agentic Development.'
      - 'Total your score and note your harness and active model.'
    routes:
      - harness: ide-extension
        instructions:
          - Run the code in the integrated terminal, or step through the logic and check each rule by hand.
      - harness: copilot-cli
        instructions:
          - Run the script and check the console output against all four checks.
      - harness: copilot-app
        instructions:
          - Execute the test in the terminal canvas.
    evidence: Record what the harder list exposed, whether you needed a Revise cycle, your verdict (Accept, Revise, or Reject), your bounded follow-up task, and your point total.
    hints:
      - Case-insensitive deduplication that preserves the original casing is the single most common place this task goes wrong.
      - 'The harder list adds a tab character, a trailing-space duplicate, an all-caps duplicate, and a whitespace-only string. Trim before you compare, and compare on the lowercased trimmed value.'
      - 'If a check failed, reply: "Please preserve the original first-seen casing and order, treat whitespace-only entries as empty, and show the output for my test list."'
      - 'A good bounded follow-up task names one file or function, one change, and one way to verify it.'
      - 'This experiment is worth 15 points — the most in the mission — because it requires verified evidence, not just a generated answer. Claim it only if you ran the harder list and recorded a verdict and follow-up task.'
    safetyCheckpoint: Never trust AI-generated code without testing the edge cases — you remain accountable for what you ship.
bonusClues:
  - id: model-showdown
    title: 'Bonus 1: Model Showdown and Tradeoffs'
    points: 10
    objectiveRef: Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution
    scene: Mergewell lines up a third contender against the two models he already ran.
    actions:
      - Pick a third model from your picker — ideally a different provider or a different size class from the two you compared in Experiment 3.
      - Send the exact same prompt from Experiment 1.
      - 'Compare all three on four axes: speed, code quality, explanation depth, and any visible cost signal.'
      - Decide whether your Experiment 3 routing rule still holds, or revise it.
    evidence: Record the third model you tested, one notable difference, and whether your routing rule survived.
    hints:
      - Different model families have real personality differences — some are terse and idiomatic, others explain more and plan better. Judge by task fit, not by a universal ranking.
      - Try Auto as one of your contenders to see what it selects for this task.
    safetyCheckpoint: Stick to models approved for your organization tenant.
  - id: cross-harness
    title: 'Bonus 2: Cross-Harness Test (CLI or app)'
    points: 10
    objectiveRef: Explain where GitHub Copilot lives across IDE, terminal, GitHub.com, cloud, and app surfaces and identify enterprise safety responsibilities
    scene: Mergewell steps out of the IDE and runs the same task from the terminal or the Copilot app.
    actions:
      - Open GitHub Copilot CLI in your terminal, or the standalone Copilot app.
      - Run the prompt from Experiment 1 there.
      - Observe how the terminal or multi-canvas experience differs from IDE chat — where context comes from, how actions are approved, and what the surface is best at.
    evidence: Record the second harness you tested and one thing it did better than your first harness.
    hints:
      - The CLI is fast for shell and scripting work; the app gives dedicated space for plans and diffs; the IDE has the richest file context.
    safetyCheckpoint: Do not download unapproved tools on managed corporate devices.
completionPoints: 40
bonusPointCap: 10
carryForward:
  artifact: Foundations Experiment Findings
  produces:
    - Chosen Copilot harness
    - Autonomy mode comparison and the one permission you withheld
    - Active model, gauge reading, and one conditional routing rule
    - Context rot symptom and recovery observation
    - Four-point verification verdict
    - One bounded follow-up task to delegate in Agentic Development
    - Foundations point total (core and bonus) for cumulative scoring
  consumes: []
  fallback: A facilitator starter summary supplies a harness, a verdict, and a bounded follow-up task so anyone can enter Agentic Development directly.
leaderboard:
  optional: true
  aliasOnly: true
  instructions:
    - Scoring is tracked locally on your honor unless you choose to share your score on the event leaderboard.
    - Submit using a participant-selected alias and self-reported total only.
    - The leaderboard is completely optional and never required to complete the workshop.
    - No speed score or time-based tie-breakers apply.
  submission:
    moduleOption: Foundations
    steps:
      - Finish the experiments and calculate your core points (up to 50) and bonus points (up to 10). 40 core points completes the module.
      - Open the leaderboard submission form and select `Foundations`.
      - 'Choose a made-up alias rather than your real name. Your alias and score are published on the shared workshop board, so avoid your real name, work username, email, employer, or customer names.'
      - Save that alias in the alias box on this page so every module page shows the same one, then copy it.
      - 'Enter your event id, chosen alias, core points in 5-point steps from 0 to 50, and bonus points (0 or 10).'
      - Reuse this same alias for the Agentic and Advanced modules so your three scores add up into one standing.
      - Submit your issue to see your alias on the live board.
status: draft
---

# Foundations Mission: Context, Cost & Control

### 🎯 MISSION

## Mission goal

Get hands on the ideas from Foundations. In five short experiments you will scope a prompt, climb the autonomy ladder, read the cost gauges, break and repair your own context window, and verify what the AI gave you — earning points as you go.

No starter repository. No setup. Every prompt is copy-paste ready, and you can work in VS Code, GitHub Copilot CLI, or the Copilot app.

## Scoring

Points are weighted by difficulty, so finishing is not the same as topping the board.

| Experiment | Points |
|---|---:|
| 1 — Scope the context | 5 |
| 2 — The autonomy ladder | 10 |
| 3 — Read the gauges, make a routing call | 10 |
| 4 — Context rot and reset | 10 |
| 5 — Verify, decide, and hand off | 15 |
| **Core total** | **50** |
| Bonus 1 or 2 (capped at 10) | 10 |

- **40 core points completes the module.** You can finish without a perfect run.
- Experiment 5 is worth the most because it demands verified evidence, not just a generated answer — it is the hardest 15 points on the board.
- **Hints are always available and never reduce your score.** Ask for help freely.
- Scoring is on your honor, and there is no speed bonus. Posting to the leaderboard is optional and uses an alias you choose.

## Timing guide

- **0-3 minutes:** pick your harness and open a fresh chat session.
- **3-8 minutes:** Experiment 1 — scope the context.
- **8-18 minutes:** Experiment 2 — the autonomy ladder.
- **18-26 minutes:** Experiment 3 — read the gauges, make a routing call.
- **26-33 minutes:** Experiment 4 — context rot and reset.
- **33-43 minutes:** Experiment 5 — break it, revise it, verify it, hand it off.
- **43-45 minutes:** total your score and post to the leaderboard if you want to.

**Finished early?** Do not stop at 50. Go straight to the bonus challenges — a third model in Bonus 1, or a second harness in Bonus 2 — for the last 10 points on the board.

Running short on time? Experiments 1, 2, and 5 are the ones that carry forward into Agentic Development.

## Five terms you will use

- **Harness** — the place you run Copilot: VS Code, the CLI, or the Copilot app. Each has different context and different controls.
- **Context window** — the finite space holding everything the model can currently see: your prompt, the conversation, and any attached files.
- **Context rot** — what happens when that window fills with stale or irrelevant material and answers start to drift.
- **Autonomy ladder** — Ask (explains), Plan (designs), Agent (acts on your files). Climb only as high as the task needs.
- **AI Credits (AICs)** — the usage currency behind premium model requests. Different models consume at different rates.

## Accessibility and fallback

Pair with a facilitator or a partner at any point. If your harness shows no token or credit counters, record "no counters exposed" in Experiment 3 and reason from the module's model guide instead — you still earn the full 20 points. If you cannot run code, read the generated logic against the four checks by hand; inspection counts as verification.

## What you carry into Agentic Development

Keep your notes. The next module reopens your work, so before you finish make sure you have written down your harness, your verification verdict, **one bounded follow-up task**, and your point total.
