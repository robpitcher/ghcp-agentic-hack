# Foundations Slide 15 Model Guide Contract

**Status:** Human-approved slide/module contract; routed to Slidev Deck Producer for implementation  
**Source review date:** 2026-08-05  
**Approval date:** 2026-08-05  
**Affected slide:** 15 of approved 24-slide contract  
**Exact title:** `Model Guide: Match the Workload`

## Contract boundaries

- Implement this contract within the approved 24-slide revision: remove the duplicate former slide 18 token summary, preserve slides 1–17, and renumber the former slides 19–25 as slides 18–24 without changing their titles or sequence.
- Use one stage-legible, full-width native table with exactly two columns in this order: `Use case` and `Representative model families`.
- Keep the six body rows short. The names are representative current picker options, not an exhaustive list, exclusive assignment, or permanent ranking.
- Do not add model descriptions, prices, badges, screenshots, media, or a third column.

## Proposed table text

| Use case | Representative model families |
|---|---|
| **Let Copilot choose** | Auto |
| **Fast, simple, or repetitive** | GPT-5.6 Luna · Claude Haiku 4.5 · Gemini 3.6 Flash |
| **Everyday coding and agent tasks** | GPT-5.6 Terra · Claude Sonnet 5 · Grok 4.5 |
| **Repository exploration and agentic coding** | GPT-5.4 mini · GPT-5.3-Codex |
| **Deep debugging and architecture** | GPT-5.6 Sol · GPT-5.5 · Gemini 3.1 Pro |
| **Long-horizon autonomous coding** | Claude Fable 5 |

**Exact native footer:** Check your current picker: models, versions, plan/surface availability, and AI-credit rates change; Auto routes by task/availability and may receive a paid-plan discount.

## Objective, source, and practice mapping

| Contract element | Learning purpose | Source boundary | Practice connection |
|---|---|---|---|
| Use-case-first organization | Support the objective “Interpret tokens, GitHub AI Credits, and model-routing tradeoffs for cost-aware daily execution.” | `model-comparison` supplies the current task areas; `compare-ai-models` supports comparing models through concrete developer tasks rather than a universal leaderboard. | In **Operation Follow the Credits**, participants start with one bounded task and compare two routing choices. |
| Auto | Give learners an availability-aware default without calling it universally cheapest. | `model-comparison` states that Auto uses model availability and task complexity and that paid plans qualify for a model-cost discount. | Participants record the routing choice actually exposed by their installed Copilot experience. |
| Five manual-choice rows | Make current model options scannable by workload while avoiding exclusivity. | `model-comparison` maps the exact representative names to the displayed task areas; `supported-models` confirms current names and release status. | Participants compare observed quality, latency, context, and cost, then write one conditional routing rule. |
| Footer | Require a live check before applying the guide. | `supported-models` states that availability depends on plan and surface and that models may be replaced or updated; Foundations verification FND-08/FND-10 requires current billing and Auto caveats. | Participants record installed version/current documentation and do not infer a universal rule from one run. |

## Presenter timing and note guidance

- **Target:** 75 seconds of instruction; no discussion or media time.
- Do not read every model name. Teach the left-column decision path, point to one representative family per relevant workload, and state that overlap is intentional.
- Proposed 4-sentence note contract: Start with the workload, not a permanent model leaderboard: Auto considers task complexity and availability, while manual selection should follow the task shape. The named families are representative current picker options and can fit more than one row. Verify the current picker, plan/surface availability, version, and AI-credit rate before choosing; paid plans may receive an Auto discount. Then transition to slide 16, where learners inspect usage evidence in the harness. `[Sources: GitHub Docs, Supported AI models in GitHub Copilot; AI model comparison; Comparing AI models using different tasks; Foundations content verification; reviewed 2026-08-05.]`
- The 75-second allocation remains inside the approved 20-minute economics-and-routing section and the module's 75-minute instruction budget.

## Source record

1. [Supported AI models in GitHub Copilot](https://docs.github.com/en/copilot/reference/ai-models/supported-models) — current names/release status; plan, surface, policy, and change caveats.
2. [AI model comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison) — task-area mappings, Auto behavior, and paid-plan discount caveat.
3. [Comparing AI models using different tasks](https://docs.github.com/en/copilot/tutorials/compare-ai-models) — use-case-first comparison method and non-deterministic output boundary.

The workshop owner approved this source-backed contract on 2026-08-05. Recheck all names and caveats immediately before implementation or publication; this approval does not authorize media generation, publication, or release.
