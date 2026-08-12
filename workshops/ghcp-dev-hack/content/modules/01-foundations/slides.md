---
theme: ghcp
title: "GitHub Copilot Foundations"
info: |
  Foundations for choosing a Copilot harness, controlling context, reviewing output, and delegating reversibly.
layout: two-panel
transition: slide-left
mdc: true
---

::title::
# GitHub Copilot Foundations
::text::

## Meet Agent Mergewell and Purrmission

<div class="foundations-title-brand">
  <img src="/images/microsoft-logo.png" alt="Microsoft" />
</div>

::visual::
<img src="/images/foundation-welcome.png" alt="Agent Mergewell welcoming learners while Purrmission watches beside him" />

<!--
Agent Mergewell is the curious inventor who explores tools, context, and practical ways to get useful work done with Copilot. Purrmission is the observant safety guardian who watches permissions, policy, review, and rollback boundaries before a risky action proceeds. Together they make momentum and operating boundaries visible. [Sources: Foundations character documents; GitHub responsible-use guidance.]
Use this title slide to establish the partnership: Mergewell creates momentum, while Purrmission makes the operating boundary visible.
-->

---
layout: two-panel
---

::title::
# Session Agenda
::text::

<div class="foundations-agenda">

- **1 · Surfaces and trust — 15 min:** IDE, CLI, GitHub.com, cloud/app boundaries, policy, and accountability
- **2 · Interaction modes — 20 min:** VS Code Chat, inline assistance, Ask, Plan, and Agent
- **3 · Economics and routing — 20 min:** tokens, AI Credits, usage evidence, and model choice
- **4 · Context and delegation — 20 min:** context windows, context recovery, and least privilege
- **5 · Missions — 45 min:** use a harness, produce evidence, and debrief

</div>

::visual::
<img src="/images/session-route.png" alt="Agent Mergewell and Purrmission following the session route from foundations to missions" />

<!--
The presentation now uses 75 minutes across four teaching sections, followed by 45 minutes of mission play. The exact slide count is intentionally flexible; the timeboxes are the constraint, and each review must flag material that threatens the 75-minute teaching budget. Each section prepares evidence learners will use during mission play. [Sources: Foundations Part 1 and Part 2 workshop guides; approved review feedback.]
Tell learners that the detailed mission instructions live outside the deck so the presentation can stay clear and the play can stay actionable.
-->

---
layout: two-panel
---

::title::
# Where Copilot Lives
::text::

- **VS Code:** stay in coding flow with precise editor and repository context
- **Copilot CLI:** investigate and act without leaving the terminal
- **GitHub.com and cloud agent:** collaborate through issues, branches, pull requests, and delegated repository work
- **Copilot App:** synthesize configured work sources across contexts when available
- Choose the harness whose context, tools, permissions, and evidence best fit the task

::visual::
<img src="/images/copilot-surface-benefits.png" alt="Connected workstations representing Copilot benefits across coding, terminal, collaboration, and app surfaces" />

<!--
Copilot spans IDE, terminal, GitHub.com, cloud-agent, and app experiences, and each surface creates a different practical advantage. VS Code protects coding flow, CLI keeps terminal work local, GitHub and cloud surfaces create collaboration evidence, and the App can synthesize configured sources when available. These surfaces are not interchangeable because their context, tools, permissions, policy, and review evidence differ. [Sources: GitHub Docs, What is GitHub Copilot; Copilot CLI; About cloud agent.]
Ask learners to choose the surface that gives their next task the strongest benefit with the narrowest safe boundary.
-->

---
layout: two-panel
---

::title::
# Copilot App: An Agent-native desktop
::text::

<div class="foundations-compact">

- **One control center:** find the right work, start and steer agents, review progress, and land changes across repos — no tab-switching
- **Parallel agent sessions:** each local session runs in an isolated git worktree; cloud sessions let agents keep working from anywhere
- **Canvases:** turn agent work into shared, inspectable surfaces — plans, terminals, diffs, and previews visible in context
- **My Work + Automations:** bring together issues, PRs, sessions, and repo context; turn repeatable prompts into scheduled tasks
- **Agent Merge:** carries PRs through review, checks, and merge conditions so you stay focused on judgment and delivery

</div>

::visual::
<img src="/images/copilot-app-synthesis.png" alt="Agent Mergewell synthesizing evidence from several configured work sources" />

