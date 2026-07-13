---
theme: ../../themes/github
title: "Module 1: Foundations"
info: |
  GitHub Copilot Developer Training Foundations module
ghFooterTitle: "Module 1: Foundations"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-foundations/slide-01-305d67f4.png
---

<!--
Speaker notes
Use this slide to frame the module and call out the flow of topics. The audience should leave understanding this is the Foundations module: Copilot interaction patterns, context and prompt discipline, model and mode choices, and the baseline behaviors that support safer daily use.
For the hackathon delivery, treat the timing as a guide and use the labs/demos as expandable or compressible segments.
Keep this opening practical: “We are going to build a safe, repeatable way to use Copilot before we move into more agentic workflows.”
 
Demo / activity cue
No product demo yet. Ask attendees to keep one real workflow in mind as they listen.
Transition: Move into the first real topic: the foundations baseline

9:15 – 10:45 = 90 min
Module 1: Foundations (presentation + lab) — Speakers 1 & 2
    Copilot chat modes and interaction patterns
    Context, instructions, and prompt discipline
    Models, agents, skills, and customization

Section/Topic/Time
1 Foundations baseline: surfaces, trust, and interaction fundamentals     15 min
2 Guided workflows: VS Code chat, CLI controls, and mode selection      20 min
3 Tokenomics, billing controls, and model-routing decisions                   15 min
4 Context windows, autonomy spectrum, and AI development harness   15 min
5 Wrap-up and Module 2 handoff                                                               5 min
-  Hands-on labs across four exercises                                                       20 min
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-02-d804d697.png
---

<!--
Speaker notes
Use this slide to correct the “Copilot is just a chat box” mental model. 
GitHub Copilot spans IDEs, CLI workflows, and GitHub.com/Copilot App experiences. Each surface has a different role and a different context boundary.
Connect the slide directly to operating posture: start with least-autonomy defaults, scoped prompts, and explicit acceptance criteria. 
That keeps accountability with the human reviewer even when Copilot accelerates the work.
Call out the usage optimization point on the slide: completions are a lightweight fit for flow edits, while inline chat is better for bounded transformations.
 
Demo / activity cue
Quick surface tour: editor completion, inline chat, chat panel, and CLI. Keep it short and tie each surface to its context boundary.

Transition: With the surfaces established, shift to enterprise trust and safety boundaries.

Original Slide Notes:
Where GitHub Copilot lives — Copilot spans IDEs, CLI workflows, and GitHub.com experiences through the Copilot App, letting developers move between coding, automation, and repository-level understanding with more consistent workflows across surfaces. 
 
Usage Optimization: choose completions for low-token flow edits and inline chat for bounded transformations.

Slide topic (1 slide): Baseline operating posture — safe, effective GH Copilot usage starts with least-autonomy defaults, scoped prompts, and explicit acceptance criteria that keep accountability with human reviewers.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-03-79c6ed5a.png
---

<!--
Speaker notes
This is the developer-canvas slide. The point is that GitHub Copilot is not one interaction box. It spans IDE coding, terminal workflows, GitHub.com repository context, cloud-based assistance, and app surfaces where available.
Anchor the safety moment exactly here: before moving across surfaces, confirm organizational policy, repository access, and cross-surface context boundaries.
Use this to establish the first habit: choose the right surface for the work and understand the context boundary that surface brings with it.
 
Demo / activity cue
•	Quick surface orientation: point out IDE, terminal, GitHub.com, cloud, and app surfaces on the slide; do not deep-dive yet.
 
Transition: Now zoom into VS Code chat mechanics and context references.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-04-c0ee6b63.png
---

<!--
Speaker notes
This slide compares the two day-to-day assistance patterns. Completions are for flow authoring when the developer already knows the direction. Inline chat is for bounded transformations such as refactors, type changes, or localized explanations.
Tie directly to the usage optimization callout: use completions for low-friction flow edits where they fit, and use inline chat when the work needs a clear selected context.
The durable habit is to choose the smallest interaction that fits the task.
 
Demo / activity cue
•	Use the same code block: first let completions continue the flow, then use inline chat for a scoped transformation.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-05-25583aab.png
---

<!--
Speaker notes
This slide is the CLI orientation. Keep it practical: Copilot CLI brings assistance to terminal-first workflows such as command explanation, command generation, settings, help discovery, and review-oriented tasks.
The safety moment belongs on this slide: generated commands must be reviewed before execution, especially when they change files, install dependencies, or affect remote systems.
Make the terminal review rule explicit: Copilot can suggest, but the developer decides whether to run.
 
Demo / activity cue
•	Demo a harmless command explanation or command-generation example. Pause before execution and narrate what you are checking.
 
Transition: Now connect surfaces and commands to enterprise privacy and IP expectations.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-06-7851534d.png
---

<!--
Speaker notes
This is the enterprise trust anchor for Section 1. Describe the categories on the slide: data handling, retention, duplicate detection, content exclusions, auditability, and admin governance.
Do not turn this into a policy deep-dive unless the audience asks. The teaching point is that Copilot usage should align to organizational policy and developer review expectations.
Close with the safety message: generated output is draft material. Developers and reviewers remain accountable for correctness, provenance-sensitive suggestions, and safe usage.

Demo / activity cue
•	Ask: “What would make a Copilot suggestion unsafe to accept without review?” Capture one or two responses before the lab.

Transition: Pause for Exercise 1 to practice surfaces, scoping, CLI orientation, and safety boundaries.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-07-45508193.png
---

<!--
Continues “Enterprise Privacy & IP” — the full speaker notes for this segment are on the previous slide (the Trust Anchor). Use this grid to walk the six enterprise controls quickly: data handling, retention, public-code detection, content exclusions, auditability, and admin governance. Each is configured by enterprise/org admins and applies across Chat, CLI, and Agents. Keep it brief — don’t turn it into a policy deep-dive unless the audience asks.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-08-635daf4e.png
---

