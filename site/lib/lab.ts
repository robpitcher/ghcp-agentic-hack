import { readFileSync } from 'node:fs'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

export interface LabRenderResult {
  html: string
  title: string
  toc: { id: string; text: string }[]
}

export function renderLabMarkdown(sourcePath: string): LabRenderResult {
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

  const content = readFileSync(sourcePath, 'utf-8')
  const titleMatch = content.match(/^#\s+(.+)/m)
  const title = titleMatch ? titleMatch[1] : sourcePath
  const toc: { id: string; text: string }[] = []
  const rawHtml = markedInstance.parse(content) as string
  const html = rawHtml.replace(/<h([1-6])>(.*?)<\/h[1-6]>/g, (_match: string, level: string, inner: string) => {
    const plain = plainHeadingText(inner)
    const slug = slugifyHeading(plain)
    if (level === '2') {
      toc.push({ id: slug, text: plain })
    }
    return `<h${level} id="${slug}">${inner}</h${level}>`
  })

  return { html, title, toc }
}

function plainHeadingText(value: string): string {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function slugifyHeading(value: string): string {
  return value.toLowerCase().replace(/[^\w -]/g, '').replace(/ /g, '-')
}
