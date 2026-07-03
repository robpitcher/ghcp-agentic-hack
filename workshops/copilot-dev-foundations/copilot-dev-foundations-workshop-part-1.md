# Module 1: Foundations — Workshop Guide — Part 1

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
> - The planned deck for this part is 12 slides and covers Sections 1-2: baseline surfaces, enterprise trust, inline assistance, and built-in Copilot experiences.
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
| 1 | Foundations baseline: surfaces, chat, CLI, and enterprise trust | 18 min |
| 2 | Guided workflows: inline assistance and built-in Copilot experiences | 20 min |

## 1. Foundations Baseline: Surfaces, Chat, CLI, and Enterprise Trust (18 min)

### Key Points

- **Slide topic (1 slide): Where GitHub Copilot Lives (IDE + Cloud, incl. Copilot app where available)** — Copilot spans IDEs, terminal workflows, GitHub.com, cloud-based assistance, and Copilot app surfaces where available, letting developers move between coding, automation, and repository-level understanding with more consistent workflows across surfaces. **AI Safety Moment**: confirm org policy, repository access, and cross-surface context boundaries before using cloud or app experiences.
- **Slide topic (1 slide): Look Around VS Code Chat Extension (slash commands, file references like #file/#selection)** — VS Code chat gives developers slash commands, participants, and precise `#` references such as `#file` and `#selection` so the assistant sees the smallest useful context for the question. **Usage Optimization**: start with `#selection` or `#file`, then expand scope only when the answer proves more context is needed.
- **Slide topic (1 slide): Look Around Copilot CLI** — GitHub Copilot CLI is installed using the official setup guidance at <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli> and supports terminal-first chat, command explanation, command generation, `/settings`, help discovery, and review-oriented workflows such as security checks before committing. **AI Safety Moment**: generated commands must be reviewed before execution, especially when they change files, install dependencies, or affect remote systems.
- **Slide topic (1 slide): Enterprise Privacy and IP (anchor safety segment: data handling, retention, duplicate detection, admin governance)** — Enterprise privacy and IP controls include data-handling expectations, retention settings, duplicate-detection options, content exclusions, auditability, and admin governance that align Copilot usage with organizational policy. **AI Safety Moment**: treat generated output as draft material, verify provenance-sensitive suggestions, and keep human accountability with the developer and reviewer.

### 🔬 LAB: Exercise 1 — Stage 1 Baseline and Governance Signals

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 1 (8 min) identifying surfaces, trying scoped chat and CLI orientation, and validating safety boundaries before continuing.

## 2. Guided Workflows: Inline Assistance and Built-in Copilot Experiences (20 min)

### Key Points

- **Slide topic (1 slide): Inline Chat and Code Completions** — Code completions accelerate flow authoring while inline chat supports scoped transformations such as refactors, type changes, and localized explanations, giving two complementary interaction patterns for day-to-day work. **Usage Optimization**: choose code completions for low-friction flow edits that are not billed in GitHub AI Credits on paid plans, and choose inline chat for bounded transformations with clear selection context.
- **Slide topic (1 slide): Built-in Copilot Experiences (Ask, Plan, and Agent as examples)** — GitHub Copilot includes built-in experiences that match different levels of autonomy: Ask supports explanation and low-risk understanding, Plan supports reviewed sequencing before edits, and Agent supports constrained multi-step execution when the task has clear acceptance criteria. Treat Ask, Plan, and Agent as familiar examples of Copilot assistance patterns rather than the full universe of possible custom or delegated agents. **AI Safety Moment**: higher-autonomy built-in experience use requires stronger approval gates, narrower scope, and explicit human review before accepting changes.
- **Slide topic (1 slide): Show me — compare Ask, Plan, and Agent** — facilitator demonstrates this scoped VS Code chat prompt and states the expected result: Ask explains options, Plan proposes reviewed steps, and Agent identifies executable work. **AI Safety Moment**: keep higher autonomy behind approval gates.

  ```text
  Explain how the built-in Ask, Plan, and Agent experiences would handle #selection differently for this change.
  ```

- **Slide topic (1 slide): Now you try — vary the scoped mode comparison** — attendees repeat the same step, then swap `#selection` for `#file` before the lab to compare how a larger scope changes the response. **Usage Optimization**: compare only one scope variable at a time so the result is easier to evaluate.

  ```text
  Explain how the built-in Ask, Plan, and Agent experiences would handle #file differently for this change.
  ```

### 🛡️ Safety Moment

- Keep mode escalation tied to task risk: Ask before Plan, Plan before Agent, and Agent only when acceptance criteria and rollback are clear.
- Review every proposed edit or command before accepting it, even when the assistant appears confident.

### 🖥️ Demo: Scoped Inline Assistance and Built-in Copilot Experiences

1. Select a small code block and ask Copilot to explain it with `#selection`.
2. Repeat the same request with `#file` and compare the extra context.
3. Switch the task through built-in Ask, Plan, and Agent experiences to show how autonomy changes the expected review gate.

### 💡 Optimization Tip: Use the Smallest Useful Context

Use inline completions for flow, inline chat for selected transformations, and mode switching only when the task complexity justifies it. Smaller prompts are easier to review, usually faster, and reduce avoidable token usage.

### 🔬 LAB: Exercise 2 — Stage 2 Guided Workflow Repetition

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 2 (8 min) running the same task across inline assistance and Ask/Plan/Agent with scoped context.

*Part 1 slide-generation packet for GitHub Copilot Developer Foundations Workshop*