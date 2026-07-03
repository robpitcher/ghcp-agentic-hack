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

<!--
Welcome the room to Foundations as the operating model for safe, cost-aware Copilot use. Emphasize that this module is not a feature tour; it is a set of repeatable habits for choosing the right surface, scope, and review gate. Ask learners to keep one current task in mind so each concept can be connected to something they actually do.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-02-98029e6e.png
---

<!--
Use the agenda to show that the module moves from surfaces and trust into workflow modes, usage economics, context quality, and delegation boundaries. Point out that the labs are placed where learners can immediately repeat the pattern they just saw. Set the expectation that each section has both a productivity angle and a safety or usage-control angle.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-03-f1e42ce3.png
---

<!--
Explain that Copilot now appears across IDEs, terminals, GitHub.com, cloud workflows, and app surfaces where they are available. The key teaching point is continuity: developers can move between coding, repository understanding, and automation, but context and permissions do not automatically mean the same thing everywhere. Ask learners which surface they use most today and which one carries the highest review risk in their environment.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-04-af4d8c66.png
---

<!--
Introduce VS Code Chat as the place where scope control begins. Call out slash commands, participants, and precise references such as #file and #selection as ways to give Copilot only the context it needs. Reinforce that smaller context usually improves reviewability, speed, and cost before anyone reaches for broader workspace context.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-05-22990c0d.png
---

<!--
Frame Copilot CLI as terminal-first assistance that still requires command review. It can explain commands, draft commands, help with settings discovery, and support review-oriented workflows, but the developer remains responsible for what runs. Pause on commands that install dependencies, delete files, or touch remotes and ask what approval or dry-run step would be appropriate.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-06-fbbe1d73.png
---

<!--
Anchor enterprise privacy and IP as part of normal developer workflow, not a compliance detour. Mention data handling, retention, duplicate detection, content exclusions, auditing, and admin policy as examples of controls that shape how Copilot should be used. Reinforce that generated output is draft material and provenance-sensitive work still needs human validation.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-07-2e326bf2.png
---

<!--
Use this lab transition to slow the room down before moving into higher-autonomy workflows. Learners should identify the Copilot surfaces available to them, try scoped chat or CLI orientation, and name the safety boundaries that apply. Make the success criterion concrete: they should leave the lab able to explain which context they shared and why it was appropriate.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-08-424345ab.png
---

<!--
Contrast inline completions with inline chat as two different flow tools. Completions are best for low-friction continuation while inline chat is better for selected transformations, explanations, and localized refactors. Emphasize that bounded selection context makes the result easier to inspect than a broad request over an entire file or project.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-09-2dec853c.png
---

<!--
Introduce Ask, Plan, and Agent as examples of increasing autonomy rather than as labels to memorize. Ask is for understanding, Plan is for reviewed sequencing, and Agent is for constrained multi-step execution when acceptance criteria are clear. Tie the safety moment to mode escalation: higher autonomy should bring narrower scope, stronger approval gates, and explicit review.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-10-30906493.png
---

<!--
Use the Show me slide to demonstrate how the same selected code can be handled differently by Ask, Plan, and Agent. Focus the audience on the review gate each mode implies, not just the wording of the response. Ask learners what would have to be true before they allowed the Agent path to make changes.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-11-94b43307.png
---

<!--
Use the Now you try slide to isolate one variable: changing #selection to #file. The learning goal is to compare how larger context changes the answer and the amount of material the developer must review. Encourage learners to capture when the larger scope helped and when it only added noise.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-12-0daa9eaf.png
---

<!--
This lab reinforces the show-then-do rhythm for scoped assistance. Learners should run a similar task across inline assistance and Ask, Plan, and Agent so they can feel the change in autonomy. Remind them that the output is not complete until they can name the review step they would apply before accepting it.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-13-f2162550.png
---

<!--
Define tokens as the unit of context and output that drives latency, cost, and sometimes quality stability. Make clear that instructions, chat history, file references, tool results, and generated responses can all add to the context budget. Ask learners where noisy context tends to enter their own Copilot sessions.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-14-a6688050.png
---

