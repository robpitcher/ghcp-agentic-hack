import { expect, test } from '@playwright/test'
import { randomUUID } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const repoRoot = path.resolve(__dirname, '..')
const qaDir = path.join(repoRoot, 'qa')
const runReportPath = path.join(qaDir, 'copilot-cli-session-playwright-run.md')
const shouldRunLiveScenario = process.env.RUN_COPILOT_CLI_SESSION_QA === '1'

function commandPath(command: string): string | undefined {
  try {
    const checker = process.platform === 'win32' ? 'where.exe' : 'which'
    const output = execFileSync(checker, [command], { encoding: 'utf-8' })
    const candidates = output
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean)

    if (process.platform === 'win32') {
      return candidates.find(candidate => /\.exe$/i.test(candidate))
        ?? candidates.find(candidate => /\.cmd$/i.test(candidate))
        ?? candidates.find(candidate => /\.bat$/i.test(candidate))
        ?? candidates.find(candidate => /\.ps1$/i.test(candidate))
        ?? candidates[0]
    }

    return candidates[0]
  } catch {
    return undefined
  }
}

function runCli(command: string, args: string[], cwd: string, timeout = 120_000): string {
  if (process.platform === 'win32') {
    const quote = (value: string) => `'${value.replace(/'/g, "''")}'`
    const commandLine = `& ${quote(command)} ${args.map(quote).join(' ')}`

    return execFileSync('powershell', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-Command', commandLine], {
      cwd,
      encoding: 'utf-8',
      timeout,
      maxBuffer: 1024 * 1024 * 4
    })
  }

  return execFileSync(command, args, {
    cwd,
    encoding: 'utf-8',
    timeout,
    maxBuffer: 1024 * 1024 * 4
  })
}

function writeRunReport(details: {
  workspace: string
  sessionId: string
  sessionSharePath: string
  initOutput: string
  copilotOutput: string
  instructionPath: string
  agentPath: string
  skillPath: string
  loopPath: string
}): void {
  mkdirSync(qaDir, { recursive: true })

  const markdown = `# Copilot CLI Session Playwright Run

## Summary

Playwright simulated a participant initializing a fresh Copilot CLI session for Copilot Quest, a Wordle-like game. The script opened VS Code for the temporary workspace, seeded a project plan before \`copilot init\`, initialized repository instructions, asked Copilot CLI to create a repo-local custom agent and skill, and requested a memory for the game scenario.

## Steps Playwright executed

1. Created an isolated temporary Git workspace at \`${details.workspace}\`.
2. Opened that workspace in VS Code with \`code --new-window\`.
3. Seeded \`README.md\` and \`PROJECT-PLAN.md\` so \`copilot init\` had project intent before generating instructions.
4. Initialized a new Git repository so \`copilot init\` could generate repository instructions.
5. Ran \`copilot init\` to create or update \`.github/copilot-instructions.md\`.
6. Asked Copilot to refine \`.github/copilot-instructions.md\` for the Copilot Quest project.
7. Started a named Copilot CLI prompt-mode session with session ID \`${details.sessionId}\`.
8. Enabled memory for prompt mode with \`--enable-memory\` and requested a repository memory for the Copilot Quest scenario.
9. Asked Copilot to create \`.github/agents/copilot-quest.agent.md\`.
10. Asked Copilot to create \`.github/skills/copilot-quest/SKILL.md\`.
11. Asked Copilot to create \`AGENTIC-LOOP.md\` with a simple observe-plan-act-validate-review loop.
12. Exported the Copilot CLI session transcript to \`${details.sessionSharePath}\`.
13. Verified that the generated instruction, agent, skill, and loop files exist and reference Copilot Quest as a Wordle-like game.

## Generated artifacts

| Artifact | Path |
|----------|------|
| Copilot instructions | \`${details.instructionPath}\` |
| Custom agent | \`${details.agentPath}\` |
| Repo-local skill | \`${details.skillPath}\` |
| Agentic loop | \`${details.loopPath}\` |
| Session transcript | \`${details.sessionSharePath}\` |

## Copilot init output

\`\`\`text
${details.initOutput.trim() || '(no output)'}
\`\`\`

## Copilot session output

\`\`\`text
${details.copilotOutput.trim() || '(no output)'}
\`\`\`

*Playwright run evidence for the Copilot CLI session simulation*
`

  writeFileSync(runReportPath, markdown)
}