<!--
Speaker Notes – GitHub Copilot Enterprise Trust Boundary & Data Flow
Purpose of this slide
This diagram shows how information moves through GitHub Copilot when developers use Chat, Copilot CLI, or Agent workflows. The goal is to demonstrate the security controls, privacy boundaries, governance capabilities, and IP protections that are built into the platform. The key message is that GitHub Copilot provides enterprise controls around data handling, policy enforcement, auditability, and public-code protection while still requiring human review of generated output. [copilot.gi...trust.page], [docs.github.com]

Walk through the workflow from left to right
Start on the left side with the developer.
A developer may interact with GitHub Copilot using:
Copilot Chat
Copilot CLI
Copilot Agents
In each case, the user submits a prompt along with relevant context from the local workspace or repository. This information is securely transmitted to GitHub Copilot services using encrypted connections. GitHub documents encryption and security protections for Copilot services through the Copilot Trust Center. [copilot.gi...trust.page]

Enterprise policy enforcement
Before requests are processed, enterprise governance controls are applied.
These controls are managed by enterprise and organization administrators and determine which Copilot capabilities are available to users, what models can be accessed, and how Copilot can be used inside the organization. Enterprise policies take precedence over organization settings, allowing centralized governance across the enterprise. [docs.github.com], [docs.github.com]
Teaching point: Enterprise governance is the first trust boundary.

Content exclusion controls
Next, highlight the content exclusion section.
Administrators can define repositories, folders, or files that should be excluded from Copilot processing.
When content is excluded:
It is not used to inform code suggestions.
It is not used as context for Copilot Chat responses.
It is not included in Copilot code reviews. [docs.github.com], [docs.github.com]
Teaching point: Organizations can prevent sensitive intellectual property from being used by Copilot through explicit content exclusion policies. [docs.github.com]

Copilot processing and AI generation
After governance controls are applied, GitHub Copilot processes the request and submits an authorized request to the underlying AI models.
GitHub identifies several categories of information that may be processed, including prompts, generated suggestions, user engagement data, and feedback data. GitHub provides transparency around these data categories through the Copilot Trust Center. [copilot.gi...trust.page]
The AI model then generates a draft response and returns it through the Copilot service. [copilot.gi...trust.page]

Public code matching and IP protection
Next discuss the public code matching workflow.
GitHub Copilot includes code referencing capabilities that compare generated suggestions against publicly available code repositories.
If a match is found:
Matching suggestions can be blocked based on policy.
References to the source repository can be provided.
License information can be displayed to the developer. [GitHub Cop...itHub Docs | Undefined], [docs.github.com]
GitHub documents that code referencing compares potential suggestions against an index of public repositories on GitHub. [GitHub Cop...itHub Docs | Undefined]
Teaching point: This is the primary intellectual-property protection mechanism shown on this slide.

Auditability and retention
Next highlight the audit logging section.
GitHub provides enterprise audit logging that records:
Policy changes
License assignments
Administrative actions
Agent activity within supported experiences [docs.github.com], [docs.github.com]
GitHub also documents that enterprise audit logs are retained for 180 days and can be streamed to external monitoring and SIEM platforms for longer-term retention. [docs.github.com]
Teaching point: Enterprises maintain visibility into how Copilot is administered and governed.

Security controls
Call out the trust boundary around the GitHub Copilot service.
The security controls represented here include:
Encrypted communications
Authentication and authorization
Policy enforcement
Context filtering
Administrative governance controls
These controls exist to help organizations securely adopt AI-assisted development. [copilot.gi...trust.page], [docs.github.com]

Close with responsible AI message
The final takeaway is that GitHub Copilot provides governance, privacy, and intellectual-property controls, but generated content remains draft material.
Developers and reviewers remain responsible for:
Reviewing generated code
Validating correctness
Verifying provenance-sensitive suggestions
Following organizational security and development practices
Copilot accelerates development, but accountability remains with the development team. [copilot.gi...trust.page], [GitHub Cop...itHub Docs | Undefined]

Documentation References
GitHub Copilot Trust Center [copilot.gi...trust.page]
GitHub Copilot Policies for Enterprises and Organizations [docs.github.com]
Managing GitHub Copilot Policies [docs.github.com]
Content Exclusion for GitHub Copilot [docs.github.com]
Excluding Content from GitHub Copilot [docs.github.com]
GitHub Copilot Code Referencing [GitHub Cop...itHub Docs | Undefined]
Finding Public Code Matches [docs.github.com]
Reviewing Audit Logs for GitHub Copilot [docs.github.com]
Agent Audit Log Events [docs.github.com]
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-09-595966e5.png
---

<!--
Continues “The Path of Execution” — the full speaker notes, including the documentation references, are on the previous slide. Land the two closing gates: (1) public-code matching compares suggestions against an index of public repositories and can block, attribute the source, or show license info — the primary IP protection; (2) human review — treat output as draft material, developers and reviewers own correctness and provenance, and the audit trail is retained 180 days and streamable to SIEM. Close: Copilot accelerates the work, but accountability stays with the development team.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-10-1bceeb58.png
---

<!--
Speaker notes
Pause here for the lab. Keep the instruction simple: use completions once, then use inline chat once, and decide which interaction best fit the job.
Debrief around the decision, not the code. The learning objective is choosing the smallest effective interaction pattern.
 
Demo / activity cue
8-minute lab: completions vs inline chat comparison.

Transition: Resume with guided workflows: VS Code chat, CLI controls, and mode selection.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-11-cdef8696.png
---

