# Presenter Notes — Module 3: Advanced — Workshop Guide

## Discussion Prompts by Section

### 1. Orchestration and Trusted Discovery (35 min)

- What work in your team is truly separable enough for multiagents, and what should remain a single focused workflow?
- Where should a coordinator or human owner retain final merge control when subagents or fleet-style execution are used?
- How would you vet Brady Gaster's Squad, the Awesome Copilot skills catalog, or another curated resource before enterprise adoption?
- What evidence proves that fleet-style parallelism saves net time or AICs after review and merge costs?

### 2. Governed Integration Surfaces (40 min)

- Which integration surface creates the largest trust-boundary change: hooks, Extension Marketplace, MCP, API/CLI, or plugins?
- What publisher, provenance, permission, data-scope, and rollback checks should be required before enabling extensions or plugins?
- When is API/CLI safer and simpler than MCP or a plugin for the same task?
- How can hooks enforce non-negotiable validation without turning every workflow into a heavy release process?
- Where should learners see each integration in practice: `.github/hooks/*.json`, VS Code Extensions view, MCP configuration location, a deterministic CLI command, or plugin metadata?
- What evidence proves an integration is safe enough to keep: validation output, publisher review, approval note, telemetry/data-scope decision, or rollback command?

### 3. Operations and Day 2 Readiness (35 min)

- What evidence do you inspect first when chat or agent behavior surprises you?
- How would you open the Agent Debug Log panel, inspect load events, tool calls, LLM requests, Summary, and Agent Flow Chart, then use Chat Debug View for raw request and response payloads?
- When would you use `#debugEventsSnapshot` or `/troubleshoot`, and what setting does `/troubleshoot` require?
- If a learner uses Copilot CLI instead of VS Code, what prompt, context, tool output, error text, and narrowed rerun evidence should they capture?
- Which debugging clue points to context composition, tool-call order, instruction conflict, permission failure, or loop dynamics?
- Which distribution or packaging path fits your first internal agent: GitHub Repo, Marketplace, or Agent Package Manager (APM)?
- What permission, provenance, and rollback gates must pass before sharing the agent beyond the build team?
- Which capability surfaces should learners be able to find without enabling anything: hooks, Extension Marketplace details, MCP configuration boundary, API/CLI option, plugin metadata, and package/deployment surface?

### Knowledge Check (5 min)

- Which required Advanced topic is least familiar to the room, and what governance question should teams answer before using it?
- Which Usage Optimization callout changes how learners will debug or package advanced workflows?

*Presenter note prompts extracted from workshop discussion point sections for Slidev talk track development.*
