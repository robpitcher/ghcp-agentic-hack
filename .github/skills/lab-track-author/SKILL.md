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
- Make every success criterion observable from a participant action, artifact, prompt, or checkpoint.
- Write labs for beginners: do not say only "create a skill," "draft an agent," "fill a matrix," or "save a note." Provide the exact file path, folder creation command or VS Code action, starter template, expected table/checklist fields, and where to save the result.
- When a lab asks participants to compare or review something, include the comparison checklist or table directly in the lab.
- When a lab asks participants to capture evidence, name the evidence type: command output, diff summary, validation result, approval note, unresolved-risk list, or rollback decision.
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

If an action cannot be traced to a concrete artifact or evidence item, rewrite the step before shipping the lab.

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
