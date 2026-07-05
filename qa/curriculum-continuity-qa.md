# Curriculum Continuity QA Report

## End-to-end learner path

The current three-module sequence is coherent:

1. **Foundations** creates the Copilot Quest starter, introduces Copilot surfaces, guided workflows, usage optimization, model/context awareness, and custom-agent guardrails.
2. **Agentic** turns the starter into a reusable workflow kit with a repo-local skill, custom agent, tool-control handoffs, background/cloud readiness, `/init`, and instruction layering.
3. **Advanced** turns the workflow kit into an orchestration package with trusted discovery, subagents/multiagents/fleet decisions, governed integration surface selection, plugin due diligence, debugging, deployment, and Day 2 readiness.

## Automated coverage

`tests\curriculum-qa.spec.ts` checks deterministic content rules:

- Required workshop, LAB, QUIZ, presenter, and Slidev files exist.
- LAB exercises mirror workshop lab indicators.
- LAB exercise topics are represented in Slidev presenter notes so hands-on topics are traceable to the deck.
- Quiz questions use the expected answer and explanation comment format.
- Concepts taught in workshop files are practiced or tested in labs and quizzes.
- Presenter sections align to workshop sections.
- Slidev decks include substantive presenter notes and no note placeholders.
- Module artifact boundaries are preserved.
- QA reports and the reusable QA skill exist.

## Open judgment areas

- Automated tests do not prove that a live Copilot model will generate identical code for each learner.
- Slide image correctness still needs human review after conversion from PPTX.
- Enterprise environments may restrict usage views, model routing, extensions, plugins, or organization settings.
- Cross-platform command behavior should be reviewed when labs are run outside Windows.

## Release recommendation

Treat deterministic QA tests as the release gate for structure and coverage. Treat manual QA reports and the curriculum QA skill as the review gate for accuracy, ambiguity, and learner experience quality.

*Continuity QA report for GitHub Copilot Developer Training curriculum*
