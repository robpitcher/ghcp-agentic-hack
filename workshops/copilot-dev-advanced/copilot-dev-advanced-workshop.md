# Module 3: Advanced — Workshop Guide

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
> - The planned deck for this module is 17 slides: 1 title slide, 1 Session Agenda slide, 12 source `Slide topic` slides, and 3 lab transition slides.
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
> - Preserve terminology exactly as written, including **AIC**, **AI Safety Moment**, **Usage Optimization**, **MCP**, **API/CLI**, **Extension Marketplace**, **Agent Package Manager (APM)**, and named feature labels.
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

**Duration**: 2 hours (120 min)
**Format**: Presentation + Hands-On
**Audience**: Developers who completed Foundations and Intermediate (Agentic)
**Prerequisites**: Working knowledge of instructions, tools, and agentic workflows

**Module summary**: This Advanced workshop focuses on practical orchestration and production-readiness patterns for scaled AI-assisted development. The module emphasizes multiagent choices, trusted resource discovery, governed integration surfaces, debugging methodology, deployment pathways, and Day 2 hack planning. The content stays conceptual for emerging ecosystem surfaces while giving teams enough structure to make safe, cost-aware decisions.

**Learning objectives**:

- Select when multiagents, subagents, or fleet-style parallelism are appropriate
- Vet ecosystem resources, extensions, marketplace entries, and plugins before enterprise use
- Evaluate hooks, MCP, API/CLI, and deployment paths with governance discipline
- Debug chat and agent behavior systematically using narrowed context and evidence
- Build a constrained Day 2 hack plan with success criteria, model strategy, and safety gates

## Recap: Optimizing AI Usage

Before diving into advanced orchestration, recap the efficiency and optimization learnings that frame every decision in this module. These six strategies — drawn from GitHub's optimizing AI usage guidance — maximize quality while reducing token consumption and AIC cost. **Learn more**: <https://docs.github.com/en/copilot/tutorials/optimize-ai-usage>

| # | Strategy | What it covers |
|---|----------|----------------|
| 1 | Choose the right model for the right task | Match capability to work, configure reasoning level, use auto model selection, run subagents on cheaper models |
| 2 | Provide clear guidance in your prompts | Clear task definition, relevant context upfront, an explicit stopping condition |
| 3 | Keep your context lean | Start new conversations per problem, compact long sessions, custom instruction files, only the tools you need |
| 4 | Preserve the cache | Avoid switching models or reasoning mid-session; cached tokens bill at a lower input rate |
| 5 | Research, plan, then implement | Separate phases — plan with a reasoning model, implement with a cheaper one |
| 6 | Utilize learnings to be more efficient | Capture repeatable prompt, tool, and cost lessons for the next workflow |

> 💡 **Usage Optimization**: Model choice, scoped context, and clear stopping conditions are the fastest levers before advanced orchestration begins.

## Session Agenda

| Section | Topic | Time |
|---------|-------|------|
| — | Recap: optimizing AI usage from Modules 1–2 | 5 min |
| 1 | Orchestration and trusted discovery: multiagents, Squad, Awesome Copilot List, subagents, fleet | 35 min |
| 2 | Governed integration surfaces: hooks, Extension Marketplace, MCP, API/CLI, plugins | 40 min |
| 3 | Operations and Day 2 readiness: debugging, deployment paths, hack preparation | 35 min |
| — | Knowledge check using `copilot-dev-advanced-QUIZ.md` | 5 min |

> **Timing note**: The agenda totals 120 min: 5 min recap + 35 min Section 1 + 40 min Section 2 + 35 min Section 3 + 5 min quiz. Each numbered section includes a 10 min hands-on pause, so the module keeps 30 min of lab time inside the section budgets.

## 1. Orchestration and Trusted Discovery (35 min)

### Key Points

- **Slide topic (1 slide): Multiagents (what they are & when to use them) + Brady Gaster's Squad quick look** — multiagents coordinate multiple AI workers or roles around a shared objective when the work can be separated by ownership, evidence, and merge control. Use them for independent research, implementation, validation, or review lanes; avoid them when one focused workflow can finish safely. Include a quick look at Brady Gaster's Squad as an ecosystem example of multi-agent coordination and squad-style framing without treating it as a required dependency. **AI Safety Moment**: orchestration needs named ownership, bounded responsibilities, and explicit merge controls so parallel work does not create silent conflicts. **Learn more**: <https://github.com/bradygaster/squad>
- **Slide topic (1 slide): Awesome Copilot List** — use curated Copilot resource lists as discovery aids for skills, examples, prompts, and ecosystem ideas, not as automatic enterprise approvals. Point learners to the Awesome Copilot skills catalog for exploration while separating discovery from governance review. **AI Safety Moment**: vet curated resources for source credibility, license posture, data handling, and enterprise compatibility before reuse. **Learn more**: <https://awesome-copilot.github.com/skills/>
- **Slide topic (1 slide): Subagents** — subagents are scoped delegation units with narrow prompts, limited context, clear output contracts, and acceptance checks. They work best when a larger task can be decomposed into auditable slices such as research, test-writing, documentation review, or validation. **AI Safety Moment**: use scoped prompts and minimal permissions per subagent, and keep outputs attributable for auditability.
- **Slide topic (1 slide): Fleet** — fleet-style execution means running many independent tasks or agents in parallel when the branches do not block one another. Reserve it for high-volume work such as similar refactors, broad issue triage, or many independent checks where coordination overhead is lower than the time and AIC savings. **Usage Optimization**: reserve fleet/parallel execution for high-volume independent tasks where parallelism yields net AIC/time savings.