<!--
Speaker notes
This slide is about context scoping inside VS Code. Explain that slash commands, participants, and references such as #selection and #file help control what Copilot sees.
The usage optimization message is the core teaching point: start with the smallest useful context, then expand scope only when the answer proves more context is needed.
Contrast #selection for a bounded block of code with #file for an entire document. The goal is not to restrict Copilot unnecessarily; the goal is to give it signal before adding volume.
 
Demo / activity cue
•	Show a prompt using #selection, then repeat with #file and ask attendees what changed.
 
Transition: Next, move from editor chat into terminal-first workflows.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-12-1bb96dc0.png
---

<!--
Speaker notes
This slide is the Ask, Plan, Agent framing. Treat them as familiar examples of assistance patterns, not the full universe of possible custom or delegated agents.
Ask is for explanation and low-risk understanding. Plan is for reviewed sequencing before edits. Agent is for constrained multi-step execution when the task has clear acceptance criteria.
Anchor the safety moment: as autonomy increases, approval gates, scope boundaries, and human review need to get stronger.
 
Demo / activity cue
•	Ask attendees to classify a task as Ask, Plan, or Agent before showing the next demo slide.
 
Transition: Now show the scoped mode comparison.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-13-bdf39cd7.png
---

<!--
Speaker notes
This slide is the mode-selection slide. 
Position Ask, Plan, and Agent as different levels of autonomy, not just different buttons.
Ask is for understanding and local explanation. 
Plan is for reviewed change proposals before execution. 
Agent is for delegated multi-step work when the task is scoped, reviewable, and backed by approval gates.
The teaching point is that mode selection is a safety and quality decision. 
As autonomy increases, scope limits, approval gates, testing, and rollback expectations must become more explicit.
 
Demo / activity cue
Use one example request and describe how it changes as Ask, Plan, and Agent.
Ask the room which mode they would choose for a local refactor vs. a shared API change.

Transition: The mode works better when the prompt itself is disciplined.

Original slide notes:
Slide topic (1 slide): Agents — built-in agents in GitHub Copilot include Plan and Agent experiences that move from structured change planning to iterative execution loops. 
This slide should focus on when to use Plan for reviewed change proposals versus Agent for multi-step delegated work. 

    AI Safety Moment: higher-autonomy agent use requires stronger approval gates

Use this slide to compare the guided workflow modes learners will use most often: 
Ask for understanding, Plan for reviewed change proposals, and Agent for delegated multi-step execution. 
Emphasize that mode selection is a safety and quality decision, not just a convenience choice. 

  AI Safety Moment: the more autonomy we grant, the more explicit the approval gates, scope limits, and rollback expectations need to be. 

Transition from mode selection into the discipline that makes all modes perform better: clear prompts and bounded context.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-14-c040be53.png
---

<!--
Research → Plan → Implement (RPI)  —  Module 2 (Planning)
Frame: RPI is the operating loop for agentic work. The discipline is simple — do the thinking (research + plan) before you touch code, and evaluate the plan before you execute. That’s the cheapest place to catch a mistake.
Walk the loop:
Research: let the agent explore the repo and gather the relevant files, constraints, and prior art first. Read-only, reasoning model. Understand before you act.
Plan: produce a reviewable plan — files, steps, acceptance criteria. Open with /plan for anything beyond a one-line change. This is where the expensive reasoning belongs.
Evaluate the plan (Rubber Duck): before writing code, have a second model — a different family — critique the plan. It looks for blind spots and design flaws, sorts feedback into blocking / non-blocking / suggestions, and returns concrete fixes. It runs one extra pass (a little latency and cost) but saves far more by preventing failed attempts. Use it for non-trivial changes; skip it for small, well-understood edits so it stays cost-effective.
Implement: execute the approved plan iteratively with a right-sized (mid-tier) model — the reasoning already happened, so you just need clean execution. Review the output, iterate, then open a PR.
Speaker takeaway: spend reasoning tokens on Research and Plan; hand Implement to a cheaper model. Rubber-duck the plan before you code — a short review up front beats debugging later.
Activity cue: run a scoped task through the loop live — research, produce a plan, then ask “rubber duck your plan” (or /rubber-duck) and show how the critique changes the plan before any code is written.
Transition: this is the loop for every challenge in Modules 1 & 2 — structure the work with SOLID, then move through Research → Plan → Implement.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-15-20db5bcf.png
---

<!--
Speaker notes
Pause here for Exercise 2. The learning goal is repetition with control: same task, scoped context, different assistance pattern.
Debrief around which interaction was best for understanding, which was best for planning, and which would require the strongest review before accepting changes.
 
Demo / activity cue
•	Hands-on: same task across inline assistance and Ask/Plan/Agent.
 
Transition: Resume with Section 3: tokens, AI Credits, usage visibility, and model routing.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-16-2ed3a17b.png
---

<!--
Key points to make:
Back in October of 2021 when GitHub Copilot was launched, the agentic development world was pretty simple.
PRUs worked well when Copilot was mostly single-prompt interactions.
Agentic workflows changed the economics because one user request can trigger many model calls over a long-running workflow.
Modern agents may orchestrate multiple sub-agents, models, and loops behind the scenes.
GitHub Copilot billing changed from Premium Request Units (PRUs) to usage-based billing beginning June 1.
Billing now reflects actual token consumption rather than counting requests.

In terms of an economist would understand…:
Model selection is the microeconomics of GitHub Copilot. 
	Just as consumers decide whether they need a luxury vehicle or an economy car for a particular trip, 
	developers decide whether a premium reasoning model is justified for a task or whether a smaller model can achieve the same outcome at a lower cost.

Context management is the macroeconomics of GitHub Copilot. 
	It sets the economic environment that every request operates within. 
	A bloated context window works like inflation—it increases the cost of virtually every interaction, regardless of which model you're using.

