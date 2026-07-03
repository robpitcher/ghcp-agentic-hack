---
theme: ../../themes/github
title: "Copilot Dev Foundations"
info: |
  Generated from slide-generation tool presentation for copilot-dev-foundations
ghFooterTitle: "Copilot Dev Foundations"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-foundations/slide-01-946a6311.png
---

<!--
- Welcome learners to the baseline module before we scale into agentic workflows.
- Frame Foundations as shared operating habits, not a tour of every Copilot button.
- Emphasize that trust, cost, and quality decisions start with everyday usage patterns.
- *Ask the room:* What Copilot habit already saves you the most time today?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-02-479ca7bf.png
---

<!--
- Walk the path from surfaces to autonomy as the mental model for the session.
- Explain that each step adds capability, but also adds judgment and governance needs.
- Call out current capabilities like `/chronicle`, Auto mode, and configurable reasoning.
- Position the outcome as a safe, repeatable operating model for daily work.
- *Ask the room:* Which part of this path feels least standardized on your team?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-03-4a37cbcc.png
---

<!--
- Use these objectives to calibrate expectations across editor, terminal, and cloud workflows.
- Stress that mode selection and CLI controls are part of safe engineering practice.
- Preview cost awareness: tokens, AIC, and model routing affect design choices.
- Close by connecting context hygiene and least-privilege delegation to review quality.
- *Ask the room:* Which objective would most improve your team's current Copilot usage?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-04-6bfff0c1.png
---

<!--
**Where Copilot lives:**
- Explain Copilot as a cross-surface assistant spanning IDE, terminal, and GitHub.com.
- Use the diagram to reinforce handoffs between coding, automation, and repo understanding.
- Remind learners to confirm org policy before cloud or cross-repo context.
**Enterprise privacy and IP:**
- Connect policy controls to compliance, auditability, access, and content boundaries.
- Say generated output remains draft material until a human reviews and accepts it.
- *Ask the room:* Where do new users most often misunderstand privacy boundaries?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-05-1d79cb3c.png
---

<!--
**Inline chat and completions:**
- Position completions as low-friction help that keeps developers in flow.
- Use inline chat for scoped refactors, type changes, and bounded transformations.
- Reinforce choosing the smallest interaction that can solve the task well.
**Baseline operating posture:**
- Start with least autonomy, tight scope, and explicit acceptance criteria.
- Keep accountability with the reviewer even when Copilot accelerates the work.
- *Ask the room:* What review gate gets skipped most often under delivery pressure?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-06-3180e4d6.png
---

<!--
- Transition from concepts into the first hands-on baseline check.
- Tell learners to validate where Copilot is operating before choosing a mode.
- Emphasize safety boundaries: surface, scope, data access, and review expectations.
- Preview that later labs will increase autonomy only after this baseline is clear.
- *Ask the room:* What signal tells you a task is safe enough to try with Copilot?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-07-9296a761.png
---

<!--
**VS Code chat mechanics:**
- Explain slash commands, participants, and `#` references as context-shaping tools.
- Recommend `#selection` or `#file` before expanding to broader workspace context.
- Connect tight scoping to lower latency, fewer retries, and better answers.
**Copilot CLI control plane:**
- Frame CLI work as ideal for commands, explanations, scripts, and operational iteration.
- Call out `/settings` for configuration and `/security-review` before local commits.
- *Ask the room:* Which task types belong in CLI rather than editor chat?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-08-2a48ce39.png
---

<!--
**Agents:**
- Distinguish Plan as reviewed change proposals from Agent as iterative delegated execution.
- Tie higher autonomy to more explicit approval gates and smaller blast radius.
- Encourage learners to avoid Agent mode when Ask or Plan is sufficient.
**Governance controls:**
- Explain managed settings, auto-approval limits, and content exclusions as safety rails.
- Local behavior should match org policy before enabling higher-autonomy workflows.
- *Ask the room:* Where does your team overuse Agent mode for simple work?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-09-cc59952b.png
---

<!--
**Context discipline:**
- Treat prompt clarity as an engineering control, not a writing preference.
- Bounded inputs reduce ambiguity, drift, retries, latency, and AIC spend.
- Encourage learners to define goal, scope, constraints, and done criteria upfront.
**/chronicle:**
- Present `/chronicle` as a session handoff artifact across CLI, IDE, app, and reviews.
- Use it to capture decisions, files, commands, open threads, tips, and cost-saving tips.
- *Ask the room:* Which CLI control should your team standardize first?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-10-3e8e62a6.png
---

<!--
- Transition from guided workflow concepts into repeated Ask, Plan, and Agent practice.
- Tell learners to keep the same task and vary only the interaction mode.
- Emphasize comparing output quality, review effort, and autonomy risk side by side.
- Remind them to use scoped context before broadening the task.
- *Ask the room:* What would make you downgrade from Agent back to Plan?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-11-e87466a7.png
---

