# Module 3: Advanced Topics — C++ / Hardware Skill Track Lab

## Overview

Use this C++ / Hardware track with the shared Module 3 slides. The slides remain the source of truth; this lab teaches you to orchestrate, govern, debug, and package workflows that use the C++ / Hardware Developer Skill as the domain behavior layer.

Before starting, download or open the C++ / Hardware Developer Skill from the workshop page. In this module, treat it as the behavior contract that agents, subagents, hooks, and deployment plans must preserve.

## Exercise 1: Orchestration and Trusted Discovery for Firmware Work

**⏱️ Time**: 20 min

**📋 Objective**: Decide when multiagents, subagents, or fleet execution make sense for embedded C++ tasks.

1. Create a notes file named `embedded-cpp-orchestration-package.md`, or add the template below to your existing project notes.

```markdown
# Embedded C++ Orchestration Package

### Page 1: Orchestration and Trusted Discovery

### Work Lanes

| Lane | Independent? | Shared hardware or code risk | Validation evidence | Owner |
| --- | --- | --- | --- | --- |
| Driver review | Yes/No | | | |
| Unit-test scaffolding | Yes/No | | | |
| Static-analysis triage | Yes/No | | | |
| Documentation cleanup | Yes/No | | | |

### Orchestration Choice

- Selected pattern: Single-agent / Subagent / Multiagent / Fleet-style execution
- Why this pattern fits:
- Merge owner:
- Hardware-safety risk:

### Trusted Discovery

- External skill or example reviewed:
- Source credibility:
- License review:
- Enterprise compatibility:
- Reuse decision:

### Required Skill Behaviors

- Behavior every agent or subagent must preserve:
```

2. Fill the Work Lanes table with three independent C++ work lanes that could be separated safely.
3. Use this prompt to evaluate orchestration choices through the C++ skill behavior contract, then complete the Orchestration Choice section.

```text
Use the C++ / Hardware Developer Skill as the behavior contract. For an embedded C++ modernization effort, compare single-agent, subagent, multiagent, and fleet-style execution for these lanes: driver review, unit-test scaffolding, static-analysis triage, and documentation cleanup. Identify ownership, evidence, merge control, validation expectations, and hardware-safety risks.
```

4. Add one trusted discovery action for external skills or examples, including source credibility and license review.
5. Complete the Required Skill Behaviors section with the parts of the C++ skill every subagent must preserve.

**🛡️ Safety checkpoint**: Do not parallelize tasks that share hardware behavior, register semantics, compiler flags, or timing assumptions without a clear merge owner.

### ✅ Success Criteria

- ✅ Your plan identifies which C++ tasks are independent enough for parallel work.
- ✅ Your plan includes evidence and merge-control expectations.
- ✅ Your plan names the C++ skill behaviors that must survive delegation.
- ✅ Your trusted discovery note includes credibility, licensing, and enterprise-compatibility review.

## Exercise 2: Integration Due Diligence for Embedded Tooling

**⏱️ Time**: 20 min

**📋 Objective**: Build a due-diligence matrix for hooks, extensions, MCP as a concept, API/CLI, and plugins in C++ workflows.

1. Add this section to `embedded-cpp-orchestration-package.md` as `Page 2: Integration Due Diligence`.

```markdown
### Page 2: Integration Due Diligence

| Surface | Permissions | Telemetry | Data scope | Versioning | Rollback | Approval gate | Preserves skill safety gates? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hooks | | | | | | | |
| Extension Marketplace | | | | | | | |
| MCP | Conceptual only: tool/context boundary and security review | | | | | | |
| API/CLI | | | | | | | |
| Plugins | | | | | | | |

### Deterministic API/CLI Example

- Command or endpoint:
- Why it is safer than a custom plugin:
- Inputs:
- Outputs:
- Approval or logging requirement:
```

2. Create a safe draft Copilot/agent hook from the VS Code integrated terminal or any repository terminal. This creates `.github\hooks\embedded-cpp-session.json` and writes a session-start log if hooks run in your Copilot CLI or cloud-agent environment.

```powershell
New-Item -ItemType Directory -Force -Path .github\hooks | Out-Null
@'
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "mkdir -p logs && echo \"Embedded C++ hook sessionStart $(date -Iseconds)\" >> logs/embedded-cpp-hooks.log",
        "powershell": "New-Item -ItemType Directory -Force -Path logs | Out-Null; Add-Content -Path logs/embedded-cpp-hooks.log -Value \"Embedded C++ hook sessionStart $(Get-Date -Format o)\"",
        "cwd": ".",
        "timeoutSec": 10
      }
    ]
  }
}
'@ | Set-Content -Path .github\hooks\embedded-cpp-session.json -Encoding utf8
```

3. Validate the hook configuration syntax before relying on it.

