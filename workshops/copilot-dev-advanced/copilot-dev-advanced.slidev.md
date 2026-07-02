---
theme: ../../themes/github
title: "Copilot Dev Advanced"
info: |
  Generated from NotebookLM presentation for copilot-dev-advanced
ghFooterTitle: "Copilot Dev Advanced"
ghFooterLabel: ""
drawings:
  persist: false
transition: slide-left
mdc: true
layout: image-full
background: /images/copilot-dev-advanced/slide-01-29284dc2.png
---

<!--
- Welcome learners back and position this as the advanced operating layer.
- Emphasize orchestration agents coordinate work; they do not remove human ownership.
- Connect the diagram to research, execution, and retrieval working as accountable lanes.
- <em>Ask the room:</em> Which agent role would your team trust first, and why?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-02-809d5ec5.png
---

<!--
- Frame the workshop around scaling responsibly, not adding complexity for its own sake.
- Preview four recurring themes: orchestration, governance, debugging, and deployment readiness.
- Explain that Day 2 planning converts these ideas into a safe hack execution plan.
- <em>Ask the room:</em> Where does your team feel least ready: orchestration, governance, or deployment?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-03-8a2ffb2d.png
---

<!--
- Walk the objectives as a progression from architecture choice to operational readiness.
- Stress that every objective pairs capability with evidence, permissions, and rollback control.
- Set expectations that learners should leave with decision criteria, not memorized patterns.
- <em>Ask the room:</em> Which objective would unblock your next production-adjacent pilot?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-04-e1276357.png
---

<!--
- Re-anchor advanced work in the optimization habits from the earlier modules.
- Model choice, clear prompts, and lean context matter more as orchestration adds overhead.
- Highlight cache preservation and phase separation as practical cost controls.
- Treat `/chronicle` insights as feedback for improving team prompting habits.
- <em>Ask the room:</em> Which optimization habit has been hardest to sustain in real work?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-05-be90263a.png
---

<!--
- Introduce orchestration with a decision test: can the work split cleanly into lanes?
- Use research, implementation, and validation as examples of separable evidence paths.
- If ownership or acceptance checks blur, keep the work with one focused agent.
- Reinforce that unnecessary orchestration increases tokens, review time, and coordination risk.
- <em>Ask the room:</em> Which team workflow actually justifies orchestration overhead?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-06-63f96015.png
---

<!--
- Explain the coordinator as the owner of decomposition, sequencing, and final synthesis.
- Specialists should receive narrow scopes and return evidence, not open-ended changes.
- Tie the safety callout to preventing duplicate edits and invisible ownership gaps.
- Use this as the reference pattern before discussing smaller delegation units.
- <em>Ask the room:</em> Where should orchestration stop and human synthesis take over?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-07-489a15ac.png
---

<!--
- Define a delegation unit as a small contract: inputs, output, and acceptance check.
- Cheaper models work well when the slice is narrow and verification is explicit.
- The diagram shows context flowing through a bounded unit, not an unbounded conversation.
- Auditable outputs make specialist work easier to review and merge safely.
- <em>Ask the room:</em> What evidence should be required before accepting delegated output?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-08-86678bbd.png
---

<!--
- Normalize saying no to advanced orchestration when the task does not need it.
- Small tasks, shared-file contention, and unclear verification ownership are stop signs.
- A simpler single-agent workflow often produces cleaner context and faster review.
- This is both a safety choice and a cost-control habit.
- <em>Ask the room:</em> Where has orchestration overhead slowed your team down?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-09-2eb6cfe5.png
---

<!--
- Shift from agent design to integration governance: policy must not depend on prompting.
- Hooks are useful when a check must run at a fixed lifecycle boundary.
- Give examples like blocking risky commands before tool use or requiring pre-merge evidence.
- Emphasize that deterministic guardrails protect even when prompts are incomplete.
- <em>Ask the room:</em> Which integration surface is your highest enterprise risk today?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-10-4e13e57a.png
---

<!--
- Compare the three surfaces by control, observability, and setup overhead.
- Prefer API or CLI when commands are deterministic, familiar, and easy to log.
- Reach for MCP or extensions when discovery, authentication, or shared state matters.
- Keep the decision grounded in requirements, not tool novelty.
- <em>Ask the room:</em> What approval model should govern API, MCP, and extension onboarding?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-11-b4ac0d46.png
---

