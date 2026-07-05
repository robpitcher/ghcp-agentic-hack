# Module 2: Intermediate (Agentic) — Workshop Guide

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
> - The planned deck for this module is 19 slides: 1 title slide, 1 Session Agenda slide, 14 source `Slide topic` slides, and 3 lab transition slides.
> - Do not generate separate Workshop Overview or Learning Objectives slides. Use any summary or objectives text only as source context for the title, agenda, or presenter notes.
> - Count the planned slides before generating. If the planned deck is 21 slides or fewer, generate one complete deck.
> - Before generating visuals, produce a slide manifest with one row per planned slide: slide number, source marker, source line/topic, slide type, and exact source title.
> - Use the slide manifest as the generation checklist. The final deck must match the manifest exactly in count, order, title wording, topic wording, lab placement, and callout category.
> - If the planned deck exceeds 21 slides, split it into two decks at a natural section boundary. Do not compress the material into 21 slides.
> - A 21-slide output is incomplete when the planned deck exceeds 21 slides or when any `Slide topic`, lab transition, prompt/code block, table row, or final-section outcome is missing.
> - Generate dedicated slides for the title and `## Session Agenda`; do not skip, merge, or reorder these.
> - Do not create unmarked recap, section-divider, anti-pattern, synthesis, wrap-up, or handoff slides unless the source contains an explicit marker for that slide.
> - Do not merge two `Slide topic` markers onto one slide, even if the content appears related.
> - Do not move a topic across section boundaries.
> - Use the exact source heading for every slide title. Do not paraphrase, shorten, rename, or replace titles with generic labels.
> - **Treat workshop wording as authoritative — do not summarize, paraphrase, or reword away meaning.** Minor connector-word edits are allowed only to improve flow.
> - **Reproduce code blocks, prompts, commands, and numeric values verbatim** — never truncate or rewrite them.
> - Preserve terminology exactly as written, including **AIC**, **AI Safety Moment**, **Usage Optimization**, **Ask/Plan/Agent**, **MCP**, **API/CLI**, `/init`, and named feature labels.
> - **Do not add content that is not in the source**: no AI-authored intro, recap, agenda, transitions, or marketing phrasing.
> - Do not introduce concepts, tools, commands, workflows, named features, or examples that are not present in this source file.
> - Do not use or infer content from other workshop modules.
> - Preserve the section order and numbering exactly as written.
> - Render **AI Safety Moment** and **Usage Optimization** callouts in distinct badged content boxes, keeping their wording verbatim so the tip category is instantly recognizable.
> - Preserve prompt and code blocks verbatim on the corresponding "Show me" and "Now you try" slides.
> - Generate 3-5 sentence speaker notes for every slide from the matching source marker only. Reject and regenerate any slide whose notes are generic, clipped, truncated, or not mapped to one manifest row.
> - If content does not fit on one slide, reduce visual decoration; do not summarize, drop rows, or combine topics.
> - Control slide layout deliberately so content stays readable and structured on-slide.
> - Generate visual imagery that directly represents the slide wording and reinforces its meaning.

**Duration**: 2 hours (120 min: ~90 min content + 30 min lab)
**Format**: Presentation + Hands-On
**Audience**: Developers who completed Foundations
**Prerequisites**: Module 1 completion and familiarity with Ask/Plan/Agent mode

**Module summary**: This Intermediate module maps directly to the Agentic operating layer: standing instructions, memory behavior, strong prompts, skills, tool choices, and controlled execution loops. It explicitly builds on Foundations by turning the Stage 3 reusable checklist or prompt asset and the Stage 4 delegation guardrails into concrete Stage 5 skill and Stage 6 custom-agent artifacts. The emphasis is not just getting answers, but designing repeatable, auditable workflows where autonomy is deliberate. Learners finish with a practical framework for when to ask directly, when to plan, when to use an agent, and how to keep cost and risk in balance.

**Learning objectives**:

- Build instruction and memory strategies that reduce drift across sessions
- Separate durable instructions, safe memory, strong prompts, and reusable skills
- Explain agents, skills, tools, and the anatomy of the agentic loop
- Choose Ask, Plan, Agent, direct tools, background agents, and cloud agents intentionally
- Use `/init`, instruction layering, and optimization controls for repeatable delivery

## Session Agenda

