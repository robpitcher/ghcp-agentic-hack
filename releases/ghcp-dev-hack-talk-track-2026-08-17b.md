---
schemaVersion: 1
kind: release-manifest
id: ghcp-dev-hack-talk-track-2026-08-17b
title: GitHub Copilot Developer Hack release
status: approved
commit: f375721559f69fa684f17d3ba723c6f4cdda13bd
createdAt: '2026-08-17T23:38:40.752Z'
approvedBy: Tammy McClellan
approvedAt: '2026-08-17T23:44:00.000Z'
workshops:
  - id: ghcp-dev-hack
    modules:
      - foundations
      - agentic
      - advanced
---

# GitHub Copilot Developer Hack release

Replaces voided manifest `ghcp-dev-hack-talk-track-2026-08-17`, which pinned
`95f2ca3` and could not be promoted because that commit carried a
high-severity CodeQL finding.

## Scope

Selects Foundations, Agentic, and Advanced from private `main` commit
`f375721559f69fa684f17d3ba723c6f4cdda13bd`, the merge commit of pull request
#27.

Content and delivery changes relative to the last released manifest
`ghcp-dev-hack-session-readability-2026-08-14`:

- Speaker notes for all 71 visible slides rewritten from written
  specification prose into natural spoken delivery. Only `Talk track`,
  `Transition`, and `Response guidance` changed; teaching substance,
  terminology, titles, verbatim prompts, and media references are unchanged.
- Foundations: the temporary four-stop agenda was reverted and the approved
  full five-section timed agenda restored. Visible slide count remains 24.
- Advanced: the time-neutral zero-minute Copilot App guest-handoff slide was
  removed and the contract renumbered from 20 to 19 slides. The teaching path
  still totals 60 minutes and the separate 30-minute mission is unchanged.
- Decks are now built with Slidev `--router-mode hash` so deck deep routes
  such as presenter mode, the overview, and direct slide links resolve on
  GitHub Pages instead of returning 404.
- The speaker-notes trailing-content check no longer strips `<style>` blocks
  with a single-pass regex. It now measures the content between style blocks
  and requires it to be whitespace.

No media was generated, promoted, or removed. Approved image count is
unchanged at 72.

## Why the previous manifest was voided

Manifest `ghcp-dev-hack-talk-track-2026-08-17` was approved and promoted, but
its public release pull request failed the `CodeQL` check with one new
high-severity alert: `js/incomplete-multi-character-sanitization` in
`packages/content-schema/src/loader.ts`.

The finding was introduced by the talk-track commit `50190d8`, which allowed
trailing scoped `<style>` blocks after the speaker-notes comment and removed
them with a single-pass `replace`. That strip can leave a `<style` fragment
behind, as in `<sty<style>x</style>le>`.

Practical risk was low, because the value was only length-tested to decide
whether to emit a validation message and was never rendered as HTML. The code
shape was still fragile, and the check is a required gate on the public
repository. Pull request #27 replaced the sanitizer with an allowlist
measurement and added regression tests for an accepted scoped style block, an
unterminated style tag, and interleaved style markup.

Because release validation rejects any content change after the pinned
commit, the earlier manifest could not be re-used and its public release pull
request was closed unmerged.

## Deck URL change

Deck deep links now carry a hash, for example
`workshops/ghcp-dev-hack/foundations/#/presenter/1`. The deck root URLs, the
portal routes, and `site-routes.json` are unchanged because those are real
directories. Any previously bookmarked path-style deep link should be
re-copied from the deployed site.

## Local validation evidence

Run on private `main` at commit `f375721559f69fa684f17d3ba723c6f4cdda13bd`
with a clean worktree on 2026-08-17:

- `pnpm typecheck` — passed
- `pnpm test` — passed, 44 content-schema, 38 content-cli, 3 foundry-providers
  test files
- `pnpm validate` — validated 1 workshop and 72 approved images
- `pnpm build` — complete site built with `GITHUB_PAGES_BASE=/`, matching the
  private Pages workflow

Routing was verified by serving `dist` with a Pages-accurate static server
that mirrors GitHub Pages behavior: real files only, no single-page-app
fallback, nested `404.html` and `_redirects` ignored. Under those rules the
previous path-style presenter route returned 404 and the hash route resolved
correctly.

A separately reported symptom of a blank current-slide pane in presenter view
was not caused by routing. It was Slidev's built-in `Screen Mirror` presenter
tab, which renders a blank capture pane until screen mirroring is started.
Switching that toggle back to `Slides` resolves it, and no repository change
was required. The routing fix remains warranted on its own evidence.

The private Pages deployment and the Code Quality workflow both succeeded for
`f375721`.

## Outstanding items for the approver

- Timing review: estimated spoken length is roughly 34 minutes against the
  75-minute Foundations budget, 33 against 75 for Agentic, and 26 against 60
  for Advanced. Every module lands inside budget.
- No previous manifest carries `verified` status, so this release has no
  formally verified rollback target. Consider verifying this manifest after
  deployment so a rollback target exists for the next release.
- Schema-backed lifecycle statuses are inconsistent: `workshop.md` and the
  Agentic module are `draft` while Foundations and Advanced are `review`.
  These do not affect the build or this manifest's selection, but they should
  be reconciled before or as part of marking content published.
- Code scanning alerts are not enforced on the private repository because
  Advanced Security is disabled there, so CodeQL findings first appear on the
  public promotion pull request. The `Analyze` job passing privately means the
  scan uploaded, not that it found nothing.

## Approval

Approved by Tammy McClellan on 2026-08-17 for promotion to the public
repository. The approver reviewed the private test Pages deployment,
including presenter rendering and deck deep routes, and accepted the
CodeQL remediation that voided the preceding manifest.

Remaining human gates: manual dispatch of the public promotion workflow from
`main`, and merge of the resulting release pull request in
`tammym-demos/ghcp-agentic-hack`, which alone deploys production. Status
should move to `verified` only after live route verification.
