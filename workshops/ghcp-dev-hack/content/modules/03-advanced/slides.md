---
theme: ghcp
title: "Module 3: Advanced — Workshop Guide"
layout: advanced-cover
transition: slide-left
colorSchema: light
mdc: true
---

<div class="advanced-kicker">GitHub Copilot · Advanced workflows</div>

# Module 3: Advanced — Workshop Guide

Practical orchestration for production-ready AI-assisted development

**2 hours · Presentation + Hands-On**

::visual::

![Advanced GitHub Copilot workshop orchestration](../../../assets/images/advanced/01-title-animated.png)

<!--
This module focuses on practical orchestration and production-readiness patterns for scaled AI-assisted development. It covers multiagent choices, trusted resource discovery, governed integration surfaces, debugging methodology, deployment pathways, and Day 2 readiness. The audience has already completed Foundations and Intermediate Agentic content and understands instructions, tools, and agentic workflows. Frame every advanced technique as a bounded engineering choice with evidence, governance, and cost awareness.
Timebox this opening slide to 2 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-kicker">120-minute journey</div>

# Session Agenda

<div class="advanced-agenda">
  <div class="advanced-agenda__item">
    <div class="advanced-agenda__time">5</div>
    <strong>Optimize first</strong>
    <span>Models · prompts · context · cache</span>
  </div>
  <div class="advanced-agenda__item advanced-agenda__item--focus">
    <div class="advanced-agenda__time">35</div>
    <strong>Orchestrate</strong>
    <span>Multiagents · subagent evidence · fleet · worktrees</span>
  </div>
  <div class="advanced-agenda__item">
    <div class="advanced-agenda__time">45</div>
    <strong>Integrate safely</strong>
    <span>Hooks · MCP · plugins · governed code review</span>
  </div>
  <div class="advanced-agenda__item advanced-agenda__item--focus">
    <div class="advanced-agenda__time">35</div>
    <strong>Operate</strong>
    <span>Agents window · debug · deploy · Day 2</span>
  </div>
</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> Model choice, scoped context, and clear stopping conditions are the fastest levers before advanced orchestration begins.
</div>

<!--
The agenda totals 120 minutes: a five-minute opening, 35 minutes for orchestration and trusted discovery, 45 minutes for governed integration surfaces, and 35 minutes for operations and Day 2 readiness. The three numbered sections each include a ten-minute hands-on pause, preserving 30 minutes of lab time inside the section budgets. Reconnect the opening to six optimization strategies: model choice, clear prompts, lean context, cache preservation, phased work, and captured learnings. Use the presenter-note timeboxes to protect practice time and shorten discussion rather than skipping required content.
Timebox this agenda slide to 3 minutes.
-->

---
layout: advanced-concept
---

# Multiagents (what they are & when to use them) + Brady Gaster's Squad quick look

<div class="advanced-concept__reveal">

<div v-click class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> orchestration needs named ownership, bounded responsibilities, and explicit merge controls so parallel work does not create silent conflicts.
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Show me — choose multiagent, subagent, or fleet</strong>For this Copilot Quest scenario, decide whether to use one agent, subagents, multiagents, or fleet-style parallel execution. Explain the ownership model, boundaries, review evidence, and why the choice saves time or AICs without weakening merge control.</div>

</div>

::visual::

<BrandedVisual 
  src="../../../assets/images/advanced/03-multiagents-animated.png" 
/>

<!--
Multiagents coordinate multiple AI workers or roles around a shared objective only when ownership, evidence, and merge control can be separated cleanly. Use independent research, implementation, validation, or review lanes, but keep one human owner responsible for the final plan, merge, and escalation path. Brady Gaster's Squad is a quick ecosystem example of squad-style coordination rather than a required workshop dependency or automatic enterprise approval. Use the exact decision prompt to compare coordination cost with expected time or AIC savings before choosing this pattern.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--visual-first">
<div class="advanced-media advanced-media--contain">

![Curated developer resources passing through enterprise trust review](../../../assets/images/advanced/04-trusted-discovery-animated.png)

