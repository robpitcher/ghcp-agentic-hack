# Canva MCP Connection Lessons Learned

## Context

This workspace uses VS Code MCP configuration in `.vscode\mcp.json` for repository-scoped MCP servers. Canva provides a remote MCP endpoint at <https://mcp.canva.com/mcp>, and clients that need stdio can connect through the public `mcp-remote` npm package.

## Working workspace configuration

Use this shape for the Canva server entry:

```json
"Canva": {
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "--registry=https://registry.npmjs.org/",
    "mcp-remote@latest",
    "https://mcp.canva.com/mcp"
  ]
}
```

## Lessons learned

- Canva authentication may not prompt when the MCP server starts. The login or passkey flow can appear when the first Canva tool is invoked, and an existing browser/passkey session can complete the flow without a fresh password prompt.
- An `npm error code E401` during server startup can be an npm registry authentication problem, not a Canva authentication problem. In this workspace, `npm config get registry` returned a Microsoft package feed proxy, so `npx` failed before `mcp-remote` could start.
- Pinning only the Canva MCP command to the public npm registry with `--registry=https://registry.npmjs.org/` allowed `npx` to resolve `mcp-remote` without changing global or user npm settings.
- A successful connection initializes as `Canva MCP Server` and exposes tools such as `search-designs`, `get-design`, `export-design`, `generate-design`, `create-folder`, `list-brand-kits`, and editing/comment tools.
- Do not store Canva access tokens, refresh tokens, client secrets, or user account details in `.vscode\mcp.json`. Keep the workspace config limited to the server command and endpoint; OAuth/session state belongs outside the repository.

## Verification commands

Check non-secret npm registry settings:

```powershell
npm config get registry
npm config get always-auth
```

Confirm the public registry can resolve `mcp-remote`:

```powershell
npm view mcp-remote version --registry=https://registry.npmjs.org/
```

Verify `.vscode\mcp.json` is valid JSON:

```powershell
Get-Content '.vscode\mcp.json' -Raw | ConvertFrom-Json | Out-Null
```

## Troubleshooting flow

1. If VS Code logs show `Waiting for server to respond to initialize request`, keep reading until the first warning or error line appears.
2. If the log shows `npm error code E401`, fix npm registry/authentication for the package fetch before troubleshooting Canva OAuth.
3. If the server starts but no login prompt appears, invoke a Canva tool such as asking for the most recently edited design.
4. If a passkey or existing Canva browser session is present on the computer, expect the OAuth flow to reuse it.
5. If Canva tools are listed but content access fails, restart the MCP server and re-run the first Canva tool call to trigger OAuth again.

*Lessons learned note for Canva MCP workspace setup and troubleshooting*
