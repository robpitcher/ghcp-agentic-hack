---
schemaVersion: 1
kind: release-manifest
id: ghcp-dev-hack-session-readability-2026-08-14
title: GitHub Copilot Developer Hack release
status: approved
commit: 43c61e6aefafc7f0da0260551e04bbfdf033a82b
createdAt: '2026-08-14T18:14:07.963Z'
approvedBy: workshop owner
approvedAt: '2026-08-14T18:15:38.905Z'
workshops:
  - id: ghcp-dev-hack
    modules:
      - foundations
      - agentic
      - advanced
---

# GitHub Copilot Developer Hack release

This approved manifest selects Foundations, Agentic, Advanced, and their required public
dependencies from the exact release-prep commit above. Participant-facing
content matches reviewed private `main` commit
`3c513775d845dbc52f785dc6419904d67b26808f`; the later exact commit adds only
the durable local-release decision and preflight records.

The complete production-shaped local site was accepted by the workshop owner
on 2026-08-14. Private-main workflow run `31827143773` passed type checking,
tests, content validation, complete build, route verification, and private
Pages deployment before this manifest was prepared.

This release intentionally includes the temporary four-topic Foundations
agenda and the permanent Agentic slide 2 and slide 23 readability corrections.
The original Foundations agenda must be restored through a separately reviewed
release by 2026-08-18.

This exact manifest is approved for production promotion. Publication of this
release-prep branch, production workflow dispatch, public pull-request merge,
live verification, publication status, and rollback remain separate decisions.