<div class="advanced-media__caption">Discovery accelerates exploration. Review authorizes use.</div>
</div>
<div>

<div class="advanced-kicker">Discover broadly · approve narrowly</div>

# Awesome Copilot List

<div class="advanced-hero-quote">A curated list is a starting point—not a trust decision.</div>

<div class="advanced-chips">
  <span class="advanced-chip">Credibility</span>
  <span class="advanced-chip">License</span>
  <span class="advanced-chip">Data handling</span>
  <span class="advanced-chip advanced-chip--green">Compatibility</span>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> vet curated resources for source credibility, license posture, data handling, and enterprise compatibility before reuse.
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Now you try — vet one discovery resource</strong>Review this Copilot skill or ecosystem example as a discovery resource. Identify source credibility, enterprise compatibility, permissions, and what must be approved before the team uses it.</div>

</div>
</div>

<!--
The Awesome Copilot skills catalog is a discovery aid for skills, examples, prompts, and ecosystem ideas, not an enterprise approval mechanism. Separate finding a useful resource from deciding whether the team may install, enable, or reuse it. Review source credibility, license posture, data handling, permissions, and enterprise compatibility, and capture the evidence behind the decision. Use the exact learner prompt to create that trust record rather than relying on popularity or presentation quality.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage">
<div>

<div class="advanced-kicker">Delegate the smallest auditable unit</div>

# Subagents

<div class="advanced-number">4</div>
<div class="advanced-metric">elements of a strong delegation</div>

<div class="advanced-chips">
  <span class="advanced-chip advanced-chip--purple">Narrow prompt</span>
  <span class="advanced-chip">Limited context</span>
  <span class="advanced-chip">Output contract</span>
  <span class="advanced-chip advanced-chip--green">Acceptance checks</span>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> use scoped prompts and minimal permissions per subagent, and keep outputs attributable for auditability.
</div>

</div>
<div class="advanced-orbit">
  <div class="advanced-orbit__core">Parent</div>
  <div class="advanced-orbit__node">Research</div>
  <div class="advanced-orbit__node">Tests</div>
  <div class="advanced-orbit__node">Docs</div>
  <div class="advanced-orbit__node">Validate</div>
  <div class="advanced-orbit__node">Evidence</div>
</div>
</div>

<!--
Subagents are scoped delegation units with narrow prompts, limited context, clear output contracts, and acceptance checks. They work best when a larger task can be decomposed into auditable slices such as research, test-writing, documentation review, or validation. A subagent should receive less context and authority than the parent workflow, not a copy of everything. Require every delegated branch to state scope, permissions, output format, and acceptance criteria, and keep every result attributable.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Observe delegation while it runs</div>

# Inspect Running Subagents

<div class="advanced-hero-quote">Status is evidence, not decoration.</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Human scenario</strong>You asked a teammate to investigate one failing test. Before accepting the answer, check what they are using, how long they have been working, what action is running, and whether the result matches the assignment.</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">M</div><div><strong>Model</strong><span>Confirm the intended capability and cost</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">T</div><div><strong>Elapsed time</strong><span>Spot stalls and coordination overhead</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">↻</div><div><strong>Active tool call</strong><span>See what the branch is doing now</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">✓</div><div><strong>Output contract</strong><span>Accept only attributable results</span></div></div>
</div>
</div>

<!--
VS Code can expose the model, elapsed time, and active tool call for a running subagent, making delegation inspectable while work is in progress. Use those signals to confirm that the branch has the intended capability, is not stalled, and is operating within its assigned scope. Distinguish a subagent delegated by a parent chat from a peer chat or a separate isolated agent session because ownership and context boundaries differ. Accept the result only when it satisfies the original output contract and remains attributable to the delegated branch.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Throughput, not complexity</div>

# Fleet

