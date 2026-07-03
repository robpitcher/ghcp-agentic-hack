import { expect, test } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

interface LabCodeBlock {
  language: string
  text: string
}

interface LabModule {
  slug: string
  sourcePath: string
  codeBlocks: LabCodeBlock[]
}

const repoRoot = path.resolve(__dirname, '..')
const workshopsDir = path.join(repoRoot, 'workshops')
const normalize = (value: string) => value.replace(/\r\n/g, '\n').replace(/\n$/, '')
const terminalLanguages = new Set(['bash', 'console', 'powershell', 'ps1', 'shell', 'sh', 'zsh'])

function commandLines(block: LabCodeBlock): string[] {
  return block.text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
}

function discoverLabs(): LabModule[] {
  return readdirSync(workshopsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .filter(entry => !existsSync(path.join(workshopsDir, entry.name, '.draft')))
    .map(entry => {
      const workshopPath = path.join(workshopsDir, entry.name)
      const labFile = readdirSync(workshopPath).find(file => file.endsWith('-LAB.md'))
      if (!labFile) return undefined

      const sourcePath = path.join(workshopPath, labFile)
      const source = readFileSync(sourcePath, 'utf-8')
      const codeBlocks = Array.from(source.matchAll(/```([^\r\n]*)\r?\n([\s\S]*?)\r?\n```/g), match => ({
        language: match[1].trim(),
        text: normalize(match[2])
      }))

      return {
        slug: entry.name,
        sourcePath,
        codeBlocks
      }
    })
    .filter((lab): lab is LabModule => Boolean(lab))
    .sort((a, b) => a.slug.localeCompare(b.slug))
}

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

function runCli(command: string, args: string[], timeout = 15_000): string {
  if (process.platform === 'win32') {
    const quote = (value: string) => `'${value.replace(/'/g, "''")}'`
    const commandLine = `& ${quote(command)} ${args.map(quote).join(' ')}`
    return execFileSync('powershell', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-Command', commandLine], {
      encoding: 'utf-8',
      timeout
    })
  }

  return execFileSync(command, args, {
    encoding: 'utf-8',
    timeout
  })
}

function runCommandBlock(block: LabCodeBlock): string {
  const language = block.language.toLowerCase()
  const timeout = 30_000

  if (language === 'powershell' || language === 'ps1') {
    const executable = process.platform === 'win32' ? 'powershell' : 'pwsh'
    return execFileSync(executable, ['-NoProfile', '-NonInteractive', '-Command', block.text], {
      cwd: repoRoot,
      encoding: 'utf-8',
      timeout
    })
  }

  return execFileSync('bash', ['-euo', 'pipefail', '-c', block.text], {
    cwd: repoRoot,
    encoding: 'utf-8',
    timeout
  })
}

function runCopilotPrompt(prompt: string): string {
  return execFileSync('copilot', [
    '-p',
    prompt,
    '--allow-all-urls',
    '--deny-tool',
    'shell',
    '--deny-tool',
    'write',
    '--no-custom-instructions',
    '--no-color',
    '--silent'
  ], {
    cwd: repoRoot,
    encoding: 'utf-8',
    timeout: 120_000,
    maxBuffer: 1024 * 1024
  })
}

const labs = discoverLabs()

test.describe('participant lab execution smoke tests', () => {
  test('participant workstation has Copilot CLI and VS Code available', () => {
    const copilotCommand = commandPath('copilot')
    const codeCommand = commandPath('code')

    expect(copilotCommand, 'GitHub Copilot CLI must be installed before running participant lab tests').toBeDefined()
    expect(codeCommand, 'VS Code CLI must be installed before running participant lab tests').toBeDefined()

    const copilotVersion = runCli(copilotCommand!, ['--version'])
    const codeVersion = runCli(codeCommand!, ['--version'])

    expect(copilotVersion).toContain('GitHub Copilot CLI')
    expect(codeVersion.trim()).not.toEqual('')
  })

  test('VS Code has Copilot extensions installed for IDE lab steps', () => {
    const codeCommand = commandPath('code')
    expect(codeCommand, 'VS Code CLI must be installed before running participant lab tests').toBeDefined()

    const extensions = runCli(codeCommand!, ['--list-extensions'], 30_000)
      .toLowerCase()
      .split(/\r?\n/)
      .filter(Boolean)

    expect(extensions).toContain('github.copilot')
    expect(extensions).toContain('github.copilot-chat')
  })

  for (const lab of labs) {
    test(`${lab.slug} executable terminal blocks run`, () => {
      const terminalBlocks = lab.codeBlocks.filter(block => terminalLanguages.has(block.language.toLowerCase()))

      for (const [index, block] of terminalBlocks.entries()) {
        expect(() => runCommandBlock(block), `${lab.sourcePath} terminal command block ${index + 1}`).not.toThrow()
      }
    })

    test(`${lab.slug} Copilot CLI can answer lab prompt blocks`, () => {
      const promptBlocks = lab.codeBlocks.filter(block => block.language.toLowerCase() === 'text')

      for (const [index, block] of promptBlocks.entries()) {
        const lines = commandLines(block)
        if (lines.length === 1 && lines[0].startsWith('/')) {
          continue
        }

        const output = runCopilotPrompt(block.text)
        expect(output.trim(), `${lab.sourcePath} Copilot prompt block ${index + 1}`).not.toEqual('')
      }
    })
  }
})