<!--
Explain GitHub AI Credits as the billing unit used for usage-based Copilot interactions. Highlight the practical distinction that paid-plan code completions and next edit suggestions are not billed in AI credits, while chat, CLI, cloud agents, Spaces, Spark, and third-party coding agents can consume credits. The takeaway is not to avoid powerful workflows, but to use telemetry and budget guardrails before scaling them.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-15-4433beab.png
---

<!--
Use this slide to turn usage visibility into a daily operating habit. Mention VS Code usage entry points, CLI /usage, /context, and /model, plus GitHub billing or Copilot settings for account-level monthly views where policy allows. Emphasize that checking real usage signals before changing models prevents accidental cost escalation.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-16-ec49d51e.png
---

<!--
Describe models as engines with different capability, latency, and cost profiles. Auto is the default recommendation for routine work because it lets the platform route based on availability and reliability, while fast models fit bounded tasks and deeper reasoning fits ambiguous or high-risk work. Ask learners to state a one-sentence rationale before switching away from Auto.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-17-a3e239b9.png
---

<!--
Use the checklist prompt as a practical bridge from usage data to routing decisions. The point is to have Copilot help convert scattered product controls into a team habit: check usage, inspect context, choose a model, and document why. Reinforce that deeper reasoning is valuable when it prevents rework, not when it is used as a default.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-18-ab4864ff.png
---

<!--
The practice prompt asks learners to produce one reusable routing rule and one cost-savings tip. Encourage rules that are specific enough to apply later, such as staying on Auto for bounded documentation work or resetting context before retrying a failing prompt. Ask for one volunteer example and test whether the rule includes task shape, risk, and review burden.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-19-814e7c8a.png
---

<!--
Use this lab transition to connect tokens, AI credits, model routing, and context hygiene into one optimization exercise. Learners should compare a broad prompt with a scoped prompt and explain the model route they would choose. Remind them that cost control must never replace tests, security checks, or human review.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-20-365ed987.png
---

<!--
Explain the context window as a working memory made of instructions, history, files, tool outputs, and generated content. Context rot happens when stale assumptions, noisy history, or compaction artifacts start steering answers away from the current task. Give learners permission to reset, summarize, or re-scope instead of endlessly adding more context to a degraded thread.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-21-eb54cdd5.png
---

<!--
Use the autonomy spectrum to show that delegation should grow only as reversibility, confidence, and review controls improve. Suggestion-only support, reviewed planning, and constrained execution are different risk postures. Ask learners where they would draw the approval line for tasks that touch dependencies, security, or shared infrastructure.
-->

--- 
layout: image-full
background: /images/copilot-dev-foundations/slide-23-50b14454.png
---

<!--
Use the guardrail checklist prompt to show what a safe delegation contract looks like. It should name purpose, allowed scope, approval rules, and an escalation off-ramp before any tool access is granted. Ask the room what permission they would remove first if the agent only needs to suggest a single-file change.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-24-ca838063.png
---

<!--
The practice step is about tightening boundaries, not making the agent more impressive. Learners should remove one unnecessary permission or add one ambiguity stop rule so the future agent knows when to pause. Reinforce that narrower tools and clearer stop rules reduce blast radius while preserving usefulness.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-25-285186c6.png
---

<!--
This final lab consolidates custom-agent guardrails with the least-privilege habit from the whole module. Learners should draft a constrained guardrail checklist and prepare the Module 2 handoff without creating agent or skill files yet. Close the lab by asking them to name one boundary that would make a future agent stop instead of continuing.
-->

---
layout: image-full
background: /images/copilot-dev-foundations/slide-26-6b652162.png
---

<!--
Use the closing slide to summarize the baseline learners carry into Module 2. Strong Copilot outcomes come from scoped context, mode discipline, usage-aware model routing, explicit acceptance criteria, and review gates. Position Module 2 as an expansion into instruction layering, tool orchestration, and repeatable autonomous control loops rather than a reset of these fundamentals.
-->
