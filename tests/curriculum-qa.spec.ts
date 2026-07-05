import { expect, test } from '@playwright/test'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

interface ConceptCheck {
  name: string
  aliases: string[]
}

interface TrainingModule {
  slug: string
  label: string
  concepts: ConceptCheck[]
}

const repoRoot = path.resolve(__dirname, '..')
const workshopsDir = path.join(repoRoot, 'workshops')
const ignoredTitleTokens = new Set([
  'and',
  'the',
  'stage',
  'exercise',
  'module',
  'content',
  'refresh',
  'hands',
  'on',
  'lab',
  'workshop',
  'guide',
  'drill'
])

const trainingModules: TrainingModule[] = [
  {
    slug: 'copilot-dev-foundations',
    label: 'Module 1: Foundations',
    concepts: [
      { name: 'new project starter', aliases: ['copilot quest starter', 'wordle-style cli word game'] },
      { name: 'Copilot surfaces', aliases: ['surfaces', 'vs code chat', 'copilot cli'] },
      { name: 'enterprise trust', aliases: ['enterprise trust', 'governance signals'] },
      { name: 'guided workflows', aliases: ['guided workflows', 'inline assistance', 'built-in copilot experiences'] },
      { name: 'usage optimization', aliases: ['github ai credits', 'billing', 'tokenomics'] },
      { name: 'model routing', aliases: ['model routing', '/model'] },
      { name: 'context windows', aliases: ['context windows', 'context rot', '/context'] },
      { name: 'delegation guardrails', aliases: ['custom agent guardrails', 'delegation readiness'] }
    ]
  },
  {
    slug: 'copilot-dev-agentic',
    label: 'Module 2: Agentic',
    concepts: [
      { name: 'instructions', aliases: ['instructions'] },
      { name: 'memory', aliases: ['memory'] },
      { name: 'strong prompts', aliases: ['strong prompt', 'strong-prompt'] },
      { name: 'repo-local skill', aliases: ['skill.md', '.github/skills'] },
      { name: 'custom agent', aliases: ['.github/agents', 'custom agent'] },
      { name: 'tool control', aliases: ['tool-control', 'tool control', 'tool invocation'] },
      { name: 'background and cloud agents', aliases: ['background/cloud', 'background or cloud', 'cloud agent'] },
      { name: '/init', aliases: ['/init'] },
      { name: 'instruction layering', aliases: ['instruction layering'] }
    ]
  },
  {
    slug: 'copilot-dev-advanced',
    label: 'Module 3: Advanced',
    concepts: [
      { name: 'multiagents', aliases: ['multiagents'] },
      { name: 'Squad discovery', aliases: ['squad'] },
      { name: 'Awesome Copilot skills catalog', aliases: ['awesome copilot skills catalog'] },
      { name: 'subagents', aliases: ['subagents'] },
      { name: 'fleet execution', aliases: ['fleet-style', 'fleet'] },
      { name: 'hooks', aliases: ['hooks'] },
      { name: 'Extension Marketplace', aliases: ['extension marketplace'] },
      { name: 'MCP as concept', aliases: ['mcp'] },
      { name: 'API/CLI integration', aliases: ['api/cli'] },
      { name: 'plugins', aliases: ['plugins'] },
      { name: 'debugging', aliases: ['debug', 'debugging'] },
      { name: 'deployment readiness', aliases: ['deploy', 'deployment'] }
    ]
  }
]

function modulePath(module: TrainingModule, suffix: string): string {
  return path.join(workshopsDir, module.slug, `${module.slug}${suffix}`)
}

function readModuleFile(module: TrainingModule, suffix: string): string {
  const filePath = modulePath(module, suffix)
  expect(existsSync(filePath), `${module.label} should include ${path.basename(filePath)}`).toBe(true)
  return readFileSync(filePath, 'utf-8')
}

function normalize(value: string): string {
  return value.replace(/\r\n/g, '\n')
}

function lower(value: string): string {
  return normalize(value).toLowerCase()
}

function extractWorkshopLabIndicators(source: string): Array<{ number: number; title: string }> {
  return Array.from(normalize(source).matchAll(/^### 🔬 LAB: Exercise (\d+)\s+[—-]\s+(.+)$/gm), match => ({
    number: Number(match[1]),
    title: match[2].trim()
  }))
}

function extractLabExercises(source: string): Array<{ number: number; title: string }> {
  return Array.from(normalize(source).matchAll(/^## Exercise (\d+):\s+(.+)$/gm), match => ({
    number: Number(match[1]),
    title: match[2].trim()
  }))
}

function extractNumberedWorkshopSections(source: string): Array<{ number: number; title: string }> {
  return Array.from(normalize(source).matchAll(/^## (\d+)\.\s+(.+?)\s+\(/gm), match => ({
    number: Number(match[1]),
    title: match[2].trim()
  }))
}

