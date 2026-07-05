# VS Code Learn Lab Accuracy QA Report

## Scope

Reviewed VS Code Learn pages for Agent Foundations, Agent Customizations, and Agent Extensions against core and C++ track labs for Foundations, Agentic, and Advanced.

Source references reviewed:

- <https://code.visualstudio.com/learn/foundations/approvals-autonomy-and-context-budget>
- <https://code.visualstudio.com/learn/foundations/reviewing-and-controlling-agent-changes>
- <https://code.visualstudio.com/learn/foundations/agent-sessions-and-where-agents-run>
- <https://code.visualstudio.com/learn/foundations/debugging-and-whats-happening-behind-the-scenes>
- <https://code.visualstudio.com/learn/customizations/2-instructions>
- <https://code.visualstudio.com/learn/customizations/3-skills>
- <https://code.visualstudio.com/learn/customizations/4-custom-agent>
- <https://code.visualstudio.com/learn/customizations/5-hooks>
- <https://code.visualstudio.com/learn/customizations/6-prompt-files>
- <https://code.visualstudio.com/learn/agents/1-using-tools-with-agents>
- <https://code.visualstudio.com/learn/agents/2-extending-agents-with-mcp-servers>
- <https://code.visualstudio.com/learn/agents/3-agent-plugins>
- <https://code.visualstudio.com/learn/agents/4-using-third-party-agents-in-vs-code>

## Current assessment

| Area | Status | Evidence |
|------|--------|----------|
| VS Code Chat tool control | Passing | Foundations labs now include **Configure Tools**, the `#` picker, and **Default Approvals** for beginner tasks. |
| Agent review controls | Passing | Foundations labs now point learners to files changed bar, inline diff, **Keep**, **Undo**, **Undo All**, **Restore Checkpoint**, and `/fork`. |
| Agent Customizations | Passing | Agentic core and C++ labs now direct learners to Chat Configure gear > Agent Customizations > Skills or Agents before creating repo-local artifacts. |
| Agent Sessions | Passing | Agentic core and C++ readiness labs now include Agent Sessions sidebar and agent/session type picker checks for Local, Copilot CLI/background, and Cloud. |
| Advanced MCP discovery | Passing | Advanced labs now keep MCP conceptual while showing Extensions search `@mcp`, `MCP: Open User Configuration`, `MCP: Open Workspace Folder Configuration`, and `MCP: List Servers`. |
| Advanced plugin discovery | Passing | Advanced labs now identify Agent Customizations > Plugins, `chat.plugins.enabled`, Extensions agent-plugin surfaces, `plugin.json`, included customizations, and rollback review. |
| Debug evidence | Passing | Advanced labs use Agent Debug Log, Chat Debug View, `#debugEventsSnapshot`, and `/troubleshoot` rather than generic Output-channel logging. |

## Findings

### Resolved: Labs named concepts without enough VS Code surface guidance

- **Evidence**: Foundations, Agentic, and Advanced labs now include explicit menu/command surfaces from VS Code Learn rather than only naming Ask/Plan/Agent, skills, agents, MCP, or plugins.
- **Impact**: Instructors can show the shared concept on slides while participants can follow exact VS Code Chat or CLI entry points in labs.
- **Recommendation**: Keep future track labs aligned to the VS Code Learn surface vocabulary and mark unavailable preview features as "not available in my environment" rather than blocking the exercise.

### Resolved: Advanced hook event casing and ecosystem discovery needed tightening

- **Evidence**: Advanced core and C++ hook examples now use the `SessionStart` lifecycle event label from VS Code Learn, and MCP/plugin rows include current discovery surfaces.
- **Impact**: Participants see a safer "find and inspect" flow for advanced surfaces without being asked to install unapproved MCP servers or plugins.
- **Recommendation**: During dry run, verify the target VS Code build exposes the same Chat gear, Agent Customizations, MCP, plugin, and debug menu labels.

## Recommended follow-up

- Add screenshots or instructor callouts only after confirming the exact VS Code build and Copilot extension channel used for delivery.

*QA report for VS Code Learn lab accuracy alignment*