### 🛡️ Safety Moment

- Keep a human owner for the plan, final merge, and escalation path.
- Require every delegated branch to state scope, permissions, output format, and acceptance criteria.
- Treat external resource discovery as input to review, not as permission to install or enable.

### 🖥️ Demo: Choose an orchestration pattern

- **Show me — choose multiagent, subagent, or fleet** — facilitator demonstrates a decision prompt that compares decomposition, ownership, review evidence, and cost before choosing the smallest safe orchestration pattern.

  ```text
  For this Copilot Quest scenario, decide whether to use one agent, subagents, multiagents, or fleet-style parallel execution. Explain the ownership model, boundaries, review evidence, and why the choice saves time or AICs without weakening merge control.
  ```

- **Now you try — vet one discovery resource** — attendees repeat the decision step, then add one curated resource or skill idea and document what enterprise review would be required before adoption.

  ```text
  Review this Copilot skill or ecosystem example as a discovery resource. Identify source credibility, enterprise compatibility, permissions, and what must be approved before the team uses it.
  ```

### 💡 Optimization Tip: Parallelize only when independence is real

> 💡 **Usage Optimization**: Fleet and multiagent patterns help only when tasks are independent enough to reduce elapsed time or model spend after coordination, review, and merge costs are counted.

### 🔬 LAB: Exercise 1 — Stage 7 Orchestration and Discovery Plan

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 1 (10 min) selecting multiagent, subagent, or fleet-style orchestration and adding a trusted-discovery review step.

## 2. Governed Integration Surfaces (40 min)

### Key Points

- **Slide topic (1 slide): Hooks** — hooks create deterministic lifecycle guardrails at moments such as before a tool call, before a change is accepted, or before a workflow advances. Use them for policy checks, secret scanning, validation commands, and repeatable review gates that should not depend on prompt quality. Show learners that Copilot/agent hooks are configured in `.github/hooks/*.json` for repository-level use, can be created from the VS Code integrated terminal or another repository terminal, and must include validation and rollback evidence before they are trusted. **AI Safety Moment**: hooks provide enforceable guardrails through policy checks, secret scanning, and mandatory validation before changes are accepted. **Learn more**: <https://docs.github.com/en/copilot/concepts/agents/hooks>
- **Slide topic (1 slide): Extension Marketplace** — marketplace extensions can expand the developer environment and agent experience, but every addition can change trust, permissions, telemetry, and data-access boundaries. Show learners where to open the VS Code Extensions view or extension details and what to inspect: publisher, version, install/trust signals, permission or telemetry questions, and disable/uninstall path. Treat marketplace enablement as an enterprise onboarding decision rather than an individual convenience choice. **AI Safety Moment**: review publisher trust, permissions, data-access needs, support posture, and enterprise compatibility before enabling marketplace extensions.
- **Slide topic (1 slide): MCP (Model Context Protocol)** — MCP is a conceptual protocol pattern for exposing tools, resources, and context to AI applications through explicit server boundaries. Keep MCP onboarding governed: know what tools are exposed, what data can be read or changed, how authentication and authorization are enforced, and where configuration would live in the learner's environment. Do not configure a live MCP server in this workshop. **AI Safety Moment**: server onboarding is a security review event covering authentication, authorization, and data-scope controls. **Learn more**: <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide>
- **Slide topic (1 slide): API/CLI** — APIs and CLIs are often the simplest integration path for deterministic tasks such as querying issues, running tests, collecting logs, or invoking known automation. Show one read-only command or endpoint pattern, expected output shape, logging or approval requirement, and why it is more observable than a broad plugin or agent action. Choose APIs/CLIs when commands are already approved, observable, scriptable, and easy to scope by environment. **AI Safety Moment**: use least-privilege tokens, audit trails, and environment segregation for API/CLI automation.
- **Slide topic (1 slide): Plugins** — plugins extend runtime or tool behavior and should be governed like supply-chain components, even when they are convenient or familiar. Show learners where plugin metadata or configuration is reviewed and require provenance, signing or source checks, versioning, rollout scope, telemetry/data-scope questions, and rollback before enablement. **AI Safety Moment**: require signing, version governance, controlled rollout, and supply-chain risk review for plugins.

### 🛡️ Safety Moment