<div class="advanced-hero-quote">Parallelize only when independence is real.</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> reserve fleet/parallel execution for high-volume independent tasks where parallelism yields net AIC/time savings.
</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">A</div><div><strong>Similar refactors</strong><span>Independent files or bounded repositories</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">B</div><div><strong>Broad issue triage</strong><span>Many unrelated items, one review standard</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">C</div><div><strong>Independent checks</strong><span>Parallel evidence, centralized acceptance</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">✓</div><div><strong>Human merge control</strong><span>Count coordination, review, and merge cost</span></div></div>
</div>
</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> Fleet and multiagent patterns help only when tasks are independent enough to reduce elapsed time or model spend after coordination, review, and merge costs are counted.
</div>

<!--
Fleet-style execution runs many independent tasks or agents in parallel when the branches do not block one another. Reserve it for high-volume work such as similar refactors, broad issue triage, or many independent checks where coordination overhead is lower than the expected time and AIC savings. Fleet is a throughput pattern rather than a default response to complexity. Include coordination, review, and merge effort in the estimate, and keep a human owner for the plan, final merge, and escalation path.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Isolate concurrent change sets</div>

# Worktrees for Parallel Agent Sessions

<div class="advanced-hero-quote">Separate working trees make overlap visible.</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> isolation limits accidental file collisions but does not replace review, validation, or controlled merge ownership.
</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">1</div><div><strong>One task per worktree</strong><span>Bound scope and branch ownership</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">2</div><div><strong>Independent session</strong><span>Keep context and edits separate</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">3</div><div><strong>Review each diff</strong><span>Validate before integration</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">4</div><div><strong>Merge deliberately</strong><span>Resolve overlap under one owner</span></div></div>
</div>
</div>

<!--
Worktrees provide an isolation boundary for multiple agent sessions by giving each task a separate working tree and branch. Use them when parallel sessions may edit the same repository but should not share an uncontrolled working directory. A worktree reduces accidental collisions without proving that concurrent changes are compatible, correct, or safe to merge. Keep one human merge owner, review each diff independently, run the required validation, and resolve overlap deliberately.
Timebox this slide to 5 minutes.
-->

---
layout: advanced-lab
---

<span class="lab-badge">Hands-on · 10 minutes</span>

# Exercise 1 — Stage 7 Orchestration and Discovery Plan

Choose the smallest safe orchestration pattern.

**Deliverable:** ownership · boundaries · review evidence · trusted-discovery gate

<!--
Students now apply the orchestration decision rather than discussing it abstractly. Require them to identify task independence, ownership, review evidence, and merge control before selecting multiagent, subagent, or fleet-style orchestration. Their trusted-discovery step must distinguish finding a resource from approving it for enterprise use. Keep the exercise within ten minutes and capture one decision artifact per team.
Allow exactly 10 minutes for this exercise.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Deterministic guardrails</div>

# Hooks

<div class="advanced-hero-quote">Make required checks part of the lifecycle.</div>