<!--
The GitHub Copilot app is an agent-native desktop experience for managing software work from idea to pull request. It gives a single control center for finding work, steering agents, reviewing progress, and landing changes across repositories. Each local session runs in its own isolated git worktree; cloud sessions let agents keep working in GitHub-hosted environments you can pick up from anywhere. Canvases turn agent work — plans, terminals, diffs, browser previews — into shared inspectable surfaces. My Work, Automations, and Agent Merge handle the non-coding coordination that has always taken developer time. [Sources: GitHub Docs, What is GitHub Copilot; Foundations content verification.]
Have learners name a cross-context or coordination task the App could handle and the boundary they would verify first.
-->

---
layout: two-panel
---

::title::
# What is a Harness?
::text::

- A **control layer** between you and AI models — steer, manage, and organize interactions without being tied to a specific model
- If the AI model is the engine, the harness is the steering system that guides it in the right direction
- **Host:** IDE, terminal, GitHub.com, cloud, or App
- **Context:** files, selections, history, instructions, and sources
- **Tools:** actions and integrations available to Copilot
- **Guardrails:** permissions, policy, review, and rollback

::visual::
<img src="/images/copilot-harness.png" alt="Agent Mergewell inspecting a bounded Copilot harness of context, tools, and guardrails" />

<!--
In this workshop, a harness means the environment that shapes what Copilot can see, use, and change: the host, context, tools, and guardrails. The harness is broader than the model or prompt because permissions, instructions, policy, review, and rollback determine practical risk. Describe all four elements before selecting an interaction pattern. [Sources: GitHub Copilot documentation on surfaces, context, tools, and cloud agent.]
Ask learners to describe the harness around their next task before choosing a prompt or mode.
-->

---
layout: two-panel
---

::title::
# VS Code Chat
::text::

- Use **@ mentions** to ground context — issues, PRs, repos, files, and more
- Use **slash commands** to avoid writing complex prompts for common scenarios:
  - `/clear` — Clear conversation
  - `/delete` — Delete a conversation
  - `/new` — Start a new conversation
  - `/rename` — Rename a conversation
- **Match the interaction:** completions preserve momentum; inline chat handles scoped transformations

::visual::
<div class="foundations-vscode-visual">
  <img src="/images/vscode-grounding.png" alt="Agent Mergewell precisely grounding editor context for a coding task" />
  <img class="foundations-vscode-mark" src="/images/code-stable.png" alt="Visual Studio Code" />
</div>

<!--
VS Code Chat's main benefit is keeping explanation, editing, and review inside the coding flow with editor-aware context. `#` grounds the interaction, `@` selects a participant or specialist experience, and `/` invokes a focused command; exact options depend on the installed release and extensions. Completions preserve momentum while inline chat supports a deliberate scoped transformation. Verify demonstrated references against the installed release. [Sources: VS Code documentation, Use chat in VS Code.]
Demonstrate one `#selection` question and one inline transformation to show how precise context reduces switching and review effort.
-->

---
layout: two-panel
---

::title::
# Copilot CLI in your terminal
::text::

- **To install:** `winget install GitHub.Copilot`
- Use any `/model`, `/agent`, `/fleet`
- `/resume` where you left off
- Seamlessly move from CLI to IDE and back again

::visual::
<img src="/images/cli-controlled-action.png" alt="Purrmission reviewing a terminal-native action before execution" />

<!--
Copilot CLI's benefit is terminal-native assistance grounded in the current operational environment, reducing the need to translate shell work into another surface. The current Copilot CLI and older GitHub CLI Copilot extension are different command families, so verify the installed binary and version before teaching exact commands. GitHub documents `/context` for CLI-specific context management, and every generated command remains a candidate until its side effects, permissions, and rollback are understood. [Sources: GitHub Docs, Installing Copilot CLI; Managing context in Copilot CLI; Using the GitHub CLI Copilot extension.]
Demonstrate the benefit and control together by inspecting context, preparing one command, and reviewing it before execution.
-->

---
layout: two-panel
---

::title::
# Enterprise Data and Policy Boundaries
::text::

- Product behavior is not the same as organization policy
- Plan and repository configuration affect available controls
- Data handling and retention claims need the correct source
- Do not infer a universal boundary across harnesses

::visual::
<img src="/images/enterprise-boundaries.png" alt="Purrmission guarding a clearly bounded enterprise data and policy perimeter" />

