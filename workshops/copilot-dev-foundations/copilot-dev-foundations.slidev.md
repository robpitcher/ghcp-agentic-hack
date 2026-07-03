---
theme: ../../themes/github
title: "Copilot Dev Foundations"
info: |
  Generated from PPTX presentation for copilot-dev-foundations
ghFooterTitle: "Copilot Dev Foundations"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-foundations/slide-01-837b0b73.png
---

<!-- Presenter notes for cover slide -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-02-98029e6e.png
---

<!-- Section: Foundations Baseline: Surfaces, Chat, CLI, and Enterprise Trust (18 min). Slide topic (1 slide): Where GitHub Copilot Lives (IDE + Cloud, incl. Copilot app where available) — Copilot spans IDEs, terminal workflows, GitHub.com, cloud-based assistance, and Copilot app surfaces where available, letting developers move between coding, automation, and repository-level understanding with more consistent workflows across surfaces. AI Safety Moment: confirm org policy, repository access, and cross-surface context boundaries before using cloud or app experiences. Slide topic (1 slide): Look Around VS Code Chat Extension (slash commands, file references like #file/#selection) — VS Code chat gives developers slash commands, participants, and precise # references such as #file and #selection so the assistant sees the smallest useful context for the question. Usage Optimization: start with #selection or #file, then expand scope only when the answer proves more context is needed. Slide topic (1 slide): Look Around Copilot CLI — GitHub Copilot CLI is installed using the official setup guidance at <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli> and supports terminal-first chat, command explanation, command generation, /settings, help discovery, and review-oriented workflows such as security checks before committing. AI Safety Moment: generated commands must be reviewed before execution, especially when they change files, install dependencies, or affect remote systems. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-03-f1e42ce3.png
---

<!-- Slide topic (1 slide): Enterprise Privacy and IP (anchor safety segment: data handling, retention, duplicate detection, admin governance) — Enterprise privacy and IP controls include data-handling expectations, retention settings, duplicate-detection options, content exclusions, auditability, and admin governance that align Copilot usage with organizational policy. AI Safety Moment: treat generated output as draft material, verify provenance-sensitive suggestions, and keep human accountability with the developer and reviewer. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-04-af4d8c66.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-05-22990c0d.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-06-fbbe1d73.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-07-2e326bf2.png
---

<!-- Section: Guided Workflows: Inline Assistance and Built-in Copilot Experiences (20 min). Slide topic (1 slide): Inline Chat and Code Completions — Code completions accelerate flow authoring while inline chat supports scoped transformations such as refactors, type changes, and localized explanations, giving two complementary interaction patterns for day-to-day work. Usage Optimization: choose code completions for low-friction flow edits that are not billed in GitHub AI Credits on paid plans, and choose inline chat for bounded transformations with clear selection context. Slide topic (1 slide): Built-in Copilot Experiences (Ask, Plan, and Agent as examples) — GitHub Copilot includes built-in experiences that match different levels of autonomy: Ask supports explanation and low-risk understanding, Plan supports reviewed sequencing before edits, and Agent supports constrained multi-step execution when the task has clear acceptance criteria. Treat Ask, Plan, and Agent as familiar examples of Copilot assistance patterns rather than the full universe of possible custom or delegated agents. AI Safety Moment: higher-autonomy built-in experience use requires stronger approval gates, narrower scope, and explicit human review before accepting changes. Slide topic (1 slide): Show me — compare Ask, Plan, and Agent — facilitator demonstrates this scoped VS Code chat prompt and states the expected result: Ask explains options, Plan proposes reviewed steps, and Agent identifies executable work. AI Safety Moment: keep higher autonomy behind approval gates. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-08-424345ab.png
---

<!-- Slide topic (1 slide): Now you try — vary the scoped mode comparison — attendees repeat the same step, then swap #selection for #file before the lab to compare how a larger scope changes the response. Usage Optimization: compare only one scope variable at a time so the result is easier to evaluate. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-09-2dec853c.png
---

<!-- Safety: Keep mode escalation tied to task risk: Ask before Plan, Plan before Agent, and Agent only when acceptance criteria and rollback are clear. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-10-30906493.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-11-94b43307.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-12-0daa9eaf.png
---

<!-- Section: Tokenomics, GitHub AI Credits, Usage Visibility, and Model Routing (24 min). Slide topic (1 slide): What Is a Token? (input/output/cache economics) — Tokens represent input, output, and cached context across prompts, responses, instructions, files, and chat history, so context size directly affects cost, latency, and quality stability. Usage Optimization: trim noisy context before sending it and reuse cached or summarized context when it preserves accuracy. Slide topic (1 slide): What Are GitHub AI Credits? Usage-Based Billing (legacy PRUs → AI Credits) — GitHub AI Credits are the billing unit for Copilot usage under usage-based billing: model interactions consume input tokens, output tokens, and cached tokens, and the token cost is converted into AI credits where 1 AI credit equals $0.01 USD. Code completions and next edit suggestions are not billed in AI credits on paid plans, while Copilot Chat, Copilot CLI, Copilot cloud agent, Copilot Spaces, Spark, and third-party coding agents can consume AI credits. Usage Optimization: treat AI credit telemetry as workflow tuning feedback and set budget guardrails before scaling usage. Slide topic (1 slide): How Do I Know My Usage? (chat, CLI, and monthly views) — Use the Microsoft Learn usage article as a point of reference for what usage windows can show: monthly usage, remaining balance, plan details, warning thresholds, and plan-specific behavior. For day-to-day checks, use the available product entry points: in VS Code Chat, open usage from the GitHub/Copilot icon in the bottom-right status area; in Copilot CLI, run /usage to view usage, /context to inspect current context-window token usage, and /model to view or change model routing. For account-level monthly usage and billing, use GitHub billing or Copilot settings because monthly credit pools and overage behavior depend on plan and organization policy. Learn more: <https://learn.microsoft.com/en-us/visualstudio/ide/copilot-usage-and-models?view=visualstudio>. Usage Optimization: check actual usage commands and model controls before switching to higher-cost models or scaling agentic workflows. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-13-f2162550.png
---

<!-- Slide topic (1 slide): What Is a Model? (model routing guide — how to choose) — A model is the engine that interprets context and generates a response; routing should match model capability to task complexity, cost sensitivity, and review risk. Microsoft guidance for Visual Studio and GitHub Copilot model guidance recommend Auto for most prompts because it routes based on reliability and availability and can reduce model cost; developers can use the model picker to view cost indicators, then switch models for genuinely complex tasks. Usage Optimization: use Auto model routing for routine work when available, choose fast/general-purpose models for straightforward tasks, and reserve deep-reasoning models for ambiguity-heavy planning, debugging, or architecture decisions. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-14-a6688050.png
---

<!-- Safety: Do not optimize spend by skipping tests, validation, security checks, or human review. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-15-4433beab.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-16-ec49d51e.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-17-a3e239b9.png
---

<!-- Section: Context Windows, Autonomy Spectrum, and Custom Agents (18 min). Slide topic (1 slide): Anatomy of the Context Window (compaction + context rot) — Context windows combine instructions, history, referenced files, tool results, and outputs; quality degrades when sessions accumulate noise, stale assumptions, or compaction artifacts. Usage Optimization: reset, summarize, or re-scope when context rot appears instead of piling more history into the same thread. Slide topic (1 slide): Autonomy Spectrum and Delegating Permissions — Autonomy should scale with reversibility, blast radius, and confidence, from suggestion-only support to reviewed plans to constrained execution with explicit approval gates. AI Safety Moment: high-impact tasks require narrow permissions, human approval, and clear rollback before delegated execution. Slide topic (1 slide): What Is a Custom Agent? — A custom agent is a scoped assistant configuration with a defined purpose, instructions, and limited tools that make delegation repeatable without making permissions broad by default. AI Safety Moment: design custom agents with least privilege, explicit stop conditions, and review requirements before granting tool access. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-18-ab4864ff.png
---

<!-- Slide topic (1 slide): Show me — define custom-agent guardrails — facilitator demonstrates this prompt and states the expected result: a short custom-agent starter that names purpose, allowed scope, approval rule, and escalation off-ramp. AI Safety Moment: make permission boundaries explicit before autonomy increases. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-19-814e7c8a.png
---

<!-- Safety: Do not grant broad file, command, or network access when a custom agent only needs to suggest a small change. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-20-365ed987.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-21-eb54cdd5.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-22-17e83e80.png
---

<!-- Section: Wrap-up and Module 2 Handoff (10 min). Foundations set default operating behaviors for trust, quality, and cost-aware execution across IDE, CLI, cloud, GitHub.com, and Copilot app surfaces where available. Strong outcomes come from mode discipline, context hygiene, explicit acceptance criteria, model-routing decisions, and budget-aware defaults instead of ad hoc prompting. Module 2 builds on this baseline with instruction layering, tool orchestration, and repeatable autonomous control loops. -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-23-50b14454.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-24-ca838063.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-25-285186c6.png
---

<!-- Presenter notes -->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-26-6b652162.png
---

<!-- Presenter notes -->