<div class="advanced-chips">
  <span class="advanced-chip">.github/hooks/*.json</span>
  <span class="advanced-chip advanced-chip--green">Validate</span>
  <span class="advanced-chip advanced-chip--purple">Rollback</span>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> hooks provide enforceable guardrails through policy checks, secret scanning, and mandatory validation before changes are accepted.
</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">1</div><div><strong>Before tool call</strong><span>Intercept the lifecycle moment</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">2</div><div><strong>Policy + secret checks</strong><span>Apply deterministic controls</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">3</div><div><strong>Validation evidence</strong><span>Prove the change is safe</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">4</div><div><strong>Accept or stop</strong><span>Keep rollback explicit</span></div></div>
</div>
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Show me — set up and compare hooks, marketplace, MCP, API/CLI, and plugins</strong>For this scenario, compare hooks, Extension Marketplace, MCP, API/CLI, and plugins. Recommend the simplest safe option based on permissions, observability, data scope, enterprise review, and rollback.</div>

<!--
Hooks create deterministic lifecycle guardrails before a tool call, before a change is accepted, or before a workflow advances. Use them for policy checks, secret scanning, validation commands, and repeatable review gates that should not depend on prompt quality. Repository-level Copilot or agent hooks live in .github/hooks/*.json, can be created from the VS Code integrated terminal or another repository terminal, and need validation plus rollback evidence before they are trusted. Use the exact integration-selection prompt to compare hooks with Extension Marketplace, MCP, API/CLI, and plugins and prefer the narrowest safe surface.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage">
<div>

<div class="advanced-kicker">A new extension changes the boundary</div>

# Extension Marketplace

<div class="advanced-hero-quote">Convenience is not enterprise onboarding.</div>

<div class="advanced-chips">
  <span class="advanced-chip">Publisher</span>
  <span class="advanced-chip">Version</span>
  <span class="advanced-chip">Permissions</span>
  <span class="advanced-chip">Telemetry</span>
  <span class="advanced-chip advanced-chip--green">Disable / uninstall</span>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> review publisher trust, permissions, data-access needs, support posture, and enterprise compatibility before enabling marketplace extensions.
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Now you try — change the trust boundary</strong>Re-run the integration decision after adding one new constraint: external data access, production credentials, third-party marketplace publisher, or plugin update risk. Explain whether the recommended surface changes.</div>

</div>
<div class="advanced-media advanced-media--contain">

![Marketplace choices crossing governed trust gates](../../../assets/images/advanced/09-marketplace-trust-animated.png)

<div class="advanced-media__caption">Prefer reversible, observable controls.</div>
</div>
</div>

<!--
Marketplace extensions can expand the developer environment and agent experience, but every addition can change trust, permissions, telemetry, and data-access boundaries. Open the VS Code Extensions view or extension details and inspect publisher, version, install or trust signals, permission and telemetry questions, support posture, and the disable or uninstall path. Treat marketplace enablement as an enterprise onboarding decision rather than an individual convenience choice. Use the exact learner prompt to change one trust-boundary constraint and decide whether the recommended integration surface should change.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-concept
---

# MCP (Model Context Protocol)

<div class="advanced-concept__reveal">

<div v-click class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> server onboarding is a security review event covering authentication, authorization, and data-scope controls.
</div>

</div>

::visual::

![GitHub Copilot requesting tools, resources, prompts, and context through controlled server gates](../../../assets/images/advanced/10-mcp-light-sample.png)

<!--
MCP is a conceptual protocol pattern for exposing tools, resources, prompts, and context to AI applications through an explicit server boundary. Governance starts with knowing what tools are exposed, what data can be read or changed, how authentication and authorization are enforced, and where configuration lives. Show the VS Code discovery surfaces by searching @mcp in Extensions and naming MCP: Open User Configuration, MCP: Open Workspace Folder Configuration, and MCP: List Servers. Keep MCP conceptual in this workshop and do not configure a live server.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Narrow · observable · scriptable</div>

# API/CLI

<div class="advanced-hero-quote">For deterministic work, simple interfaces often win.</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> use least-privilege tokens, audit trails, and environment segregation for API/CLI automation.
</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">&gt;_</div><div><strong>Read-only operation</strong><span>Approved command or endpoint</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">{ }</div><div><strong>Expected output</strong><span>Known, inspectable shape</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">◎</div><div><strong>Logging + approval</strong><span>Observable execution evidence</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">▣</div><div><strong>Scoped environment</strong><span>Least privilege by boundary</span></div></div>
</div>
</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> Choose the narrowest integration surface that satisfies the task so tool descriptions, permission review, debugging effort, and coordination overhead stay small.
</div>

<!--
APIs and CLIs are often the simplest integration path for deterministic tasks such as querying issues, running tests, collecting logs, or invoking known automation. Show one read-only command or endpoint pattern, the expected output shape, the logging or approval requirement, and why the operation is more observable than a broad plugin or agent action. Choose APIs or CLIs when commands are already approved, observable, scriptable, and easy to scope by environment. Least-privilege tokens, audit trails, and environment segregation keep the narrow interface safe.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--visual-first">
<div class="advanced-media advanced-media--contain">

![Versioned plugin package moving through supply-chain controls](../../../assets/images/advanced/12-plugin-supply-chain-animated.png)

<div class="advanced-media__caption">Treat workflow bundles like supply-chain components.</div>
</div>
<div>

<div class="advanced-kicker">Package power with provenance</div>

# Plugins

<div class="advanced-hero-quote">One bundle can change many trust surfaces.</div>

<div class="advanced-chips">
  <span class="advanced-chip">Commands</span>
  <span class="advanced-chip">Skills</span>
  <span class="advanced-chip">Agents</span>
  <span class="advanced-chip">Hooks</span>
  <span class="advanced-chip">MCP definitions</span>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> require signing, version governance, controlled rollout, and supply-chain risk review for plugins.
</div>

</div>
</div>

<!--
Plugins package slash commands, skills, custom agents, hooks, and MCP server definitions into installable workflow bundles, so govern them like supply-chain components. Show Agent Customizations > Plugins, the Extensions view's agent plugin surfaces where available, and plugin.json metadata before enablement. Review provenance, signing or source checks, versioning, rollout scope, telemetry, data scope, included customizations, support, and rollback as one decision. Controlled rollout limits the impact of a package that later fails review or behaves unexpectedly.
Timebox this slide to 4 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Repository guidance meets review context</div>

# Copilot Code Review with Agent Skills and MCP

<div class="advanced-hero-quote">Customize review with governed, repository-owned inputs.</div>

<div class="advanced-chips">
  <span class="advanced-chip advanced-chip--purple">Agent skills</span>
  <span class="advanced-chip">MCP tools</span>
  <span class="advanced-chip advanced-chip--green">Review comments</span>
</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">1</div><div><strong>Repository skill</strong><span>Encode repeatable review expertise</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">2</div><div><strong>MCP tool</strong><span>Retrieve approved external context</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">3</div><div><strong>Copilot code review</strong><span>Apply context to the pull request</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">4</div><div><strong>Human decision</strong><span>Verify evidence before accepting</span></div></div>
</div>
</div>

<!--
Copilot code review can use repository agent skills and MCP tools as generally available customization paths for Copilot Pro, Pro+, Business, and Enterprise users. Skills encode reusable repository expertise, while MCP tools provide approved context that can strengthen a review comment. Treat both inputs as governed dependencies with explicit ownership, provenance, and scope rather than as an automatic source of truth. The reviewer remains responsible for checking the cited evidence and deciding whether the comment should change the pull request.
Timebox this slide to 5 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Inspect why a comment exists</div>

# Review Attribution and Read-only Evidence

<div class="advanced-hero-quote">A useful review comment should reveal its supporting context.</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Follow one review comment</strong>A checkout pull request triggers a repository skill, a read-only policy lookup, and an attributed comment. Verify each source before deciding whether the code should change.</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">A</div><div><strong>Attribution</strong><span>Identify the skill or MCP context used</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">R</div><div><strong>Read-only MCP</strong><span>Tools can retrieve but not mutate</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">T</div><div><strong>Tools only</strong><span>Not MCP resources or prompts here</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">E</div><div><strong>Evidence check</strong><span>Verify relevance and provenance</span></div></div>
</div>
</div>

<!--
When Copilot code review uses a repository skill or MCP context, inspect the attribution attached to the resulting review comment. MCP calls made by code review are read-only, which limits mutation risk but does not remove confidentiality, provenance, or relevance concerns. In this GitHub review and cloud-agent context, MCP currently supplies tools rather than the protocol's broader resources or prompts capabilities. Verify the attributed source and supporting evidence before acting on the recommendation.
Timebox this slide to 5 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage">
<div>

<div class="advanced-kicker">Autonomy requires policy before execution</div>

# Govern Autonomous MCP Tools

<div class="advanced-hero-quote">No approval prompt means controls must be designed upstream.</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> allowlist tools, apply least privilege, protect secrets, and review shared repository configuration before enabling autonomous calls.
</div>

</div>
<div class="advanced-chips">
  <span class="advanced-chip advanced-chip--green">Allowlist</span>
  <span class="advanced-chip">Least privilege</span>
  <span class="advanced-chip">Provenance</span>
  <span class="advanced-chip">Secrets</span>
  <span class="advanced-chip advanced-chip--purple">Policy</span>
</div>
</div>

<!--
Configured MCP tools can run during Copilot code review without an interactive approval prompt, so governance must be established before execution. Repository MCP configuration is shared with Copilot cloud agent, and GitHub and Playwright MCP servers are enabled by default unless policy changes their use. Review tool allowlists, least-privilege credentials, data scope, provenance, secret handling, and organization policy as one control set. Revisit the configuration whenever a server, tool definition, repository boundary, or policy changes.
Timebox this slide to 5 minutes.
-->

---
layout: advanced-lab
---

<span class="lab-badge">Hands-on · 10 minutes</span>

# Exercise 2 — Stage 7 Integration Due-Diligence Matrix

Compare five integration surfaces and one code-review workflow.

**Deliverable:** matrix · attribution · governance controls · justified selection

<!--
Students compare hooks, Extension Marketplace, MCP, API/CLI, and plugins against one bounded scenario, then add a Copilot code-review row showing how a repository skill or read-only MCP tool contributes evidence. Their matrix must include permissions, provenance, data scope, observability, enterprise review, and rollback. They must also record attribution, tool allowlisting, least privilege, and secrets handling for the review workflow. The outcome is one justified selection with a complete code-review control set.
Allow exactly 10 minutes for this exercise.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--wide">
<div>

<div class="advanced-kicker">Turn session history into inspectable evidence</div>

# Agents Window as Debugging Evidence

<div class="advanced-hero-quote">Conversation and diff views show what changed and why.</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Trace the mistake</strong>A teammate reports that the agent changed the wrong file. Match the conversation decision and active tool call to the resulting diff, then isolate the first point where intent and action diverged.</div>

</div>
<div class="advanced-steps">
  <div class="advanced-step"><div class="advanced-step__icon">C</div><div><strong>Conversation view</strong><span>Trace prompts, decisions, and tool activity</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">D</div><div><strong>Diff view</strong><span>Inspect the resulting repository changes</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">S</div><div><strong>Session boundary</strong><span>Separate peer chats and isolated runs</span></div></div>
  <div class="advanced-step"><div class="advanced-step__icon">E</div><div><strong>Evidence map</strong><span>Connect cause, action, and output</span></div></div>
</div>
</div>

<!--
The VS Code Agents window provides conversation and diff views that can be used as inspectable debugging evidence for agent sessions. Use the conversation view to trace prompts, decisions, and tool activity, then connect that history to the resulting repository diff. Keep peer chats, delegated subagents, and separate isolated sessions distinct so evidence is attributed to the correct execution boundary. The Agents window remains in public preview and the agent host is progressively rolling out, so facilitators should confirm availability before the demonstration.
Timebox this slide and demonstration to 6 minutes.
-->

---
layout: advanced-concept
---

# Debugging Chat and Agents

<div class="advanced-concept__reveal">

<div v-click class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> minimal repro prompts and narrowed context avoid expensive trial-and-error.
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Show me — create a minimal debug and deployment brief</strong>Review this failed agent run. Identify the likely context, tool-call order, permission, or instruction-conflict issue. Then propose the smallest safe repro prompt, name the VS Code or CLI evidence to inspect, and recommend GitHub Repo, Marketplace, or Agent Package Manager (APM) as the distribution or packaging path.</div>

</div>

::visual::

![A GitHub Copilot run narrowing five evidence streams to one verified repository cause](../../../assets/images/advanced/14-debugging-light-sample.png)

<!--
Advanced debugging inspects context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics before changing architecture. Start with the smallest reproducible prompt, add only the context needed to prove or disprove the issue, and avoid broad reruns. Inspect the observable VS Code or CLI evidence before introducing a more complex workflow. Use the exact debug and deployment prompt to connect failure evidence, a safe reproduction, and an appropriate GitHub Repo, Marketplace, or Agent Package Manager path.
Timebox this slide to 6 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-kicker">Audience defines the distribution path</div>

# Deploying Your Agents

<div class="advanced-route-grid">
  <div>
    <div class="advanced-number">01</div>
    <h2>GitHub Repo</h2>
    <p>Source-controlled internal sharing</p>
  </div>
  <div>
    <div class="advanced-number">02</div>
    <h2>Marketplace</h2>
    <p>Broader discoverability where approved</p>
  </div>
  <div>
    <div class="advanced-number">03</div>
    <h2>Agent Package Manager (APM)</h2>
    <p>Reproducible ecosystem packaging</p>
  </div>
</div>

<div class="advanced-callout advanced-callout--safety">
<strong>AI Safety Moment:</strong> deployment requires policy compliance, permission review, provenance checks, documented ownership, and rollback planning.
</div>

<div v-click class="advanced-prompt advanced-prompt--reveal"><strong>Now you try — vary the failure and deployment audience</strong>Re-run the brief for a different failure signal and a different audience: internal team, broader organization, or public marketplace. Explain which deployment review gates change.</div>

<!--
Choose the distribution path based on audience, governance, maintainership, and provenance. GitHub Repo supports source-controlled internal sharing, Marketplace supports broader discoverability where approved, and Agent Package Manager is an ecosystem packaging option for reproducible agent, skill, prompt, plugin, and MCP configuration distribution. Require deploy-readiness evidence with provenance, permissions, owner, version, rollback, support expectations, and policy compliance before an agent leaves the build team. Use the exact learner prompt to change the failure signal and intended audience and identify which deployment gates must change.
Timebox this slide to 6 minutes.
-->

---
layout: advanced-content
---

<div class="advanced-stage advanced-stage--visual-first">
<div class="advanced-media advanced-media--left">

![A bounded Day 2 hack roadmap with governance and demo gates](../../../assets/images/advanced/16-day-2-plan-animated.png)

<div class="advanced-media__caption">Bound the ambition before the clock starts.</div>
</div>
<div>

<div class="advanced-kicker">Prepare the final mile</div>

# Preparing for Day 2 Hack

<div class="advanced-hero-quote">Define success—and what you will not attempt.</div>

<div class="advanced-chips">
  <span class="advanced-chip">Narrow scope</span>
  <span class="advanced-chip advanced-chip--purple">Model strategy</span>
  <span class="advanced-chip">Success criteria</span>
  <span class="advanced-chip">Fallback</span>
  <span class="advanced-chip advanced-chip--green">Demo gate</span>
</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> predefine scope, model strategy, and success criteria to reduce churn during the hack.
</div>

</div>
</div>

<div class="advanced-callout advanced-callout--optimization">
<strong>Usage Optimization:</strong> Debugging and deployment planning improve when the prompt, context, evidence, success criteria, and model strategy are small enough to inspect quickly.
</div>

<!--
Preparing for Day 2 means predefining a narrow scope, model strategy, success criteria, fallback path, and final demo gate before the hack begins. The strongest plan identifies what will not be attempted, which model or agent pattern will be used, and how the team will prove the outcome safely. Day 2 remains a separate event context rather than a deliverable for this module. Do not let demo pressure bypass policy checks, evidence requirements, or fallback planning.
Timebox this slide to 7 minutes.
-->

---
layout: advanced-lab
---

<span class="lab-badge">Hands-on · 10 minutes</span>

# Exercise 3 — Stage 8 Capability Discovery and Debug Evidence

Turn one failed run into a minimal, inspectable protocol.

**Deliverable:** repro · evidence map · capability surface · deployment path

<!--
Students finish by turning a failure into a minimal debug protocol and evidence checklist. They should identify the VS Code or CLI evidence that maps to context, tool-call order, permissions, instruction conflicts, or loop behavior. The final artifact includes capability-surface evidence and a justified deployment path based on the intended audience and governance boundary. Remind the group that Day 2 is a separate event and not a deliverable for this exercise.
Allow exactly 10 minutes for this exercise.
-->