<!--
Privacy, retention, content exclusion, and data-handling behavior must be stated for the relevant product, plan, and organization configuration. Do not present enterprise controls as uniform across every Copilot surface or deployment. Mark an unverified boundary for administrator confirmation rather than guessing. [Sources: GitHub Copilot Trust Center and product policy documentation; Foundations content verification.]
Use a major Purrmission safety callout here because an incorrect policy assumption can expose data or create an approval failure.
-->

---
layout: two-panel
---

::title::
# Human Accountability for AI-Assisted Code
::text::

- Generated output is draft material
- Review security, quality, provenance, and policy
- Keep acceptance responsibility with the developer and reviewer
- Never treat model confidence as approval

::visual::
<img src="/images/human-accountability.png" alt="Agent Mergewell making the final accountable review decision with Purrmission observing" />

<!--
Generated code and content require human review for correctness, security, provenance, and policy fit. The model can provide assistance, but the developer and reviewer remain accountable for what enters the repository or production path. Model confidence never substitutes for an acceptance decision. [Sources: GitHub responsible-use guidance; Foundations content verification.]
Use Purrmission naturally as the watchful reviewer, reserving the icon callout for a high-consequence acceptance or provenance concern.
-->

---
layout: two-panel
---

::title::
# Built in Agents
::text::

- **Ask:** understand or explain without changing files
- **Plan:** review sequence, tradeoffs, and acceptance criteria
- **Agent:** constrained execution with explicit checkpoints
- Escalate only when scope and rollback are clear

::visual::
<img src="/images/interaction-autonomy.png" alt="Agent Mergewell directing distinct collaborators across increasing levels of action" />

<!--
Ask, Plan, and Agent are a useful mental model for increasing action and responsibility, but exact behavior depends on the host product and configuration. Escalate only when acceptance criteria, scope, permissions, and rollback are explicit. These labels are a teaching metaphor, not a claim about universal product architecture. [Sources: VS Code Copilot documentation; GitHub cloud agent documentation.]
Use the ladder to ask which review gate must be added each time autonomy increases.
-->

---
layout: two-panel
---

::title::
# Tokens: What Enters the Model
::text::

- Prompt text and instructions
- Referenced files, selections, and sources
- Conversation history and tool results
- Cached context when supported

::visual::
<img src="/images/token-input-handoff.png" alt="Selected instructions, references, history, and tool results entering a bounded model handoff" />

<!--
Input tokens include prompt material, instructions, references, history, and tool results, while cached context may affect usage when supported. Every reference should earn its place by changing the decision or improving the evidence. The slide's blocks are conceptual categories rather than exact tokenizer boundaries. [Sources: GitHub Docs, Models and pricing; Foundations content verification.]
Use a topic-focused still or approved token video only if it makes the changing input state easier to understand than a diagram.
-->

---
layout: two-panel
---

::title::
# Tokens: What Comes Back
::text::

- Output tokens form the response or proposed change
- Longer output can increase spend and latency
- More context can improve quality or add noise
- Trim stale history before scaling a workflow

::visual::
<img src="/images/token-output-tradeoff.png" alt="Agent Mergewell balancing useful generated output against latency and volume" />

<!--
Output tokens are the generated response or proposed change, and longer responses can affect usage and latency. Context size is a tradeoff: additional material can improve quality when relevant but can also add noise and cost. A concise response is useful only when it preserves the evidence needed for review. [Sources: GitHub Docs, Models and pricing; Foundations content verification.]
Ask learners to shorten a request without removing the evidence needed for a reliable answer.
-->

---
layout: two-panel
---

::title::
# GitHub AI Credits
::text::

- AI credits are a usage-based billing unit in applicable plans
- GitHub documents 1 AI credit as $0.01 USD
- Credit treatment varies by plan and organization scope
- Do not generalize allowances across every harness

::visual::
<img src="/images/ai-credit-ledger.png" alt="Purrmission verifying usage evidence in an abstract AI credit ledger" />

<!--
GitHub AI Credits are the usage-based billing unit for applicable Copilot plans, with GitHub documenting one credit as one cent USD. Which experiences consume credits and how allowances apply depends on plan and billing scope. Teams should verify the applicable budget and policy before scaling usage. [Sources: GitHub Docs, Models and pricing; Usage-based billing for organizations and enterprises.]
Use a major Purrmission callout when a team is about to scale usage without checking its applicable budget or policy.
-->

