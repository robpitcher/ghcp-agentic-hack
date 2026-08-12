# Module 3: Advanced — Workshop Guide

> **Slide generation instructions**:
>
> - Apply the approved `art-direction.md` throughout the complete solution: human-centered 2D editorial cartoons on pure white backgrounds, original human characters, crisp rounded outlines, flat color, minimal shadows, 85% white, 10% neutral gray, 3% GitHub green, and 2% Copilot purple.
> - Brand through GitHub-aligned color, Mona Sans typography, spacing, contribution-grid texture, and abstract Octicon-inspired geometry only. Never use Octocat, Mona character artwork, Invertocat, the Copilot mascot, or any other GitHub mascot or character in generated imagery, native Slidev layers, overlays, posters, or video. Mona Sans is a permitted typeface; it does not authorize Mona character imagery.
> - Build premier presentation slides with one dominant idea and one dominant visual per slide. Prefer editorial composition, cinematic scale, generous negative space, and progressive disclosure over dense cards, tables, or bullet lists.
> - Keep on-slide wording concise. Move supporting explanation, examples, facilitation guidance, and source detail into the required 3-5 sentence presenter notes while preserving the source meaning.
> - Generate exactly 23 slides in the title order recorded by `slide-manifest.md`. This revised contract includes six approved product-update slides in addition to the original 17-slide sequence.
> - Treat each `Slide topic` marker as required capability coverage. Use the manifest to place approved concept, demonstration, governance, and debugging additions without reordering the source teaching progression.
> - Read every document declared by `module.md` under `sourceDocuments`. Every item in `product-update-brief.md` is approved and required; unapproved candidates remain only in `content/research/github-changelog-options.md`.
> - Preserve every source requirement across slides and presenter notes. Condense explanatory prose on-slide when the full meaning remains source-mapped in the notes; never omit required prompts, commands, named features, numbers, safety callouts, optimization callouts, availability, or governance caveats.
> - **Treat workshop meaning as authoritative.** Concise editorial labels may summarize explanatory prose on-slide, but the required presenter notes must preserve the complete meaning of the supporting declared source content.
> - **Reproduce code blocks, prompts, commands, and numeric values verbatim** — never truncate or rewrite them.
> - Preserve terminology exactly as written, including **AIC**, **AI Safety Moment**, **Usage Optimization**, **MCP**, **API/CLI**, **Extension Marketplace**, **Agent Package Manager (APM)**, and named feature labels.
> - **Do not add product claims that are not in the declared source documents.** Do not add slides or transitions that are absent from the manifest.
> - Do not introduce concepts, tools, commands, workflows, named features, or examples that are not present in the source documents declared by `module.md`.
> - Do not use or infer content from other workshop modules.
> - Preserve the section order and numbering exactly as written.
> - Render **AI Safety Moment** and **Usage Optimization** callouts in distinct badged content boxes, keeping their wording verbatim so the tip category is instantly recognizable.
> - Preserve prompt and code blocks verbatim on the corresponding "Show me" and "Now you try" slides.
> - Generate 3-5 sentence speaker notes for every slide and map them to the matching manifest row and declared source content. Reject and regenerate any slide whose notes are generic, clipped, truncated, or unsupported.
> - If content does not fit on its contracted slide, move supporting explanation into presenter notes or use progressive disclosure; do not add an unlisted slide or drop required content.
> - Control slide layout deliberately so titles, visual anchors, callouts, prompts, and imagery align to the same grid on every slide.
> - Generate or select visual imagery that directly represents the slide wording. Future image candidates must use the same approved GitHub palette and illustration language and must fit the layout without adding generated typography, fake UI, or unofficial logo treatments.

**Duration**: 2 hours (120 min)
**Format**: Presentation + Hands-On
**Audience**: Developers who completed Foundations and Intermediate (Agentic)
**Prerequisites**: Working knowledge of instructions, tools, and agentic workflows

**Module summary**: This Advanced workshop focuses on practical orchestration and production-readiness patterns for scaled AI-assisted development. The module emphasizes multiagent choices, trusted resource discovery, governed integration surfaces, debugging methodology, deployment pathways, and Day 2 readiness as a separate event context. The content stays conceptual for emerging ecosystem surfaces while giving teams enough structure to make safe, cost-aware decisions.

**Learning objectives**:

- Select when multiagents, subagents, or fleet-style parallelism are appropriate
- Vet ecosystem resources, extensions, marketplace entries, and plugins before enterprise use
- Evaluate hooks, MCP, API/CLI, and deployment paths with governance discipline
- Apply repository agent skills and read-only MCP tools to governed Copilot code review
- Debug chat and agent behavior systematically using narrowed context and evidence
- Capture advanced capability and debug evidence that can inform a separate Day 2 event without turning this module lab into event planning

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
| 1 | Orchestration and trusted discovery: multiagents, subagent visibility, fleet, worktrees | 35 min |
| 2 | Governed integration surfaces: hooks, Marketplace, MCP, plugins, Copilot code review | 45 min |
| 3 | Operations and Day 2 readiness: Agents window evidence, debugging, deployment, hack preparation | 35 min |

