import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

export interface ModuleMeta {
  folder: string
  label: string
  desc: string
  icon: string
  skillTracks?: SkillTrackMeta[]
}

export interface SkillTrackMeta {
  slug: string
  label: string
  description: string
  icon: string
  skillSlug?: string
  audience?: string
}

export interface AgendaItem {
  time: string
  duration: string
  activity: string
  topics?: string[]
}

export interface AgendaDay {
  day: string
  subtitle: string
  items: AgendaItem[]
}

export interface WorkshopMeta {
  label: string
  desc: string
  icon: string
  modules?: ModuleMeta[]
  prerequisites?: string[]
  agenda?: AgendaDay[]
}

export interface TechnologySkill {
  slug: string
  name: string
  description: string
  icon: string
  audience?: string
  order: number
  sourcePath: string
  downloadFileName: string
}

export interface ModuleSkillTrack extends SkillTrackMeta {
  labPath?: string
  quizPath?: string
  skill?: TechnologySkill
}

export const workshopMeta: Record<string, WorkshopMeta> = {
  'copilot-dev-training': {
    label: 'GitHub Copilot Dev Hack',
    desc: 'GitHub Copilot Developer Training — foundations, agentic patterns, advanced operations, and optional technology skills.',
    icon: '🎓',
    modules: [
      {
        folder: 'copilot-dev-foundations',
        label: 'Module 1: Foundations',
        desc: 'Copilot surfaces, VS Code chat & CLI, modes, tokens & AIC billing, model routing, context windows, autonomy & custom agents',
        icon: '🎓',
        skillTracks: [
          { slug: 'general', label: 'General / Core', description: 'Use the baseline module lab and quiz without technology-specific examples.', icon: '🎓' },
          { slug: 'cpp-hardware', label: 'C++ / Hardware', description: 'Embedded C++ examples with build context, code review, and safety gates.', icon: '🔧', skillSlug: 'cpp-hardware', audience: 'Embedded C++' }
        ]
      },
      {
        folder: 'copilot-dev-agentic',
        label: 'Module 2: Agentic Patterns',
        desc: 'Instructions & memory, strong prompts, agents & skills, agentic loops, tools, background & cloud agents, /init, instruction layering',
        icon: '🤖',
        skillTracks: [
          { slug: 'general', label: 'General / Core', description: 'Use the baseline module lab and quiz without technology-specific examples.', icon: '🎓' },
          { slug: 'cpp-hardware', label: 'C++ / Hardware', description: 'Agentic prompts, skills, and handoffs for embedded C++ work.', icon: '🔧', skillSlug: 'cpp-hardware', audience: 'Embedded C++' }
        ]
      },
      {
        folder: 'copilot-dev-advanced',
        label: 'Module 3: Advanced Topics',
        desc: 'Multiagents & Squad, subagents & fleet, hooks, MCP, APIs/CLI & plugins, extension marketplace, debugging & deploying agents',
        icon: '🔬',
        skillTracks: [
          { slug: 'general', label: 'General / Core', description: 'Use the baseline module lab and quiz without technology-specific examples.', icon: '🎓' },
          { slug: 'cpp-hardware', label: 'C++ / Hardware', description: 'Advanced orchestration and governance for firmware workflows.', icon: '🔧', skillSlug: 'cpp-hardware', audience: 'Embedded C++' }
        ]
      }
    ],
    prerequisites: [
      'VS Code — latest stable version installed',
      'GitHub Copilot extension — installed and signed in',
      'GitHub Copilot Chat extension — installed',
      'GitHub account with Copilot access (Individual, Business, or Enterprise)',
      'GitHub CLI (gh) — installed and authenticated (run gh --version to verify)',
      'Local admin rights — ability to install extensions, CLI tools, and plugins',
      'A local project — any codebase open in VS Code (multi-file project preferred)',
      'Internet access — required for Copilot API calls'
    ],
    agenda: [
      {
        day: 'Day 1 — Modules & Labs',
        subtitle: '9:00 AM – 5:00 PM',
        items: [
          { time: '9:00 – 9:30', duration: '30 min', activity: 'Welcome & Kickoff' },
          { time: '9:30 – 11:30', duration: '120 min', activity: 'Module 1: Foundations (presentation + lab) — Speakers 1 & 2', topics: ['Foundations baseline: surfaces, chat, CLI, and enterprise trust', 'Guided workflows: inline assistance and built-in Copilot experiences', 'Tokenomics, GitHub AI Credits, usage visibility, and model routing', 'Context windows, autonomy spectrum, and custom agents'] },
          { time: '11:30 – 11:45', duration: '15 min', activity: '☕ Break' },
          { time: '11:45 – 1:40', duration: '115 min', activity: 'Module 2: Agentic Patterns (presentation + lab) — Speakers 3 & 4', topics: ['Instructions, memory, context hierarchy, and strong prompts', 'Agents, skills, and the Ask/Plan/Agent decision matrix', 'Agentic loops and tool control points', 'Background/cloud agents, /init, instruction layering, and optimization controls'] },
          { time: '1:40 – 2:25', duration: '45 min', activity: '🍽️ Lunch' },
          { time: '2:25 – 3:55', duration: '90 min', activity: 'Module 3: Advanced Topics (presentation + lab) — Speakers 5 & 6', topics: ['Orchestration and trusted discovery: multiagents, Squad, Awesome Copilot List, subagents, and fleet', 'Governed integration surfaces: hooks, Extension Marketplace, MCP, API/CLI, and plugins', 'Operations and Day 2 readiness: debugging, deployment paths, and hack preparation'] },
          { time: '3:55 – 4:10', duration: '15 min', activity: '☕ Break' },
          { time: '4:10 – 5:00', duration: '50 min', activity: 'Open Lab / Hack Prep' }
        ]
      },
      {
        day: 'Day 2 — Hack Day',
        subtitle: '9:00 AM – 5:00 PM',
        items: [
          { time: '9:00 – 9:15', duration: '15 min', activity: 'Day 2 Kickoff & Team Formation' },
          { time: '9:15 – 12:00', duration: '165 min', activity: '🚀 Hack — Build with Copilot' },
          { time: '12:00 – 12:45', duration: '45 min', activity: '🍽️ Lunch' },
          { time: '12:45 – 3:00', duration: '135 min', activity: '🚀 Hack — Continue Building' },
          { time: '3:00 – 4:30', duration: '90 min', activity: '🎤 Project Readouts' },
          { time: '4:30 – 5:00', duration: '30 min', activity: 'Wrap-up & Next Steps' }
        ]
      }
    ]
  },
  'copilot-optimization': {
    label: 'Copilot Usage Optimization',
    desc: 'A focused 60-minute session on getting the most quality per credit — tokenomics, model routing, prompt and scope discipline, agentic efficiency, and sustained measurement.',
    icon: '⚡',
    prerequisites: [
      'VS Code — latest stable version installed',
      'GitHub Copilot extension — installed and signed in',
      'GitHub Copilot Chat extension — installed',
      'GitHub account with Copilot access (Individual, Business, or Enterprise)',
      'GitHub CLI (gh) — installed and authenticated (run gh --version to verify)',
      'Access to Copilot usage and billing views — to inspect AIC and token usage',
      'A local multi-file project — open in VS Code for scoping demos',
      'Internet access — required for Copilot API calls',
      'Skill: Copilot interaction fluency — Ask/Edit/Agent modes and context references (#file, #selection); Foundations module or equivalent',
      'Skill: Prompt-writing discipline — scoped prompts with explicit constraints, stop conditions, and a clear definition of done',
      'Skill: Code review judgment — able to read and critically review AI-generated diffs and stay accountable for what merges',
      'Skill: Token & context mental model — understands how prompt, output, and cached tokens drive cost and quality',
      'Skill: Model-selection awareness — can judge whether a task needs a fast model or a reasoning model',
      'Skill: Basic agentic experience — has delegated a multi-step task and understands why loops need boundaries and stop conditions',
      'Skill: Instruction-file familiarity — can author repository instruction files to encode conventions instead of re-prompting',
      'Skill: Telemetry literacy — can read session and monthly usage views to spot broad prompts and repeated retries'
    ],
    agenda: [
      {
        day: 'Single Session — 60 minutes',
        subtitle: 'Presentation',
        items: [
          { time: '0:00 – 0:08', duration: '8 min', activity: '1. Why optimization matters: the cost and quality model', topics: ['Usage-based billing makes workflow choices cost decisions', 'Tokens as the unit of cost and quality', 'The AIC consumption model'] },
          { time: '0:08 – 0:20', duration: '12 min', activity: '2. Tokenomics and context economics', topics: ['Context window anatomy and context rot', 'Front-load context once', 'Encode conventions in instructions'] },
          { time: '0:20 – 0:32', duration: '12 min', activity: '3. Model routing and the biggest cost levers', topics: ['Match model capability to task complexity', 'Auto mode: 10% discount + cache protection', 'Configurable reasoning and lighter models'] },
          { time: '0:32 – 0:44', duration: '12 min', activity: '4. Prompt and scope discipline', topics: ['Scoped vs. broad prompts', 'Well-scoped skills and acceptance gates', 'Minimal repro prompts and lock scope early'] },
          { time: '0:44 – 0:54', duration: '10 min', activity: '5. Agentic efficiency', topics: ['Avoid over-delegation and unnecessary orchestration', 'Bounded loops and scoped subagents', 'Async/cloud only when justified'] },
          { time: '0:54 – 1:00', duration: '6 min', activity: '6. Measure and sustain', topics: ['Usage visibility and reviews', '/chronicle cost-savings loop', 'Instructions vs. memory for durable reuse'] }
        ]
      }
    ]
  }
}