Every interaction consists of: 
Input tokens (prompt/context)
Output tokens (response)
Cached tokens (reused context at lower cost)
Cost is ultimately driven by the number of tokens processed.

Speaker takeaway:
"One prompt is no longer one operation. Agentic workflows may execute hundreds of internal model operations, so billing had to move from request counting to token consumption."

Generated Speaker notes
This slide is about making usage visible as an engineering concern. Tokens represent the prompt, input, output, and context the model works with, including active and cached paths.
More context is not automatically better. Context size affects cost, latency, and quality stability. The usage optimization message is to trim noise before sending context.
Introduce AIC as the usage model shown on the slide: usage is influenced by model choice, prompt size, output size, and how deep the loop goes. That makes these first-class engineering tradeoffs, not invisible background details.
Close this slide by pointing to practical guardrails: user-level budgets, plan limits, and telemetry that teams can review to tune workflows before scaling usage.
 
Demo / activity cue
Compare a focused one-file prompt to a broad workspace prompt; discuss how the second may add cost and noise.
Transition: Next, connect usage to day-to-day billing implications and model routing decisions.

Original Slide Notes:
Tokenomics — tokens represent prompt/input/output context across active and cached paths, so context size directly affects cost and quality stability. 
    Usage Optimization: trim noise before sending context. 

AIC usage model and budget controls — AIC (AI Consumption) maps spend to measured token and model usage (input, output, and cached tokens with model-specific rates), making model choice, prompt size, and loop depth first-class engineering tradeoffs. 
Add user-level budgets and plan limits as practical guardrails teams should set before scaling usage. 
    Usage Optimization: treat AIC telemetry as workflow tuning feedback.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-17-9e0368cc.png
---

<!--
Key points to make:
AI Credits are Microsoft's consumption unit.
100 AI Credit = 1 dollar.
Copilot Business ($19) includes approximately 1,900 AI Credits.
Copilot Enterprise ($39) includes approximately 3,900 AI Credits.
Organizations received temporary bonus credits during the transition period.
AI usage now requires engineering decisions and trade-offs.
Key cost levers: 
Model selection
Prompt size
Context size
Agent loop depth
Teams should monitor consumption and budget usage rather than treating AI as unlimited.

Speaker takeaway:
"Treat AI usage like any other engineering resource: make intentional decisions about cost, performance, and quality."

Generated Speaker notes
This slide is about making usage visible as an engineering concern. Tokens represent the prompt, input, output, and context the model works with, including active and cached paths.
More context is not automatically better. Context size affects cost, latency, and quality stability. The usage optimization message is to trim noise before sending context.
Introduce AIC as the usage model shown on the slide: usage is influenced by model choice, prompt size, output size, and how deep the loop goes. That makes these first-class engineering tradeoffs, not invisible background details.
Close this slide by pointing to practical guardrails: user-level budgets, plan limits, and telemetry that teams can review to tune workflows before scaling usage.
 
Demo / activity cue
Compare a focused one-file prompt to a broad workspace prompt; discuss how the second may add cost and noise.
Transition: Next, connect usage to day-to-day billing implications and model routing decisions.

Original Slide Notes:
Tokenomics — tokens represent prompt/input/output context across active and cached paths, so context size directly affects cost and quality stability. 
    Usage Optimization: trim noise before sending context. 

AIC usage model and budget controls — AIC (AI Consumption) maps spend to measured token and model usage (input, output, and cached tokens with model-specific rates), making model choice, prompt size, and loop depth first-class engineering tradeoffs. 
Add user-level budgets and plan limits as practical guardrails teams should set before scaling usage. 
    Usage Optimization: treat AIC telemetry as workflow tuning feedback.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-18-4e09f94f.png
---

<!--
Key points to make:
Monitor usage regularly while learning Copilot.
Usage visibility is available in several places: 
VS Code Copilot context window
Agent Debug Logs
Copilot CLI usage commands
Agent Debug Logs provide detailed insight into: 
AI credits consumed
Input tokens
Cached tokens
Model activity
Usage data helps identify expensive workflows before they become a budgeting issue.

Demo points:
Show chat context usage indicator.
Open Agent Debug Logs.
Show token counts and AI credit consumption.
Show CLI usage/context commands.

Speaker takeaway:
"Run a task, then immediately look at the usage. Build intuition for which activities consume credits."

Speaker notes
This slide is a practical usage visibility slide. It lists the kinds of things usage windows can show: monthly usage, remaining balance, plan details, warning thresholds, and plan-specific behavior.
Walk through the entry points shown on the slide: VS Code Chat usage from the GitHub/Copilot icon, CLI commands such as /usage, /context, and /model, and account-level usage through GitHub billing or Copilot settings.
The usage optimization point is direct: check real usage signals and model controls before switching to higher-cost models or scaling agentic workflows.
 
Demo / activity cue
•	If your environment supports it, show /usage, /context, or /model. If not, simply point to the slide and explain the decision habit.
 
Transition: Now connect usage visibility to model routing decisions.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-19-12dbb165.png
---

<!--
Key points to make:
Copilot does not send only your prompt to the model.
Copilot assembles: 
Prompt
Files
Instructions
Skills
Context
All of that becomes the request sent to the LLM.
Understanding what gets packaged into context is critical for managing cost and quality.

Speaker takeaway:
"Agents succeed because they gather far more context than a normal chat prompt—but that additional context also affects token consumption."
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-20-4f1faa96.png
---

<!--
Key points to make:
Model selection is one of the biggest optimization levers.
Auto Mode is now the recommended default.
Auto Mode has become much smarter than earlier releases.
It evaluates the request and routes to an appropriate model.
Auto Mode helps balance: 
Cost
Performance
Capability
Auto Mode currently provides a 10% AI credit discount.
Start with Auto Mode and manually choose a model only when necessary.

