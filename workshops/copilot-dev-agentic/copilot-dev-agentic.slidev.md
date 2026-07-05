---
theme: ../../themes/github
title: "Copilot Dev Agentic"
info: |
  Generated from NotebookLM presentation for copilot-dev-agentic
ghFooterTitle: "Copilot Dev Agentic"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-agentic/slide-01-6c97b63a.png
---

<!--
Welcome learners to the Agentic module as the bridge from individual Copilot prompts to repeatable assisted workflows. Frame the session around instruction, memory, skills, agents, tools, and guardrails as parts of one operating system. Ask learners to think about a recurring task they would like to make safer and more repeatable.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-02-ea66054b.png
---

<!--
Use the agenda to show the progression from guidance layers into agentic loops, tool use, cloud or background execution, and optimization controls. Point out that each lab turns a concept into a reusable workflow artifact. Set the expectation that autonomy increases only when scope, evidence, and review gates are explicit.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-03-a0049c85.png
---

<!--
Explain instructions as standing team guidance that shapes how Copilot behaves across tasks. Use examples such as coding standards, architecture boundaries, review expectations, and security rules that belong in versioned files. Reinforce that non-negotiable guardrails should live in instructions rather than being remembered informally or retyped in every prompt.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-04-bfc78826.png
---

<!--
Introduce memory as a continuity layer for durable, non-sensitive facts and preferences. Useful memory might capture a preferred test command or repository convention, but it must not store secrets, regulated data, customer identifiers, credentials, or confidential one-off details. Ask learners what belongs in repo instructions instead of memory when a rule should apply to everyone.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-05-11077cf8.png
---

<!--
Use the hierarchy slide to explain how task requests, scoped instructions, repository guidance, and memory interact. The important rule is that memory complements durable standards; it does not override organization, repository, security, or review policy. Encourage learners to debug odd Copilot behavior by checking which guidance layer may be steering the response.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-06-39d82369.png
---

<!--
Break a strong prompt into task, scope, constraints, definition of done, and off-ramp. Emphasize that the off-ramp matters because it tells Copilot when to stop, ask, or escalate instead of guessing. Tie this to usage optimization: clear boundaries reduce retries, broad context, and expensive correction loops.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-07-e2ce2ade.png
---

<!--
Define an agent as a bounded worker that can plan, act, observe results, and adapt over multiple steps. The value is not just better text, but iterative execution with evidence gathering and checkpoints. Reinforce that action-capable systems need oversight, stop conditions, and human review before high-impact changes are accepted.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-custom-agent-17e83e80.png
---

<!--
Define a custom agent as a scoped assistant configuration with a purpose, instructions, and limited tools. The value is repeatability: teams can encode a safe pattern once instead of rewriting the same prompt in every session. Connect this to the Agentic lab where learners create `.github/agents/copilot-quest-implementer.agent.md` with explicit scope, stop conditions, and review requirements.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-08-bf050940.png
---

<!--
Define a skill as a reusable capability package for a recurring task with scope, constraints, expected outputs, and acceptance gates. Skills are powerful because they steer repeated tool use and handoffs, so they deserve review before broad adoption. Ask learners which recurring workflow would benefit from a skill and what permission boundary it would need.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-09-671cc210.png
---

<!--
Use this decision slide to map task complexity to Ask, Plan, or Agent. Ask fits low-complexity understanding or deterministic edits, Plan fits medium-complexity work that needs reviewed sequencing, and Agent fits high-complexity work with branching evidence and tool use. Reinforce that avoiding unnecessary autonomy saves time, AIC, and review effort.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-10-ca9ee9f2.png
---

<!--
This lab turns the first section into a concrete repo-local skill artifact. Learners should write a strong prompt and create `.github/skills/copilot-quest-guessing/SKILL.md` with task, scope, constraints, definition of done, and stop conditions. Encourage them to test whether another developer could review the artifact without additional verbal explanation.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-11-df88a3bf.png
---

<!--
Walk through the agentic loop as request, decide, act, observe, and correct. The critical teaching point is that humans design the loop boundaries before execution, including checkpoints and termination criteria. Ask learners where they would inspect evidence before allowing the next action.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-12-ceca0119.png
---

<!--
Define tools as the bridge from reasoning to action across files, terminals, tests, repositories, and external systems. Tools are best for concrete operations with visible inputs and outputs, such as searching code or running a targeted test. Emphasize that tool invocation is a control point requiring least privilege, constrained parameters, logging, and visible results for high-risk operations.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-13-0df2a2a8.png
---

<!--
Use this lab to practice custom-agent creation and handoff discipline. Learners should create `.github/agents/copilot-quest-implementer.agent.md`, decompose a task into scoped roles or steps, define what evidence each agent or worker must return, and decide where human review happens. The success measure is not speed alone; it is whether the handoff can be audited and stopped safely.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-14-046b2fa1.png
---

<!--
Explain background and cloud agents as options for work that is long-running, parallelizable, or needs isolated dependencies. They are not automatically better than local synchronous work; the choice depends on duration, observability, data sensitivity, environment needs, and whether the developer has useful parallel work to do. Connect this to safe delegation by naming permissions and review paths before launching work.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-15-103b0078.png
---

<!--
Present /init as a way to create reusable setup guidance or scaffolding instead of rewriting starter prompts. The generated material should be reviewed, versioned, and refined before teams rely on it. Tie it back to instructions and skills: boilerplate becomes safer when it encodes approved defaults rather than ad hoc preferences.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-16-cae6fb67.png
---

<!--
Use the instruction layering stack as a troubleshooting and governance model. Organization guidance, repository instructions, scoped files, user settings, memory, and the current request can all influence behavior. Ask learners how they would investigate a response that follows a personal preference but violates a repository rule.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-17-f1cb4b1b.png
---

<!--
Close the concept section by treating model routing, context budgeting, permission boundaries, and validation cadence as operating dials. The goal is to balance speed, quality, cost, and safety instead of maximizing autonomy. Reinforce that least privilege, explicit approvals, narrow scope, and regular verification form the reusable posture for agentic work.
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-18-d3e3240b.png
---

<!--
This lab asks learners to complete a Stage 6 to Stage 7 guardrail mapping before moving into advanced orchestration. They should name the model strategy, context budget, tool permissions, validation cadence, and stop condition for a workflow. End by asking what evidence would convince them the workflow is ready for a higher-autonomy path.
-->
