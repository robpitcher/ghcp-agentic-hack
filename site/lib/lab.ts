import { readFileSync } from 'node:fs'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

export interface LabRenderResult {
  html: string
  title: string
  toc: { id: string; text: string }[]
}

export interface LabRenderOptions {
  stripTitleHeading?: boolean
}

export function renderLabMarkdown(sourcePath: string, options: LabRenderOptions = {}): LabRenderResult {
  const toc: { id: string; text: string }[] = []
  let skippedTitleHeading = false
  const markedInstance = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code: string, lang: string) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      }
    })
  )
  markedInstance.use({
    renderer: {
      heading(token) {
        const plain = plainHeadingText(token.tokens)
        const slug = slugifyHeading(plain)
        if (options.stripTitleHeading && token.depth === 1 && !skippedTitleHeading) {
          skippedTitleHeading = true
          return ''
        }
        if (token.depth === 2) {
          toc.push({ id: slug, text: plain })
        }
        return `<h${token.depth} id="${slug}">${this.parser.parseInline(token.tokens)}</h${token.depth}>`
      }
    }
  })

  const content = readFileSync(sourcePath, 'utf-8')
  const titleMatch = content.match(/^#\s+(.+)/m)
  const title = titleMatch ? titleMatch[1] : sourcePath
  const html = markedInstance.parse(content) as string

  return { html, title, toc }
}

interface InlineToken {
  text?: string
  tokens?: InlineToken[]
}

function plainHeadingText(tokens: InlineToken[]): string {
  return tokens
    .map(token => token.tokens ? plainHeadingText(token.tokens) : token.text ?? '')
    .join('')
}

function slugifyHeading(value: string): string {
  return value.toLowerCase().replace(/[^\w -]/g, '').replace(/ /g, '-')
}