> **Timing note**: The agenda totals 120 min: 5 min opening + 35 min Section 1 + 45 min Section 2 + 35 min Section 3. Each numbered section includes a 10 min hands-on pause, so the module keeps 30 min of lab time inside the section budgets.

## 1. Orchestration and Trusted Discovery (35 min)

### Key Points

- **Slide topic (1 slide): Multiagents (what they are & when to use them) + Brady Gaster's Squad quick look** — multiagents coordinate multiple AI workers or roles around a shared objective when the work can be separated by ownership, evidence, and merge control. Use them for independent research, implementation, validation, or review lanes; avoid them when one focused workflow can finish safely. Include a quick look at Brady Gaster's Squad as an ecosystem example of multi-agent coordination and squad-style framing without treating it as a required dependency. **AI Safety Moment**: orchestration needs named ownership, bounded responsibilities, and explicit merge controls so parallel work does not create silent conflicts. **Learn more**: <https://github.com/bradygaster/squad>
- **Slide topic (1 slide): Awesome Copilot List** — use curated Copilot resource lists as discovery aids for skills, examples, prompts, and ecosystem ideas, not as automatic enterprise approvals. Point learners to the Awesome Copilot skills catalog for exploration while separating discovery from governance review. **AI Safety Moment**: vet curated resources for source credibility, license posture, data handling, and enterprise compatibility before reuse. **Learn more**: <https://awesome-copilot.github.com/skills/>
- **Slide topic (1 slide): Subagents** — subagents are scoped delegation units with narrow prompts, limited context, clear output contracts, and acceptance checks. They work best when a larger task can be decomposed into auditable slices such as research, test-writing, documentation review, or validation. **AI Safety Moment**: use scoped prompts and minimal permissions per subagent, and keep outputs attributable for auditability.
- **Approved update (1 slide): Inspect Running Subagents** — use the visible model, elapsed time, active tool call, and output contract to decide whether delegated work remains healthy and in scope. Distinguish a delegated subagent from a peer chat or isolated session.
- **Slide topic (1 slide): Fleet** — fleet-style execution means running many independent tasks or agents in parallel when the branches do not block one another. Reserve it for high-volume work such as similar refactors, broad issue triage, or many independent checks where coordination overhead is lower than the time and AIC savings. **Usage Optimization**: reserve fleet/parallel execution for high-volume independent tasks where parallelism yields net AIC/time savings.
- **Approved update (1 slide): Worktrees for Parallel Agent Sessions** — use one worktree and branch per independent session to isolate concurrent edits, then review each diff and merge under one human owner. Isolation reduces collisions but does not prove compatibility or correctness.

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

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 1 (10 min) and deliver ownership, boundaries, review evidence, and a trusted-discovery gate for one bounded scenario.

## 2. Governed Integration Surfaces (45 min)

### Key Points

- **Slide topic (1 slide): Hooks** — hooks create deterministic lifecycle guardrails at moments such as before a tool call, before a change is accepted, or before a workflow advances. Use them for policy checks, secret scanning, validation commands, and repeatable review gates that should not depend on prompt quality. Show learners that Copilot/agent hooks are configured in `.github/hooks/*.json` for repository-level use, can be created from the VS Code integrated terminal or another repository terminal, and must include validation and rollback evidence before they are trusted. **AI Safety Moment**: hooks provide enforceable guardrails through policy checks, secret scanning, and mandatory validation before changes are accepted. **Learn more**: <https://docs.github.com/en/copilot/concepts/agents/hooks>
- **Slide topic (1 slide): Extension Marketplace** — marketplace extensions can expand the developer environment and agent experience, but every addition can change trust, permissions, telemetry, and data-access boundaries. Show learners where to open the VS Code Extensions view or extension details and what to inspect: publisher, version, install/trust signals, permission or telemetry questions, and disable/uninstall path. Treat marketplace enablement as an enterprise onboarding decision rather than an individual convenience choice. **AI Safety Moment**: review publisher trust, permissions, data-access needs, support posture, and enterprise compatibility before enabling marketplace extensions.
- **Slide topic (1 slide): MCP (Model Context Protocol)** — MCP is a conceptual protocol pattern for exposing tools, resources, prompts, and context to AI applications through explicit server boundaries. Keep MCP onboarding governed: know what tools are exposed, what data can be read or changed, how authentication and authorization are enforced, and where configuration would live in the learner's environment. Show learners the VS Code discovery surfaces, such as searching `@mcp` in Extensions, `MCP: Open User Configuration`, `MCP: Open Workspace Folder Configuration`, and `MCP: List Servers`, but do not configure a live MCP server in this workshop. **AI Safety Moment**: server onboarding is a security review event covering authentication, authorization, and data-scope controls. **Learn more**: <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide>
- **Slide topic (1 slide): API/CLI** — APIs and CLIs are often the simplest integration path for deterministic tasks such as querying issues, running tests, collecting logs, or invoking known automation. Show one read-only command or endpoint pattern, expected output shape, logging or approval requirement, and why it is more observable than a broad plugin or agent action. Choose APIs/CLIs when commands are already approved, observable, scriptable, and easy to scope by environment. **AI Safety Moment**: use least-privilege tokens, audit trails, and environment segregation for API/CLI automation.
- **Slide topic (1 slide): Plugins** — plugins package slash commands, skills, custom agents, hooks, and MCP server definitions into installable workflow bundles and should be governed like supply-chain components. Show learners Agent Customizations > Plugins, the Extensions view's agent plugin surfaces where available, and `plugin.json` metadata before enablement. Require provenance, signing or source checks, versioning, rollout scope, telemetry/data-scope questions, included customizations, and rollback before enablement. **AI Safety Moment**: require signing, version governance, controlled rollout, and supply-chain risk review for plugins.
- **Approved update (1 slide): Copilot Code Review with Agent Skills and MCP** — show how a repository skill contributes maintained review expertise and how an MCP tool contributes approved context. Keep a human responsible for verifying the evidence and deciding whether the pull request should change.
- **Approved update (1 slide): Review Attribution and Read-only Evidence** — inspect the skill or MCP attribution attached to a review comment, explain that code-review MCP calls are read-only, and distinguish tools from broader MCP resources or prompts.
- **Approved update (1 slide): Govern Autonomous MCP Tools** — explain that configured tools can run without an interactive approval prompt and require tool allowlisting, least privilege, data-scope review, provenance, secrets handling, and organization policy before execution.

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

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 2 (10 min) and deliver a matrix, attribution, governance controls, and one justified selection.