| Section | Topic | Time |
|---------|-------|------|
| 1 | Instructions, memory, context hierarchy, and strong prompts | 20 min |
| 2 | Agents, skills, and the Ask/Plan/Agent decision matrix | 25 min |
| 3 | Agentic loops and tool control points | 25 min |
| 4 | Background/cloud agents, `/init`, instruction layering, and optimization controls | 20 min |
| — | Hands-on labs across three exercises | 30 min |
| **Total** | **Intermediate module** | **120 min** |

## 1. Instructions, Memory, Context Hierarchy, and Strong Prompts (20 min)

### Key Points

- **Slide topic (1 slide): Instructions** — show instructions as standing guidelines that define how Copilot should behave in a team, using familiar examples such as coding standards, review expectations, architecture boundaries, and security rules stored in versioned files. Emphasize that good instructions reduce repeated ad hoc requests and make outputs more predictable from session to session. **AI Safety Moment**: encode non-negotiable guardrails in instructions, including no secret exposure, required review gates before acceptance or merge, and allowed tools or tool boundaries for the workflow.
- **Slide topic (1 slide): Memory** — explain memory as the continuity layer that carries forward stable facts and preferences, such as preferred testing commands or repository conventions, when that context does not belong in policy files. Contrast useful operational memory with risky content such as secrets, regulated data, customer identifiers, credentials, or one-off sensitive details. **AI Safety Moment**: store only durable, non-sensitive working preferences; never persist sensitive, regulated, confidential, personal, or secret data.
- **Slide topic (1 slide): Context Hierarchy: Memory vs Instructions** — walk through how the current task request, scoped instructions, repository guidance, and memory interact during a real task so learners can see which source should win when guidance conflicts. Make clear that memory should complement instructions by adding reusable context, not replace durable standards. **AI Safety Moment**: durable policy in instructions overrides remembered preferences, and convenience memories must not bypass repository, organization, security, or review requirements.
- **Slide topic (1 slide): Anatomy of a Strong Prompt (Task, Scope, Constraints, Definition of Done, Off-Ramp)** — separate prompt anatomy from skill anatomy by showing a strong prompt as a one-time or task-specific request with five fields: the task to perform, the scope to touch, the constraints to honor, the definition of done, and the off-ramp for uncertainty or failure. Use examples such as limiting file changes, naming the smallest test to run, requiring a summary of evidence, and stopping before dependency changes. **Usage Optimization**: structured prompts reduce retries and AIC because Copilot receives the objective, boundaries, success criteria, and stop condition up front.

### 🛡️ Safety Moment

- Treat instructions as the correct home for non-negotiable rules, not as optional chat suggestions.
- Keep memory useful but low-risk: stable preferences are acceptable, sensitive or regulated data is not.
- Resolve conflicts by following the highest durable policy source before convenience or remembered context.

## 2. Agents, Skills, and the Ask/Plan/Agent Decision Matrix (25 min)

### Key Points

- **Slide topic (1 slide): What Is an Agent?** — define an agent as a bounded worker that can plan, act, observe results, and adapt over multiple steps to complete an objective such as fixing a bug, preparing a summary, or investigating a failing test. Emphasize that the value comes from iterative execution, tool use, and evidence gathering, not just better text generation. **AI Safety Moment**: action-capable systems need explicit oversight, stop conditions, escalation paths, and human review before high-impact changes are accepted.
- **Slide topic (1 slide): What Is a Custom Agent?** — define a custom agent as a scoped assistant configuration with a defined purpose, instructions, and limited tools that make delegation repeatable without making permissions broad by default. Connect this directly to the Module 2 lab artifact because learners will create `.github/agents/copilot-quest-implementer.agent.md` after practicing skill creation. **AI Safety Moment**: design custom agents with least privilege, explicit stop conditions, and review requirements before granting tool access.
- **Slide topic (1 slide): What Is a Skill?** — define a skill as a reusable, trusted capability package that teaches Copilot how to perform a recurring task with specific scope, constraints, expected outputs, and acceptance gates. Position skills as privileged workflow guidance because they can steer repeated tool use and handoffs across sessions or teams. **AI Safety Moment**: review skill content and trust boundaries before enabling capabilities that reach external systems, change dependencies, touch production-like resources, or use elevated tools.
- **Slide topic (1 slide): When to Use One or the Other?** — reframe the choice as an Ask/Plan/Agent complexity decision matrix instead of a vague human/tool/agent runtime preference. Use Ask for low-complexity questions or deterministic edits with clear context, Plan for medium-complexity work that needs decomposition and human approval before execution, and Agent for high-complexity, multi-step work with branching evidence, tool use, and checkpoints. **Usage Optimization**: map task complexity to Ask, Plan, or Agent so teams avoid overusing expensive autonomous flows when a direct answer or reviewed plan is enough.

