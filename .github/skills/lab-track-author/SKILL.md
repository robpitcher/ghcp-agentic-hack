---
name: Skill Track Lab and Quiz Author
description: Use this skill to create technology-specific lab and quiz tracks that stay aligned to shared workshop slides and source-truth module concepts.
icon: 🧭
audience: Workshop authors creating skill-focused participant tracks
order: 20
---

# Skill Track Lab and Quiz Author

Use this skill when creating a new workshop skill track. The slides and `*-workshop.md` source remain authoritative for all participants; only labs, quizzes, and the linked technology skill change by track.

The artifact split is strict:

- The **technology skill** instructs GitHub Copilot how to behave for the developer domain.
- The **lab** instructs the participant how to use and evaluate that skill.
- The **quiz** checks shared module concepts through the selected skill lens.

## Operating Principles

| Principle | Guidance |
|-----------|----------|
| Slides stay shared | Do not fork or customize Slidev decks for a technology track. |
| Source truth first | Read the module `*-workshop.md` before authoring track labs or quizzes. |
| Skill as behavior | Write technology skills as Copilot-facing behavior packages, not human lab guides. |
| Skill focused | Adapt exercises, prompts, examples, and quiz scenarios to the selected technology skill. |
| Same concepts | Test and practice the same module concepts taught by the shared slides. |
| No switching | Treat the selected skill track as a workshop-level choice, not a per-module toggle. |
| Beginner explicit | Every create, save, fill, compare, review, or run instruction must name the artifact, path, table, checklist, command, or evidence the participant should produce. |
| Show where/how | When a lab teaches a Copilot surface, integration, hook, plugin, MCP boundary, API/CLI, or marketplace extension, show where the learner finds it, how they safely set up or evaluate it, how they validate it, and how they disable or roll it back. |
| Scenario aligned | Core labs use the core build thread; skill-track labs use domain scenarios aligned to the same module concept. |

## Track Creation Workflow

1. Identify the parent workshop and module sequence.
2. Read the module `*-workshop.md`, canonical `*-LAB.md`, canonical `*-QUIZ.md`, and the target `workshops\<workshop>\skills\<skill-slug>\SKILL.md`.
3. Confirm the technology skill tells Copilot how to behave: activation criteria, preferred tools/context, constraints, safety gates, output contract, and validation expectations.
4. Create skill-track lab files under each module:

```text
workshops\<module>\labs\<skill-slug>-LAB.md
```

5. Create skill-track quiz files under each module:

```text
workshops\<module>\quizzes\<skill-slug>-QUIZ.md
```

6. Update `site\data\workshops.ts` so every module exposes the skill track with the same slug.
7. Validate with deterministic checks.

## Technology Skill Checklist

- Use imperative Copilot-facing language: inspect, prefer, ask, stop, validate, return.
- Include activation criteria that tell Copilot when to use the skill.
- Name tools, context sources, and discovery methods the domain expects.
- Define domain constraints, review gates, and stop conditions.
- Specify the output shape Copilot should return.
- Keep step-by-step participant exercises, setup walkthroughs, and long prompt libraries out of the skill.

## Lab Authoring Checklist

- Keep the module section order and learning objectives intact.
- Include `**⏱️ Time**`, `**📋 Objective**`, `**🛡️ Safety checkpoint**`, and `### ✅ Success Criteria` in every exercise.
- Use fenced code blocks for every copyable prompt, command, template, or configuration snippet.
- Link or name the matching technology skill before the first exercise.
- Ask participants to review, install or copy, invoke, and evaluate the skill during the lab flow.
- Adapt the scenario to the domain without adding concepts that the shared slides do not teach.
- Provide the learner's task source. Do not ask participants to invent the work when a concrete module scenario, default task, or bounded option set can be supplied.
- For core/general labs, use the core workshop build thread as the default scenario; for technology tracks, use the selected domain and technology skill as the scenario source.
- Make every success criterion observable from a participant action, artifact, prompt, or checkpoint.
- Write labs for beginners: do not say only "create a skill," "draft an agent," "fill a matrix," or "save a note." Provide the exact file path, folder creation command or VS Code action, starter template, expected table/checklist fields, and where to save the result.
- When a lab asks participants to compare or review something, include the comparison checklist or table directly in the lab.
- When a lab asks participants to capture evidence, name the evidence type: command output, diff summary, validation result, approval note, unresolved-risk list, or rollback decision.
- When a lab introduces a product surface or integration, include the learner entry point: VS Code Activity Bar, Command Palette command, integrated terminal command, Copilot CLI command, GitHub UI location, configuration file path, or official marketplace/details page.
- For hooks, plugins, Extension Marketplace, MCP, and API/CLI examples, include setup or discovery steps only when the current module teaches that concept. Provide validation evidence and disable, uninstall, or rollback steps before asking learners to rely on the integration.
- Keep MCP as a governed concept unless the source workshop explicitly adds a server-specific walkthrough. If a lab mentions MCP, have learners document where configuration would live, what tools/context would be exposed, which data boundary changes, and what approval is required.
- Keep copyable templates compatible with rendered lab navigation: avoid `##` headings inside fenced templates unless they are intended to become page-level lab headings.

