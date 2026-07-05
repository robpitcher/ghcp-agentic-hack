# Module 3: Advanced Topics — C++ / Hardware Skill Track Quiz

---

### 1. When is fleet-style execution appropriate for embedded C++ work?

- A) High-volume independent tasks such as separate static-analysis triage lanes with clear owners and merge control
- B) Any task touching shared register semantics
- C) Any task where review time is unavailable
- D) Work with unclear acceptance criteria

<!--answer: A-->
<!--explanation: Fleet execution is reserved for independent tasks where parallelism provides net value and evidence, ownership, and merge control remain clear.-->

---

### 2. What makes a subagent safer for a driver-review lane?

- A) Broad permissions and hidden output
- B) Scoped prompts, minimal permissions, clear output contracts, and auditable evidence
- C) Permission to merge directly
- D) No validation requirements

<!--answer: B-->
<!--explanation: Subagents need narrow prompts, least privilege, clear outputs, and evidence so reviewers can validate results.-->

---

### 3. How should teams use external Copilot skills or examples for embedded C++?

- A) Enable any discovered asset immediately
- B) Review source credibility, licensing, data handling, and enterprise compatibility first
- C) Treat catalog listings as official approval
- D) Replace repository instructions with copied content

<!--answer: B-->
<!--explanation: Trusted discovery still requires due diligence before skills, examples, or extensions enter an enterprise workflow.-->

---

### 4. Why do marketplace extensions and plugins require governance review?

- A) They can change permissions, telemetry, data access, behavior, and supply-chain risk
- B) They are always safer than deterministic scripts
- C) They cannot affect Copilot workflows
- D) They remove the need for rollback plans

<!--answer: A-->
<!--explanation: Extensions and plugins expand the trust and capability boundary, so teams review provenance, permissions, rollout, and rollback.-->

---

### 5. In the shared Advanced module, how should MCP be treated?

- A) As a governed concept for exposing tools and context with security review
- B) As a required embedded C++ server walkthrough
- C) As always safer than API/CLI
- D) As unrelated to authentication or authorization

<!--answer: A-->
<!--explanation: MCP remains conceptual in this curriculum, with focus on governed tool/context exposure, authorization, authentication, and data scope.-->

---

### 6. What is the best first step when an agent unexpectedly changes a C++ helper?

- A) Rerun with broader context and more autonomy
- B) Create a minimal repro with narrowed context, tool evidence, permissions, instructions, and validation commands
- C) Publish the agent for wider testing
- D) Remove hooks and policy checks

<!--answer: B-->
<!--explanation: Debugging starts with evidence and a minimal reproduction so teams avoid expensive trial-and-error loops.-->

---

*Quiz for Module 3 Advanced Topics — C++ / Hardware skill track*
