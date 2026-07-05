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
background: /images/copilot-dev-advanced/slide-01-3bbeb64c.png
---

<!--
Welcome learners to Advanced as the module where orchestration, integrations, and deployment paths become explicit design decisions. Frame the session around when to coordinate multiple agents, when to add tools or protocols, and how to prepare for Day 2 hack work. Emphasize that advanced does not mean unconstrained; it means better-designed boundaries.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-02-4024b831.png
---

<!--
Use the agenda to show the three arcs: orchestration patterns, integration due diligence, and debugging or deployment readiness. Point out that every advanced capability introduces trust, permission, maintainership, and rollback questions. Ask learners to listen for the point where a simple workflow would be safer than an elaborate one.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-03-0180ab9c.png
---

<!--
Define multiagents as coordinated AI workers or roles around a shared objective. They help when work can be separated by ownership, evidence, and merge control, such as research, implementation, validation, or review lanes. Use Brady Gaster's Squad as an ecosystem example while making clear it is not a required dependency.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-04-beff9943.png
---

<!--
Position curated Copilot lists as discovery aids, not enterprise approvals. They can help teams find skills, examples, prompts, and ecosystem ideas, but each item still needs review for source credibility, license posture, data handling, and compatibility. Ask learners what evidence they would need before reusing a public skill internally.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-05-58f7fb70.png
---

<!--
Explain subagents as scoped delegation units with narrow prompts, limited context, clear output contracts, and acceptance checks. They are most useful when a larger task can be decomposed into auditable slices like research, test writing, documentation review, or validation. Stress that attribution matters so reviewers know where each finding came from.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-06-40b9a095.png
---

<!--
Describe fleet-style execution as running many independent tasks or agents in parallel. It fits high-volume independent work such as similar refactors, broad issue triage, or many checks where coordination overhead is lower than the time saved. Warn that fleet execution is a poor fit when tasks conflict, require shared sequencing, or lack clear merge controls.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-07-179c566b.png
---

<!--
This lab turns orchestration concepts into a concrete plan. Learners should decide whether a task needs multiagents, subagents, fleet execution, or a simpler single workflow. The output should include ownership, evidence requirements, merge controls, and a reason the chosen pattern is worth the coordination cost.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-08-7d935c10.png
---

<!--
Define hooks as deterministic lifecycle guardrails that run before tool calls, accepted changes, or workflow transitions. They are useful for policy checks, secret scanning, validation commands, and review gates that should not depend on prompt quality. Show that Copilot/agent hooks can be represented as repository-level `.github/hooks/*.json` configuration and that learners must validate syntax and know the rollback command before trusting a hook.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-09-b1cb559c.png
---

<!--
Use marketplace extensions as an example of convenience that changes the trust boundary. Extensions can expand the developer environment and agent experience, but they may also alter permissions, telemetry, data access, and support obligations. Ask learners to open extension details, inspect publisher/version/trust signals, and identify how they would disable or uninstall before asking who should approve adoption.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-10-38882bdc.png
---

<!--
Introduce MCP as a protocol pattern for exposing tools, resources, and context through explicit server boundaries. Keep the focus on governance: teams need to know where configuration would live, what tools are exposed, what data can be read or changed, and how authentication and authorization are enforced. Reinforce that this workshop does not configure a live MCP server because onboarding a server is a security review event, not just a developer setup step.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-11-a0841cd4.png
---

<!--
Explain that APIs and CLIs are often the simplest integration path for deterministic tasks. They fit operations that are already approved, observable, scriptable, and easy to scope, such as querying issues, running tests, collecting logs, or invoking known automation. Ask learners to capture a read-only command, output shape, approval/logging requirement, and why this is safer than a broader plugin or agent action.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-12-4604ce07.png
---

<!--
Frame plugins as supply-chain components even when they feel like small conveniences. Review provenance, signing or source, versioning, rollout scope, update cadence, telemetry/data scope, and rollback before enabling plugins for agent-facing workflows. Ask learners where plugin metadata would be reviewed and how they would remove or disable a plugin quickly if it caused incorrect tool behavior.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-13-99157899.png
---

<!--
This lab asks learners to build an integration due-diligence matrix with setup or discovery evidence. They should create or evaluate a safe Copilot/agent hook draft, inspect marketplace and plugin trust signals, keep MCP conceptual, capture deterministic API/CLI evidence, and compare all surfaces by trust boundary, permissions, data exposure, auditability, and rollback. The success criterion is a recommendation that explains both value and risk.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-14-dcb235d2.png
---

<!--
Teach debugging as inspection of context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics. Start with the smallest reproducible prompt and add only the context needed to prove or disprove the issue. Emphasize that broad reruns can hide the root cause while burning time and AIC.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-15-9230bd3a.png
---

<!--
Explain deployment choices by audience, governance, maintainership, and provenance. A GitHub repository fits source-controlled internal sharing, a marketplace path fits broader discoverability where approved, and APM-style packaging can support reproducible distribution of agents, skills, prompts, plugins, and MCP configuration. Reinforce that deployment requires ownership, policy compliance, permission review, and rollback planning.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-16-e2a42275.png
---

<!--
Use the Day 2 hack slide to shift from concepts to execution readiness. Teams should predefine narrow scope, model strategy, success criteria, fallback path, and final demo gate before work begins. Ask each group to name what they will not attempt so they can avoid scope creep during the hack.
-->

---
layout: image-full
background: /images/copilot-dev-advanced/slide-17-30168079.png
---

<!--
This final lab prepares learners to debug, inspect capability surfaces, and choose a deployment path safely. They should produce evidence from the Agent Debug Log, Chat Debug View, or Copilot CLI, map it to the debugging checklist, and record packaging readiness with rollback expectations. Close by reminding them that Day 2 is a separate event; this lab creates reusable evidence and readiness inputs rather than a Day 2 event plan.
-->