## Beginner Clarity Gate

Before publishing a skill-track lab, trace every participant action through this gate:

| Action verb | Required learner support |
|-------------|--------------------------|
| Create | Exact file or folder path, plus a command or clear VS Code Explorer instruction. |
| Draft | Starter prompt and expected output fields. |
| Fill | Table or checklist template with required columns or bullets. |
| Compare | Named sources and a review checklist. |
| Save | File name, location, and content template. |
| Run | Copyable command and expected evidence to capture. |
| Review | Specific pass/fail criteria, safety gate, or decision options. |
| Find | Exact product surface, menu, command, UI location, or repository path. |
| Set up | Copyable command or configuration path, expected result, validation check, and rollback or disable step. |
| Evaluate | Trust, permission, provenance, data-scope, version, telemetry, validation, and rollback criteria. |

If an action cannot be traced to a concrete artifact or evidence item, rewrite the step before shipping the lab.

## Scenario Alignment Gate

Before publishing a skill-track lab, confirm that the task source matches the track:

| Track type | Scenario requirement |
|------------|----------------------|
| Core/general | Use the shared core build thread when learners create code, skills, agents, orchestration packages, or advanced evidence packages. |
| Technology skill track | Use a concrete domain scenario that practices the same module concept through the selected technology skill. |
| Foundations | Keep scenarios lightweight: orientation, notes, prompt assets, and guardrail handoffs. |
| Agentic | Provide concrete build, review, skill, or custom-agent tasks; do not ask learners to invent them. |
| Advanced | Provide concrete governance, orchestration, integration, debug, deployment, capability-discovery, and evidence-capture scenarios without turning the lab into a large implementation build. Day 2 is a separate event; do not ask learners to create Day 2 event plans as Advanced lab or quiz deliverables. |

If the lab says "pick one task" or "choose a scenario," either provide a default task or give a small bounded option set.

## Advanced Surface Walkthrough Gate

For advanced skill-track labs that mention integration surfaces, require this minimum walkthrough detail:

| Surface | Required learner walkthrough |
|---------|------------------------------|
| Copilot/agent hooks | Where the hook configuration lives, one safe setup or discovery path, what lifecycle event is involved, how to validate that it ran, and how to disable or roll it back. |
| Extension Marketplace | Where to open the marketplace, which publisher/version/install or trust signals to inspect, what permissions or telemetry questions to ask, and how to disable or uninstall. |
| Plugins | Agent Customizations > Plugins and Extensions view agent-plugin surfaces where available, `chat.plugins.enabled` awareness, `plugin.json` or package metadata, included slash commands/skills/custom agents/hooks/MCP servers, provenance/version/signing or source checks, rollout decision, and rollback path. |
| MCP | Extensions search `@mcp`, `MCP: Open User Configuration`, `MCP: Open Workspace Folder Configuration`, `MCP: List Servers`, configuration scope, and exposed tools/resources/prompts/context as a governance review; no live server setup unless the workshop source explicitly requires it. |
| API/CLI | Exact command or endpoint pattern, expected inputs/outputs, approval/logging requirements, and why it is safer or more observable than a broader integration. |
| Debug evidence | VS Code path for opening the Agent Debug Log panel with `Developer: Open Agent Debug Panel` or **Show Agent Debug Logs**, inspecting load events, tool calls, LLM requests, Summary, and Agent Flow Chart, plus **Show Chat Debug View** for raw payloads. Include `#debugEventsSnapshot`, `/troubleshoot` with the `github.copilot.chat.agentDebugLog.enabled` setting, the note that debug data is not persisted across VS Code sessions, and a Copilot CLI alternative that captures prompt, selected context, tool or command output, error text, and narrowed rerun evidence. |

For VS Code Chat labs, include **Configure Tools**, the `#` picker for context/tools, the permissions picker, Agent Customizations view, files changed review controls, checkpoints/forks, and Agent Sessions sidebar whenever those surfaces are part of the concept being taught.

## Quiz Authoring Checklist

- Preserve the authored quiz format: `### N. Question`, four `A)` through `D)` options, one `<!--answer: X-->`, and one `<!--explanation: ...-->`.
- Keep concept coverage aligned to the shared module quiz and workshop source.
- Use technology-specific examples only as context for the same underlying concept.
- Avoid questions that require facts taught only by the skill file unless the lab also teaches them.

## Validation Commands

```powershell
npm run test:curriculum-qa
```

```powershell
npm run test:labs
```

```powershell
npm run build:site
```

*Repo-local skill for creating skill-track labs and quizzes*