Speaker takeaway:
"Let Auto Mode make most decisions. Only override it when you have a specific reason."

Speaker notes
This slide defines model routing as a fit-for-purpose decision. A model interprets context and generates a response, but the model route should match task complexity, cost sensitivity, and review risk.
Use the Auto guidance exactly as shown: Auto is recommended for most prompts when available because it routes based on reliability and availability and can reduce model cost.
Then explain the escalation pattern: routine work can use Auto; clear bounded work can use fast or general-purpose models; ambiguity-heavy planning, debugging, or architecture decisions may justify deeper reasoning.
 
Demo / activity cue
•	Ask attendees to classify sample tasks into Auto, fast/general-purpose, or deeper reasoning.
 
Transition: Now demonstrate usage-aware routing as a checklist before work begins.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-21-ec5cac96.png
---

<!--
Key points to make:
Every model has a different token cost.
Cost should be considered alongside capability.
The best model is not always the most expensive model.
Model choice should be based on the task.

Speaker takeaway:
"Think fit-for-purpose, not best-in-class. The cheapest acceptable model is often the right engineering decision."
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-22-4d2e4e7b.png
---

<!--
Key points to make:
Deep reasoning
Opus or GPT-5 reasoning models
Use for: Architecture, Design, Research, Complex planning
Agentic software development
GPT-5 Codex style models, Coding-focused models
Use for: Implementing plans, Code generation after architecture is established

Auto Mode usually handles this optimization automatically.

Speaker takeaway:
"Use expensive reasoning models to create a plan, then hand implementation to lower-cost coding models."
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-23-108225f7.png
---

<!--
Key points to make:
Remember that you have two primary optimization levers: 
Model selection
Context size

Fast models are best for straightforward work.
Reasoning models are best for ambiguity-heavy tasks.

Larger context windows: 
Increase understanding
Increase token consumption
Increase cost
Use larger context only when it provides real value.

Speaker takeaway:
"Match model capability and context size to the complexity of the task."

Speaker notes
This slide is about context window strategy. Larger context windows can help with cross-file changes, architecture review, and complex debugging, but they can also bring irrelevant history and stale assumptions into the answer.
Use the phrase from the slide: reset, summarize, or re-scope before escalating context and reasoning settings. The goal is to give Copilot a clean signal rather than accumulated noise.
This is also a cost discipline: deeper reasoning and larger context should be used when the task benefits from them, not as a default for every question.
 
Demo / activity cue
Demo a clean restart: summarize what matters, open a fresh thread, include only the relevant file or facts, then ask the next focused question.
Transition: Close this section with the rubber-duck pattern.

Original Slide Notes:
This slide is about knowing when bigger context and deeper reasoning help, and when they simply make the session more expensive. 
Larger windows can be valuable for cross-file changes, architecture review, or complex debugging, but they also increase the chance that irrelevant history and stale assumptions influence the answer. 

    Usage Optimization: reset, summarize, or re-scope before escalating context and reasoning settings so the model receives signal rather than accumulated noise.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-24-e48433fa.png
---

<!--
Key points to make:
Context size directly influences cost.
More files and more context mean more tokens.
Automated workflows have additional considerations.
GitHub code reviews consume: 
AI Credits
GitHub Actions minutes
These choices are engineering trade-offs, not just technical features.
Usage reviews help identify hidden inefficiencies.

Speaker takeaway:
"Every automation decision has a cost profile. Understand both the value and the consumption."

Speaker notes
This slide turns tokenomics into workflow choices. Feature choice can be a cost decision as well as a user-experience decision.
Call out the slide’s example: some workflows, such as Copilot code review, can involve both AI credits and GitHub Actions minutes. The teaching point is not to avoid those features; it is to use them intentionally.
Then move to model routing. Fast models are a good fit for straightforward edits, summaries, and local explanations. Reasoning-heavy models are worth considering for ambiguous debugging, architecture tradeoffs, or multi-step planning.
Auto mode is a practical default, but the habit is intentional escalation: start with right-sized capability, then move up when the problem complexity justifies it.
 
Demo / activity cue
Show examples on a spectrum: local explanation, targeted edit, ambiguous cross-file bug, architecture tradeoff. Ask which would justify escalation.
Transition: Now explain when larger context and deeper reasoning help versus when they add noise.

Original Slide Notes:
Billing implications of workflow choices — usage-based billing is now central to day-to-day decisions, and some workflows (for example Copilot code review) can consume both AI credits and GitHub Actions minutes. Teach learners to treat feature choice as a cost decision, not only a UX decision.

Usage visibility and measurement — session and monthly usage views expose hidden inefficiencies such as broad prompts and repetitive retries. Usage Optimization: use regular usage reviews to prevent avoidable overages.

Bring the discussion from raw usage numbers into model-routing decisions. 
Fast models are a good fit for straightforward edits, summaries, and local explanations, while reasoning-heavy models earn their cost on ambiguous debugging, architecture tradeoffs, and multi-step planning. Usage Optimization: 
Auto mode is a practical default because it can route many tasks efficiently without asking the learner to overthink every model choice. 
The habit we want is intentional escalation: start with the right-sized capability, then move up only when complexity justifies it.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-25-e1d2c510.png
---

<!--
Key points to make:
Chronicle provides a history of activity.
Available in both:  CLI and VS Code

/chronicle standup - Get a report on your work from the last day
/chronicle search - Search all session content by keyword or topic
/chronicle tips - Get personalized tips based on usage patterns
/chronicle cost—tips - Get personalized tips to reduce token usage and cost
/chronicle improve - Suggest improvements to copilot—instructions .md

Can be used for: 
Reviewing prior work
Evaluating workflows
Finding optimization opportunities

Useful for understanding what is entering the context window.

Demo points:
Run chronicle.
Review activity history.
Show optimization recommendations.

