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
