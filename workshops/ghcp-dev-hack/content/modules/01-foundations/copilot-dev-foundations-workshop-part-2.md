# Module 1: Foundations — Workshop Guide — Part 2

> **Slide generation instructions**:
>
> - Brand the deck with GitHub and Microsoft visual identity.
> - Use corporate minimal styling: clean layouts, restrained color, high readability, and light backgrounds for all slide types (cover, section, content, comparison, summary).
> - Keep slides professional and uncluttered, with clear hierarchy and consistent typography.
> - **Honor every `Slide topic (N slide)` marker exactly**: produce N slides for that topic, one topic per slide. Never merge two topics onto one slide, and never split one topic across extra slides.
> - **Generate one slide per bullet-grouped topic and preserve every bullet and table row.** Do not drop, collapse, or condense list items or comparison rows.
> - Before generating slides, build the deck from this exact contract:
>   - 1 title slide from the H1
>   - 1 `## Session Agenda` slide
>   - 1 slide for each `Slide topic (1 slide)` marker, in source order
>   - 1 mission briefing slide for each `### 🎯 MISSION` marker, in source order
>   - No extra recap, wrap-up, section-divider, or handoff slides unless the source contains an explicit `Slide topic` marker for that slide
> - Ignore marker examples inside this slide-generation instruction block when counting `Slide topic` and `### 🎯 MISSION` markers.
> - The planned deck for this part is 12 slides: 1 title slide, 1 Session Agenda slide, 9 source `Slide topic` slides, and 1 mission briefing slide. It covers Sections 3-5: tokenomics, usage visibility, model routing, context windows, autonomy, delegation discipline, and the Agent Mergewell mission briefing block.
> - Do not generate separate Workshop Overview or Learning Objectives slides. Use any summary or objectives text only as source context for the title, agenda, or presenter notes.
> - Count the planned slides before generating. If the planned deck is 21 slides or fewer, generate one complete deck.
> - If the planned deck exceeds 21 slides, split it into two decks at a natural section boundary. Do not compress the material into 21 slides.
> - A 21-slide output is incomplete when the planned deck exceeds 21 slides or when any `Slide topic`, lab transition, prompt/code block, table row, or final-section outcome is missing.
> - Generate dedicated slides for the title and `## Session Agenda`; do not skip, merge, or reorder these.
> - Do not merge two `Slide topic` markers onto one slide, even if the content appears related.
> - Do not move a topic across section boundaries.
> - **Treat workshop wording as authoritative — do not summarize, paraphrase, or reword away meaning.** Minor connector-word edits are allowed only to improve flow.
> - **Reproduce code blocks, prompts, commands, and numeric values verbatim** — never truncate or rewrite them.
> - **Do not add content that is not in the source**: no AI-authored intro, recap, agenda, transitions, or marketing phrasing.
> - Do not introduce concepts, tools, commands, workflows, named features, or examples that are not present in this source file.
> - Do not use or infer content from other workshop modules.
> - Preserve the section order and numbering exactly as written.
> - Render **AI Safety Moment** and **Usage Optimization** callouts in distinct badged content boxes, keeping their wording verbatim so the tip category is instantly recognizable.
> - Preserve prompt and code blocks verbatim on the corresponding "Show me" and "Now you try" slides.
> - If content does not fit on one slide, reduce visual decoration; do not summarize, drop rows, or combine topics.
> - Control slide layout deliberately so content stays readable and structured on-slide.
> - Generate visual imagery that directly represents the slide wording and reinforces its meaning.

**Duration**: 2 hours (120 min: 75 min verified presentation + 45 min Agent Mergewell mission play)
**Format**: Presentation + Hands-On
**Audience**: Software engineers and technical leads — any Copilot experience level
**Prerequisites**: VS Code, GitHub Copilot extension, GitHub Copilot CLI

**Module summary**: Part 2 builds on the surface and mode foundation from Part 1 by giving engineers a practical cost and quality operating model. Section 3 covers token economics, GitHub AI Credits billing, usage visibility, and model routing. Section 4 covers context window anatomy, context-rot detection, and the autonomy spectrum with least-privilege delegation. The module closes with two principles engineers carry into every session: route by task shape and delegate by reversibility. One continuous 45-minute Agent Mergewell scavenger hunt connects both sections and creates the case file used in Agentic Development.

**Learning objectives**:

- Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution
- Detect context rot and apply context window hygiene practices
- Apply the autonomy spectrum and least-privilege delegation before escalating to agentic patterns

## Session Agenda

