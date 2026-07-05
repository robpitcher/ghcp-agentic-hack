# Curriculum QA Reports

This folder stores evidence-backed QA findings for the GitHub Copilot Developer Training curriculum.

## Source-of-truth rule

The `*-workshop.md` file in each module is authoritative. Labs, quizzes, presenter notes, and Slidev presenter notes must mirror the workshop section order, concept scope, artifact boundaries, and safety guidance.

## Report expectations

- Save module-specific findings as `qa\<module-slug>-qa.md`.
- Save cross-module learner-journey findings as `qa\curriculum-continuity-qa.md`.
- Classify findings as blocking inaccuracies, consistency gaps, or improvement opportunities.
- Cite the files and section names that support each finding.
- Keep reports factual and actionable; do not use reports as a substitute for fixing source content.

## Validation

Run deterministic QA checks with:

```powershell
npm run test:curriculum-qa
```

Run rendered lab usability checks with:

```powershell
npm run test:labs
```

*QA report index for GitHub Copilot Developer Training curriculum*