Speaker takeaway:
"Chronicle is one of the easiest ways to understand and optimize how you're using Copilot."

Speaker notes
This slide ties prompt discipline to both quality and cost. A strong prompt is a contract: goal, constraints, files, and acceptance criteria.
When we provide the goal and the boundaries up front, Copilot spends less effort guessing and we spend less time correcting drift. That also helps avoid broad context when a focused reference would do.
Use Chronicle as the handoff/reset concept on this slide: when a session accumulates decisions, changed files, commands, and open threads, capture the state before context becomes stale. That makes restarts and handoffs cleaner.
 
Demo / activity cue
Show vague prompt vs. bounded prompt: “Fix this” compared with a prompt that includes goal, selected file, constraints, tests, and acceptance criteria.
Transition: If slide 12 is a lab or blank interstitial in the deck, use it only if needed.

Original Slide Notes:
This slide ties prompt discipline to both quality and cost. 

When we state the goal, constraints, files, and acceptance criteria clearly, Copilot spends less effort guessing and we spend less time correcting drift. 

  Usage Optimization: better prompt contracts lower latency, reduce retries, and preserve AIC by avoiding broad context when a focused reference will do. 

Introduce `/chronicle` as the handoff and restart tool that captures decisions, changed files, commands, open threads, and reusable cost-saving tips before the session context gets stale.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-26-3748de1a.png
---

