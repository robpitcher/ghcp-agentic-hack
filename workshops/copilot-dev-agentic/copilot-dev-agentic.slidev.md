---
theme: ../../themes/github
title: "Copilot Dev Agentic"
info: |
  Generated from slide-generation tool presentation for copilot-dev-agentic
ghFooterTitle: "Copilot Dev Agentic"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-agentic/slide-01-3cc0ad6c.png
---

<!--
- Welcome learners to the intermediate, agentic operating layer of Copilot development.
- Frame the module as moving from helpful prompts to repeatable control systems.
- Emphasize that autonomy improves when instructions, memory, skills, and loops are designed deliberately.
- <em>Ask the room:</em> Where does Copilot feel least repeatable in your workflow today?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-02-de2dbf76.png
---

<!--
- Use the gear-and-loop visual to introduce agentic work as a controlled operating system.
- Connect Foundations to this module: reusable checklists become skills, guardrails become execution controls.
- Stress the main outcome: knowing when to stay deterministic, delegate locally, or scale execution.
- <em>Ask the room:</em> Which is harder right now: getting answers, or making workflows auditable?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-03-44af44f5.png
---

<!--
- Walk the staircase from context strategy through controlled, repeatable delivery.
- Call out that each objective adds one more reusable control layer.
- Set expectations that labs will convert these ideas into CLI-ready operating habits.
- <em>Ask the room:</em> Which objective would create the fastest improvement for your team?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-04-d87e170f.png
---

<!--
- Orient learners to the progression: context, design, mechanics, scale, then handoff.
- Explain that the labs are distributed checkpoints, not a separate afterthought.
- Preview that each section answers a practical delegation decision.
- <em>Show of hands:</em> Who already uses instructions, memory, or skills intentionally today?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-05-24279e55.png
---

<!--
**Instructions:**
- Describe instructions as versioned team policy that Copilot should consistently follow.
- Use examples like review rules, security boundaries, and architecture constraints.
- Emphasize: non-negotiable policy belongs in files, not repeated chat reminders.
**Memory:**
- Position memory as continuity for stable facts, preferences, and repository conventions.
- Contrast useful memory, like test commands, with data that should never persist.
- <em>Ask the room:</em> What should never be saved to memory in your environment?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-06-78d3e04f.png
---

<!--
**Context hierarchy:**
- Explain that task requests, scoped files, repo guidance, and memory interact during execution.
- Use conflicts as examples: the more specific, current guidance should clarify behavior.
- Reinforce that memory complements standards; it should not override durable policy.
**Instruction layering stack:**
- Treat the stack as a troubleshooting map for inconsistent Copilot behavior.
- Highlight that different folders can carry different scoped instructions and expectations.
- <em>Ask the room:</em> Where do teams confuse convenience with governance in reusable context?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-07-f9d95d51.png
---

<!--
**Layer roles:**
- Give the litmus test: broad rule, reusable fact, or repeatable work pattern.
- Connect this to Foundations by turning a checklist into a more reusable skill.
**Layering example:**
- Use test coverage: instruction requires tests, memory recalls command, skill defines execution.
- Emphasize that the layers cooperate rather than compete for control.
- <em>Ask the room:</em> Where should “always add tests” live for your team, and why?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-08-d1853a54.png
---

<!--
**Well-scoped skill:**
- Explain the skill contract: scope, task, constraints, definition of done, and off-ramp.
- Show how missing boundaries cause over-touching, retries, or incomplete work.
- Tie optimization to fewer rework turns because the agent starts with clearer limits.
**Safer execution test:**
- Frame routing as a decision: instruction, memory, reusable skill, or one-time request.
- Use “stop if tests fail” and “ask before dependencies” as concrete gates.
- <em>Ask the room:</em> Which skill-contract element does your team most often omit?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-09-1a3f2135.png
---

<!--
- Transition from design concepts into hands-on classification and skill-contract writing.
- Tell learners to make success criteria, stop conditions, and verification explicit.
- Encourage them to think like maintainers approving a delegated workflow.
- <em>Ask the room:</em> What acceptance gate would make this exercise safe to delegate?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-10-bad3d8f0.png
---

