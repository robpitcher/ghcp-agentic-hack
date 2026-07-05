# Advanced Capability Discovery Refocus QA Report

## Scope

Reviewed Advanced core lab, C++ / Hardware skill-track lab, workshop source, presenter prompts, quizzes, repo instructions, lab-track author skill, and curriculum QA skill.

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| Day 2 lab boundary | Passing | `copilot-dev-advanced-LAB.md` and `labs\cpp-hardware-LAB.md` now explicitly say not to create a Day 2 event plan in Exercise 3. |
| Debug evidence walkthrough | Passing | Core and C++ Exercise 3 walk learners through the VS Code Agent Debug Log panel, Chat Debug View, `#debugEventsSnapshot`, `/troubleshoot`, minimal repro evidence, and Copilot CLI fallback evidence. |
| Slide-debugging concept coverage | Passing | Exercise 3 maps learner evidence to context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics. |
| Capability discovery | Passing | Exercise 3 requires learners to find hooks, Extension Marketplace details, MCP configuration boundaries, API/CLI options, plugin metadata, and package/deployment surfaces. |
| Standards alignment | Passing | `.github\copilot-instructions.md`, `.github\skills\lab-track-author\SKILL.md`, and `.github\skills\curriculum-qa\SKILL.md` now state that Advanced labs and quizzes should not create Day 2 event-plan deliverables. |

## Findings

### Resolved: Day 2 Hack Plan treated as lab deliverable

- **Evidence**: Exercise 3 in both Advanced lab tracks no longer asks learners to produce a Day 2 Hack Plan or Day 2 readiness checklist.
- **Impact**: Learners use built-in lab time to practice advanced capability discovery and debugging instead of preparing a separate event.
- **Recommendation**: Keep Day 2 as separate-event context only; future skill tracks should follow the capability-discovery and evidence-capture pattern.

### Resolved: Debugging surfaces were too implicit

- **Evidence**: Exercise 3 now names `Developer: Open Agent Debug Panel`, **Show Agent Debug Logs**, Logs view load events, tool-call and LLM request details, Summary, Agent Flow Chart, **Show Chat Debug View**, `#debugEventsSnapshot`, `/troubleshoot`, and Copilot CLI fallback evidence. This aligns with the VS Code debugging guidance at <https://code.visualstudio.com/learn/foundations/debugging-and-whats-happening-behind-the-scenes>.
- **Impact**: Participants can find and inspect debugging capabilities even when their instructor does not know a specific technology stack.
- **Recommendation**: Validate that the target VS Code build exposes Agent Debug Log and Chat Debug View before live delivery, and remind learners that debug data is not persisted across VS Code sessions.

## Recommended follow-up

- During instructor dry run, verify the current VS Code Chat overflow menu labels, the `Developer: Open Agent Debug Panel` command, the `github.copilot.chat.agentDebugLog.enabled` setting for `/troubleshoot`, and the Chat Debug View entry point.

*QA report for Advanced capability discovery refocus*
