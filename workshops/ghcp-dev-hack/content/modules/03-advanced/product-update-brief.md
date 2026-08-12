# Advanced Workflows Product Update Brief

This brief contains only product changes approved as source content for the Advanced module. Scan coverage, candidate updates, filtered entries, and approval history are maintained in `content/research/github-changelog-options.md`.

## Approved updates

### VS Code July 2026 agent workflows

- Status: incorporated
- Priority: high
- Changelog: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases
- Documentation:
  - https://code.visualstudio.com/updates/v1_131
  - https://code.visualstudio.com/docs/agents/concepts/agents#_subagents
- Availability: The release covers VS Code 1.127 through 1.131. The Agents window remains in public preview, and the agent host is progressively rolling out.
- Required coverage:
  - Demonstrate running-subagent visibility: model, elapsed time, and active tool call.
  - Demonstrate worktrees as an isolation boundary for parallel agent sessions.
  - Use the Agents window conversation and diff views as inspectable debugging evidence.
  - Distinguish peer chats, subagents, multiple isolated sessions, and fleet-style execution rather than treating all parallel activity as one pattern.
- Content placement: Orchestration, Subagents, Fleet, and Debugging Chat and Agents.
- Contract impact: Adds slides 6, 8, and 19 to the approved 23-slide manifest.
- Approval: Workshop owner, 2026-07-31
- Incorporated in: `slides.md` and `slide-manifest.md`, 2026-07-31

### Copilot code review skills and MCP generally available

- Status: incorporated
- Priority: high
- Changelog: https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available
- Documentation:
  - https://docs.github.com/copilot/concepts/agents/about-agent-skills
  - https://docs.github.com/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers
- Availability: Generally available to Copilot Pro, Pro+, Business, and Enterprise users.
- Required coverage:
  - Demonstrate Copilot code review as a governed consumer of repository agent skills and MCP tools.
  - Show attribution when a review comment uses a skill or MCP context.
  - Explain that MCP calls made by Copilot code review are read-only.
  - Explain that repository MCP configuration is shared with Copilot cloud agent and that GitHub and Playwright MCP servers are enabled by default unless policy changes their use.
  - Distinguish general MCP protocol capabilities from GitHub code review and cloud agent, which currently consume MCP tools rather than resources or prompts.
  - State that configured tools can run autonomously without an approval prompt; tool allowlisting, least privilege, provenance, and secrets handling are required governance controls.
- Content placement: Trusted Discovery, MCP, Plugins, Copilot Code Review, and Debugging Chat and Agents.
- Contract impact: Adds slides 15-17 to the approved 23-slide manifest.
- Approval: Workshop owner, 2026-07-31
- Incorporated in: `slides.md` and `slide-manifest.md`, 2026-07-31
