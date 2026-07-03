import { expect, test } from '@playwright/test'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

interface LabCodeBlock {
  language: string
  text: string
}

interface LabModule {
  slug: string
  title: string
  sourcePath: string
  headings: string[]
  codeBlocks: LabCodeBlock[]
}

const repoRoot = path.resolve(__dirname, '..')
const workshopsDir = path.join(repoRoot, 'workshops')

const normalize = (value: string) => value.replace(/\r\n/g, '\n').replace(/\n$/, '')

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
      const title = source.match(/^#\s+(.+)$/m)?.[1] ?? entry.name
      const headings = Array.from(source.matchAll(/^##\s+(.+)$/gm), match => match[1])
      const codeBlocks = Array.from(source.matchAll(/```([^\r\n]*)\r?\n([\s\S]*?)\r?\n```/g), match => ({
        language: match[1].trim(),
        text: normalize(match[2])
      }))

      return {
        slug: entry.name,
        title,
        sourcePath,
        headings,
        codeBlocks
      }
    })
    .filter((lab): lab is LabModule => Boolean(lab))
    .sort((a, b) => a.slug.localeCompare(b.slug))
}

const labs = discoverLabs()

test.describe('lab usability', () => {
  test('discovers lab coverage for every module lab file', () => {
    expect(labs.length).toBeGreaterThan(0)
    expect(new Set(labs.map(lab => lab.slug)).size).toBe(labs.length)
    for (const lab of labs) {
      expect(lab.headings.length, `${lab.sourcePath} should include exercise headings`).toBeGreaterThan(0)
      expect(lab.codeBlocks.length, `${lab.sourcePath} should include copyable lab commands or prompts`).toBeGreaterThan(0)
    }
  })

  for (const lab of labs) {
    test.describe(lab.slug, () => {
      test('renders the lab structure and exercise checkpoints', async ({ page }) => {
        await page.goto(`${lab.slug}/lab/`)
        await expect(page.getByRole('heading', { level: 1, name: lab.title })).toBeVisible()
        await expect(page.locator('.lab-content')).toContainText('⏱️ Time')
        await expect(page.locator('.lab-content')).toContainText('📋 Objective')
        await expect(page.locator('.lab-content')).toContainText('Safety checkpoint')
        await expect(page.locator('.lab-content')).toContainText('Success Criteria')

        const pageHeadings = await page.locator('.lab-content h2').allTextContents()
        expect(pageHeadings).toEqual(lab.headings)
      })

      test('walks table-of-contents anchors for each exercise', async ({ page }) => {
        await page.goto(`${lab.slug}/lab/`)

        const tocLinks = page.locator('.lab-toc a')
        await expect(tocLinks).toHaveCount(lab.headings.length)

        for (let index = 0; index < lab.headings.length; index += 1) {
          const link = tocLinks.nth(index)
          const href = await link.getAttribute('href')
          expect(href, `${lab.sourcePath} TOC link ${index + 1}`).toMatch(/^#[a-z0-9-]+$/)

          await link.click()
          await expect(page.locator(href!)).toContainText(lab.headings[index])
          await expect(link).toHaveClass(/active/)
        }
      })

      test('walks and verifies every copyable command or prompt block', async ({ page, context, baseURL }) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(baseURL!).origin })
        await page.goto(`${lab.slug}/lab/`)

        const blocks = page.locator('.lab-content pre')
        await expect(blocks).toHaveCount(lab.codeBlocks.length)
        expect(lab.codeBlocks.length, `${lab.sourcePath} should contain copyable lab commands or prompts`).toBeGreaterThan(0)

        for (let index = 0; index < lab.codeBlocks.length; index += 1) {
          const block = blocks.nth(index)
          await block.scrollIntoViewIfNeeded()

          const renderedText = normalize(await block.locator('code').textContent() ?? '')
          expect(renderedText, `${lab.sourcePath} code block ${index + 1} rendered text`).toBe(lab.codeBlocks[index].text)
          expect(renderedText, `${lab.sourcePath} code block ${index + 1} should not be empty`).not.toEqual('')
          expect(renderedText, `${lab.sourcePath} code block ${index + 1} should not include markdown fences`).not.toContain('```')

          await block.hover()
          const copyButton = block.locator('button.copy-btn')
          await expect(copyButton).toBeVisible()
          await copyButton.click()

          const clipboardText = normalize(await page.evaluate(() => navigator.clipboard.readText()))
          expect(clipboardText, `${lab.sourcePath} copied code block ${index + 1}`).toBe(lab.codeBlocks[index].text)
          await expect(copyButton).toHaveText('Copied!')
        }
      })
    })
  }
})
