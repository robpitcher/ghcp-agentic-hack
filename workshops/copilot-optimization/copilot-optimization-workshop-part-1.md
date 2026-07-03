# Copilot Usage Optimization — Workshop Guide — Part 1

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
>   - No extra recap, wrap-up, section-divider, or handoff slides unless the source contains an explicit `Slide topic` marker for that slide
> - The planned deck for this part is 15 slides: 1 title slide, 1 Session Agenda slide, and 13 source `Slide topic` slides. It covers Sections 1-3: optimization model, tokenomics, context economics, model routing, and cost levers.
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
| 1 | Why optimization matters: the cost and quality model | 8 min |
| 2 | Tokenomics and context economics | 12 min |
| 3 | Model routing and the biggest cost levers | 12 min |

## 1. Why Optimization Matters: The Cost and Quality Model (8 min)

### Key Points

- **Slide topic (1 slide): Optimization is an engineering discipline** — usage-based billing makes every workflow choice a cost decision, not only a UX decision; treating efficiency as a first-class concern keeps spend predictable as adoption scales.
- **Slide topic (1 slide): Tokens as the unit of cost and quality** — tokens represent prompt, input, output, and cached context, so context size directly affects both spend and quality stability; bloated context raises cost and increases drift.
- **Slide topic (1 slide): AIC — the AI Consumption model** — AIC maps spend to measured token and model usage (input, output, and cached tokens at model-specific rates), making model choice, prompt size, and loop depth explicit engineering tradeoffs.
- **Slide topic (1 slide): The optimization mindset** — choose the cheapest path that still clears the quality bar; optimization is not about using less Copilot, it is about removing waste — noise, retries, and unnecessary escalations.

### 🛡️ Safety Moment

- Cost optimization never overrides review gates: cheaper output still requires human accountability before merge.
- Set user-level budgets and plan limits before scaling usage so efficiency goals do not silently become overruns.
- Treat billing telemetry as governance evidence, not just a personal metric — shared visibility keeps teams aligned.

### 💡 Optimization Tip: Make cost a design input

Decide the acceptable cost/quality tradeoff *before* you prompt, not after the bill arrives. Naming the budget and the quality bar up front turns optimization into a deliberate choice instead of cleanup.

## 2. Tokenomics and Context Economics (12 min)

### Key Points

- **Slide topic (1 slide): Anatomy of the context window** — context windows combine instructions, history, references, and outputs; they degrade when sessions accumulate noise and compaction artifacts, which raises cost and lowers reliability. **Usage Optimization**: reset or re-scope when context rot appears.
- **Slide topic (1 slide): Context rot and when to reset** — long, noisy sessions produce drift, repeated retries, and contradictory guidance; recognizing the signs early prevents expensive recovery loops.
- **Slide topic (1 slide): Front-load context once** — provide the relevant files, conventions, and constraints a single time at the start rather than re-pasting them every turn; cached, well-placed context is cheaper than repeated re-sends. **Usage Optimization**: front-load context once instead of repeating it across turns.
- **Slide topic (1 slide): Trim noise before sending** — narrow inputs to what the task actually needs (`#selection`/`#file` before workspace-wide reasoning) so the model spends tokens on signal, not clutter. **Usage Optimization**: trim noise before sending context.
- **Slide topic (1 slide): Encode conventions, don't repeat them** — durable standards belong in instruction files where they are applied automatically, instead of being retyped into each prompt. **Usage Optimization**: encode conventions in instructions so they are not re-sent as prompt text.

### 🛡️ Safety Moment

- Re-scoping a drifting session is safer than pushing through it — context rot increases the risk of incorrect or unsafe edits.
- Keep sensitive data out of long-lived context; broad context windows widen the blast radius if shared or exported.

### 🖥️ Demo: Front-load vs. re-paste

1. Start a session and paste the same large file into three consecutive prompts; note the rising token usage.
2. Restart, provide the file once with a clear task and `#file` reference, then ask the follow-ups.
3. Compare token usage and answer quality between the two approaches.

### 💡 Optimization Tip: Re-scope at task boundaries

When a task ends, start a fresh, tightly scoped session for the next one rather than continuing in a bloated context. Smaller, purpose-built context windows are cheaper and more reliable than carrying accumulated history forward.

## 3. Model Routing and the Biggest Cost Levers (12 min)

### Key Points

- **Slide topic (1 slide): Model choice is the fastest cost lever** — matching model capability to task complexity is the single highest-leverage decision; fast models fit straightforward tasks, reasoning models fit ambiguity-heavy architecture and debugging. **Usage Optimization**: match model capability to task complexity.
- **Slide topic (1 slide): Auto mode — efficiency by default** — auto model selection routes work to a cost-efficient model while preserving quality for many tasks, earns a 10% discount on paid plans, and protects the cache by only switching at natural boundaries. **Usage Optimization**: prefer Auto mode for default routing and cache protection.
- **Slide topic (1 slide): Configurable reasoning and larger context windows** — advanced reasoning and context settings improve deep multi-file tasks but increase credit usage; stay at defaults for routine work and escalate intentionally. **Usage Optimization**: escalate reasoning/context only when the task demands it.
- **Slide topic (1 slide): Run specialists on lighter models** — a scoped subtask rarely needs the most expensive reasoning model; reserve premium models for genuinely hard decisions. **Usage Optimization**: run scoped subtasks on lighter models to cut cost without hurting quality.

### 🛡️ Safety Moment

- Don't down-route safety-critical or irreversible work to save credits — match the model to the risk, not just the cost.
- Document model-routing defaults for the team so cost-saving choices stay consistent and auditable.

### 🖥️ Demo: Same task, three models

1. Pick one well-defined refactor task and run it on a fast model, a reasoning model, and Auto.
2. Compare output quality, latency, and token/AIC usage across the three.
3. Identify the cheapest model that still clears the quality bar — that is the routing default for this task class.

### 💡 Optimization Tip: Default to Auto, escalate on purpose

Make Auto mode your standing default and treat reasoning/large-context escalation as an explicit decision tied to task difficulty. This captures the Auto discount and cache protection while keeping premium spend reserved for work that truly needs it.

> **Learn more**: <https://docs.github.com/en/copilot/tutorials/optimize-ai-usage>

*Part 1 slide-generation packet for Copilot Usage Optimization Workshop*