<!--
**Tokenomics:**
- Explain tokens as the material Copilot processes across prompt, cache, and output paths.
- Larger or noisier context can increase cost while making answers less stable.
- Encourage trimming irrelevant files, history, and broad instructions before sending.
**AIC and budgets:**
- Describe AIC as telemetry that turns model choice and loop depth into tradeoffs.
- User budgets and plan limits help teams notice spend patterns before scaling.
- *Ask the room:* Which recurring tasks may be overpaying because context is too broad?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-12-8f6a9acf.png
---

<!--
**Billing implications:**
- Frame feature choice as a cost decision as well as a user experience decision.
- Use code review as an example that can consume both AI credits and Actions minutes.
- Encourage teams to know which workflows have compound billing effects.
**Usage visibility:**
- Usage views help reveal broad prompts, repeated retries, and avoidable overages.
- Treat spikes as workflow signals: clarify scope, change mode, or right-size the model.
- *Ask the room:* How should teams balance speed, quality, and spend under deadlines?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-13-86c8815f.png
---

<!--
**Model routing:**
- Fast models fit straightforward edits, explanations, and low-ambiguity tasks.
- Reasoning models are worth escalation for architecture, debugging, and uncertainty.
- Auto mode is often a practical default when teams want quality without over-tuning.
**Context and reasoning escalation:**
- Larger windows and stronger reasoning help deep multi-file work, but increase credit use.
- Escalate intentionally when the task complexity justifies the spend.
- *Ask the room:* Where should Auto mode be default versus manual model selection?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-14-358c0a11.png
---

<!--
**/chronicle evidence loop:**
- Use `/chronicle` after optimization work to record what changed spend or quality.
- Turn the summary into reusable tips for scoping, model routing, and retry avoidance.
- Reuse that artifact at restarts so teams do not rebuild expensive context manually.
**Rubber duck clarification:**
- Ask learners to explain the problem before asking Copilot to execute.
- This often exposes assumptions, missing constraints, and cheaper paths forward.
- *Ask the room:* What assumption would you want surfaced before spending tokens?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-15-0027fa13.png
---

<!--
- Transition into applying token, AIC, billing, model, and context decisions together.
- Learners should compare scoped and broad prompts rather than judging one output alone.
- Encourage them to note when a stronger model actually improves the result.
- Connect the lab back to repeatable cost-saving tips captured with `/chronicle`.
- *Ask the room:* What metric would prove a prompt is cheaper and still good enough?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-16-f6075c95.png
---

<!--
**Context window anatomy:**
- Explain context as layered instructions, history, references, and outputs inside one window.
- Noise and compaction artifacts create context rot that reduces answer quality.
- Reset or re-scope when the assistant starts optimizing against stale assumptions.
**Autonomy spectrum:**
- Scale autonomy based on reversibility, blast radius, and confidence in validation gates.
- High-impact tasks need explicit approvals, narrow permissions, and human review.
- *Ask the room:* What should trigger escalation to a larger context window?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-17-de4de600.png
---

<!--
**Secure execution environments:**
- Describe local sandboxes, cloud sandboxes, and Copilot execution contexts as containment layers.
- Resource discovery expands capability, so access should be deliberate and policy-aligned.
- Isolation lets teams move faster without giving every tool unrestricted reach.
**Memory and policy boundaries:**
- Separate reusable user preferences from repository facts, policies, and exclusions.
- Admin governance controls what can be stored, reused, exported, or excluded.
- *Ask the room:* Which sandbox or governance control gives the best safety-to-speed ratio?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-18-bc11a0c3.png
---

<!--
**Harness:**
- Define a harness as repeatable prompts, controlled context, fixtures, tests, and pass/fail gates.
- Use it to compare prompt or model variants and catch regressions early.
- Emphasize measurable quality before merging AI-assisted changes.
**Safety and optimization integration:**
- Reusable constraints improve reliability and efficiency when encoded once and reused consistently.
- Standard guardrails reduce repeated explanation and prevent avoidable unsafe variation.
- *Ask the room:* Which workflow should remain human-first even with mature tooling?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-19-f6e6fbe8.png
---

<!--
- Transition from delegation principles into building constrained custom-agent guardrails.
- Learners should practice on a low-risk task with clear pass/fail criteria.
- Emphasize that a failed guardrail is a success when it prevents unsafe execution.
- Connect the lab to harness thinking: fixed task, controlled context, automated checks.
- *Ask the room:* What guardrail would you require before delegating a real task?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-20-1a122c0d.png
---

<!--
**Foundations outcome baseline:**
- Recap the baseline: trust boundaries, quality habits, and cost-aware execution across surfaces.
- Remind learners that Copilot value improves when usage patterns are consistent.
**Consistency over ad hoc prompting:**
- Tie strong outcomes to mode discipline, context hygiene, acceptance criteria, and budgets.
- Position these habits as prerequisites for safe agentic workflows in the next module.
- *Ask the room:* Which Foundations practice should become mandatory this month?
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-21-6f2f249d.png
---

<!--
- Close by positioning Module 2 as an extension of this safety and quality baseline.
- Preview instruction layering, memory strategy, tool orchestration, and autonomous loops.
- Reinforce that agentic workflows require the same review gates, only more deliberately.
- Thank learners for investing in disciplined foundations before scaling autonomy.
- *Ask the room:* What workflow do you want to make more repeatable next?
-->
