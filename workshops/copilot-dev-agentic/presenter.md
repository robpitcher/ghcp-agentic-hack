# Presenter Notes — Module 2: Intermediate (Agentic) — Workshop Guide

## Discussion Guide by Section

### 1. Instructions, Memory, Context Hierarchy, and Strong Prompts (20 min)

- Which team rules should be codified in instructions this week so people stop repeating them in chat every session?
- What should never be persisted to memory in your environment, even if it would be convenient?
- When a remembered preference conflicts with repository instructions, how should the team explain the precedence rule to developers?
- Which strong-prompt field is most often missing in your team today: Task, Scope, Constraints, Definition of Done, or Off-Ramp?
- How could adding an explicit off-ramp reduce retries, review burden, or unsafe continuation?

### 2. Agents, Skills, and the Ask/Plan/Agent Decision Matrix (25 min)

- What makes an agent different from a strong prompt or a skill in terms of action, observation, and adaptation?
- Which skill in your environment would need a trust review because it reaches external systems, changes dependencies, or uses privileged tools?
- If your team says "always add tests for behavior changes," where should that guidance live: instructions, memory, prompt, or skill, and why?
- Which skill-contract element is most frequently omitted by your team: target scope, task, constraints, definition of done, or off-ramp?
- For the Copilot Quest five-letter guess validation/feedback task, what part should stay in Ask mode, what part should move to Plan mode, and what evidence would justify Agent mode?

### 3. Agentic Loops and Tool Control Points (25 min)

- Which workflows in your team are over-delegated today and would be faster with Ask, Plan, or direct tools?
- What kinds of work genuinely benefit from an agentic loop because they involve branching choices or multi-step evidence gathering?
- What loop stop condition should be set before an agent starts changing code or using tools?
- Which tools in your environment need confirmation, logging, constrained parameters, or separate approval before use?
- What minimum evidence should the Copilot Quest implementer/verifier handoff produce before acceptance: edge-case checks, tests, diffs, rationale, logs, unresolved risks, or something else?

### 4. Background/Cloud Agents, `/init`, Instruction Layering, and Optimization Controls (20 min)

- Which task classes should remain local because they involve sensitive context, fast iteration, or direct supervision?
- What is a good example of work that should move to a background task or cloud agent because it is long-running or parallelizable?
- Where can `/init` reduce setup churn most for your team by turning repeated scaffolding into a reusable pattern?
- Which instruction layer should own non-negotiable safeguards so local prompt variation cannot bypass them?
- Which optimization control should become a team default immediately: model routing, context budgeting, permission boundaries, validation cadence, or explicit approval gates?
- What readiness gap remains before scaling to advanced orchestration in your environment?

*Presenter note discussion guide extracted from workshop discussion point sections for Slidev talk track development.*
