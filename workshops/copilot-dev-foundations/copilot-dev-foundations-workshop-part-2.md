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
>   - 1 lab transition slide for each `### 🔬 LAB` marker, in source order
>   - 1 wrap-up slide from final-section outcomes, when a wrap-up section exists
>   - 1 next-module handoff slide from final-section handoff wording, when a handoff is present
> - Ignore marker examples inside this slide-generation instruction block when counting `Slide topic` and `### 🔬 LAB` markers.
> - The planned deck for this part is 17 slides and covers Sections 3-5: tokenomics, usage visibility, model routing, context windows, autonomy, custom agents, wrap-up, and Module 2 handoff.
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

**Duration**: 2 hours (120 min: ~90 min content + 30 min lab)  
**Format**: Presentation + Hands-On  
**Audience**: Developers with basic GitHub Copilot exposure  
**Prerequisites**: VS Code, GitHub Copilot extension, GitHub Copilot CLI

**Module summary**: This Foundations workshop introduces the core Copilot mental model before agentic scaling. The module starts with where Copilot lives across IDE, cloud, GitHub.com, the Copilot app where available, and terminal workflows, then anchors enterprise privacy and IP responsibilities. It then moves into inline assistance, built-in Copilot experiences such as Ask, Plan, and Agent, CLI controls, tokenomics, GitHub AI Credits, usage dashboards, model routing, and context-window quality. It closes with least-privilege autonomy and conceptual custom-agent guardrails so learners leave with a safe, cost-aware operating model for daily use.

**Learning objectives**:

- Explain where Copilot lives across IDE, terminal, GitHub.com, cloud, and Copilot app experiences where available
- Use VS Code chat references, inline completions, inline chat, and Ask/Plan/Agent modes appropriately
- Use key Copilot CLI controls and installation guidance in safe workflows
- Interpret tokens, GitHub AI Credits, dashboards, and model-routing tradeoffs for cost-aware execution
- Detect context rot and apply context window hygiene practices
- Apply least-privilege delegation and scoped custom-agent guardrails

## Session Agenda

| Section | Topic | Time |
|---------|-------|------|
| 3 | Tokenomics, GitHub AI Credits, usage visibility, and model routing | 24 min |
| 4 | Context windows, autonomy spectrum, and custom agents | 18 min |
| 5 | Wrap-up and Module 2 handoff | 10 min |

## 3. Tokenomics, GitHub AI Credits, Usage Visibility, and Model Routing (24 min)

### Key Points

- **Slide topic (1 slide): What Is a Token? (input/output/cache economics)** — Tokens represent input, output, and cached context across prompts, responses, instructions, files, and chat history, so context size directly affects cost, latency, and quality stability. **Usage Optimization**: trim noisy context before sending it and reuse cached or summarized context when it preserves accuracy.
- **Slide topic (1 slide): What Are GitHub AI Credits? Usage-Based Billing (legacy PRUs → AI Credits)** — GitHub AI Credits are the billing unit for Copilot usage under usage-based billing: model interactions consume input tokens, output tokens, and cached tokens, and the token cost is converted into AI credits where 1 AI credit equals $0.01 USD. Code completions and next edit suggestions are not billed in AI credits on paid plans, while Copilot Chat, Copilot CLI, Copilot cloud agent, Copilot Spaces, Spark, and third-party coding agents can consume AI credits. **Usage Optimization**: treat AI credit telemetry as workflow tuning feedback and set budget guardrails before scaling usage.
- **Slide topic (1 slide): How Do I Know My Usage? (chat, CLI, and monthly views)** — Use the Microsoft Learn usage article as a point of reference for what usage windows can show: monthly usage, remaining balance, plan details, warning thresholds, and plan-specific behavior. For day-to-day checks, use the available product entry points: in VS Code Chat, open usage from the GitHub/Copilot icon in the bottom-right status area; in Copilot CLI, run `/usage` to view usage, `/context` to inspect current context-window token usage, and `/model` to view or change model routing. For account-level monthly usage and billing, use GitHub billing or Copilot settings because monthly credit pools and overage behavior depend on plan and organization policy. **Learn more**: <https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio>. **Usage Optimization**: check actual usage commands and model controls before switching to higher-cost models or scaling agentic workflows.
- **Slide topic (1 slide): What Is a Model? (model routing guide — how to choose)** — A model is the engine that interprets context and generates a response; routing should match model capability to task complexity, cost sensitivity, and review risk. Microsoft guidance for Visual Studio and GitHub Copilot model guidance recommend **Auto** for most prompts because it routes based on reliability and availability and can reduce model cost; developers can use the model picker to view cost indicators, then switch models for genuinely complex tasks. **Usage Optimization**: use Auto model routing for routine work when available, choose fast/general-purpose models for straightforward tasks, and reserve deep-reasoning models for ambiguity-heavy planning, debugging, or architecture decisions.

  | Model routing option | Typical fit | When to choose |
  |----------------------|-------------|----------------|
  | Auto selection | Default routing across common tasks | Use when the platform can choose an appropriate model and the task has normal risk, normal ambiguity, and no special latency/cost requirement. |
  | Fast/general-purpose model class | Explanations, small edits, tests, documentation cleanup, and routine refactors | Use when the task is clear, bounded, reversible, and benefits from lower latency or lower cost. |
  | Higher-cost deep-reasoning model class | Complex debugging, architecture tradeoffs, multi-step planning, and ambiguous failures | Use when the added reasoning depth is likely to prevent rework, reduce risk, or resolve uncertainty that simpler models did not handle. |