- Make every new integration surface pass the same permission, provenance, data-scope, and rollback review.
- Prefer reversible, observable controls over hidden one-off configuration.
- Keep MCP conceptual in this workshop: discuss governance boundaries, not a specific server walkthrough.

### 🖥️ Demo: Select the least risky integration surface

- **Show me — set up and compare hooks, marketplace, MCP, API/CLI, and plugins** — facilitator demonstrates a safe draft Copilot/agent hook configuration, validates the JSON, names the rollback command, then uses the integration selection prompt. The expected result is the simplest interface that meets requirements with explicit governance review.

  ```text
  For this scenario, compare hooks, Extension Marketplace, MCP, API/CLI, and plugins. Recommend the simplest safe option based on permissions, observability, data scope, enterprise review, and rollback.
  ```

- **Now you try — change the trust boundary** — attendees repeat the same comparison, then change one constraint such as external data access, production credentials, or marketplace publisher trust.

  ```text
  Re-run the integration decision after adding one new constraint: external data access, production credentials, third-party marketplace publisher, or plugin update risk. Explain whether the recommended surface changes.
  ```

### 💡 Optimization Tip: Simpler interfaces reduce review and token cost

> 💡 **Usage Optimization**: Choose the narrowest integration surface that satisfies the task so tool descriptions, permission review, debugging effort, and coordination overhead stay small.

### 🔬 LAB: Exercise 2 — Stage 7 Integration Due-Diligence Matrix

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 2 (10 min) creating or evaluating a safe draft Copilot/agent hook, inspecting marketplace/plugin trust signals, keeping MCP conceptual, capturing API/CLI evidence, and comparing all five integration surfaces for one bounded scenario.

## 3. Operations and Day 2 Readiness (35 min)

### Key Points

- **Slide topic (1 slide): Debugging Chat and Agents** — advanced debugging inspects context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics before changing architecture. Start with the smallest reproducible prompt, add only the context needed to prove or disprove the issue, and avoid broad reruns. **Usage Optimization**: minimal repro prompts and narrowed context avoid expensive trial-and-error.
- **Slide topic (1 slide): Deploying Your Agents** — choose the distribution path based on audience, governance, maintainership, and provenance. Name and compare the paths explicitly: GitHub Repo for source-controlled internal sharing, Marketplace for broader discoverability where approved, and Agent Package Manager (APM) as an ecosystem packaging option for reproducible agent, skill, prompt, plugin, and MCP configuration distribution. **AI Safety Moment**: deployment requires policy compliance, permission review, provenance checks, documented ownership, and rollback planning.
- **Slide topic (1 slide): Preparing for Day 2 Hack** — predefine a narrow scope, model strategy, success criteria, fallback path, and final demo gate before the hack begins. The strongest plan identifies what will not be attempted, which model or agent pattern will be used, and how the team will prove the outcome safely. **Usage Optimization**: predefine scope, model strategy, and success criteria to reduce churn during the hack.

### 🛡️ Safety Moment

- Require deploy-readiness evidence before sharing an agent beyond the build team.
- Keep provenance, permissions, owner, version, rollback, and support expectations attached to the package.
- Do not let Day 2 demo pressure bypass policy checks or fallback planning.

### 🖥️ Demo: Debug, deploy, and scope the hack

- **Show me — create a minimal debug and deployment brief** — facilitator demonstrates a prompt that turns a failed run into a minimal repro, deployment path recommendation, and Day 2 success gate.

  ```text
  Review this failed agent run. Identify the likely context, tool-call order, permission, or instruction-conflict issue. Then propose the smallest safe repro prompt, recommend GitHub Repo, Marketplace, or Agent Package Manager (APM) as the distribution or packaging path, and define one Day 2 success criterion.
  ```

- **Now you try — vary the failure and deployment audience** — attendees repeat the same step, then change the failure signal and intended audience before finalizing their lab artifact.

  ```text
  Re-run the brief for a different failure signal and a different audience: internal team, broader organization, or public marketplace. Explain which deployment review gates change.
  ```

### 💡 Optimization Tip: Narrow the final mile

> 💡 **Usage Optimization**: Debugging and Day 2 planning both improve when the prompt, context, success criteria, and model strategy are small enough to inspect quickly.

### 🔬 LAB: Exercise 3 — Stage 8 Debug, Deploy, and Day 2 Hack Plan

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 3 (10 min) creating a minimal debug protocol, choosing a deployment path, and writing a constrained Day 2 hack plan.

## 🧠 Knowledge Check (5 min)

> **Instructor**: Close the module with the 12-question quiz (`copilot-dev-advanced-QUIZ.md`). It checks the required Advanced concepts — multiagents with Squad, Awesome Copilot List, subagents, fleet, hooks, Extension Marketplace, MCP, API/CLI, plugins, debugging, deployment paths, and Day 2 planning — so confirm learners can articulate each before they start the Day 2 hack.

*Workshop guide for Module 3: Advanced — GitHub Copilot Developer Training*