export function moduleFoldersFromMeta(): Set<string> {
  const moduleFolders = new Set<string>()
  for (const meta of Object.values(workshopMeta)) {
    for (const module of meta.modules ?? []) {
      moduleFolders.add(module.folder)
    }
  }
  return moduleFolders
}

export function discoverWorkshopSkills(workshopsDir: string, workshopName: string): TechnologySkill[] {
  const skillsDir = resolve(workshopsDir, workshopName, 'skills')
  if (!existsSync(skillsDir)) return []

  return readdirSync(skillsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const sourcePath = resolve(skillsDir, entry.name, 'SKILL.md')
      if (!existsSync(sourcePath)) return undefined

      const content = readFileSync(sourcePath, 'utf-8')
      const parsed = parseSkillMarkdown(content, entry.name)
      return {
        ...parsed,
        slug: entry.name,
        sourcePath,
        downloadFileName: `${entry.name}-SKILL.md`
      }
    })
    .filter((skill): skill is TechnologySkill => Boolean(skill))
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
}

export function moduleMetaByFolder(folder: string): ModuleMeta | undefined {
  for (const meta of Object.values(workshopMeta)) {
    const module = meta.modules?.find(candidate => candidate.folder === folder)
    if (module) return module
  }

  return undefined
}

export function parentWorkshopForModule(folder: string): string | undefined {
  for (const [workshopName, meta] of Object.entries(workshopMeta)) {
    if (meta.modules?.some(module => module.folder === folder)) return workshopName
  }

  return undefined
}

