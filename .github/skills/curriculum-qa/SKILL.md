---
name: Curriculum QA Reviewer Skill
description: Use this skill to review GitHub Copilot workshop slides, labs, quizzes, presenter notes, and QA reports for source-truth alignment, concept completion, learner flow, and accuracy.
icon: 🧪
audience: Workshop authors, reviewers, and agent-based QA verifiers
order: 10
---

# Curriculum QA Reviewer Skill

Use this skill when reviewing GitHub Copilot Developer Training content for accuracy, completeness, and learner experience. The goal is to verify that workshop files, labs, quizzes, presenter notes, and Slidev decks stay aligned and that findings are saved as reusable markdown QA evidence.

## Source of Truth

Treat each module's `*-workshop.md` file as authoritative.

Compare companion files against the workshop source:

- `*-LAB.md` for hands-on "do" coverage and learner artifacts
- `*-QUIZ.md` for concept coverage, answer accuracy, and explanation clarity
- `presenter.md` for section-aligned facilitation prompts
- `*.slidev.md` for slide coverage and substantive presenter notes
- `qa\*.md` for durable findings and release-readiness notes

## QA Workflow

1. Identify the module folder and read the workshop source first.
2. Extract the workshop sections, lab indicators, safety moments, optimization tips, demos, and key concept list.
3. Compare LAB exercises against the workshop sequence and verify that every lab has objectives, safety checkpoints, success criteria, copyable prompts or commands, and expected learner artifacts.
4. Review LAB step clarity. Every instruction that asks participants to create, draft, fill, compare, save, run, or review something must include the exact artifact, path, starter template, table/checklist fields, command, expected evidence, or pass/fail criteria.
5. Trace every LAB success criterion back to a specific participant instruction, prompt, template field, saved artifact, or safety checkpoint. Flag criteria that are vague, instructor-only, not observable, or not actually requested by the lab steps.
6. Compare quiz questions against taught concepts. Verify that each question has four options, one answer comment, and an explanation that matches the workshop source.
7. Compare presenter notes against workshop sections and confirm that discussion prompts do not drift into workshop source files.
8. Compare Slidev presenter notes against the workshop and lab intent. Verify that every LAB exercise topic is represented in the slide deck through a lab transition, demo note, or presenter note that uses the same key concept language. Flag placeholders, generic notes, missing safety or optimization guidance, and visual-slide issues that need human inspection.
9. Review the cross-module learner journey from Foundations to Agentic to Advanced.
10. Save findings as markdown under `qa\`.

## LAB Step Clarity Review

Review labs as if the participant is new to the artifact they are creating. Do not assume they know what belongs in a skill, custom agent, matrix, readiness note, orchestration package, checklist, or QA artifact unless the lab provides a template or exact fields.

| Action verb | Required learner support |
|-------------|--------------------------|
| Create | Exact file or folder path, plus a command or clear VS Code Explorer instruction. |
| Draft | Starter prompt and expected output fields. |
| Fill | Table or checklist template with required columns or bullets. |
| Compare | Named sources and a review checklist. |
| Save | File name, location, and content template. |
| Run | Copyable command and expected evidence to capture. |
| Review | Specific pass/fail criteria, safety gate, or decision options. |

Flag a **consistency gap** when a step is understandable to an experienced instructor but leaves beginners to infer the artifact shape, storage location, required fields, or evidence. Flag it as **blocking** when the ambiguity prevents a learner from completing the exercise or when a success criterion claims an artifact exists but no step tells learners how to create it.

## LAB Success Criteria Traceability

For each LAB exercise, build a quick traceability check:

| Success criterion asks learner to... | Must be backed by... |
|--------------------------------------|--------------------|
| Create or save something | A step that names the artifact, file, note, checklist, or package location and provides a starter template when the artifact shape is not obvious. |
| Compare options | A step, table, example, or prompt that gives the options being compared and the criteria for comparison. |
| Improve or tighten output | A prompt or instruction that asks for a revision and states what should change. |
| Make a safety decision | A safety checkpoint or step that identifies the risk and review gate. |
| Prepare a next-module handoff | A step that names what carries forward and what must not be created yet. |

Flag a criterion as a **consistency gap** when it is true in spirit but not directly requested by the participant instructions. Flag it as **blocking** when it tells learners they succeeded at an action that the lab never asked them to perform, or when it conflicts with module artifact boundaries.

## LAB Topic to Slide Deck Traceability

For each LAB exercise, verify that the exercise topic is covered in the Slidev deck:

1. Extract the LAB exercise number and title.
2. Confirm the workshop source has a matching `### 🔬 LAB: Exercise N — <topic>` indicator.
3. Search the matching `*.slidev.md` presenter notes for the exercise topic's key terms.
4. Treat generated slide images as requiring human visual review; do not rely on image text unless OCR or manual inspection is explicitly performed.