| Complexity | Mode | Best fit | Guardrail |
|------------|------|----------|-----------|
| Low | Ask | Explain, locate, summarize, or edit a known small target | Keep scope narrow and verify the answer |
| Medium | Plan | Break down a task, compare options, or prepare an execution checklist | Approve the plan before code or tool actions |
| High | Agent | Investigate, implement, test, and adapt across multiple steps | Require checkpoints, evidence, and stop conditions |

### 🛡️ Safety Moment

- Agents are action-capable, so they need stop criteria before they begin.
- Custom agents make delegation repeatable, so their purpose, tools, stop conditions, and review gates must be explicit.
- Skills are reusable capability contracts, so review them like any other privileged workflow asset.
- The Ask/Plan/Agent choice should reduce risk and overhead, not simply maximize autonomy.

### 🖥️ Demo: Build a Strong Prompt and Skill File

- **Show me — classify Copilot Quest guidance into prompt fields and a skill file** — facilitator demonstrates the prompt below and states the expected result: one strong-prompt field set, one instruction candidate, one memory candidate, and one reusable `SKILL.md` boundary for the Copilot Quest validation/feedback task.

  ```text
  Classify this Copilot Quest task guidance into a strong prompt, instruction, memory, and SKILL.md fields: "When adding five-letter guess validation and invalid-guess feedback, keep changes scoped, run the smallest relevant test or manual check, stop if validation fails, and ask before changing dependencies, scoring, UI, or project structure."
  ```

- **Now you try — vary the off-ramp and acceptance gate** — attendees repeat the same step, then apply one small variation by changing the off-ramp or acceptance gate before the lab.

### 💡 Optimization Tip: Prompt First, Skill When Repeated

Start with a strong prompt when the work is one-off or exploratory. Promote the pattern into a skill only when the same task, scope, constraints, definition of done, and off-ramp are reused often enough to justify a trusted capability package.

### 🔬 LAB: Exercise 1 — Strong Prompt and Stage 5 Skill Creation

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 1 (10 min) by using the provided Copilot Quest five-letter guess validation/feedback task, separating prompt anatomy from skill design, then creating `.github/skills/copilot-quest-guessing/SKILL.md` with explicit acceptance gates.

## 3. Agentic Loops and Tool Control Points (25 min)

### Key Points

- **Slide topic (1 slide): The Anatomy of an Agentic Loop** — describe the control cycle of request, decide, act, observe, and correct, including where humans should inspect outputs, verify evidence, and stop runaway behavior. Make explicit where loop boundaries should be set before execution begins so learners can see that oversight is designed in, not added after something goes wrong. **Usage Optimization**: short bounded loops with termination criteria reduce token burn, tool churn, review burden, and runaway retries.
- **Slide topic (1 slide): What Are Tools? When to Use a Tool?** — present tools as the bridge from reasoning to action across files, terminals, tests, repositories, and external systems, and explain that they are best for concrete, auditable operations with visible inputs and outputs. Include examples such as searching code, running tests, editing a known file, or querying a system directly instead of spawning a larger workflow. **AI Safety Moment**: tool invocation is a control point; high-risk tools need confirmation, logging, constrained parameters, least privilege, and visible results before trust.

### 🛡️ Safety Moment

- Treat every tool call as an auditable action, not invisible model reasoning.
- Bound loops before execution by defining maximum scope, checkpoints, evidence, and stop conditions.
- Require separate verification evidence before accepting agent output.

### 🖥️ Demo: Define a Bounded Custom Agent Handoff

- **Show me — define a handoff artifact** — facilitator demonstrates the prompt below and states the expected result: a bounded role handoff with inputs, outputs, validation checks, loop checkpoints, and evidence for the same Copilot Quest validation/feedback task.

  ```text
  Define a two-role custom agent handoff for implementing Copilot Quest five-letter guess validation and invalid-guess feedback, then verifying empty, non-alphabetic, wrong-length, and valid five-letter cases. Include each role's inputs, outputs, validation checks, loop checkpoints, and the artifact that must be handed off.
  ```

