# Copilot Usage Optimization — Workshop Guide — Part 2

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
>   - 1 lab transition slide for each `### 🔬 LAB` marker, in source order
>   - 1 wrap-up slide from final-section outcomes, when a wrap-up section exists
>   - 1 next-module handoff slide from final-section handoff wording, when a handoff is present
> - The planned deck for this part is 17 slides and covers Sections 4-6: prompt discipline, agentic efficiency, measurement, and sustained operating model.
> - Do not generate separate Workshop Overview or Learning Objectives slides. Use any summary or objectives text only as source context for the title, agenda, or presenter notes.
> - Count the planned slides before generating. If the planned deck is 21 slides or fewer, generate one complete deck.
> - If the planned deck exceeds 21 slides, split it into two decks at a natural section boundary. Do not compress the material into 21 slides.
> - A 21-slide output is incomplete when the planned deck exceeds 21 slides or when any `Slide topic`, lab transition, prompt/code block, table row, wrap-up outcome, or handoff point is missing.
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

**Duration**: 60 minutes (single session, presentation-only)  
**Format**: Presentation  
**Audience**: Developers with basic GitHub Copilot exposure  
**Prerequisites**: See the Prerequisites section below — required tooling plus the developer skills needed to apply these optimizations effectively.

## Prerequisites

### Environment & Access

- VS Code with the GitHub Copilot and Copilot Chat extensions installed and signed in
- GitHub account with Copilot access (Individual, Business, or Enterprise)
- GitHub Copilot CLI and GitHub CLI (`gh`) installed and authenticated
- Access to Copilot usage and billing views (to inspect AIC and token usage)
- A local multi-file project open in VS Code for scoping demos

### Developer Skills to Apply These Optimizations

- **Copilot interaction fluency** — comfortable with Ask/Edit/Agent modes and chat context references (`#file`, `#selection`); equivalent to completing the Foundations module
- **Prompt-writing discipline** — able to write a scoped prompt with explicit constraints, stop conditions, and a clear definition of done
- **Code review judgment** — able to read and critically review AI-generated diffs, since the developer stays accountable for what merges
- **Token and context mental model** — understands that prompt, output, and cached tokens drive both cost and quality, and what a context window contains
- **Model-selection awareness** — knows the difference between fast and reasoning models and can judge which a task needs
- **Basic agentic experience** — has delegated at least one multi-step task to an agent and understands why loops need boundaries and stop conditions
- **Instruction-file familiarity** — can author and maintain repository instruction files to encode conventions instead of re-prompting them
- **Telemetry literacy** — can read session and monthly usage views to spot inefficiencies such as broad prompts and repeated retries

**Module summary**: This standalone workshop consolidates GitHub Copilot usage-optimization practices into one focused session on getting the most quality per credit. It treats tokens, AI Consumption (AIC), and usage-based billing as first-class engineering concerns, then works outward through context economics, model routing, prompt and scope discipline, agentic efficiency, and sustained measurement. The goal is a repeatable operating model where developers consistently choose the cheapest path that still meets the quality bar — trimming context noise, routing tasks to right-sized models, bounding agentic loops, and using telemetry as tuning feedback. Every section pairs a cost lever with an AI Safety Moment so optimization never undercuts accountability or review gates.

**Learning objectives**:

- Explain how tokens, AIC, and usage-based billing connect day-to-day workflow choices to cost
- Apply context window hygiene — front-load context once, detect context rot, and re-scope deliberately
- Route tasks to right-sized models and use Auto mode for cost efficiency without sacrificing quality
- Use prompt and scope discipline to reduce retries, rework, and avoidable token burn
- Make agentic-efficiency decisions: bounded loops, scoped subagents, and avoiding over-delegation
- Measure usage and sustain savings with `/chronicle`, budgets, and durable instructions

## Session Agenda

| Section | Topic | Time |
|---------|-------|------|
| 4 | Prompt and scope discipline | 12 min |
| 5 | Agentic efficiency | 10 min |
| 6 | Measure and sustain | 6 min |

## 4. Prompt and Scope Discipline (12 min)

### Key Points

- **Slide topic (1 slide): Scoped vs. broad prompts** — tight, well-bounded prompts reduce drift, retries, and ambiguity, lowering both latency and AIC spend; broad prompts invite expensive rework loops. **Usage Optimization**: better prompt contracts lower both latency and cost.
- **Slide topic (1 slide): Well-scoped skills reduce retries** — a skill with a clear target scope, task, constraints, definition of done, and off-ramp produces reliable results the first time. **Usage Optimization**: well-scoped skills reduce retries.
- **Slide topic (1 slide): Fewer rework turns lower AIC** — explicit acceptance gates and stop conditions ("stop if tests fail", "ask before changing dependencies") prevent costly rework. **Usage Optimization**: lower AIC with fewer rework turns.
- **Slide topic (1 slide): Minimal repro prompts** — when debugging, reproduce with the smallest possible prompt before changing anything; minimal repros cut expensive trial-and-error loops. **Usage Optimization**: minimal repro prompts reduce trial-and-error cost.
- **Slide topic (1 slide): Rubber-duck before executing** — articulating the problem before execution surfaces hidden assumptions and avoids expensive wrong-direction loops. **Usage Optimization**: clarify intent first to avoid costly rework.