<!--
Do you know what happens when you write an instruction…?  Where does it go? What happens? How do I know if it worked???
This is why you are frustrated!  (We're all miserable!  Me too!)
You are throwing markdown at a system you don't understand
If only I had that one perfect skill or agent, I’d finally get it right!
We treat Copilot like a slot machine - if we keep pulling the lever long enough, eventually we’re are going to hit the jackpot!
But we have no idea if this is going to work, or why it worked!

So let's understand the harness and what's in that context window…

And remember — everything is going to be ok…!

Speaker notes
This slide ties prompt discipline to both quality and cost. A strong prompt is a contract: goal, constraints, files, and acceptance criteria.
When we provide the goal and the boundaries up front, Copilot spends less effort guessing and we spend less time correcting drift. That also helps avoid broad context when a focused reference would do.
Use Chronicle as the handoff/reset concept on this slide: when a session accumulates decisions, changed files, commands, and open threads, capture the state before context becomes stale. That makes restarts and handoffs cleaner.
 
Demo / activity cue
Show vague prompt vs. bounded prompt: “Fix this” compared with a prompt that includes goal, selected file, constraints, tests, and acceptance criteria.
Transition: If slide 12 is a lab or blank interstitial in the deck, use it only if needed.

Original Slide Notes:
This slide ties prompt discipline to both quality and cost. 

When we state the goal, constraints, files, and acceptance criteria clearly, Copilot spends less effort guessing and we spend less time correcting drift. 

  Usage Optimization: better prompt contracts lower latency, reduce retries, and preserve AIC by avoiding broad context when a focused reference will do. 

Introduce `/chronicle` as the handoff and restart tool that captures decisions, changed files, commands, open threads, and reusable cost-saving tips before the session context gets stale.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-27-feb26eb7.png
---

<!--
Speaker notes
This slide combines two ideas: context anatomy and autonomy. The context window contains instructions, history, references, and outputs. It can degrade when it accumulates noise, stale assumptions, or compaction artifacts.
The usage optimization guidance is to reset or re-scope when context rot appears. Do not keep adding more context to a messy session if a clean summary and restart would be better.
Then connect to autonomy. Autonomy should scale with reversibility and blast radius. Suggestion-only support is safer for high-impact or uncertain work; delegated execution needs explicit approvals and narrow permissions.
 
Demo / activity cue
Use examples: local variable rename, shared API contract change, production-facing deployment. Ask how autonomy should change for each.
Transition: Now discuss the environments and policy boundaries that make controlled autonomy possible.

Original Slide Notes:

Context window anatomy — context windows combine instructions, history, references, and outputs, and degrade when sessions accumulate noise and compaction artifacts. 
  Usage Optimization: reset or re-scope when context rot appears. 

Autonomy spectrum and delegation permissions — autonomy should scale with reversibility and blast radius, from suggestion-only support to iterative execution loops. 
   AI Safety Moment: high-impact tasks require explicit approvals and narrow permissions.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-28-037051fc.png
---

<!--
Explain that the diagram compares a growing context window with a deliberately compacted one: the same task can carry very different token overhead depending on how much history is retained. Connect the colored blocks to instructions, files, tool results, and prior responses that all compete for the available window. Emphasize that resetting or summarizing is a quality control, not merely a cost optimization. Ask the audience which part of their current workflow adds the most avoidable context.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-29-3a149120.png
---

<!--
Use the timeline to show why research, planning, and implementation should not all consume the same model or context strategy. Research gathers evidence, planning turns that evidence into a reviewed sequence, and implementation should begin only after the plan is coherent and bounded. The cheapest correction is the one made before execution expands the blast radius. Ask learners where their teams most often skip the planning gate and pay for it later.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-30-c7cdce0c.png
---

<!--
This often-quoted sentence is attributed to Einstein, although he probably wasn't the first one to say it…

Use the quotation as a context-discipline principle rather than a claim about authorship. Too little context produces guesses, while too much context introduces noise, stale assumptions, and unnecessary token consumption. The practical goal is the smallest context package that still supports a correct, reviewable answer. Ask the audience for one example where adding more context made an answer worse rather than better.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-31-324c83cf.png
---

<!--
Lever #1: Model Choice

Common pattern: cheap models → everyone defaults to the biggest (Claude Opus 4.6/4.7) for everything, including typo fixes. The waste is significant.

The Cost Gap:
24x difference between Claude Opus 4.7 and GPT-5.4 mini. Model choice impacts both token cost and quality—bigger doesn't always mean better.

When to Use Reasoning Models:
- Planning and architecture
- Debugging complex bugs
- Synchronous work where you drive the agent
- Tasks requiring large context windows (many files)

**When to Use Smaller Models:**
For implementation after planning is done. The reasoning happened in the planning phase—now you just need execution.

**Quality Impact:**
Using reasoning models for implementation can hurt quality. If you have a tight spec, a reasoning model might re-open the plan, second-guess it, and go rogue: "Actually, this spec is wrong—I'll do it my way."

**Solution: Auto Mode**
Starting in June, auto mode will have task intent detection and choose the model automatically. Stay lazy, stay with auto mode, and make deliberate model choices only when it matters. This is also a solution at scale, if we want to effect 100’s of Ms of Copilot users, we need some easy ways of selecting a right-sized model. 

Lever #2: Provide Only Relevant Context

Don't stuff the prompt with "might need" information. Let the agent discover what it needs—it can find files on its own. Don't attach your entire project for a small change.

- Context engineering is the core skill to build. All following tips are context engineering techniques.
- Compacting: Can reduce tokens, but comes with information loss. If lost information was relevant, you create agent misses—token savings become quality loss.
- Use /clear liberally:** Start fresh for each new task or when the window gets too long. Don't try to steer a bloated session with 80% context filled—recency bias won't let you succeed.
- Tokens don't accumulate across sessions. Throw away context without hesitation.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-32-d662a332.png
---

<!--
This is the map for the next seven slides. 

Two notes:
The order matters. Context hygiene is first because it's the biggest win for the least friction. Measurement is last because you can't improve what you don't see.
Scope & tool control (lever 4) is where admins have the most leverage over individual developers. Call that out — it sets up the governance slide later.

Bottom line: 
Developers have most control on “Context hygiene”
Admins have most control on “Scope & tool control”
No one has control on “Measurement”
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-33-5ad688c3.png
---

<!--
This is the "pick three" slide. Don't read all eight. 

Say:
> "You can't adopt eight habits at once. Pick three from this list and try them this week. The three-command starter kit at the bottom — /clear, /model, /usage — is what I'd pick if I had to pick exactly three."

Point out that the starter kit maps to: context control, cost control, cost visibility. One for each of the three dimensions.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-34-dbc13e08.png
---

<!--
Transition statement:
We have covered: 
Token usage
AI Credits
Usage monitoring
Model selection
Context window management
Optimization techniques
The lab will now let students compare these concepts side-by-side and see the impact on cost and behavior.

Suggested transition line:
"Now let's apply these concepts. During the lab you'll compare prompts, models, routing decisions, and context usage so you can see how the tokenomics decisions we discussed affect real-world Copilot usage."

Module 1: Foundations Content Refresh — Hands-On Lab
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-35-a18eb061.png
---

<!--
Speaker notes
This slide combines two ideas: context anatomy and autonomy. 
The context window contains instructions, history, references, and outputs. It can degrade when it accumulates noise, stale assumptions, or compaction artifacts.
The usage optimization guidance is to reset or re-scope when context rot appears. 
Do not keep adding more context to a messy session if a clean summary and restart would be better.

Then connect to autonomy. 

Autonomy should scale with reversibility and blast radius. 
Suggestion-only support is safer for high-impact or uncertain work; delegated execution needs explicit approvals and narrow permissions.
 

Speaker notes
This slide is the autonomy spectrum. Autonomy should scale with reversibility, blast radius, and confidence.
Use the slide’s progression: suggestion-only support, reviewed plans, then constrained execution with explicit approval gates.
Anchor the AI Safety Moment: high-impact tasks require narrow permissions, human approval, and clear rollback before delegated execution.

Demo / activity cue
Use examples: local variable rename, shared API contract change, production-facing deployment. Ask how autonomy should change for each.
Transition: Now discuss the environments and policy boundaries that make controlled autonomy possible.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-36-3ad79f40.png
---

<!--
Speaker notes
Copilot App execution contexts are the governed environments in which Copilot agents operate.
An execution context defines what repositories, tools, credentials, memory, network resources, and permissions an agent can use while completing a task. 
Execution contexts provide isolation, policy enforcement, and security boundaries that allow autonomous agents to work safely.

This slide is about scaling capability without sacrificing control. Local and cloud execution contexts can both be useful, but they need clear boundaries around tools, repository access, secrets, network reach, and policy enforcement.
Call out the AI Safety Moment directly: isolate execution and enforce policy before broad tool access.
Then cover the memory and policy boundary point. Separate user-level preferences from repository-level facts, and respect admin-controlled governance boundaries for what can be stored, reused, exported, or excluded.
 
Demo / activity cue
Describe a controlled harness: branch, allowed files, tests, blocked secrets, limited tools, review gate.
Transition: With those controls in mind, introduce autonomy as a spectrum rather than a switch.

Original Slide Notes:

Secure execution environments and discovery — 
introduce local/cloud sandboxes, Copilot app execution contexts, and agent/resource discovery patterns as mechanisms to scale capability without sacrificing control. AI Safety Moment: isolate execution and enforce policy before broad tool access.

Memory and policy boundaries — 
distinguish user-level preferences from repository-level facts and reinforce admin-controlled governance boundaries for what can be stored, reused, exported, or excluded.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-37-0667aed6.png
---

<!--
Speaker notes
This slide is about scaling capability without sacrificing control. Local and cloud execution contexts can both be useful, but they need clear boundaries around tools, repository access, secrets, network reach, and policy enforcement.
Call out the AI Safety Moment directly: isolate execution and enforce policy before broad tool access.
Then cover the memory and policy boundary point. Separate user-level preferences from repository-level facts, and respect admin-controlled governance boundaries for what can be stored, reused, exported, or excluded.
 
Demo / activity cue
Describe a controlled harness: branch, allowed files, tests, blocked secrets, limited tools, review gate.
Transition: With those controls in mind, introduce autonomy as a spectrum rather than a switch.

Original Slide Notes:

Secure execution environments and discovery — 
introduce local/cloud sandboxes, Copilot app execution contexts, and agent/resource discovery patterns as mechanisms to scale capability without sacrificing control. AI Safety Moment: isolate execution and enforce policy before broad tool access.

Memory and policy boundaries — 
distinguish user-level preferences from repository-level facts and reinforce admin-controlled governance boundaries for what can be stored, reused, exported, or excluded.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-38-eadcb541.png
---

<!--
Speaker notes
This slide turns the previous concepts into a decision model. Autonomy is a spectrum, not a switch.
Suggestion-only support is appropriate when uncertainty or impact is high. Delegated execution is safer when the task is reversible, well-scoped, and backed by tests or review gates.
Permissions should scale with blast radius. Destructive commands, broad file edits, and production-facing changes need explicit approval and narrow constraints.
Close by connecting secure execution environments to the harness concept: repeatable constraints and validation make AI-assisted work safer and more repeatable.
 
Demo / activity cue
Room exercise: classify example tasks by autonomy level and required approval gate.
Transition: Now summarize the baseline learners should carry forward.

Original Slide Notes:
Use this slide to introduce autonomy as a spectrum rather than a switch.    ???????

Suggestion-only support is appropriate for high-uncertainty or high-impact work, while delegated execution is safest when the task is reversible, well-scoped, and backed by tests or review gates. 

AI Safety Moment: permissions should scale with blast radius, so destructive commands, broad file edits, and production-facing changes require explicit approval and narrow constraints. Transition into the environments and discovery mechanisms that let teams scale capability without turning every session into an unrestricted agent run.

Frame secure execution environments as the bridge between productivity and control. Local and cloud contexts can both be useful, but each needs clear boundaries around available tools, repository access, secrets, network reach, and policy enforcement. AI Safety Moment: isolate execution before broadening tool access, and treat agent/resource discovery as something governed rather than something enabled by default. This prepares learners for the harness concept, where repeatable constraints and validation become the default way to work with AI assistance.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-39-2e59d478.png
---

<!--
Speaker notes
This is the recap slide for the operating model. Copilot is not one feature or one chat box; it is a set of surfaces, modes, policies, and cost choices.
The baseline behavior is: scope the task, choose the least autonomy that fits, review generated output, and measure usage when workflows repeat.
The outcome of the module is a safer default operating posture that learners can use in daily work.
 
Transition: Move into the closing section and the Module 2 handoff.

Original Slide Notes:
Summarize the baseline learners should now be able to carry into daily work. 

Copilot is not one feature or one chat box; it is a set of surfaces, modes, policies, and cost choices that need a consistent operating posture. 

The outcome of this module is a safer default: scope the task, choose the least autonomy that fits, review generated output, and measure usage when workflows repeat. 

Transition from the recap into the behavior change that matters most after class: consistency over ad hoc prompting.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-40-810afed9.png
---

<!--
Speaker notes
This slide is the final checkpoint. The module sets default operating behaviors for trust, quality, and cost-aware execution across IDE, CLI, and cloud surfaces.
The core message is consistency over ad hoc prompting. Strong outcomes come from mode discipline, context hygiene, explicit acceptance criteria, and budget-aware defaults.
Tie the usage optimization point back to team practice: consistent prompt patterns and scoped references reduce retry loops, make Chronicle summaries more useful, and help teams see where spend is improving delivery.
 
Demo / activity cue
Ask attendees to write one repeatable prompt pattern they can use in their own workflow.
Transition: Close by positioning Module 2 as an expansion of this baseline, not a reset.

Original Slide Notes:
Foundations outcome baseline — this module sets default operating behaviors for trust, quality, and cost-aware execution across IDE, CLI, and cloud surfaces. 

Consistency over ad hoc prompting — strong outcomes come from mode discipline, context hygiene, explicit acceptance criteria, and budget-aware defaults instead of improvisation. 

This slide is the reminder that reliable Copilot outcomes come from repeatable habits, not clever one-off prompts. Mode discipline, context hygiene, acceptance criteria, and budget-aware defaults create a shared team practice that is easier to review and improve. 

  Usage Optimization: consistent prompt patterns and scoped references reduce retry loops, make `/chronicle` summaries more useful, and help teams spot where spend is actually improving delivery. 

Use this as the final checkpoint before handing learners into the more autonomous patterns in Module 2.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-41-2dbc4183.png
---

<!--
Speaker notes
Close by making Module 2 feel like an expansion, not a reset. The foundations from this session are the guardrails for agentic workflows.
In Module 2, learners will layer instructions, memory strategy, tool orchestration, and repeatable autonomous control loops on top of the baseline we just established.
End with a practical ask: bring one workflow from today that you want to make more repeatable. That workflow becomes the raw material for safe delegation.
 
Demo / activity cue
Final activity: capture one workflow as task, constraints, success criteria, and review gate.
Transition: Thank the group and hand off to Module 2.

Original Slide Notes:
Transition to Module 2 — Agentic builds on this baseline with instruction layering, memory strategy, tool orchestration, and repeatable autonomous control loops.

Close by positioning Module 2 as an expansion, not a reset. The foundations from this session—trust boundaries, scoped context, mode selection, usage awareness, and human review—become the guardrails for agentic workflows. 

In the next module, learners will layer instructions, memory strategy, tool orchestration, and repeatable control loops on top of this baseline. 
Encourage them to bring one workflow from today that they want to make more repeatable, because that will become the raw material for safe delegation.
-->