| Section | Topic | Time |
|---------|-------|------|
| 3 | Tokenomics, GitHub AI Credits, usage visibility, and model routing | 20 min |
| 4 | Context windows, autonomy spectrum, and delegation discipline | 15 min |
| 5 | Agent Mergewell Mission Briefings | 45 min |

## 3. Tokenomics, GitHub AI Credits, Usage Visibility, and Model Routing (20 min)

### Key Points

- **Slide topic (1 slide): What Is a Token? (input, output, and cache economics)** — Tokens represent input text, output text, and cached context across prompts, responses, instructions, referenced files, and chat history. Context size directly affects cost, latency, and quality stability. Every file reference, every chat turn, and every instruction block consumes token budget. **Usage Optimization**: trim noisy history and stale references before sending a prompt; reuse cached or summarized context when it preserves accuracy without restating everything.

- **Slide topic (1 slide): GitHub AI Credits — How Copilot Charges** — GitHub AI Credits are the billing unit for Copilot usage under usage-based billing, where 1 AI credit = $0.01 USD. Model interactions consume input tokens, output tokens, and cached tokens; the token cost is converted to AI credits. Code completions and next-edit suggestions are not billed in AI credits on paid plans. Copilot Chat, Copilot CLI, the Copilot cloud agent, Copilot Spaces, Spark, and third-party coding agents can consume AI credits. **Usage Optimization**: treat AI credit telemetry as workflow tuning feedback; set team budget guardrails before scaling agentic or high-frequency usage.

- **Slide topic (1 slide): How to Check Your Usage** — Day-to-day usage checks use product entry points: in VS Code Chat, open the usage view from the GitHub/Copilot icon in the bottom-right status bar; in Copilot CLI, run `/usage` for session usage, `/context` to inspect current context-window token consumption, and `/model` to view or change model routing. For monthly account-level totals and budget thresholds, use GitHub billing or Copilot settings. **Learn more**: <https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio>. **Usage Optimization**: check actual usage before switching to higher-cost models or scaling autonomous workflows; a usage check takes 30 seconds and prevents billing surprises.

- **Slide topic (1 slide): Model Routing — Choosing the Right Engine** — A model is the engine that interprets context and generates a response. Auto routing is the right default for most prompts because the platform selects based on reliability and availability and can reduce cost. Use the model picker to view cost indicators and switch only when the task genuinely needs it.

  | Routing option | Typical fit | When to choose |
  |---|---|---|
  | Auto | Default for everyday tasks | Task has normal risk, normal ambiguity, and no special latency or cost requirement |
  | Fast/general-purpose | Explanations, small edits, tests, documentation, routine refactors | Task is clear, bounded, reversible, and benefits from lower latency or cost |
  | Deep-reasoning | Complex debugging, architecture tradeoffs, multi-step planning, ambiguous failures | Added reasoning depth is likely to prevent rework, reduce risk, or resolve uncertainty simpler models did not handle |

  **Usage Optimization**: use Auto for routine work, fast/general-purpose for clear bounded tasks, and deep-reasoning only when simpler routing has failed or the task ambiguity justifies the cost.

- **Slide topic (1 slide): Demo — Build a Usage-Aware Routing Checklist** — Facilitator demonstrates this prompt and states the expected result: Copilot converts the usage-window and model-picker reference into a practical pre-session checklist for the team.

  ```text
  Using https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio as a reference point, create a practical usage-check checklist for VS Code chat and Copilot CLI: include opening usage from the GitHub/Copilot icon in the bottom-right status area of VS Code, CLI `/usage` for usage, CLI `/context` for context-window token usage, CLI `/model` for model routing, GitHub billing/settings for monthly AI credit usage, and when Auto model selection is the lowest-cost first choice.
  ```

  **Usage Optimization**: run a usage and routing check before every long or high-cost session; a checklist keeps the team consistent.

### 🛡️ Safety Moment

- Do not optimize spend by skipping tests, validation, security checks, or human review.
- Escalate to higher-cost reasoning only when the task ambiguity or risk justifies the extra consumption.

### 💡 Optimization Tip: Route by Task Shape

Prefer Auto for ordinary tasks, fast/general-purpose models for clear bounded work, and deep-reasoning only when ambiguity, risk, or repeated failure makes the extra spend worthwhile. Checking usage takes 30 seconds; billing surprises are expensive.

## 4. Context Windows, Autonomy Spectrum, and Delegation Discipline (15 min)

### Key Points

- **Slide topic (1 slide): Anatomy of the Context Window** — The context window combines instructions, conversation history, referenced files, tool results, and response outputs into a single token-limited container. Quality degrades when sessions accumulate stale assumptions, off-topic history, or compaction artifacts from long-running threads. **Usage Optimization**: when responses start drifting, contradicting earlier answers, or losing track of constraints, reset or re-scope the session rather than adding more context on top of the noise.