test.describe('Copilot CLI new session simulation', () => {
  test.skip(
    !shouldRunLiveScenario,
    'Set RUN_COPILOT_CLI_SESSION_QA=1 to run this live scenario because it opens VS Code, calls Copilot CLI, and requests memory.'
  )

  test('initializes Copilot CLI and creates Copilot Quest agent, skill, and memory', () => {
    const copilotCommand = commandPath('copilot')
    const codeCommand = commandPath('code')

    expect(copilotCommand, 'GitHub Copilot CLI must be installed before running this live scenario').toBeDefined()
    expect(codeCommand, 'VS Code CLI must be installed before running this live scenario').toBeDefined()

    const workspace = mkdtempSync(path.join(os.tmpdir(), 'copilot-quest-cli-'))
    const sessionId = randomUUID()
    const sessionSharePath = path.join(workspace, 'copilot-quest-session.md')
    const instructionPath = path.join(workspace, '.github', 'copilot-instructions.md')
    const agentPath = path.join(workspace, '.github', 'agents', 'copilot-quest.agent.md')
    const skillPath = path.join(workspace, '.github', 'skills', 'copilot-quest', 'SKILL.md')
    const loopPath = path.join(workspace, 'AGENTIC-LOOP.md')

    writeFileSync(
      path.join(workspace, 'README.md'),
      [
        '# Copilot Quest',
        '',
        'Copilot Quest is a Wordle-like CLI word game used to practice agentic GitHub Copilot workflows.',
        ''
      ].join('\n')
    )
    writeFileSync(
      path.join(workspace, 'PROJECT-PLAN.md'),
      [
        '# Copilot Quest Project Plan',
        '',
        '## Goal',
        '',
        'Build Copilot Quest as a small Wordle-like CLI word game that demonstrates agentic GitHub Copilot workflows.',
        '',
        '## Initial scope',
        '',
        '- Five-letter secret word.',
        '- Six guesses per round.',
        '- Per-letter feedback for correct position, present in another position, and absent.',
        '- Input validation for guess length and allowed characters.',
        '- Tests for duplicate-letter scoring.',
        '- README instructions for running and testing the game.',
        '',
        '## Copilot setup expectations',
        '',
        '- Initialize repository instructions after this plan exists so Copilot can detect the intended project shape.',
        '- Create a repo-local custom agent for Copilot Quest planning, implementation, review, and testing.',
        '- Create a repo-local skill that tells Copilot how to behave for Copilot Quest work.',
        '- Request memory for the durable Copilot Quest scenario.',
        ''
      ].join('\n')
    )

    runCli('git', ['init'], workspace, 30_000)
    runCli(codeCommand!, ['--new-window', workspace], repoRoot, 30_000)

    const initOutput = runCli(copilotCommand!, ['init'], workspace, 180_000)
    const prompt = [
      'Set up repo-local Copilot assets for Copilot Quest, a Wordle-like CLI word game.',
      '',
      'Complete these tasks in this workspace only:',
      '1. Review README.md, PROJECT-PLAN.md, and the generated .github/copilot-instructions.md if it exists.',
      '2. Update .github/copilot-instructions.md with concise project instructions for Copilot Quest, including coding style, validation expectations, and the rule to use VS Code/Copilot CLI workflows for file creation and review.',
      '3. Create .github/agents/copilot-quest.agent.md as a custom agent for planning, implementing, reviewing, and testing Copilot Quest features.',
      '4. Create .github/skills/copilot-quest/SKILL.md as a repo-local skill that tells Copilot how to behave for Copilot Quest work.',
      '5. Create AGENTIC-LOOP.md documenting a simple loop: observe context, plan the next small change, act with tools, validate with tests or checks, review the diff, and repeat or stop.',
      '6. Use memory if available to remember exactly: "Copilot Quest is a Wordle-like word guessing game; repo-local Copilot agents and skills should use that scenario."',
      '7. Return a concise checklist that includes the exact phrase "Memory requested" so the Playwright script can capture evidence.',
      '',
      'The instructions, agent, skill, and loop should include activation criteria, safety/review gates, expected context to inspect, validation expectations, and stop conditions.'
    ].join('\n')

    const copilotOutput = runCli(
      copilotCommand!,
      [
        '--session-id',
        sessionId,
        '--name',
        'copilot-quest-cli-session-qa',
        '--enable-memory',
        '--allow-all',
        '--no-color',
        '--silent',
        `--share=${sessionSharePath}`,
        '-p',
        prompt
      ],
      workspace,
      300_000
    )

    expect(existsSync(instructionPath), 'Copilot should create or update the Copilot instructions file').toBe(true)
    expect(existsSync(agentPath), 'Copilot should create the Copilot Quest custom agent file').toBe(true)
    expect(existsSync(skillPath), 'Copilot should create the Copilot Quest skill file').toBe(true)
    expect(existsSync(loopPath), 'Copilot should create the Copilot Quest agentic loop file').toBe(true)
    expect(existsSync(sessionSharePath), 'Copilot should export a markdown session transcript').toBe(true)

    const instructions = readFileSync(instructionPath, 'utf-8').toLowerCase()
    const agent = readFileSync(agentPath, 'utf-8').toLowerCase()
    const skill = readFileSync(skillPath, 'utf-8').toLowerCase()
    const loop = readFileSync(loopPath, 'utf-8').toLowerCase()

    expect(instructions).toContain('copilot quest')
    expect(agent).toContain('copilot quest')
    expect(agent).toContain('wordle')
    expect(skill).toContain('copilot quest')
    expect(skill).toContain('wordle')
    expect(loop).toContain('observe')
    expect(loop).toContain('validate')
    expect(copilotOutput).toContain('Memory requested')

    writeRunReport({
      workspace,
      sessionId,
      sessionSharePath,
      initOutput,
      copilotOutput,
      instructionPath,
      agentPath,
      skillPath,
      loopPath
    })
  })
})