Flag a **consistency gap** when a LAB exercise exists but the Slidev notes do not mention the lab topic, demo handoff, or learner action. Flag it as **blocking** when the slide deck teaches a different concept than the LAB asks participants to practice.

## Concept Completion Checklist

Verify the full curriculum path:

| Module | Learner should experience |
|--------|---------------------------|
| Foundations | New Copilot Quest starter, Copilot surfaces, safe CLI use, guided workflows, usage optimization, model/context routing, and delegation guardrails |
| Agentic | Strong prompts, instructions, memory boundaries, repo-local skill creation, custom agent creation, tool-control handoffs, background/cloud readiness, `/init`, and instruction layering |
| Advanced | Multiagents, subagents, fleet decisions, trusted discovery, hooks, Extension Marketplace, MCP as a governed concept, API/CLI, plugins, debugging, deployment, and Day 2 readiness |

## Artifact Boundary Checks

- Foundations may draft guardrails but must not create concrete `.github\skills` or `.github\agents` artifacts.
- Agentic is where learners create concrete repo-local `SKILL.md` and `.github\agents\*.agent.md` artifacts.
- Advanced should orchestrate and govern existing workflow artifacts instead of moving earlier creation steps into the advanced module.
- MCP should remain conceptual unless the workshop source explicitly adds a server-specific walkthrough.
- Plugins should include supply-chain and trust review before any enablement step.

## Finding Severity

| Severity | Use when |
|----------|----------|
| Blocking | A lab, quiz, slide, or presenter note contradicts the workshop source or sends learners through an unsafe or impossible step. |
| Consistency gap | The content is mostly correct but section order, labels, artifact names, or concept references drift across files. |
| Improvement | The content is accurate but could be clearer, more measurable, or easier for learners to complete. |

## Report Template

Save reports in `qa\` using this structure:

```markdown
# <Module or Curriculum> QA Report

## Scope

Reviewed <files>.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing / Gap / Blocking | <specific evidence> |
| Step clarity | Passing / Gap / Blocking | <specific learner action and supporting artifact/template/evidence> |

## Findings

### <Severity>: <finding title>

- **Evidence**: <file and section>
- **Impact**: <learner or instructor impact>
- **Recommendation**: <specific fix>

## Recommended follow-up

- <next action>

*QA report for <module>*
```

## Validation Commands

Run deterministic curriculum QA:

```powershell
npm run test:curriculum-qa
```

Run rendered lab usability checks:

```powershell
npm run test:labs
```

Run the site build after metadata or skill changes:

```powershell
npm run build:site
```

## Review Principles

- Do not invent GitHub features or require tools that the workshop source does not teach.
- Prefer evidence-backed findings over broad rewrite suggestions.
- Keep AI-dependent checks manual unless the repository explicitly opts into live Copilot validation.
- Distinguish structural test failures from subjective curriculum improvements.
- Preserve learner safety, human review gates, and enterprise policy variance.

*Repo-local skill for curriculum QA — GitHub Copilot Developer Training*
