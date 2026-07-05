# Module 3: Advanced Content Refresh (Stage 7-8) — Hands-On Lab

## Overview

This lab extends the **Copilot Quest** Stage 5-6 Workflow Kit into the **Orchestration Package**. Exercises now mirror the Advanced module order: orchestration and trusted discovery, governed integration surfaces, then debugging, capability discovery, and deployment evidence.

- **Total time**: ~30 minutes
- **Prerequisites**:
  - Completion of Modules 1 and 2
  - Access to a project suitable for advanced experimentation
  - Permission to test approved integrations only

## Exercise 1: Stage 7 Orchestration and Discovery Plan

**⏱️ Time**: 10 min
**📋 Objective**: Choose between multiagents, subagents, and fleet-style execution while adding a trusted-discovery review step

**Warm-up (try this now)**:

```text
For a Copilot Quest scoreboard scenario, decide whether one agent, subagents, multiagents, or fleet-style execution is appropriate. Name the owner, boundaries, review evidence, and one merge-control rule.
```

Expected result: You have a safe orchestration choice before designing the full package.

1. Create a notes file named `copilot-quest-orchestration-package.md`, or add the template below to your existing workflow kit.

```markdown
# Copilot Quest Orchestration Package

### Page 1: Orchestration and Discovery Plan

### Scenario

- Feature or change:
- Why it is medium scope:

### Orchestration Choice

- Pattern selected: One agent / Subagents / Multiagents / Fleet-style parallel execution
- Why this pattern fits:
- Why the other patterns are not needed:

### Delegated Roles

| Role | Scope | Allowed tools | Expected output | Audit evidence |
| --- | --- | --- | --- | --- |
| | | | | |

### Fleet Independence Check

- Independent task lanes:
- Shared files, data, or behavior:
- Merge owner:
- Why parallelism saves net time or AICs:

### Trusted Discovery

- Resource reviewed:
- Source credibility:
- License or reuse check:
- Enterprise compatibility:
- Reuse decision:
```

2. Choose one medium-scope scenario that could realistically extend Copilot Quest, such as hints, daily puzzle mode, or a scoreboard, and fill the Scenario section.
3. Decide whether the work should use one agent, subagents, multiagents, or fleet-style parallel execution, then fill the Orchestration Choice section.
4. If you choose subagents or multiagents, fill one Delegated Roles row for each role with scoped prompts, minimal permissions, expected outputs, and audit evidence.
5. If you choose fleet-style execution, complete the Fleet Independence Check to prove the tasks are independent and explain why parallelism saves net time or AICs.
6. Add one quick-look resource from Brady Gaster's Squad or the Awesome Copilot skills catalog as discovery input, then complete the Trusted Discovery section before reuse.

**🛡️ Safety checkpoint**: Assign ownership for final merge decisions, preserve human approval before side-effecting actions, and treat curated resources as review inputs rather than automatic approvals.

### ✅ Success Criteria

- ✅ Chose one safe orchestration pattern with rationale
- ✅ Defined ownership, boundaries, output expectations, and merge controls
- ✅ Identified when fleet-style parallelism is or is not justified
- ✅ Added a resource-vetting step for Squad or the Awesome Copilot skills catalog
- ✅ Captured the scenario as an orchestration-package artifact

## Exercise 2: Stage 7 Integration Due-Diligence Matrix

**⏱️ Time**: 10 min
**📋 Objective**: Compare hooks, Extension Marketplace, MCP, API/CLI, and plugins for one bounded scenario

**Warm-up (try this now)**:

```text
For a bounded Copilot Quest task, compare hooks, Extension Marketplace, MCP, API/CLI, and plugins. Recommend the simplest safe integration surface based on permissions, observability, data scope, enterprise review, and rollback.
```

Expected result: You have a conceptual integration recommendation without configuring any real server, extension, or plugin.

1. Add this matrix to `copilot-quest-orchestration-package.md` as `Page 2: Integration Due-Diligence Matrix`.

```markdown
### Page 2: Integration Due-Diligence Matrix

### Bounded Task

- Task:

| Surface | Permissions | Data scope | Observability | Provenance or publisher trust | Validation path | Rollback option | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hooks | | | | | | | |
| Extension Marketplace | | | | | | | |
| MCP | Conceptual only: tool/context boundary and security review | | | | | | |
| API/CLI | | | | | | | |
| Plugins | | | | | | | |

### Recommendation

- Simplest safe surface:
- Why the other options add unnecessary risk or overhead:
- Required acceptance hook/checkpoint:
```

2. Pick one bounded task, such as fetching a word list, updating the scoreboard, or validating a generated answer, and fill the Bounded Task field.
3. Set up a safe draft Copilot/agent hook from the VS Code integrated terminal or any repository terminal. This creates `.github\hooks\copilot-quest-session.json` and writes a session-start log if hooks run in your Copilot CLI or cloud-agent environment.