---
layout: single-panel
---

::title::
# Model Routing: Match the Task
::content::

<ModelRoutingStaticPlate />

<!--
Model selection should compare task fit, quality, latency, cost, and availability rather than relying on a universal ranking. Auto can be a useful default, but it must not be described as always cheapest; current model pricing and plan indicators require a dated source review. The static plate remains pixel-locked while native overlays separate fresh input, conditional cached input, and output across two turns before the human reviews evidence and chooses the next route. Cache reuse remains conditional on unchanged-prefix stability and provider, model, product, and harness support. [Sources: GitHub Docs, Auto model selection; Models and pricing; accepted Foundations Scene 09.]
-->

---
layout: single-panel
---

::title::
# Model Guide: Match the Workload
::content::

<div class="foundations-model-guide">

| Use case | Representative model families |
|---|---|
| **Let Copilot choose** | Auto |
| **Fast, simple, or repetitive** | GPT-5.6 Luna · Claude Haiku 4.5 · Gemini 3.6 Flash |
| **Everyday coding and agent tasks** | GPT-5.6 Terra · Claude Sonnet 5 · Grok 4.5 |
| **Repository exploration and agentic coding** | GPT-5.4 mini · GPT-5.3-Codex |
| **Deep debugging and architecture** | GPT-5.6 Sol · GPT-5.5 · Gemini 3.1 Pro |
| **Long-horizon autonomous coding** | Claude Fable 5 |

<div class="ghcp-callout">Check your current picker: models, versions, plan/surface availability, and AI-credit rates change; Auto routes by task/availability and may receive a paid-plan discount.</div>
</div>

<!--
Start with the workload, not a permanent model leaderboard: Auto considers task complexity and availability, while manual selection should follow the task shape. The named families are representative current picker options and can fit more than one row. Verify the current picker, plan/surface availability, version, and AI-credit rate before choosing; paid plans may receive an Auto discount. Then transition to slide 16, where learners inspect usage evidence in the harness. [Sources: GitHub Docs, Supported AI models in GitHub Copilot; AI model comparison; Comparing AI models using different tasks; Foundations content verification; reviewed 2026-08-05.]
-->

---
layout: two-panel
---

::title::
# Usage by Harness: IDE and CLI
::text::

- IDE: inspect the current product usage view and model indicators
- CLI: use the documented usage/context workflow for the installed version
- Record the session, context, model, and observed result
- Separate observed facts from assumptions

::visual::
<div class="foundations-diagram" role="img" aria-label="Usage evidence from IDE and CLI harnesses">
  <strong>Session evidence</strong>
  <span>IDE</span><span>CLI</span><span>Context</span><span>Model</span>
</div>

<!--
IDE and CLI expose different usage and context evidence, so developers should record the actual entry point and installed version rather than copying a cross-product instruction. A useful record names the harness, context scope, model or routing choice, and observed result. Do not treat a CLI-specific command as a universal host behavior. [Sources: GitHub Docs, Monitoring AI Credits usage; Managing context in Copilot CLI; Foundations content verification.]
Have learners compare one bounded task in their IDE and CLI without claiming that one observation proves a universal cost rule.
-->

---
layout: two-panel
---

::title::
# Usage by Harness: GitHub, Cloud, and App
::text::

- GitHub.com: account and organization usage evidence
- Cloud agent: repository task, branch, and pull-request evidence
- Copilot App: configured sources and policy boundary
- Use billing/settings for monthly totals and thresholds

::visual::
<img src="/images/github-cloud-app-usage-evidence.png" alt="GitHub, cloud, and app work surfaces contributing distinct evidence to an accountable record" />

<!--
GitHub.com, cloud agent, and Copilot App usage must be interpreted in their own product and policy context. Product activity evidence is different from account or organization billing totals, and cloud-agent work also leaves repository and pull-request evidence. Choose the evidence source that answers the specific operational or audit question. [Sources: GitHub Docs, Monitoring AI Credits usage; About cloud agent; What is GitHub Copilot.]
Ask learners which evidence source would answer a team budget question and which would answer a repository audit question.
-->

---
layout: two-panel
---

::title::
# Context Window: What Competes for Space
::text::

- Fixed token capacity varies by model
- Instructions, messages, references, tools, and results compete for space
- Response output also needs room in the bounded window
- Selected supported models offer optional 1M-token context in VS Code and CLI

