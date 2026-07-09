# Copilot CLI Session Playwright Script

## Purpose

The Playwright script in `tests\copilot-cli-session.spec.ts` simulates a participant starting a fresh Copilot CLI workflow for Copilot Quest, a Wordle-like game. It opens VS Code, seeds a project plan before initialization, initializes Copilot repository instructions, creates a custom agent, creates a repo-local skill, requests a Copilot memory, and exports run evidence.

## Why the script is opt-in

This scenario is intentionally gated because it uses live developer tools:

- Opens a VS Code window with `code --new-window`.
- Runs `copilot init`.
- Starts a named Copilot CLI prompt-mode session.
- Uses `--allow-all` so Copilot can create files in the isolated workspace.
- Uses `--enable-memory` so the session can request memory.
- May consume Copilot usage and depends on local authentication.

## Script creation steps

1. Added `tests\copilot-cli-session.spec.ts` as a Playwright test so it can reuse the repository's existing participant-test pattern.
2. Added command discovery for `copilot`, `code`, and `git` compatible with Windows and non-Windows runners.
3. Added an isolated temporary Git workspace seeded with a minimal Copilot Quest `README.md` and `PROJECT-PLAN.md`.
4. Added a VS Code launch step using `code --new-window <workspace>`.
5. Added a `copilot init` step after the plan exists so repository-level Copilot instructions can reflect the intended project shape.
6. Added a named Copilot CLI prompt-mode session with a generated session ID.
7. Added a prompt that asks Copilot to refine `.github\copilot-instructions.md` for the Copilot Quest project.
8. Added a prompt that asks Copilot to create `.github\agents\copilot-quest.agent.md`.
9. Added a prompt that asks Copilot to create `.github\skills\copilot-quest\SKILL.md`.
10. Added a prompt that asks Copilot to create `AGENTIC-LOOP.md` with a simple observe-plan-act-validate-review loop.
11. Added a memory request for the Copilot Quest scenario using `--enable-memory`.
12. Added a `--share=<path>` transcript export for the Copilot CLI session.
13. Added assertions that verify the instructions, agent, skill, loop, and transcript were created and reference Copilot Quest as a Wordle-like game.
14. Added a runtime markdown report export to `qa\copilot-cli-session-playwright-run.md`.
15. Added the npm script `test:copilot-cli-session` for discoverability.

## Run command

Run from the repository root in PowerShell:

```powershell
$env:RUN_COPILOT_CLI_SESSION_QA = '1'
npm run test:copilot-cli-session
Remove-Item Env:\RUN_COPILOT_CLI_SESSION_QA
```

Without `RUN_COPILOT_CLI_SESSION_QA=1`, Playwright skips the scenario and performs no live Copilot or VS Code actions.

## Expected evidence

After a successful run, inspect:

| Evidence | Location |
|----------|----------|
| Playwright runtime report | `qa\copilot-cli-session-playwright-run.md` |
| Copilot CLI transcript | Temporary workspace path listed in the runtime report |
| Copilot instructions | `.github\copilot-instructions.md` inside the temporary workspace |
| Custom agent | `.github\agents\copilot-quest.agent.md` inside the temporary workspace |
| Repo-local skill | `.github\skills\copilot-quest\SKILL.md` inside the temporary workspace |
| Agentic loop | `AGENTIC-LOOP.md` inside the temporary workspace |

## Pass criteria

- VS Code opens the temporary Copilot Quest workspace.
- `PROJECT-PLAN.md` exists before `copilot init` runs.
- `copilot init` completes successfully.
- The Copilot instructions file exists and references Copilot Quest.
- The Copilot CLI session transcript is exported.
- The custom agent file exists and references Copilot Quest and Wordle-like gameplay.
- The repo-local skill file exists and references Copilot Quest and Wordle-like gameplay.
- The agentic loop file exists and includes validation and review steps.
- The Copilot output includes the phrase `Memory requested`.

*QA documentation for the Copilot CLI session Playwright script*