- **Now you try — add a verifier variation** — attendees repeat the same step, then apply one small variation by changing the verifier's required evidence before the lab.

### 💡 Optimization Tip: Prefer Short Loops With Evidence

Short loops keep autonomy useful without making review expensive. Ask the agent to stop after a bounded milestone, report evidence, and wait for approval before broadening scope or using higher-risk tools.

### 🔬 LAB: Exercise 2 — Stage 6 Custom Agent Handoff Drill

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 2 (10 min) by creating `.github/agents/copilot-quest-implementer.agent.md`, then running a role-based handoff with explicit loop checkpoints, tool boundaries, and verification evidence.

## 4. Background/Cloud Agents, `/init`, Instruction Layering, and Optimization Controls (20 min)

### Key Points

- **Slide topic (1 slide): Background & Cloud Agents — When to Use** — explain the tradeoffs between local synchronous work, background tasks, and cloud agents by using relatable scenarios such as long-running builds, parallel research, or isolated execution with different dependencies. Help learners choose based on duration, observability, environment needs, data sensitivity, and whether they still have meaningful parallel work to do. **Usage Optimization**: use background or cloud agents only for long-running, parallelizable work where the environment, permissions, and review path are appropriate.
- **Slide topic (1 slide): Boilerplate with `/init`** — show `/init` as a practical accelerator for creating reusable setup patterns, starter guidance, or repository scaffolding that teams would otherwise keep rewriting by hand. Tie it to instructions and skills by showing how generated boilerplate becomes safer when teams review, version, and refine it instead of pasting the same setup prompt repeatedly. **Usage Optimization**: standardized scaffolding reduces repeated prompting, setup churn, and inconsistent project starts.
- **Slide topic (1 slide): The Instruction Layering Stack** — explain the precedence model across organization guidance, repository instructions, scoped files, user settings, memory, and the current task request, including why the same task can behave differently in different folders or repositories. Help learners see the stack as a practical debugging tool for inconsistent agent behavior and as a governance control for scale. **AI Safety Moment**: organization and repository layers keep local prompt variance from bypassing safeguards, review gates, and allowed-tool boundaries.
- **Slide topic (1 slide): Optimization Controls — Best Practices for Safe & Efficient AI Workflows** — make model routing, context budgeting, permission boundaries, and validation cadence feel like operational dials teams can tune for speed, quality, cost, and safety rather than abstract settings. Combine least-privilege execution, explicit approval gates, narrow scope, and regular verification into a simple operating posture teams can reuse across repositories and sessions. **Usage Optimization**: use model routing, context budgeting, and validation cadence as a capstone control set for safe, efficient AI workflows.

### 🛡️ Safety Moment

- Do not move sensitive work to background or cloud execution unless data, permissions, logs, and review gates are approved.
- Use instruction layering to make safeguards durable across people, folders, and sessions.
- Treat optimization controls as operational safeguards, not just cost settings.

### 🖥️ Demo: Map Readiness Controls

- **Show me — map readiness controls** — facilitator demonstrates the prompt below and states the expected result: one execution mode decision, one readiness score, one blocking gap, and one guardrail location.

  ```text
  Evaluate this Stage 6 workflow for Stage 7 readiness across auditability, policy compliance, rollback path, execution mode, and validation cadence. Identify one blocking gap and one lightweight guardrail location.
  ```

- **Now you try — change the guardrail location** — attendees repeat the same step, then apply one small variation by moving the guardrail to instructions, tool permissions, hooks, review steps, or `/init` scaffolding before the lab.

### 💡 Optimization Tip: Scale Only What Is Observable

Background and cloud agents help when work is long-running or parallelizable, but they create value only when the workflow remains observable. Pair any scale-up with instruction layering, permission boundaries, validation cadence, and evidence that a reviewer can inspect.

### 🔬 LAB: Exercise 3 — Stage 6 to Stage 7 Guardrail Mapping

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 3 (10 min) mapping background/cloud choices, `/init` scaffolding, instruction layering, and optimization controls to readiness criteria.

*Workshop guide for Module 2: Intermediate (Agentic) — GitHub Copilot Developer Training*