::visual::
<img src="/images/context-window-capacity.png" alt="A bounded context container where instructions, references, tools, results, and output compete for capacity" />

<!--
The context window combines instructions, conversation history, references, tool definitions and results, and output space in a bounded token container. Capacity varies by model, and selected supported models currently offer optional one-million-token context in VS Code and Copilot CLI with availability and credit caveats. `/context` is a Copilot CLI-specific way to inspect current use, not a universal cross-product command. Treat the numeric capacity as product-specific. [Sources: GitHub Docs, Managing context in Copilot CLI; Supported AI models.]
-->

---
layout: two-panel
---

::title::
# Context Packing: Keep the Signal
::text::

- Start with the smallest useful scope
- **Clue Wrangler (custom skill):** return an explicit include/exclude manifest
- **Case Condenser (custom skill):** create a verified handoff, not host compaction
- In Copilot CLI, inspect `/context` and use `/compact` when appropriate

::visual::
<img src="/images/clue-wrangler-context-packing.png" alt="Agent Mergewell using Clue Wrangler to retain relevant evidence and exclude noise" />

<!--
Good context packing is a deliberate choice about what the model needs for the current decision. Clue Wrangler and Case Condenser are buildable custom instruction/workflow skills, not GitHub product features or controls over hidden context. In Copilot CLI, `/context` and `/compact` are documented host capabilities; other surfaces require their own current guidance. [Sources: GitHub Docs, Managing context in Copilot CLI; Optimizing AI usage.]
-->

---
layout: two-panel
---

::title::
# Context Rot: Recognize the Signals
::text::

- Contradictory suggestions
- Repeatedly restating solved questions
- Ignored constraints or stale references
- Excessive hedging or loss of task focus

::visual::
<img src="/images/context-drift.png" alt="Purrmission detecting contradiction, repetition, and stale evidence in a drifting work session" />

<!--
Context rot is the workshop's teaching term for observable quality drift caused by stale or irrelevant session material, not a universal named GitHub feature. The signals are behavioral: contradiction, repetition, ignored constraints, and loss of focus. Stop execution when those signals make the active context untrustworthy. [Sources: GitHub Docs, Managing context in Copilot CLI; Foundations Part 2 workshop guide.]
Use Purrmission naturally as the early warning signal, reserving the major safety callout for a decision to continue with unreliable context.
-->

---
layout: two-panel
---

::title::
# Context Recovery: Reset and Re-anchor
::text::

- Stop when the active context is no longer trustworthy
- In Copilot CLI, `/compact` summarizes; start fresh when needed
- **Fresh Lead (custom skill):** package current objective, references, and constraints
- Validate the new response against the original objective

::visual::
<img src="/images/fresh-lead-context-recovery.png" alt="Agent Mergewell using Fresh Lead to re-anchor a task with current objectives and verified references" />

<!--
Recovery means restoring a trustworthy starting point, not writing a more elaborate prompt on top of drift. Fresh Lead is a custom handoff skill that packages supplied objective, references, constraints, and validation criteria; it cannot reset a session or control compaction without an authorized host tool. Copilot CLI `/compact` creates a structured summary that can lose fine detail, while a fresh session and current references provide a stronger reset when trust is already low. [Sources: GitHub Docs, Managing context in Copilot CLI; Foundations Part 2 workshop guide.]
-->

---
layout: single-panel
---

::title::
# Context Lifecycle: Pack, Detect Drift, Recover
::content::

<WorkshopVideo
  src="../assets/videos/foundations/context-window-lifecycle.mp4"
  poster="/images/context-lifecycle-static-plate.png"
  label="Context lifecycle video showing context packing, drift detection, and recovery"
  :autoplay="false"
  :loop="false"
  :muted="false"
  controls
/>

<!--
This chained video shows stale or duplicate evidence obscuring the current request before available context is full. Mergewell—not Purrmission or the software—prunes and archives old material, then re-anchors the objective, essential evidence, constraints, and validation before retrying. The presenter starts the poster-backed video with its original audio, and playback stops after the recovery sequence rather than looping. No automatic recovery, hidden-state visibility, or universal host command is implied. [Sources: accepted Foundations Scene 10; context-window lifecycle video provenance; GitHub Docs, Managing context in Copilot CLI; Optimizing AI usage; Foundations content verification.]
-->

---
layout: two-panel
---

::title::
# Least-Privilege Delegation
::text::