<!--
**What is an agent:**
- Define an agent as a bounded worker that plans, acts, observes, and adapts.
- Stress that value comes from iterative execution, not just better generated text.
- Reinforce safety: action-capable systems need oversight and stop conditions.
**Runtime decision model:**
- Compare simple known-file work with ambiguous tasks that require branching evidence.
- Position human or tool paths as cheaper for deterministic operations.
- <em>Ask the room:</em> Which workflows are over-delegated today and should stay direct?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-11-ab02c529.png
---

<!--
- Narrate the loop as request, decide, act, observe, then correct.
- Point out where human inspection and evidence verification interrupt blind autonomy.
- Make termination criteria explicit before work begins to reduce runaway loops.
- <em>Ask the room:</em> What checkpoint would stop an agent before it wastes tokens?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-12-f9b2ab62.png
---

<!--
**Handoff evidence:**
- Treat diffs, tests, logs, rationale, and risks as the acceptance packet.
- Explain that plausible output is not enough without inspectable runtime evidence.
- Reinforce the safety rule: require evidence before trust.
**Tools:**
- Present tools as the auditable bridge from reasoning to files, terminals, and systems.
- Prefer direct tools for concrete operations like search, tests, or known-file edits.
- <em>Ask the room:</em> What evidence should always travel with your team’s handoffs?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-13-ddefb51e.png
---

<!--
- Transition from loop mechanics into a role-based handoff exercise.
- Tell learners to decide what stays human-led, delegated, or verified before acceptance.
- Emphasize that explicit checkpoints make multi-agent work reviewable.
- <em>Ask the room:</em> Where must verification remain human-led even with confident agents?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-14-74480dbd.png
---

<!--
**Background and cloud agents:**
- Compare local sync, background, and cloud by duration, observability, and environment needs.
- Use long builds, parallel research, and isolated dependencies as routing examples.
- Reinforce that async only helps when there is real parallel work.
**Boilerplate with `/init`:**
- Present `/init` as a way to capture repeatable setup and repo guidance.
- Connect templates to lower setup churn and more consistent starting context.
- <em>Ask the room:</em> Which task should move off the local path, and why?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-15-cd3a663c.png
---

<!--
**Optimization controls:**
- Treat model routing, context budget, permissions, and validation cadence as tuning dials.
- Explain how poor defaults create drift, overspending, or unsafe autonomy.
- Balance speed, quality, and cost instead of maximizing one blindly.
**Safe workflow practices:**
- Combine least privilege, approval gates, narrow scope, and verification as one posture.
- Make scale-up conditional on control evidence, not confidence alone.
- <em>Ask the room:</em> What control must exist before cloud delegation is allowed?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-16-241e7b41.png
---

<!--
- Transition from execution choices into guardrail and readiness mapping.
- Tell learners to connect each path to controls, evidence, and scale-up criteria.
- Frame this as preparation for broader rollout, not just another lab task.
- <em>Ask the room:</em> What readiness gap would block scaling in your environment?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-17-9dee2259.png
---

<!--
- Use the messy-to-structured visual as the module’s aha moment.
- Recap the shift from ad hoc requests to reproducible systems across sessions.
- Reinforce that the goal is an operating model, not a bag of tips.
- <em>Ask the room:</em> Which workflow should become more repeatable next week?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-18-f5f00905.png
---

<!--
- Walk through the equation from clear contracts to reliable autonomy.
- Explain that scoped access and verification make stronger delegation acceptable.
- Position governance-aware execution as the reason autonomy can scale safely.
- <em>Ask the room:</em> What evidence proves a workflow is ready for broader orchestration?
-->

---
layout: image-full
background: /images/copilot-dev-agentic/slide-19-6163c6f4.png
---

<!--
- Close by connecting this module’s operating layer to Advanced orchestration.
- Explain that Module 3 reuses these controls for multiagent and deployment-ready work.
- Keep the final message centered on security, accountability, and scalable patterns.
- <em>Ask the room:</em> What control will you carry into advanced orchestration first?
-->