```powershell
Get-Content .github\hooks\embedded-cpp-session.json | ConvertFrom-Json | Out-Null
```

4. Record the hook lifecycle event `sessionStart`, file path, validation result, and rollback command in the Hooks row. Use this rollback command if the hook is only a lab draft:

```powershell
Remove-Item .github\hooks\embedded-cpp-session.json
```

5. Open the VS Code Extensions view from the Activity Bar or Command Palette command `Extensions: Focus on Extensions View`. Choose one embedded, C++, or hardware-related extension to inspect, but do not install it unless your instructor or organization allows it. Record publisher, version, install or trust signals, permissions or telemetry questions, and disable/uninstall path in the Extension Marketplace row.
6. Keep MCP conceptual but find the VS Code surfaces. In the Extensions view, search `@mcp` to see MCP server entries without installing one. Open Command Palette and locate `MCP: Open User Configuration`, `MCP: Open Workspace Folder Configuration`, and `MCP: List Servers`. Record which configuration scope would fit embedded tooling, what tools/resources/prompts a server would expose, what hardware or source data boundary changes, and which approval is required. Do not configure a live MCP server in this lab.
7. Evaluate one deterministic API/CLI option. If GitHub CLI is approved in your environment, run this read-only command from the repository terminal and record the output shape:

```powershell
gh repo view --json name,visibility,defaultBranchRef
```

8. Evaluate plugins as supply-chain components. In VS Code Chat, select the Configure gear and open Agent Customizations > **Plugins** if your organization enables `chat.plugins.enabled`. In the Extensions view, look for **Agent Plugins - Installed** or use the `@agentPlugins @recommended` filter if available. Record whether plugin support is available, where plugin metadata or `plugin.json` would be reviewed, provenance or signing/source checks, versioning, rollout scope, telemetry/data-scope questions, included skills/agents/hooks/MCP servers, and rollback path before any enablement.
9. Use this prompt to fill the matrix.

```text
Use the C++ / Hardware Developer Skill as the domain behavior contract. Create a governance matrix for adding Copilot-adjacent tooling to an embedded C++ workflow. Compare hooks, marketplace extensions, MCP as a governed concept, deterministic API/CLI scripts, and plugins. Include permissions, telemetry, data scope, versioning, rollback, approval gates, and how each option preserves the skill's safety gates.
```

10. Add one deterministic API/CLI example that is safer than a custom plugin by completing the Deterministic API/CLI Example section.

**🛡️ Safety checkpoint**: Plugin and extension enablement can change trust, permissions, telemetry, and data-access boundaries; review provenance before enablement.

### ✅ Success Criteria

- ✅ Your matrix covers all five integration surfaces.
- ✅ Your hook row includes configuration path, lifecycle event, validation evidence, and rollback command.
- ✅ Your API/CLI example is deterministic, approved, observable, and scoped.
- ✅ Your matrix explains how integration choices preserve or enforce skill behavior.
- ✅ Your plugin or extension review includes provenance, versioning, rollout, and rollback.

## Exercise 3: Embedded Debug Evidence and Capability Discovery

**⏱️ Time**: 20 min

**📋 Objective**: Capture debug evidence, inspect advanced capability surfaces, and compare deployment paths for an embedded C++ Copilot workflow.

1. Add this section to `embedded-cpp-orchestration-package.md` as `Page 3: Embedded Debug Evidence and Capability Discovery`.

```markdown
### Page 3: Embedded Debug Evidence and Capability Discovery

### Minimal Repro Plan

- Surprising agent behavior:
- Narrowed files or context:
- Expected C++ skill behavior:
- Actual behavior:
- Tool-call evidence:
- Instruction layers to inspect:
- Permission checks:
- Validation commands:

### VS Code or CLI Debug Evidence

- Evidence source: Agent Debug Log panel / Chat Debug View / Copilot CLI
- Timestamp or session marker:
- Load events reviewed:
- Tool or LLM request reviewed:
- Evidence captured:
- Snapshot or troubleshooting prompt:
- Persistence note:

### Slide Debugging Checklist

| Debugging capability | Embedded C++ evidence captured |
| --- | --- |
| Context composition | |
| Tool-call order | |
| Instruction conflicts | |
| Permission failures | |
| Loop dynamics | |

### Embedded Capability Discovery

| Surface | Where you found it | Embedded evidence captured | Safe next step |
| --- | --- | --- | --- |
| Hooks | | | |
| Extension Marketplace | | | |
| MCP configuration boundary | | | |
| API/CLI | | | |
| Plugin metadata | | | |
| Package or deployment surface | | | |

### Deployment Path Comparison

| Path | Audience | Governance fit | Provenance review | Rollback plan | Decision |
| --- | --- | --- | --- | --- | --- |
| GitHub Repo | | | | | |
| Marketplace | | | | | |
| Agent Package Manager | | | | | |
```