- Grant only the files, tools, and permissions required
- One-file work does not need repository-wide access
- Read-only review does not need write or network access
- Define the boundary before delegation begins

::visual::
<img src="/images/least-privilege-key.png" alt="Purrmission authorizing a narrowly scoped permission key for delegated work" />

<!--
Least-privilege delegation limits access to the files, tools, commands, and network capabilities required by the current task. Narrow boundaries reduce blast radius and make review and audit easier. Define the permission boundary before delegated execution begins. [Sources: GitHub responsible-use guidance; Foundations Part 2 workshop guide.]
Use a major Purrmission safety callout when permissions, network access, or rollback are unclear.
-->

---
layout: two-panel
---

::title::
# Your Mission Starts Now
::text::

- Choose VS Code, Copilot CLI, or the GitHub Copilot app
- Hunt five clues and bank evidence with every point
- Try another Copilot gadget for bonus evidence
- Carry one bounded case file into Agentic Development

::visual::
<img src="/images/mission-readiness.png" alt="Agent Mergewell and Purrmission preparing learners to start the Foundations scavenger hunt" />

<!--
This is one continuous 45-minute scored mission rather than four independent cases. Ask participants to choose VS Code, Copilot CLI, or the standalone GitHub Copilot app, then follow Agent Mergewell's clues while Purrmission checks their evidence and safety decisions. Clarify that the app is a complete agent-native desktop experience with local sessions in isolated Git worktrees and inspectable canvases; it does not hand Copilot work to VS Code. Their exported case file becomes the starting point for the Agentic Development mission, while any alias-only leaderboard participation and swag remain optional. [Sources: Foundations mission artifact; `github/github` "GitHub Copilot app" repository README and v1.1.5 release notes, reviewed 2026-08-07.]
-->

<style>
:global(.foundations-vscode-visual) {
  position: relative;
  width: 100%;
  height: 100%;
}

:global(.foundations-title-brand) {
  display: flex;
  min-height: 0;
  margin-top: auto;
  align-items: flex-end;
}

:global(.foundations-title-brand img) {
  width: min(18rem, 72%) !important;
  height: auto !important;
  max-height: 7rem !important;
  object-fit: contain;
  object-position: left bottom;
}

:global(.foundations-vscode-mark) {
  position: absolute;
  top: 7%;
  right: 9%;
  width: 18% !important;
  height: auto !important;
  padding: 1.1rem;
  border-radius: 1rem;
  background: #fffaf0;
  box-sizing: border-box;
  object-fit: contain;
}

:global(.foundations-diagram) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: 82%;
  padding: 2rem;
  border: 2px solid #d0d7de;
  border-radius: 1rem;
  color: #1f2328;
  background: #f6f8fa;
  text-align: center;
}

:global(.foundations-diagram strong) {
  grid-column: 1 / -1;
  color: #8250df;
  font-size: 1.35rem;
}

:global(.foundations-diagram span) {
  padding: 0.8rem;
  border-radius: 0.6rem;
  background: #ffffff;
}

:global(.ghcp-two-panel__text .foundations-compact li) {
  margin: 0.22rem 0;
  font-size: calc(0.92rem * var(--ghcp-panel-scale));
  line-height: 1.2;
}

:global(.ghcp-two-panel__text .foundations-agenda li) {
  margin: 0.18rem 0;
  font-size: calc(0.84rem * var(--ghcp-panel-scale));
  line-height: 1.16;
}

:global(.foundations-model-guide) {
  display: grid;
  grid-template-rows: auto auto;
  gap: 0.4rem;
  height: auto;
}

:global(.foundations-model-guide table) {
  margin: 0;
  table-layout: fixed;
  font-size: calc(0.82rem * var(--ghcp-content-scale));
  line-height: 1.18;
}

:global(.foundations-model-guide th:first-child),
:global(.foundations-model-guide td:first-child) {
  width: 38%;
}

:global(.foundations-model-guide th),
:global(.foundations-model-guide td) {
  padding: calc(0.3rem * var(--ghcp-content-scale)) calc(0.6rem * var(--ghcp-content-scale));
  vertical-align: middle;
}

:global(.foundations-model-guide .ghcp-callout) {
  margin-top: 0;
  padding: 0.34rem 0.68rem;
  font-size: calc(0.66rem * var(--ghcp-content-scale));
  line-height: 1.22;
}

</style>
