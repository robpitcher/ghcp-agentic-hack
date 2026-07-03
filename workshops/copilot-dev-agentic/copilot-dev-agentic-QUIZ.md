# Module 2: Intermediate (Agentic) — Quiz

---

### 1. What is the best description of how this module treats instructions?

- A) Instructions are temporary notes that should be rewritten in every session
- B) Instructions are the durable rulebook for standards, boundaries, and expected behavior
- C) Instructions should be replaced by memory whenever possible
- D) Instructions are only useful for cloud agents

<!--answer: B-->
<!--explanation: The workshop frames instructions as durable guidance for coding standards, review gates, architecture boundaries, allowed tools, and safety rules.-->

---

### 2. Which content should never be stored in memory?

- A) A stable non-sensitive preferred test command
- B) A repository convention that applies across sessions
- C) Secrets, regulated data, credentials, or customer identifiers
- D) A harmless formatting preference

<!--answer: C-->
<!--explanation: Memory is for durable, non-sensitive context. Sensitive, regulated, confidential, personal, or secret data must not be persisted.-->

---

### 3. If memory conflicts with repository instructions, which source should win?

- A) Memory, because it is more personalized
- B) The most recent chat message, regardless of policy
- C) Durable instructions and higher-precedence policy guidance
- D) Whichever source is shorter

<!--answer: C-->
<!--explanation: The context hierarchy teaches that durable policy in instructions overrides remembered preferences and convenience context.-->

---

### 4. Which fields belong in the strong-prompt anatomy taught in this module?

- A) Mood, persona, transcript length, and every available tool
- B) Task, Scope, Constraints, Definition of Done, and Off-Ramp
- C) Model name, theme color, billing code, and chat title
- D) Memory, cloud agent, pull request, and deployment slot

<!--answer: B-->
<!--explanation: A strong prompt names the work, boundaries, constraints, success criteria, and when Copilot should stop or escalate.-->

---

### 5. What is an agent in this module?

- A) A bounded worker that can plan, act, observe, and adapt over multiple steps
- B) A static markdown file with no ability to take action
- C) A replacement for human review gates
- D) A memory store for sensitive data

<!--answer: A-->
<!--explanation: The module defines agents as action-capable systems that need oversight, stop conditions, escalation paths, and review.-->

---

### 6. What is a skill?

- A) A reusable trusted capability package for recurring work with scope, constraints, expected outputs, and acceptance gates
- B) A private secret store for credentials
- C) A reason to bypass instructions and review gates
- D) A one-off chat message that should never be reviewed

<!--answer: A-->
<!--explanation: Skills package repeatable workflow guidance and must be reviewed before enabling capabilities that affect tools, external systems, dependencies, or privileged work.-->

---

### 7. Which Ask/Plan/Agent mapping is correct?

- A) Ask = high-risk autonomous execution, Plan = no review, Agent = one-line explanation
- B) Ask = low-complexity direct help, Plan = medium-complexity decomposition for approval, Agent = high-complexity multi-step work with checkpoints
- C) Ask = production deployment, Plan = secret storage, Agent = markdown formatting only
- D) Ask, Plan, and Agent should all be used for every task

<!--answer: B-->
<!--explanation: The decision matrix maps task complexity to the lightest effective mode so teams avoid unnecessary autonomous flows.-->

---

### 8. What makes an agentic loop safer and more efficient?

- A) Unlimited iterations with no evidence requirements
- B) Short bounded loops with termination criteria, checkpoints, and verification evidence
- C) Skipping observation so the agent can move faster
- D) Allowing every tool without logging

<!--answer: B-->
<!--explanation: Bounded loops reduce token burn, tool churn, review burden, and runaway retries while keeping evidence visible.-->

---

### 9. Why are tools treated as control points?

- A) They turn reasoning into auditable actions across files, terminals, tests, repositories, or external systems
- B) They are always lower risk than plain text answers
- C) They remove the need for constrained parameters
- D) They should never be logged

<!--answer: A-->
<!--explanation: Tool invocation creates real actions, so high-risk tools need confirmation, logging, constrained parameters, least privilege, and visible results.-->

---

### 10. What is the best reason to use a background or cloud agent?

- A) To skip review and finish faster
- B) To handle genuinely long-running, parallelizable work with an appropriate environment, permissions, and review path
- C) To avoid defining scope and constraints
- D) To remove the need for verification

<!--answer: B-->
<!--explanation: The workshop recommends background or cloud execution only when work is long-running or parallelizable and remains observable and reviewable.-->

---

### 11. What is the primary optimization value of `/init`?

- A) It stores secrets in memory automatically
- B) It standardizes scaffolding and setup guidance so teams reduce repeated prompting and inconsistent starts
- C) It bypasses repository instructions
- D) It replaces validation tests

<!--answer: B-->
<!--explanation: `/init` turns repeated setup and starter guidance into reusable scaffolding that teams can review, version, and refine.-->

---

### 12. What does the instruction layering stack protect against?

- A) Local prompt variance bypassing organization or repository safeguards
- B) Having any review gates at all
- C) Using repository instructions for durable policy
- D) Remembering harmless non-sensitive preferences

<!--answer: A-->
<!--explanation: Organization and repository layers help keep safeguards, review gates, and allowed-tool boundaries durable across people, folders, and sessions.-->

---

### 13. Which set best represents optimization controls for safe and efficient AI workflows?

- A) Model routing, context budgeting, permission boundaries, and validation cadence
- B) Bigger prompts, fewer tests, no logs, and unrestricted tools
- C) Memory for all data, cloud agents for every task, and no off-ramp
- D) Only choosing the newest model

<!--answer: A-->
<!--explanation: The capstone controls tune speed, quality, cost, and safety while keeping validation and permission boundaries explicit.-->

---

*Quiz for Module 2: Intermediate (Agentic) — GitHub Copilot Developer Training*
