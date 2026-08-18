---
schemaVersion: 1
kind: release-manifest
id: ghcp-dev-hack-leaderboard-2026-08-18b
title: GitHub Copilot Developer Hack release
status: approved
commit: f701f6f9e384f75671722aae51a48cf454dc6c03
createdAt: '2026-08-18T23:35:36.402Z'
approvedBy: Tammy McClellan
approvedAt: '2026-08-18T23:36:00.000Z'
workshops:
  - id: ghcp-dev-hack
    modules:
      - foundations
      - agentic
      - advanced
---

# GitHub Copilot Developer Hack release

## Approval

Supersedes `ghcp-dev-hack-leaderboard-2026-08-18`, which pinned `d67fee2c` and
could not promote. That content is unchanged and still approved; this manifest
re-pins it to `f701f6f9`, which adds only the two promotion fixes below.

The workshop owner reviewed the private test site built from `d67fee2c` and
approved promotion to production on 2026-08-18.

## What this release carries

- The Foundations mission rebuilt as a zero-starter, prompt-driven lab
- All three missions independently enterable, with a labeled starter case for
  participants who join at Agentic or Advanced
- Score submission that prefills the event id, alias, module, core points, and
  bonus points
- The published leaderboard rebuilt around the participant, in the workshop
  light palette, with a view-only standings link on the workshop page
- Leaderboard publication wired into this promotion, so the site and its board
  move together

## Why this manifest replaces the previous one

The first promotion attempt failed on a leading space in the dispatched
manifest path. The second failed because the exported-source check runs the
test suite with `WORKSHOP_ENVIRONMENT` set to production, and two leaderboard
tests asserted the default environment by reading `process.env` rather than
controlling it. Neither failure reached the publish steps, so production was
never modified. Both are fixed in `f701f6f9`, and release validation rejects any
file change after the pinned commit, so a new manifest was required.

## Local review evidence

- `pnpm typecheck`, `pnpm test`, and `pnpm validate` pass
- `pnpm test` also passes with `WORKSHOP_ENVIRONMENT=production`, which is the
  exact condition that failed in promotion
- Pull request #29 merged after all required checks passed and all three review
  threads were resolved
- The private test site deployed from `d67fee2c` and was reviewed by the
  workshop owner
- `https://tammym-demos.github.io/ghcp-dev-hack-leaderboard/` already returns
  200 with the light-theme board

## Known limitation carried into production

Enterprise Managed User accounts cannot create issues in repositories outside
their own enterprise, so those participants cannot post to the public board.
This does not block mission completion: scoring is local and honor-based, and
the mission already declares the leaderboard optional. Facilitator-entered
scores remain the fallback until a submission proxy is considered.