- **Slide topic (1 slide): Context Rot — Recognizing and Fixing It** — Context rot is the gradual degradation of response quality as a session accumulates irrelevant history, stale file references, and overwritten assumptions. Common signals: contradictory suggestions, repeated restating of already-solved problems, excessive hedging, or suggestions that ignore explicit constraints set earlier in the session. Fix by summarizing the essential state, opening a fresh session with that summary, and re-anchoring with current `#file` or `#selection` references. **Usage Optimization**: treat context rot as signal, not model failure; the fix is hygiene, not a better prompt.

- **Slide topic (1 slide): Autonomy Spectrum — Reversibility as the Governing Principle** — Delegation should scale with reversibility, blast radius, and operator confidence. Suggestion-only completions carry the lowest risk because every line is reviewed before acceptance. Reviewed plans carry moderate risk because a human approves the sequence before any edits execute. Constrained execution carries the highest risk and requires explicit acceptance criteria, narrow tool permissions, and a clear rollback path before the agent starts. **AI Safety Moment**: the question before every delegation decision is "can I cleanly undo this if the result is wrong?" If the answer is unclear, stay at a lower autonomy level until it is clear.

- **Slide topic (1 slide): Least-Privilege Delegation — The Discipline** — Least-privilege delegation means giving Copilot or a delegated agent only the permissions, file access, and tool calls the current task actually requires. A task that modifies one file does not need repository-wide write access. A task that reads configuration does not need network calls. A code review task should use read-only tool access. Narrow scope produces narrower blast radius, clearer review checkpoints, and easier audit. **AI Safety Moment**: draft the permission boundary before creating any agent or granting tool access; the boundary is the acceptance criterion for the delegation itself. Agent and skill file creation is covered in Module 2.

### 🛡️ Safety Moment

- Do not grant broad file, command, or network access when a task only requires a narrow change.
- Require a human review checkpoint at every point where scope, risk, or acceptance criteria become ambiguous.

### 💡 Optimization Tip: Delegate by Reversibility

The more reversible a task, the wider the delegation latitude. The less reversible, the narrower. Build this as a mental habit before Module 2's agent and instruction workflows.

## 5. Agent Mergewell's Foundations Scavenger Hunt (45 min)

### 🎯 MISSION: Your Mission Starts Now

> **Instructor**: Open the Missions experience and start the 45-minute clock. Participants choose VS Code, Copilot CLI, or the standalone GitHub Copilot app, then complete one continuous five-clue hunt. Each route completes the Copilot work in its selected gadget; the app route uses local sessions and inspectable canvases rather than handing work to VS Code. Gadget hints and progressive no-penalty hints are available whenever the next safe action is unclear. Reserve the final 5 minutes for case-file export and debrief.

**Agent Mergewell says:**

> "Field team, the theory board is full and Purrmission has hidden my `SOLVED` stamp again. Choose your gadget, find five clues, and bank evidence with every point. If a clue goes cold, open a hint; good investigators ask for help before they guess.
>
> The GitHub Copilot app holds an optional bonus trail, and an unfamiliar approved Copilot gadget may reveal another. Your local case file is the real prize: carry one bounded follow-up task into Agentic Development, where the case continues.
>
> Start your mission. Good luck—and please find that stamp before I deploy the magnet gadget."

**Mission goal:** Build a verified Copilot case file by choosing a gadget, finding five operating clues, proving safe decisions, and carrying one bounded task into Agentic Development.

**Core operations:**

1. Operation Pick Your Gadget
2. Operation Pack the Clue Bag
3. Operation Use the Right-Sized Gadget
4. Operation Read the Gauges
5. Operation Seal the Case

**Scoring:** 50 core points are available; 40 core points complete the mission. One optional operation can add up to 10 bonus points. Hints never reduce the score.

**Participant experience:** The schema-backed mission artifact owns the case packet, VS Code/CLI/GitHub Copilot app routes, direct actions, gadget hints, progressive hints, Purrmission checks, local scorecard, evidence fields, app bonus, optional alias-only external leaderboard, and carry-forward case file.

**Evidence you're done:** Exported case file with the chosen gadget, completed clues, evidence, score, safety boundary, final verdict, and one bounded follow-up task for Agentic Development.

**Debrief:** Which clue changed your decision, and what evidence will the software agent inherit in the next mission?

---

*Workshop guide for Module 1: Foundations — GitHub Copilot Developer Training*

*Part 2 slide-generation packet for GitHub Copilot Developer Foundations Workshop*