2. Draft a minimal reproduction prompt for surprising agent behavior.

```text
Create a minimal repro plan for a Copilot agent that changed an embedded C++ helper unexpectedly. Include narrowed context, selected files, the C++ / Hardware Developer Skill behavior that should have applied, tool-call evidence, instruction layers, permission checks, and validation commands.
```

3. If you use VS Code, open the Agent Debug Log panel for the current chat or agent session:

   - Open Command Palette with `Ctrl+Shift+P` or `F1`.
   - Run `Developer: Open Agent Debug Panel`.
   - Or open the overflow menu at the top of the Chat view and select **Show Agent Debug Logs**.
   - Run your smallest repro prompt against a bounded embedded C++ helper or review scenario.
   - In the Logs view, record the timestamp or session marker and inspect startup events: **Load Instructions**, **Load Agents**, **Load Hooks**, and **Load Skills**.
   - Select one tool-call row and record the input payload, returned output, and whether the tool order could explain the C++ behavior.
   - Select one LLM request row and record whether the attached context and loaded C++ / Hardware Developer Skill explain the result.
   - Open the Summary view from the session breadcrumb and capture model turns, tool calls, token count, errors, and total events.
   - Open the Agent Flow Chart if available and note whether subagents or repeated loops created hardware-safety or review risk.

4. Open the Chat Debug View from the Chat view overflow menu by selecting **Show Chat Debug View**. Select one request and record the system prompt, user prompt, attached context, and complete tool invocation payloads that explain the embedded C++ result.
5. If the Agent Debug Log panel is open, ask Copilot about the actual session evidence with one of these prompts:

```text
#debugEventsSnapshot which instruction files, skills, hooks, and agents were loaded before the embedded C++ response?
```

```text
/troubleshoot why did the agent change the embedded C++ helper differently than the C++ / Hardware Developer Skill required?
```

> **Note**: `/troubleshoot` requires the `github.copilot.chat.agentDebugLog.enabled` setting. Debug data is not persisted across VS Code sessions, so capture evidence before restarting VS Code.

6. If you use Copilot CLI instead of VS Code, capture the exact prompt, selected context files, tool or command output, error text, and a second run with narrowed context. Add those details to the VS Code or CLI Debug Evidence section and label the source as `Copilot CLI`.
7. Fill the Slide Debugging Checklist by mapping your embedded evidence to the debugging capabilities from the slides: context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics.
8. Fill the Embedded Capability Discovery table:

   - Hooks: `.github\hooks\embedded-cpp-session.json`, validation output, and rollback command from Exercise 2
   - Extension Marketplace: VS Code Extensions view or `Extensions: Focus on Extensions View`, using an embedded, C++, or hardware-related extension for inspection only
   - MCP configuration boundary: where MCP configuration would live and what embedded tools/context a server would expose
   - API/CLI: the read-only `gh repo view --json name,visibility,defaultBranchRef` command or an approved deterministic build/static-analysis command
   - Plugin metadata: where provenance, version, rollout, telemetry/data scope, and rollback would be reviewed before enablement
   - Package or deployment surface: GitHub Repo, Marketplace, or Agent Package Manager (APM) documentation or internal approval path

9. Compare deployment paths for your future embedded C++ agent or skill by filling the Deployment Path Comparison table.
10. Record the validation evidence that must exist before sharing the reusable skill or agent: static analysis, simulator or hardware-safe validation, PR review, owner approval, and rollback plan. Do not create a Day 2 event plan in this lab.

```text
Create a validation evidence checklist for sharing an embedded C++ Copilot skill or agent. Include static analysis, simulator or hardware-safe validation, PR review, owner approval, support expectations, and rollback plan.
```

**🛡️ Safety checkpoint**: Deployment readiness requires evidence, provenance, permission review, validation, and rollback before a reusable agent or skill is shared broadly.

### ✅ Success Criteria

- ✅ Your minimal repro plan uses narrowed context and evidence from tools, permissions, and instructions.
- ✅ Your Agent Debug Log, Chat Debug View, or Copilot CLI evidence maps to context composition, tool-call order, instruction conflicts, permission failures, and loop dynamics.
- ✅ Your capability discovery table shows where to find hooks, marketplace extensions, MCP boundaries, API/CLI options, plugin metadata, and package/deployment surfaces.
- ✅ Your deployment comparison names GitHub Repo, Marketplace, and Agent Package Manager paths where relevant.
- ✅ Your deployment plan treats the skill as the reusable behavior package for Copilot.
- ✅ Your validation evidence checklist includes static analysis, review, owner approval, support expectations, and rollback steps.

*Hands-on lab for Module 3 Advanced Topics — C++ / Hardware skill track*