- **Slide topic (1 slide): Show me — understand usage before model routing** — facilitator demonstrates this prompt and states the expected result: Copilot converts usage-window and model-picker guidance into a practical team checklist before work begins. **Usage Optimization**: check real usage signals before paying for deeper reasoning.

  ```text
  Using https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio as a reference point, create a practical usage-check checklist for VS Code chat and Copilot CLI: include opening usage from the GitHub/Copilot icon in the bottom-right status area of VS Code, CLI `/usage` for usage, CLI `/context` for context-window token usage, CLI `/model` for model routing, GitHub billing/settings for monthly AI credit usage, and when Auto model selection is the lowest-cost first choice.
  ```

- **Slide topic (1 slide): Now you try — extract one billing-aware routing rule** — attendees repeat the same step, then add one small variation by labeling the rule as token scope, model choice, or retry avoidance before the lab. **Usage Optimization**: turn usage observations into reusable routing rules.

  ```text
  Turn this comparison into one reusable model-routing rule and one cost-savings tip.
  ```

### 🛡️ Safety Moment

- Do not optimize spend by skipping tests, validation, security checks, or human review.
- Escalate to higher-cost reasoning only when the task ambiguity or risk justifies the extra consumption.

### 🖥️ Demo: Cost-Aware Prompt and Model Routing

1. Compare one broad prompt and one scoped prompt for the same objective.
2. Ask Copilot to convert usage-window and model-picker guidance into a real-world checklist before selecting a route.
3. Compare Auto, a fast/general-purpose route, or a deeper reasoning route if those options are available in the learner environment.

### 💡 Optimization Tip: Route by Task Shape

Prefer Auto for ordinary tasks, fast/general-purpose models for clear bounded work, and deeper reasoning only when ambiguity, risk, or repeated failure makes the extra spend worthwhile.

### 🔬 LAB: Exercise 3 — Stage 3 Optimization — Tokens, GitHub AI Credits, Billing, Models, and Context

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 3 (7 min) comparing scoped versus broad prompts, usage signals, and model-routing decisions.

## 4. Context Windows, Autonomy Spectrum, and Custom Agents (18 min)

### Key Points

- **Slide topic (1 slide): Anatomy of the Context Window (compaction + context rot)** — Context windows combine instructions, history, referenced files, tool results, and outputs; quality degrades when sessions accumulate noise, stale assumptions, or compaction artifacts. **Usage Optimization**: reset, summarize, or re-scope when context rot appears instead of piling more history into the same thread.
- **Slide topic (1 slide): Autonomy Spectrum and Delegating Permissions** — Autonomy should scale with reversibility, blast radius, and confidence, from suggestion-only support to reviewed plans to constrained execution with explicit approval gates. **AI Safety Moment**: high-impact tasks require narrow permissions, human approval, and clear rollback before delegated execution.
- **Slide topic (1 slide): What Is a Custom Agent?** — A custom agent is a scoped assistant configuration with a defined purpose, instructions, and limited tools that make delegation repeatable without making permissions broad by default. **AI Safety Moment**: design custom agents with least privilege, explicit stop conditions, and review requirements before granting tool access.
- **Slide topic (1 slide): Show me — define custom-agent guardrails** — facilitator demonstrates this prompt and states the expected result: a short custom-agent starter that names purpose, allowed scope, approval rule, and escalation off-ramp. **AI Safety Moment**: make permission boundaries explicit before autonomy increases.

  ```text
  Draft a least-privilege custom-agent starter for low-risk single-file suggestions, including purpose, allowed scope, approval rule, and escalation off-ramp.
  ```

- **Slide topic (1 slide): Now you try — tighten the custom-agent boundary** — attendees repeat the same step, then apply one small variation by removing an unnecessary tool permission or adding an ambiguity stop rule before the lab. **AI Safety Moment**: narrower tools and clearer stop rules reduce blast radius.

  ```text
  Tighten this custom-agent starter by removing one unnecessary permission and adding one ambiguity stop rule.
  ```

### 🛡️ Safety Moment

- Do not grant broad file, command, or network access when a custom agent only needs to suggest a small change.
- Require the agent to stop and ask for human review when scope, risk, or acceptance criteria are unclear.

### 🖥️ Demo: Least-Privilege Custom-Agent Starter

1. Draft a custom-agent purpose statement for low-risk single-file suggestions.
2. Add allowed scope, disallowed scope, approval rules, and escalation behavior.
3. Review the starter for permissions that can be removed before use.

### 💡 Optimization Tip: Reuse Guardrails, Not Broad Context

Reusable custom-agent instructions reduce repeated prompt setup, but they should encode narrow defaults rather than broad access. Scope the agent once, then keep each task prompt short and specific.

### 🔬 LAB: Exercise 4 — Stage 4 Delegation — Custom Agent Guardrails

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 4 (7 min) creating a constrained custom-agent starter and applying least-privilege guardrails to one low-risk delegated task.

## 5. Wrap-up and Module 2 Handoff (10 min)

### Key Points

- Foundations set default operating behaviors for trust, quality, and cost-aware execution across IDE, CLI, cloud, GitHub.com, and Copilot app surfaces where available.
- Strong outcomes come from mode discipline, context hygiene, explicit acceptance criteria, model-routing decisions, and budget-aware defaults instead of ad hoc prompting.
- Module 2 builds on this baseline with instruction layering, tool orchestration, and repeatable autonomous control loops.

*Workshop guide for Module 1: Foundations — GitHub Copilot Developer Training*

*Part 2 slide-generation packet for GitHub Copilot Developer Foundations Workshop*