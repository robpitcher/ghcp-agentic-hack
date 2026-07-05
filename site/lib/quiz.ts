import { readFileSync } from 'node:fs'

export interface Question {
  number: number
  text: string
  options: { letter: string; text: string }[]
  answer: string
  explanation: string
}

export interface QuizRenderResult {
  questions: Question[]
  title: string
}

export function parseQuizMarkdown(sourcePath: string): QuizRenderResult {
  const raw = readFileSync(sourcePath, 'utf-8').replace(/\r\n/g, '\n')
  const titleMatch = raw.match(/^#\s+(.+)/m)
  const title = titleMatch ? titleMatch[1] : sourcePath
  const blocks = raw.split(/^---$/m).filter(block => block.trim())
  const questions: Question[] = []
  let qNum = 0

  for (const block of blocks) {
    const qMatch = block.match(/###\s+(\d+)\.\s+(.+?)(?:\n|$)/)
    if (!qMatch) continue

    qNum++
    const text = qMatch[2].trim()
    const optionMatches = [...block.matchAll(/^-\s+([A-D])\)\s+(.+)/gm)]
    const options = optionMatches.map(match => ({ letter: match[1], text: match[2].trim() }))
    const answerMatch = block.match(/<!--\s*answer:\s*([A-D])\s*-->/)
    const answer = answerMatch ? answerMatch[1] : ''
    const explMatch = block.match(/<!--\s*explanation:\s*([\s\S]*?)\s*-->/)
    const explanation = explMatch ? explMatch[1].trim() : ''

    if (options.length > 0) {
      questions.push({ number: qNum, text, options, answer, explanation })
    }
  }

  return { questions, title }
}