export function resolveModuleSkillTracks(workshopsDir: string, moduleFolder: string): ModuleSkillTrack[] {
  const module = moduleMetaByFolder(moduleFolder)
  if (!module?.skillTracks) return []

  const moduleDir = resolve(workshopsDir, moduleFolder)
  const parentWorkshop = parentWorkshopForModule(moduleFolder)
  const parentSkills = parentWorkshop ? discoverWorkshopSkills(workshopsDir, parentWorkshop) : []

  return module.skillTracks.map(track => {
    const labPath = track.slug === 'general'
      ? findFirstMatchingFile(moduleDir, '-LAB.md')
      : resolve(moduleDir, 'labs', `${track.slug}-LAB.md`)
    const quizPath = track.slug === 'general'
      ? findFirstMatchingFile(moduleDir, '-QUIZ.md')
      : resolve(moduleDir, 'quizzes', `${track.slug}-QUIZ.md`)
    const skill = track.skillSlug ? parentSkills.find(candidate => candidate.slug === track.skillSlug) : undefined

    return {
      ...track,
      labPath: labPath && existsSync(labPath) ? labPath : undefined,
      quizPath: quizPath && existsSync(quizPath) ? quizPath : undefined,
      skill
    }
  })
}

export function parseSkillMarkdown(content: string, fallbackSlug: string): Omit<TechnologySkill, 'slug' | 'sourcePath' | 'downloadFileName'> {
  const { frontmatter, body } = splitFrontmatter(content)
  const titleMatch = body.match(/^#\s+(.+)$/m)
  const name = frontmatter.name ?? titleMatch?.[1] ?? titleFromSlug(fallbackSlug)

  return {
    name,
    description: frontmatter.description ?? '',
    icon: frontmatter.icon ?? '🧰',
    audience: frontmatter.audience,
    order: Number(frontmatter.order ?? '999')
  }
}

export function stripFrontmatter(content: string): string {
  return splitFrontmatter(content).body
}

function splitFrontmatter(content: string): { frontmatter: Record<string, string>; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) return { frontmatter: {}, body: content }

  const frontmatter: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator === -1) continue

    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
    if (key) frontmatter[key] = value
  }

  return { frontmatter, body: content.slice(match[0].length) }
}

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function findFirstMatchingFile(dirPath: string, suffix: string): string | undefined {
  if (!existsSync(dirPath)) return undefined

  const file = readdirSync(dirPath).find(candidate => candidate.endsWith(suffix))
  return file ? resolve(dirPath, file) : undefined
}