## 3. Operations and Day 2 Readiness (35 min)

### Key Points

- **Slide topic (1 slide): Debugging Chat and Agents** — advanced debugging inspects context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics before changing architecture. Start with the smallest reproducible prompt, add only the context needed to prove or disprove the issue, and avoid broad reruns. **Usage Optimization**: minimal repro prompts and narrowed context avoid expensive trial-and-error.
- **Approved update (1 slide): Agents Window as Debugging Evidence** — use conversation and diff views to connect prompts, decisions, tool activity, and repository changes. Keep peer chats, delegated subagents, and isolated sessions distinct, and confirm preview availability before the demonstration.
- **Slide topic (1 slide): Deploying Your Agents** — choose the distribution path based on audience, governance, maintainership, and provenance. Name and compare the paths explicitly: GitHub Repo for source-controlled internal sharing, Marketplace for broader discoverability where approved, and Agent Package Manager (APM) as an ecosystem packaging option for reproducible agent, skill, prompt, plugin, and MCP configuration distribution. **AI Safety Moment**: deployment requires policy compliance, permission review, provenance checks, documented ownership, and rollback planning.
- **Slide topic (1 slide): Preparing for Day 2 Hack** — predefine a narrow scope, model strategy, success criteria, fallback path, and final demo gate before the hack begins. The strongest plan identifies what will not be attempted, which model or agent pattern will be used, and how the team will prove the outcome safely. **Usage Optimization**: predefine scope, model strategy, and success criteria to reduce churn during the hack.

### 🛡️ Safety Moment

- Require deploy-readiness evidence before sharing an agent beyond the build team.
- Keep provenance, permissions, owner, version, rollback, and support expectations attached to the package.
- Do not let Day 2 demo pressure bypass policy checks or fallback planning.

### 🖥️ Demo: Debug, deploy, and inspect capability evidence

- **Show me — create a minimal debug and deployment brief** — facilitator demonstrates a prompt that turns a failed run into a minimal repro, debug-evidence checklist, and deployment path recommendation.

  ```text
  Review this failed agent run. Identify the likely context, tool-call order, permission, or instruction-conflict issue. Then propose the smallest safe repro prompt, name the VS Code or CLI evidence to inspect, and recommend GitHub Repo, Marketplace, or Agent Package Manager (APM) as the distribution or packaging path.
  ```

- **Now you try — vary the failure and deployment audience** — attendees repeat the same step, then change the failure signal and intended audience before finalizing their lab artifact.

  ```text
  Re-run the brief for a different failure signal and a different audience: internal team, broader organization, or public marketplace. Explain which deployment review gates change.
  ```

### 💡 Optimization Tip: Narrow the final mile

> 💡 **Usage Optimization**: Debugging and deployment planning improve when the prompt, context, evidence, success criteria, and model strategy are small enough to inspect quickly.

### 🔬 LAB: Exercise 3 — Stage 8 Capability Discovery and Debug Evidence

> **Instructor**: Pause here for hands-on practice. Students complete Exercise 3 (10 min) and deliver a repro, evidence map, capability surface, and deployment path. Day 2 remains a separate event and is not a lab deliverable.

*Workshop guide for Module 3: Advanced — GitHub Copilot Developer Training*