# Module 3: Advanced Content Refresh (Stage 7-8) — Quiz

---

### 1. When are multiagents most appropriate in the Advanced module?

- A) Whenever a task mentions more than one file
- B) When work can be separated by ownership, evidence, and merge control
- C) When the team wants to skip human review
- D) When no acceptance criteria exist

<!--answer: B-->
<!--explanation: Multiagents are justified only when work can be separated into bounded lanes with ownership, evidence, and explicit merge control.-->

---

### 2. Why is Brady Gaster's Squad positioned as a quick look rather than a required dependency?

- A) The module uses it as an ecosystem example of multi-agent coordination
- B) The module requires every learner to install it
- C) It replaces all GitHub governance controls
- D) It is used as the only deployment path

<!--answer: A-->
<!--explanation: Squad is referenced as an ecosystem example of multi-agent coordination and squad-style framing, not as mandatory tooling.-->

---

### 3. How should teams use the Awesome Copilot skills catalog in this module?

- A) As automatic approval to use any listed skill
- B) As a curated discovery source that still requires credibility and enterprise-compatibility review
- C) As a replacement for official documentation and policy
- D) As a required runtime dependency

<!--answer: B-->
<!--explanation: Curated resources support discovery, but teams still vet source credibility, licensing, data handling, and enterprise compatibility.-->

---

### 4. What makes a subagent safe to use?

- A) Broad permissions and a vague prompt
- B) Scoped prompts, minimal permissions, clear outputs, and auditable evidence
- C) Hidden outputs so reviewers are not overloaded
- D) Permission to merge directly without review

<!--answer: B-->
<!--explanation: Subagents need narrow prompts, minimal permissions, clear output contracts, and auditability.-->

---

### 5. Fleet-style execution is best reserved for:

- A) High-volume independent tasks where parallelism yields net AIC or time savings
- B) Tightly coupled tasks that must be sequential
- C) Tasks with unclear requirements and no owner
- D) Any task where review time is unavailable

<!--answer: A-->
<!--explanation: Fleet execution should be used only when task independence and volume make parallelism worth the coordination overhead.-->

---

### 6. What is the primary governance value of hooks?

- A) They replace policy review with prompt wording
- B) They provide enforceable guardrails such as policy checks, secret scanning, and mandatory validation
- C) They are only for UI customization
- D) They remove the need for tests

<!--answer: B-->
<!--explanation: Hooks create deterministic lifecycle guardrails that enforce required checks before changes are accepted or workflows advance.-->

---

### 7. Why does Extension Marketplace adoption require due diligence?

- A) Marketplace extensions can change trust, permissions, telemetry, and data-access boundaries
- B) Marketplace extensions are always organization-approved automatically
- C) Extensions cannot affect Copilot workflows
- D) Publisher trust is irrelevant for enterprise use

<!--answer: A-->
<!--explanation: Extension enablement is an enterprise onboarding decision because extensions can expand capabilities and risk surfaces.-->

---

### 8. In this workshop, how should MCP be treated?

- A) As a conceptual protocol pattern requiring security review of server onboarding, auth, and data scope
- B) As a specific server walkthrough every team must configure
- C) As always safer than API/CLI by default
- D) As unrelated to tool or context exposure

<!--answer: A-->
<!--explanation: MCP stays conceptual in this module, with focus on governed tool/context exposure, authentication, authorization, and data-scope controls.-->

---

### 9. When is API/CLI the preferred integration path?

- A) When deterministic, approved, observable commands or APIs already meet the need
- B) When the team needs the least auditability possible
- C) When production tokens should be shared broadly
- D) When no environment segregation exists

<!--answer: A-->
<!--explanation: API/CLI is often simplest for deterministic tasks that are already approved, scriptable, observable, and easy to scope.-->

---

### 10. What is the key supply-chain concern for plugins?

- A) Plugins never require version control
- B) Plugins should be governed for signing, versioning, controlled rollout, provenance, and rollback
- C) Plugins should always be enabled globally first
- D) Plugins eliminate permission review

<!--answer: B-->
<!--explanation: Plugins extend behavior and therefore require supply-chain governance, including signing, version controls, rollout limits, and rollback planning.-->

---

### 11. What should happen first when debugging surprising chat or agent behavior?

- A) Rerun with maximum context and more autonomy
- B) Create a minimal repro using narrowed context and evidence from tool calls, permissions, and instructions
- C) Publish the agent so more users can test it
- D) Remove all governance controls

<!--answer: B-->
<!--explanation: Debugging starts with evidence and a minimal reproduction so teams avoid expensive trial-and-error loops.-->

---

### 12. Which distribution or packaging paths must be named when preparing to deploy agents?

- A) GitHub Repo, Marketplace, and Agent Package Manager (APM)
- B) Email attachment, chat transcript, and shared drive
- C) Local-only folder, screenshot, and wiki page
- D) Browser bookmark, issue label, and spreadsheet

<!--answer: A-->
<!--explanation: The module explicitly names GitHub Repo, Marketplace, and Agent Package Manager (APM) as distribution or packaging paths to compare with governance, provenance, and permission checks.-->

---

*Quiz for Module 3: Advanced Content Refresh (Stage 7-8) — GitHub Copilot Developer Training*
