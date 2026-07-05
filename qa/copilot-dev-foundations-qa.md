# Module 1 Foundations QA Report

## Scope

Reviewed `workshops\copilot-dev-foundations\copilot-dev-foundations-workshop.md`, `copilot-dev-foundations-LAB.md`, `copilot-dev-foundations-QUIZ.md`, `presenter.md`, and `copilot-dev-foundations.slidev.md`.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing | Workshop lab indicators map to four LAB exercises in the same order. |
| Learner journey | Passing | The lab establishes the Copilot Quest starter and prepares handoff artifacts for Module 2. |
| Artifact boundary | Passing | Foundations drafts custom-agent guardrails without creating `.github\skills` or `.github\agents` files. Exercise 4 now uses a friendly broad-versus-narrow guardrail walkthrough before the Module 2 handoff. |
| Quiz coverage | Passing | Quiz questions cover surfaces, CLI safety, guided workflows, usage optimization, model routing, context rot, and delegation policy. |
| Slide/presenter support | Passing with manual review | Slidev notes are substantive; visual slide images still require human inspection after PPTX conversion. |

## QA notes

- Foundations currently teaches the setup and governance baseline more than executable application implementation. That matches the workshop source, but a stricter "build from scratch" outcome would require source content changes.
- The usage and model-routing exercise depends on learner access to VS Code usage views, Copilot CLI commands, and billing/settings pages. Keep fallback observation language available for restricted enterprise tenants.
- Foundations Exercise 4 is the pilot for a more demo-friendly lab style: concept introduction, "Watch first," "Now you try," concrete template, improvement prompt, safety checkpoint, and explicit next-module handoff.

## Recommended follow-up

- Keep Module 1 focused on starter creation, safety, and guardrails.
- Avoid moving concrete skill or custom-agent creation into this module; that belongs in Agentic.

*QA report for Module 1 Foundations — GitHub Copilot Developer Training*