```powershell
New-Item -ItemType Directory -Force -Path .github\hooks | Out-Null
@'
{
  "version": 1,
  "hooks": {
    "SessionStart": [
      {
        "type": "command",
        "bash": "mkdir -p logs && echo \"Copilot hook sessionStart $(date -Iseconds)\" >> logs/copilot-hooks.log",
        "powershell": "New-Item -ItemType Directory -Force -Path logs | Out-Null; Add-Content -Path logs/copilot-hooks.log -Value \"Copilot hook sessionStart $(Get-Date -Format o)\"",
        "cwd": ".",
        "timeoutSec": 10
      }
    ]
  }
}
'@ | Set-Content -Path .github\hooks\copilot-quest-session.json -Encoding utf8
```

4. Validate the hook configuration syntax before relying on it.

```powershell
Get-Content .github\hooks\copilot-quest-session.json | ConvertFrom-Json | Out-Null
```

5. Record the hook lifecycle event `SessionStart`, file path, validation result, and rollback command in the Hooks row. Use this rollback command if the hook is only a lab draft:

```powershell
Remove-Item .github\hooks\copilot-quest-session.json
```

6. Open the VS Code Extensions view from the Activity Bar or Command Palette command `Extensions: Focus on Extensions View`. Choose one extension related to your scenario, but do not install it unless your instructor or organization allows it. Record publisher, version, install or trust signals, permissions or telemetry questions, and disable/uninstall path in the Extension Marketplace row.
7. Keep MCP conceptual but find the VS Code surfaces. In the Extensions view, search `@mcp` to see MCP server entries without installing one. Open Command Palette and locate `MCP: Open User Configuration`, `MCP: Open Workspace Folder Configuration`, and `MCP: List Servers`. Record which configuration scope would fit the bounded task, what tools/resources/prompts a server would expose, what data boundary changes, and which approval is required. Do not configure a live MCP server in this lab.
8. Evaluate one deterministic API/CLI option. If GitHub CLI is approved in your environment, run this read-only command from the repository terminal and record the output shape:

```powershell
gh repo view --json name,visibility,defaultBranchRef
```

9. Evaluate plugins as supply-chain components. In VS Code Chat, select the Configure gear and open Agent Customizations > **Plugins** if your organization enables `chat.plugins.enabled`. In the Extensions view, look for **Agent Plugins - Installed** or use the `@agentPlugins @recommended` filter if available. Record whether plugin support is available, where plugin metadata or `plugin.json` would be reviewed, provenance or signing/source checks, versioning, rollout scope, telemetry/data-scope questions, included skills/agents/hooks/MCP servers, and rollback path before any enablement.
10. For each matrix row, document permissions, data scope, observability, provenance or publisher trust, validation path, rollback option, and a decision such as "use," "defer," or "do not use."
11. Choose the simplest safe surface and explain why the other options add unnecessary risk or overhead.
12. Add one enforceable hook/checkpoint your team would require before accepting changes.

**🛡️ Safety checkpoint**: Use only approved tools/endpoints, avoid sensitive data in prompts/logs, and document trust boundaries before enabling extensions, plugins, or MCP servers.

### ✅ Success Criteria

- ✅ Compared all five integration surfaces in the required order
- ✅ Created or evaluated a draft Copilot/agent hook configuration with validation and rollback evidence
- ✅ Included marketplace publisher trust and plugin supply-chain checks
- ✅ Described MCP as a governed concept without a server walkthrough
- ✅ Selected the simplest safe surface with rationale
- ✅ Defined one enforceable hook/checkpoint tied to acceptance or release approval

## Exercise 3: Stage 8 Capability Discovery and Debug Evidence

**⏱️ Time**: 10 min
**📋 Objective**: Produce a Stage 8 package that shows how to find VS Code or CLI debugging evidence, inspect advanced capability surfaces, and choose a deployment path

**Warm-up (try this now)**:

```text
For a surprising Copilot Quest agent result, list the first five evidence items you would inspect before rerunning: minimal prompt, context files, tool-call order, instruction layers, and permission or log evidence.
```

Expected result: You have a lightweight debug-evidence checklist before expanding the full decision package.

1. Add this final section to `copilot-quest-orchestration-package.md` as `Page 3: Capability Discovery and Debug Evidence`.