function extractPresenterSections(source: string): Array<{ number: number; title: string }> {
  return Array.from(normalize(source).matchAll(/^### (\d+)\.\s+(.+?)\s+\(/gm), match => ({
    number: Number(match[1]),
    title: match[2].trim()
  }))
}

function meaningfulTokens(title: string): string[] {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 2 && !ignoredTitleTokens.has(token))
}

function titleOverlap(left: string, right: string): string[] {
  const rightTokens = new Set(meaningfulTokens(right))
  return meaningfulTokens(left).filter(token => rightTokens.has(token))
}

function topicIsCoveredBySlideNotes(title: string, slideNotes: string): boolean {
  const topicTokens = meaningfulTokens(title)
  if (topicTokens.length === 0) return false

  const overlap = titleOverlap(title, slideNotes)
  return overlap.length >= Math.min(2, topicTokens.length)
}

function quizQuestionBlocks(source: string): string[] {
  return normalize(source)
    .split(/^---$/gm)
    .map(block => block.trim())
    .filter(block => /^###\s+\d+\./m.test(block))
}

function slideNoteBlocks(source: string): string[] {
  return Array.from(normalize(source).matchAll(/<!--([\s\S]*?)-->/g), match => match[1].trim())
}

test.describe('curriculum source-of-truth QA', () => {
  for (const module of trainingModules) {
    test(`${module.label} has complete companion artifacts`, () => {
      for (const suffix of ['-workshop.md', '-LAB.md', '-QUIZ.md', '.slidev.md']) {
        expect(existsSync(modulePath(module, suffix)), `${module.slug}${suffix} should exist`).toBe(true)
      }

      expect(existsSync(path.join(workshopsDir, module.slug, 'presenter.md')), `${module.slug} presenter.md should exist`).toBe(true)
    })

    test(`${module.label} lab exercises mirror workshop lab indicators`, () => {
      const workshop = readModuleFile(module, '-workshop.md')
      const lab = readModuleFile(module, '-LAB.md')
      const workshopLabs = extractWorkshopLabIndicators(workshop)
      const labExercises = extractLabExercises(lab)

      expect(workshopLabs.length, `${module.slug} workshop should contain lab indicators`).toBeGreaterThan(0)
      expect(labExercises.map(exercise => exercise.number)).toEqual(workshopLabs.map(exercise => exercise.number))

      for (const workshopLab of workshopLabs) {
        const labExercise = labExercises.find(exercise => exercise.number === workshopLab.number)
        expect(labExercise, `${module.slug} lab exercise ${workshopLab.number} should exist`).toBeDefined()
        expect(
          titleOverlap(workshopLab.title, labExercise!.title).length,
          `${module.slug} exercise ${workshopLab.number} title should align with workshop indicator`
        ).toBeGreaterThan(0)
      }
    })

    test(`${module.label} lab exercise topics are represented in Slidev presenter notes`, () => {
      const lab = readModuleFile(module, '-LAB.md')
      const slidev = readModuleFile(module, '.slidev.md')
      const labExercises = extractLabExercises(lab)
      const notes = slideNoteBlocks(slidev).join('\n')

      expect(labExercises.length, `${module.slug} should include lab exercises`).toBeGreaterThan(0)

      for (const exercise of labExercises) {
        expect(
          topicIsCoveredBySlideNotes(exercise.title, notes),
          `${module.slug} Exercise ${exercise.number} topic should be represented in Slidev presenter notes: ${exercise.title}`
        ).toBe(true)
      }
    })

    test(`${module.label} quiz uses the expected authored quiz format`, () => {
      const quiz = readModuleFile(module, '-QUIZ.md')
      const blocks = quizQuestionBlocks(quiz)
      const answers = Array.from(quiz.matchAll(/<!--answer:\s*([A-D])-->/g))
      const explanations = Array.from(quiz.matchAll(/<!--explanation:\s*[\s\S]*?-->/g))

      expect(blocks.length, `${module.slug} should include quiz questions`).toBeGreaterThan(0)
      expect(answers.length, `${module.slug} answer comments should match question count`).toBe(blocks.length)
      expect(explanations.length, `${module.slug} explanation comments should match question count`).toBe(blocks.length)

      for (const [index, block] of blocks.entries()) {
        for (const option of ['A', 'B', 'C', 'D']) {
          expect(block, `${module.slug} question ${index + 1} should include option ${option}`).toMatch(new RegExp(`^- ${option}\\)\\s+`, 'm'))
        }
      }
    })

    test(`${module.label} quiz concepts are taught by workshop source`, () => {
      const workshop = lower(readModuleFile(module, '-workshop.md'))
      const lab = lower(readModuleFile(module, '-LAB.md'))
      const quiz = lower(readModuleFile(module, '-QUIZ.md'))

      for (const concept of module.concepts) {
        const taught = concept.aliases.some(alias => workshop.includes(alias.toLowerCase()))
        const practicedOrTested = concept.aliases.some(alias => `${lab}\n${quiz}`.includes(alias.toLowerCase()))

        expect(taught, `${module.slug} workshop should teach ${concept.name}`).toBe(true)
        expect(practicedOrTested, `${module.slug} lab or quiz should cover ${concept.name}`).toBe(true)
      }
    })

    test(`${module.label} presenter notes align to workshop sections`, () => {
      const workshop = readModuleFile(module, '-workshop.md')
      const presenter = readFileSync(path.join(workshopsDir, module.slug, 'presenter.md'), 'utf-8')
      const workshopSections = extractNumberedWorkshopSections(workshop)
      const presenterSections = extractPresenterSections(presenter)

      expect(presenterSections.map(section => section.number)).toEqual(workshopSections.map(section => section.number))

      for (const workshopSection of workshopSections) {
        const presenterSection = presenterSections.find(section => section.number === workshopSection.number)
        expect(presenterSection, `${module.slug} presenter section ${workshopSection.number} should exist`).toBeDefined()
        expect(
          titleOverlap(workshopSection.title, presenterSection!.title).length,
          `${module.slug} presenter section ${workshopSection.number} should match workshop section`
        ).toBeGreaterThan(0)
      }
    })

    test(`${module.label} Slidev deck has substantive presenter notes`, () => {
      const slidev = readModuleFile(module, '.slidev.md')
      const normalized = normalize(slidev)
      const slideBlocks = Array.from(
        normalized.matchAll(/(?:^|\n)---\n([\s\S]*?)\n---\n([\s\S]*?)(?=\n---\n|\s*$)/g),
        match => ({ frontmatter: match[1], body: match[2] })
      )

      const generatedSlides = slideBlocks.filter(block => /^background:\s+\/images\//m.test(block.frontmatter))
      expect(generatedSlides.length, `${module.slug} should include generated slide backgrounds`).toBeGreaterThan(0)
      expect(lower(slidev), `${module.slug} should not contain note placeholders`).not.toMatch(/todo|author presenter notes|placeholder/)

      for (const [index, slide] of generatedSlides.entries()) {
        const notes = Array.from(slide.body.matchAll(/<!--([\s\S]*?)-->/g), match => match[1].trim()).filter(Boolean)
        expect(notes.length, `${module.slug} generated slide ${index + 1} should include presenter notes`).toBeGreaterThan(0)
        const wordCount = notes.join(' ').split(/\s+/).filter(Boolean).length
        expect(wordCount, `${module.slug} generated slide ${index + 1} notes should be substantive`).toBeGreaterThanOrEqual(15)
      }
    })
  }

  test('labs preserve the intended Foundations to Agentic to Advanced artifact boundaries', () => {
    const foundationsLab = lower(readModuleFile(trainingModules[0], '-LAB.md'))
    const agenticLab = lower(readModuleFile(trainingModules[1], '-LAB.md'))
    const advancedLab = lower(readModuleFile(trainingModules[2], '-LAB.md'))

    expect(foundationsLab).toContain('copilot quest starter')
    expect(foundationsLab).toContain('without creating agent or skill files')
    expect(foundationsLab).not.toContain('.github/skills/')
    expect(foundationsLab).not.toContain('.github/agents/')

    expect(agenticLab).toContain('.github/skills/copilot-quest-guessing/skill.md')
    expect(agenticLab).toContain('.github/agents/copilot-quest-implementer.agent.md')
    expect(agenticLab).toContain('workflow kit')

    expect(advancedLab).toContain('orchestration package')
    expect(advancedLab).toContain('hooks')
    expect(advancedLab).toContain('extension marketplace')
    expect(advancedLab).toContain('mcp')
    expect(advancedLab).toContain('api/cli')
    expect(advancedLab).toContain('plugins')
    expect(advancedLab).toContain('without configuring any real server')
  })

  test('C++ skill-track labs and quizzes preserve shared slide concept coverage', () => {
    const expectedConcepts: Record<string, string[]> = {
      'copilot-dev-foundations': ['copilot surfaces', 'safe', 'model', 'context', 'guardrails'],
      'copilot-dev-agentic': ['instructions', 'memory', 'strong prompt', 'skill', 'custom agent', 'tool', 'background', '/init'],
      'copilot-dev-advanced': ['multiagent', 'subagent', 'fleet', 'hooks', 'extension', 'mcp', 'api/cli', 'plugins', 'debug', 'deployment']
    }

    for (const module of trainingModules) {
      const labPath = path.join(workshopsDir, module.slug, 'labs', 'cpp-hardware-LAB.md')
      const quizPath = path.join(workshopsDir, module.slug, 'quizzes', 'cpp-hardware-QUIZ.md')

      expect(existsSync(labPath), `${module.slug} should include a C++ skill-track lab`).toBe(true)
      expect(existsSync(quizPath), `${module.slug} should include a C++ skill-track quiz`).toBe(true)

      const lab = lower(readFileSync(labPath, 'utf-8'))
      const quiz = readFileSync(quizPath, 'utf-8')
      const quizLower = lower(quiz)

      expect(lab, `${module.slug} C++ lab should name the skill track`).toContain('c++ / hardware')
      expect(lab, `${module.slug} C++ lab should preserve shared slides as source truth`).toContain('slides remain the source of truth')
      expect(lab, `${module.slug} C++ lab should practice applying the skill`).toContain('c++ / hardware developer skill')
      expect(lab, `${module.slug} C++ lab should include safety checkpoints`).toContain('safety checkpoint')
      expect(lab, `${module.slug} C++ lab should include success criteria`).toContain('success criteria')
      expect(lab, `${module.slug} C++ lab should include copyable prompts or commands`).toContain('```')
      expect(quizLower, `${module.slug} C++ quiz should use C++ context`).toContain('c++')

      for (const concept of expectedConcepts[module.slug]) {
        expect(`${lab}\n${quizLower}`, `${module.slug} C++ track should cover ${concept}`).toContain(concept)
      }

      const blocks = quizQuestionBlocks(quiz)
      const answers = Array.from(quiz.matchAll(/<!--answer:\s*([A-D])-->/g))
      const explanations = Array.from(quiz.matchAll(/<!--explanation:\s*[\s\S]*?-->/g))
      expect(blocks.length, `${module.slug} C++ quiz should include questions`).toBeGreaterThan(0)
      expect(answers.length, `${module.slug} C++ quiz answers should match question count`).toBe(blocks.length)
      expect(explanations.length, `${module.slug} C++ quiz explanations should match question count`).toBe(blocks.length)

      for (const [index, block] of blocks.entries()) {
        for (const option of ['A', 'B', 'C', 'D']) {
          expect(block, `${module.slug} C++ question ${index + 1} should include option ${option}`).toMatch(new RegExp(`^- ${option}\\)\\s+`, 'm'))
        }
      }
    }
  })

  test('curriculum QA reports and reusable QA skill are present', () => {
    const qaFiles = [
      'README.md',
      'copilot-dev-foundations-qa.md',
      'copilot-dev-agentic-qa.md',
      'copilot-dev-advanced-qa.md',
      'curriculum-continuity-qa.md'
    ]

    for (const file of qaFiles) {
      expect(existsSync(path.join(repoRoot, 'qa', file)), `qa/${file} should exist`).toBe(true)
    }

    const skillPath = path.join(repoRoot, '.github', 'skills', 'curriculum-qa', 'SKILL.md')
    expect(existsSync(skillPath), 'curriculum QA skill should exist').toBe(true)

    const skill = lower(readFileSync(skillPath, 'utf-8'))
    expect(skill).toContain('source of truth')
    expect(skill).toContain('qa\\')
    expect(skill).toContain('slides')
    expect(skill).toContain('labs')
    expect(skill).toContain('quizzes')
    expect(skill).toContain('lab topic to slide deck traceability')
  })

  test('skill-track authoring skill is present for future track creation', () => {
    const skillPath = path.join(repoRoot, '.github', 'skills', 'lab-track-author', 'SKILL.md')
    expect(existsSync(skillPath), 'lab track authoring skill should exist').toBe(true)

    const skill = lower(readFileSync(skillPath, 'utf-8'))
    expect(skill).toContain('slides stay shared')
    expect(skill).toContain('source truth first')
    expect(skill).toContain('skill as behavior')
    expect(skill).toContain('technology skill checklist')
    expect(skill).toContain('labs')
    expect(skill).toContain('quizzes')
    expect(skill).toContain('npm run test:curriculum-qa')
  })

  test('C++ workshop technology skill is a Copilot behavior package', () => {
    const skillPath = path.join(workshopsDir, 'copilot-dev-training', 'skills', 'cpp-hardware', 'SKILL.md')
    expect(existsSync(skillPath), 'C++ / Hardware skill should exist').toBe(true)

    const skill = lower(readFileSync(skillPath, 'utf-8'))
    expect(skill).toContain('agentic behavior package')
    expect(skill).toContain('activation criteria')
    expect(skill).toContain('context and tool preferences')
    expect(skill).toContain('safety gates')
    expect(skill).toContain('output contract')
    expect(skill).toContain('validation preferences')
  })
})
