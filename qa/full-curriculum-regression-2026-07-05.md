# Full Curriculum Regression QA Report — 2026-07-05

## Scope

Reviewed shared-slide modules and skill-track labs for:

- `workshops\copilot-dev-foundations`
- `workshops\copilot-dev-agentic`
- `workshops\copilot-dev-advanced`
- core LAB and QUIZ files
- C++ / Hardware skill-track LAB and QUIZ files
- presenter notes
- Slidev presenter notes
- repository authoring and QA skills

Referenced current source documentation:

- VS Code Learn Agent Foundations, Agent Customizations, and Agent Extensions pages under <https://code.visualstudio.com/learn>
- VS Code debugging agent work: <https://code.visualstudio.com/learn/foundations/debugging-and-whats-happening-behind-the-scenes>
- GitHub Copilot CLI command reference: <https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference>
- GitHub Copilot CLI installation guide: <https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli>
- GitHub Copilot hooks concept page: <https://docs.github.com/en/copilot/concepts/agents/hooks>
- GitHub MCP in IDE documentation: <https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide>

## Validation

| Command | Status |
|---------|--------|
| `npm run test:labs` | Passing |
| `npm run test:curriculum-qa` | Passing |
| `npm run build:all` | Passing |

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Source-truth alignment | Passing with note | Curriculum QA confirms workshop lab indicators, quiz concepts, presenter notes, and Slidev notes align structurally. Advanced Day 2 remains a taught separate-event concept, while the lab no longer creates a Day 2 deliverable. |
| Step clarity | Passing | Labs now include explicit artifact paths, starter templates, copyable commands/prompts, expected evidence fields, and success criteria for core and C++ tracks. |
| Scenario alignment | Passing | Core labs use Copilot Quest; C++ track labs use embedded C++ scenarios and the C++ / Hardware Developer Skill. |
| VS Code Chat surface accuracy | Passing | Foundations, Agentic, and Advanced labs include Configure Tools, `#` picker, permissions, Agent Customizations, Agent Sessions, review controls, Agent Debug Log, and Chat Debug View where relevant. |
| GitHub/Copilot CLI accuracy | Passing | Copilot CLI usage aligns with command-reference entries such as `copilot`, `copilot help commands`, interactive slash commands, and read-only evidence capture. |
| Advanced integration accuracy | Passing | MCP remains conceptual with discovery surfaces; plugin work is inspect-only with `chat.plugins.enabled` caveat; hooks use `.github\hooks\*.json` and GitHub Docs hook type casing. |
| Quiz coverage | Passing | Canonical quizzes and C++ track quizzes render with expected format and test taught concepts. No Day 2 event-plan quiz deliverable remains. |
| Slide coverage | Passing with visual-review note | Slidev notes represent lab topics and no longer instruct learners to create a Day 2 plan in final Advanced lab notes. Generated slide images were not visually OCR-reviewed. |

## Findings

### Resolved consistency gap: Advanced final Slidev lab note contradicted the lab deliverable

- **Evidence**: `workshops\copilot-dev-advanced\copilot-dev-advanced.slidev.md` final lab presenter note previously said learners should produce a Day 2 plan; `workshops\copilot-dev-advanced\copilot-dev-advanced-LAB.md` Exercise 3 says not to create a Day 2 event plan.
- **Impact**: Instructor talk track could have sent learners toward a deliverable the lab intentionally removed.
- **Resolution**: Updated the Slidev presenter note to focus on Agent Debug Log, Chat Debug View, Copilot CLI evidence, capability discovery, packaging readiness, rollback expectations, and separate-event Day 2 context.

### Resolved accuracy gap: Hook lifecycle casing drifted from GitHub Copilot hooks docs

- **Evidence**: GitHub Copilot hooks docs use lowercase hook types such as `sessionStart` in `.github\hooks\*.json`. Advanced core and C++ labs briefly used `SessionStart`.
- **Impact**: Learners copying the hook JSON could create a configuration that does not match the documented GitHub Copilot hooks format for Copilot CLI/cloud-agent hooks.
- **Resolution**: Restored `sessionStart` in both Advanced core and C++ track hook examples and learner instructions.

### Improvement: Generated Advanced slide images still need human visual review

- **Evidence**: Slidev presenter notes and workshop/lab source are aligned, but PPTX-generated full-bleed slide images are static assets. This regression did not OCR or manually inspect image text.
- **Impact**: If a rendered slide image still visually says "Day 2 plan" or similar, learners could see stale visual language even though presenter notes and lab text are corrected.
- **Recommendation**: During dry run, visually inspect Advanced slides 16-17 and regenerate PPTX/Slidev images only if the image text contradicts the current lab boundary.

### Improvement: Preview-feature availability should remain a facilitator callout

- **Evidence**: VS Code Learn marks several surfaces as version-, preview-, setting-, or organization-dependent, including Agent Debug Log, `/troubleshoot`, plugins, MCP servers, cloud/third-party agents, and some session-type options.
- **Impact**: Participants in different tenants or VS Code channels may not see identical menu labels or enabled features.
- **Recommendation**: Keep "not available in my environment" branches in labs and add live-delivery screenshots only after confirming the target VS Code build, Copilot extension channel, and tenant policy.

## Recommended follow-up

- Visually inspect Advanced generated slide images 16-17 before delivery.
- During instructor dry run, confirm current VS Code menu labels for Agent Customizations, Agent Debug Log, Chat Debug View, MCP, Plugins, Agent Sessions, and Configure Tools.
- Keep deterministic QA plus this manual doc-alignment pass as the release gate before merging the skill-track PR.

*QA report for full GitHub Copilot developer-training curriculum regression*