```markdown
### Page 3: Capability Discovery and Debug Evidence

### Minimal Repro

- Failed chat or agent behavior:
- Smallest repro prompt:
- Narrowed context:
- Tool-call order:
- Permission or instruction conflict to check:

### VS Code Agent Debug Evidence

- Debug surface opened: Agent Debug Log panel / Chat Debug View / Copilot CLI
- Timestamp or session marker:
- Load events reviewed:
- Tool or LLM request reviewed:
- Evidence captured:
- Snapshot or troubleshooting prompt:
- Persistence note:

### Slide Debugging Checklist

| Debugging capability | Evidence captured |
| --- | --- |
| Context composition | |
| Tool-call order | |
| Instruction conflicts | |
| Permission failures | |
| Loop dynamics | |

### Capability Discovery Evidence

| Surface | Where you found it | Evidence captured | Safe next step |
| --- | --- | --- | --- |
| Hooks | | | |
| Extension Marketplace | | | |
| MCP configuration boundary | | | |
| API/CLI | | | |
| Plugin metadata | | | |
| Package or deployment surface | | | |

### Deploy Checklist

- Capabilities:
- Permissions:
- Provenance:
- Tests:
- Version owner:
- Rollback:
- Support expectations:

### Packaging Decision

- Selected path: GitHub Repo / Marketplace / Agent Package Manager (APM)
- Audience:
- Governance fit:
- Why the other paths are not selected:
```

2. Simulate one failed chat or agent run and fill the Minimal Repro section with the smallest safe repro prompt that narrows context, tool-call order, permissions, or instruction conflicts.
3. If you use VS Code, open the Agent Debug Log panel for the current chat or agent session:

   - Open Command Palette with `Ctrl+Shift+P` or `F1`.
   - Run `Developer: Open Agent Debug Panel`.
   - Or open the overflow menu at the top of the Chat view and select **Show Agent Debug Logs**.
   - Run your smallest repro prompt in Chat or agent mode.
   - In the Logs view, record the timestamp or session marker and inspect the startup events: **Load Instructions**, **Load Agents**, **Load Hooks**, and **Load Skills**.
   - Select one tool-call row and record the input payload, returned output, and whether the order matches the expected workflow.
   - Select one LLM request row and record whether the context and instructions explain the behavior.
   - Open the Summary view from the session breadcrumb and capture model turns, tool calls, token count, errors, and total events.
   - Open the Agent Flow Chart if available and note whether subagents or repeated loops explain the behavior.

4. Open the Chat Debug View from the Chat view overflow menu by selecting **Show Chat Debug View**. Select one request and record the system prompt, user prompt, attached context, and complete tool invocation payloads that explain the result.
5. If the Agent Debug Log panel is open, ask Copilot about the actual session evidence with one of these prompts:

```text
#debugEventsSnapshot which customization files, skills, hooks, and agents were loaded for this session?
```

```text
/troubleshoot the agent made an unexpected tool call in the last response, why?
```

> **Note**: `/troubleshoot` requires the `github.copilot.chat.agentDebugLog.enabled` setting. Debug data is not persisted across VS Code sessions, so capture evidence before restarting VS Code.

6. If you use Copilot CLI instead of VS Code, capture the exact prompt, selected context files, tool or command output, error text, and a second run with narrowed context. Add those details to the VS Code Agent Debug Evidence section and label the source as `Copilot CLI`.
7. Fill the Slide Debugging Checklist by mapping your evidence to the debugging capabilities from the slides: context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics.
8. Fill the Capability Discovery Evidence table:

   - Hooks: `.github\hooks\copilot-quest-session.json`, validation output, and rollback command from Exercise 2
   - Extension Marketplace: VS Code Extensions view or `Extensions: Focus on Extensions View`
   - MCP configuration boundary: where MCP configuration would live for the learner's environment and what tools/context would be exposed
   - API/CLI: the read-only `gh repo view --json name,visibility,defaultBranchRef` command or another approved deterministic command
   - Plugin metadata: where provenance, version, rollout, telemetry/data scope, and rollback would be reviewed
   - Package or deployment surface: GitHub Repo, Marketplace, or Agent Package Manager (APM) documentation or internal approval path

9. Draft the Deploy Checklist for a custom agent package: capabilities, permissions, provenance, tests, version owner, rollback, and support expectations.
10. Choose one distribution or packaging path — GitHub Repo, Marketplace, or Agent Package Manager (APM) — and justify why it fits the audience and governance model.
11. Treat the result as the deployable capstone evidence for the full Copilot Quest build. Do not create a Day 2 event plan in this lab.

**🛡️ Safety checkpoint**: No deployment or demo without documented permissions, provenance checks, governance sign-off, and rollback plan.

### ✅ Success Criteria

- ✅ Produced a minimal debug protocol with narrowed context
- ✅ Captured VS Code Agent Debug Log, Chat Debug View, or Copilot CLI evidence before the session data expired
- ✅ Mapped evidence to context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics
- ✅ Found advanced capability surfaces in VS Code or CLI and recorded safe next steps
- ✅ Included GitHub Repo, Marketplace, or Agent Package Manager (APM) as the selected distribution or packaging pathway
- ✅ Produced a capstone artifact that closes the module sequence

*Hands-on lab for Module 3: Advanced Content Refresh (Stage 7-8) — GitHub Copilot Developer Training*
