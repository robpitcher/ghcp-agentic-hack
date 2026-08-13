# Advanced Workshop Slide Manifest

Sources: `copilot-dev-advanced-workshop.md`, `product-update-brief.md`, and `content/missions/advanced/cross-cutting-change.md`

Expected slide count: **20**

| # | Minutes | Source marker | Slide type | Exact source title | Required contract |
|---:|---:|---|---|---|---|
| 1 | 1 | H1 | Cover | Module 3: Advanced — Workshop Guide | Frame accountable orchestration, governed integration, evaluation, recovery, and final acceptance. |
| 2 | 1 | `## Session Agenda` | Agenda | Session Agenda | Show the 60-minute route and separate 30-minute mission. |
| 3 | 0 | `## Copilot App: Guest Deep Dive` | Handoff | Copilot App: Guest Deep Dive | Event-neutral guest handoff; reuse the approved Foundations raster and resume at slide 4. |
| 4 | 3 | `Slide topic` | Role-and-return model | Multi-Agent Orchestration: Roles, Boundaries, and Merge Ownership | Teach only clear role, defined return, and one human merge owner; use three native role lanes returning evidence to one human merge gate, with no comparison matrix, reconciliation-cost scale, Squad framing, or detailed preview of later patterns. |
| 5 | 2 | `Slide topic` | Content | Awesome Copilot List | Treat discovery as input to provenance, license, data-scope, and enterprise review. |
| 6 | 3 | `Slide topic` | Content | Subagents | Preserve the scoped output contract; state that inspection evidence depends on the hosting surface. |
| 7 | 4 | `Slide topic` | CLI feature | Parallel Subagents with Copilot CLI /fleet | Scope `/fleet` and `/tasks` exactly to Copilot CLI; cover independent work, AIC/time tradeoff, and human merge ownership. |
| 8 | 4 | `Slide topic` | Demonstration | Worktrees for Parallel Agent Sessions | Teach isolation plus overlap, dependency, and compatibility proof before integration. |
| 9 | 3 | `Slide topic` | Content | Hooks | Teach deterministic guardrails, supported-surface boundaries, validation, and rollback evidence. |
| 10 | 3 | `Slide topic` | Content | Extension Marketplace | Teach publisher, permissions, telemetry, data access, enterprise fit, and disable/uninstall review. |
| 11 | 4 | `Slide topic` | Content | MCP (Model Context Protocol) | Teach tools, resources, and prompts as distinct capabilities behind governed server boundaries. |
| 12 | 3 | Approved Work IQ update | Governance | Work IQ via MCP: Governed Microsoft 365 Context | Show exactly three ideas—permission-aware workplace intelligence, the documented GitHub Copilot CLI remote-MCP path, and the retrieve-versus-present safety boundary—plus only the simple four-step native flow and small identity/permissions/tenant-policy label; keep supporting detail in presenter notes. |
| 13 | 3 | `Slide topic` | Content | API/CLI | Prefer approved, observable, least-privilege deterministic interfaces when they fit. |
| 14 | 2 | `Slide topic` | Content | Plugins | Teach provenance, included customizations, preview/availability, rollout, and rollback as supply-chain controls. |
| 15 | 5 | Approved accuracy correction | Governance | Govern Shared Skills and MCP Across Code Review and Cloud Agent | Keep the two consumers distinct and consolidate attribution, read-only code-review calls, autonomous tools, shared configuration, policy, and human acceptance. |
| 16 | 3 | Approved update | Demonstration | VS Code Agents Window as Debugging Evidence | Scope conversation/diff and running-subagent evidence to VS Code; retain public-preview and rollout caveats. |
| 17 | 5 | `Slide topic` | Method | Debugging Copilot Across Surfaces | Apply a portable evidence loop with explicit acceptance tests, checkpoints, stop criteria, and recovery or rollback. |
| 18 | 5 | Approved gap | Integration | Integrating Parallel Agent Work | Teach dependency ordering, independent validation, overlap/conflict detection, integration sequence, combined validation, rollback point, and final human acceptance. |
| 19 | 4 | `Slide topic` | Content | Preparing for Day 2 Hack | Require explicit success criteria and stop/fallback evidence without repeating the debugging method. |
| 20 | 2 | `### 🎯 MISSION` | Mission launch | Your Advanced Mission Starts Now | Launch the separate 30-minute mission and connect its evidence to orchestration, governed integration, evaluation/recovery, and final integration proof. |

## Timing arithmetic

- Opening and agenda: `1 + 1 = 2`
- Guest handoff: `0`
- Orchestration and isolation, slides 4-8: `3 + 2 + 3 + 4 + 4 = 16`
- Governed integration surfaces, slides 9-15: `3 + 3 + 4 + 3 + 3 + 2 + 5 = 23`
- Evidence, recovery, integration, and Day 2, slides 16-19: `3 + 5 + 5 + 4 = 17`
- Mission launch: `2`
- Teaching deck: `2 + 0 + 16 + 23 + 17 + 2 = 60 minutes`
- Separate declared mission: `30 minutes`

## Generation constraints

- The 20-row order, numbering, titles, and minute allocations above are authoritative.
- Slide 3 is time-neutral in repository metadata. Slide 20 launches, but does not consume time from, the separate 30-minute `cross-cutting-change` mission.
- Do not add inline exercises, extra slides, optional August weekly-release candidates, `/side`, `/btw`, `/rewind`, stacked pull requests, or hands-on code security.
- Preserve source prompts, commands, named features, availability and rollout caveats, safety meaning, and usage-optimization meaning.
- Treat `/fleet` only as a GitHub Copilot CLI interactive slash command and `/tasks` as its inspection path. Do not imply IDE-wide, VS Code Chat, inline-completion, or Copilot App support.
- Keep VS Code Agents window evidence VS Code-specific. Use surface-specific evidence rather than claiming parity across products.
- Keep Copilot code review and Copilot cloud agent distinct, and keep final acceptance and merge authority with a human.
- Reuse only the approved Foundations Copilot App raster and the module's currently declared assets; this contract does not authorize new media.
- Every generated slide requires exactly one 3-5 sentence source-mapped speaker-notes block.