<!--
- Describe MCP as a governed fabric around the Copilot node, not a free-for-all.
- Authentication and authorization boundaries should be explicit before servers are enabled.
- Remind learners that every enabled server adds tool descriptions to the context budget.
- Onboard deliberately: only enable servers needed for the current task.
- <em>Ask the room:</em> How can teams reduce integration complexity while preserving capability?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-12-2ed14e18.png
---

<!--
- **Agentic workflow:**
- Explain the left side as adaptive exploration: feedback, resource checks, and alternate paths.
- This pattern fits ambiguous engineering work where goals may shift with evidence.
- **Deterministic workflow:**
- Explain the right side as repeatable release control: build, tests, scan, staging.
- Release-critical gates should stay deterministic so results remain auditable.
- <em>Ask the room:</em> Which team gate must never become agentic?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-13-93e4ea02.png
---

<!--
- Use this slide as the handoff from concepts to architecture planning.
- Learners should choose an orchestration model and integration surface for a bounded scenario.
- Encourage a decision with rationale, ownership, and acceptance evidence, not a perfect design.
- Remind them the plan extends the prior Copilot Quest workflow kit.
- <em>Ask the room:</em> What would make your architecture plan safe enough to test?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-14-a799be96.png
---

<!--
- Reframe debugging as evidence gathering across context, tools, instructions, and loops.
- Start with what Copilot actually saw and did before changing architecture.
- Minimal repro prompts reduce expensive guesswork and make failures easier to compare.
- Use the inspection panel metaphor to separate symptoms from root causes.
- <em>Ask the room:</em> What is your minimum debug evidence before changing an agent design?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-15-9af11ed4.png
---

<!--
- Treat agent distribution as an ownership and approval decision.
- Repo distribution fits team-maintained assets with PR review as the control point.
- Internal registries add platform and SecOps ownership for broader enterprise use.
- Marketplace publication requires vendor ownership and public policy review.
- <em>Ask the room:</em> Which distribution path matches your first internal agent pilot?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-16-67bd9762.png
---

<!--
- Present the readiness checklist as the gate before broader enablement.
- Capabilities, permissions, tests, rollback, and sign-off should be visible together.
- The disabled button reinforces that deployment waits until every control is satisfied.
- This keeps deployment readiness repeatable instead of personality-driven.
- <em>Ask the room:</em> Which readiness gate catches your highest-risk failures early?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-17-a8cd6f5b.png
---

<!--
- Transition from operational concepts into a controlled debug-and-readiness exercise.
- Learners should diagnose the issue using evidence before applying a fix.
- The readiness output should include governance checks, not just working code.
- Position this as rehearsal for deciding whether an agent is deployable.
- <em>Ask the room:</em> What failure would force rollback instead of iterative tuning?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-18-94b09ab6.png
---

<!--
- Introduce Day 2 planning as an engineering brief, not an improvisation session.
- The one-page brief forces a goal, non-goals, roles, and an off-ramp.
- Non-goals are especially important because they protect the demo from scope creep.
- Clear role ownership helps teams know who decides, builds, validates, and presents.
- <em>Ask the room:</em> What is the strongest one-day objective your team can complete safely?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-19-92374aa7.png
---

<!--
- **One complete slice:**
- Advocate for one vertical slice spanning UI, API, services, data, and infrastructure.
- This creates an always-demoable path and clearer validation evidence.
- **Many half-finished features:**
- Contrast scattered partial work with higher integration risk and late churn.
- Scope lock early so token spend goes to delivery, not repeated replanning.
- <em>Ask the room:</em> Which advanced capability gives your first pilot the highest ROI?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-20-b547866d.png
---

<!--
- Make the go/no-go gate lightweight but non-optional, even for hack demos.
- Acceptance criteria, policy checks, and fallback plans protect credibility under pressure.
- If core checks fail, fix or narrow scope rather than forcing the demo.
- The same permission and rollback thinking applies to rushed internal showcases.
- <em>Ask the room:</em> What gate determines go/no-go for your final demo submission?
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-21-e24d4271.png
---

<!--
- Close by connecting the final lab to the module’s operating posture.
- Advanced autonomy scales only with governance, observability, and release controls.
- Day 2 success means constrained scope, clear ownership, and policy-aware execution.
- Point learners to the knowledge check as confirmation before the hack begins.
- <em>Ask the room:</em> What governance gap must close before your broader rollout?
-->