### 🛡️ Safety Moment

- Explicit acceptance criteria and stop conditions are both a quality control and a safety control — they bound what the agent is allowed to do.
- Scope every prompt to the narrowest set of files needed; broad edits increase review burden and the chance of unintended changes.

### 🖥️ Demo: Tighten a broad prompt

1. Issue a deliberately broad prompt ("clean up this project") and observe the breadth and retries.
2. Rewrite it with explicit scope, constraints, and a definition of done.
3. Compare token/AIC usage, number of turns, and review effort between the two.

### 💡 Optimization Tip: Lock scope early

Define the scope and acceptance criteria before you start and resist mid-task expansion. Locking scope early avoids token-heavy churn and keeps one always-demoable slice working instead of many half-finished changes.

## 5. Agentic Efficiency (10 min)

### Key Points

- **Slide topic (1 slide): Don't over-delegate simple tasks** — deterministic work like locating a symbol or editing a known file is faster and cheaper with direct tools than a multi-step agent loop. **Usage Optimization**: avoid over-delegating simple, deterministic tasks.
- **Slide topic (1 slide): Bound the agentic loop** — define termination criteria and loop boundaries before execution so the request/decide/act/observe/correct cycle cannot run away and burn tokens. **Usage Optimization**: bounded loops with termination criteria reduce token burn.
- **Slide topic (1 slide): Avoid unnecessary orchestration** — multi-agent orchestration is justified only when work is truly separable by role, evidence, and ownership; otherwise one focused workflow is cheaper and clearer. **Usage Optimization**: avoid orchestration when a single bounded workflow is sufficient.
- **Slide topic (1 slide): Scoped subagents on lighter models** — keep delegated units narrow with clear inputs, outputs, and acceptance checks, and run them on cheaper models where possible. **Usage Optimization**: scoped subagents on lighter models cut cost without hurting quality.
- **Slide topic (1 slide): Async and cloud only when justified** — use background tasks or cloud agents for genuinely long-running, parallelizable work, not for quick local edits. **Usage Optimization**: use async or cloud paths only for genuinely long-running, parallelizable tasks.
- **Slide topic (1 slide): Reuse templates and scaffolding** — start from reusable setup patterns (for example via `/init`) instead of rewriting boilerplate, reducing setup churn and tokens. **Usage Optimization**: start from reusable templates to reduce setup churn.

### 🛡️ Safety Moment

- Bounded loops and stop conditions are a primary safety mechanism for autonomous work — design oversight in, don't add it after something goes wrong.
- Scale autonomy with reversibility and blast radius: high-impact delegated tasks require explicit approvals and narrow permissions.

### 🖥️ Demo: Right-size the work

1. Take a small, well-known edit and run it as a full agent loop, noting turns and token usage.
2. Redo the same edit with a direct tool/skill call.
3. Discuss where the agent loop adds value (ambiguity, branching, multiple checkpoints) and where it is pure overhead.

### 💡 Optimization Tip: Simplify before you scale

Reach for the simplest mechanism that meets the requirement — direct tool, then single agent, then orchestration — and only add complexity when the task genuinely demands it. Simplifying architecture before scaling it prevents token and review-time waste.

## 6. Measure and Sustain (6 min)

### Key Points

- **Slide topic (1 slide): Usage visibility and measurement** — session and monthly usage views expose hidden inefficiencies such as broad prompts and repetitive retries; regular reviews prevent avoidable overages. **Usage Optimization**: use regular usage reviews to prevent overages.
- **Slide topic (1 slide): `/chronicle` as a cost-savings loop** — run `/chronicle` at task boundaries to capture what reduced spend (tighter scope, fewer retries, right-sized models) and what increased it (broad context, unnecessary escalations), then reuse it as a recurring cost-savings checklist. **Usage Optimization**: run `/chronicle` to preserve reusable cost controls and avoid expensive context reconstruction.
- **Slide topic (1 slide): Instructions vs. memory for durable reuse** — place durable standards in instruction files where they are applied automatically and reserve memory for reusable context that should survive across sessions; this avoids re-sending the same guidance as prompt tokens. **Usage Optimization**: encode durable standards once and reuse them instead of re-prompting.
- **Slide topic (1 slide): Sustained operating model** — consistent results come from mode discipline, context hygiene, explicit acceptance criteria, and budget-aware defaults rather than ad hoc improvisation.

### 🛡️ Safety Moment

- Usage telemetry can reveal sensitive workflow patterns — follow org policy on what usage data is shared, stored, or exported.
- Budgets and plan limits are guardrails, not just cost tools: they cap runaway automation before it causes harm.

### 💡 Optimization Tip: Close the loop every session

End each meaningful task with a quick usage review and a `/chronicle` capture, then fold the recurring savings into instructions. This turns one-off optimizations into durable defaults that compound across the team.

> **Learn more**: <https://docs.github.com/en/copilot/tutorials/optimize-ai-usage>

*Workshop guide for Copilot Usage Optimization — GitHub Copilot Developer Training*

*Part 2 slide-generation packet for Copilot Usage Optimization Workshop*