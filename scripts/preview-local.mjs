/**
 * Build and serve the GitHub Pages site locally under the production base path.
 *
 * Usage:
 *   npm run preview:local
 *   npm run preview:local -- --no-build
 *   npm run preview:local -- --prepare-only
 */

import { createReadStream, existsSync, mkdirSync, rmSync, statSync, symlinkSync } from 'fs'
import { extname, join, normalize, resolve, sep } from 'path'
import { execSync } from 'child_process'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')
const SITE_DIST = resolve(ROOT, 'dist', 'site')
const PREVIEW_ROOT = resolve(ROOT, 'dist', 'local-preview')
const BASE_SEGMENT = 'ghcp-agentic-hack'
const PREVIEW_LINK = resolve(PREVIEW_ROOT, BASE_SEGMENT)
const args = new Set(process.argv.slice(2))
const shouldBuild = !args.has('--no-build')
const prepareOnly = args.has('--prepare-only')
const portArg = process.argv.find(arg => arg.startsWith('--port='))
const port = Number(portArg?.split('=')[1] ?? process.env.PORT ?? '4201')

if (shouldBuild) {
  run('npm run build:all')
}

if (!existsSync(SITE_DIST)) {
  throw new Error(`Expected built site at ${SITE_DIST}. Run npm run build:all first or omit --no-build.`)
}

mkdirSync(PREVIEW_ROOT, { recursive: true })
rmSync(PREVIEW_LINK, { recursive: true, force: true })
symlinkSync(SITE_DIST, PREVIEW_LINK, process.platform === 'win32' ? 'junction' : 'dir')

const previewUrl = `http://localhost:${port}/${BASE_SEGMENT}/`
console.log(`Prepared local preview at ${previewUrl}`)

if (prepareOnly) {
  process.exit(0)
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', `http://localhost:${port}`)
  if (url.pathname === '/') {
    response.writeHead(302, { Location: `/${BASE_SEGMENT}/` })
    response.end()
    return
  }

  const filePath = resolveRequestPath(url.pathname)
  if (!filePath) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  if (!existsSync(filePath)) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  const stat = statSync(filePath)
  const finalPath = stat.isDirectory() ? join(filePath, 'index.html') : filePath
  if (!existsSync(finalPath)) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  response.writeHead(200, {
    'Content-Type': contentType(finalPath),
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*'
  })
  createReadStream(finalPath).pipe(response)
})

server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Try: npm run preview:local -- --port=4202`)
    process.exit(1)
  }

  throw error
})

server.listen(port, () => {
  console.log(`Serving local preview at ${previewUrl}`)
  console.log('Press Ctrl+C to stop.')
})

function run(command) {
  console.log(`\n> ${command}`)
  execSync(command, { cwd: ROOT, stdio: 'inherit' })
}

function resolveRequestPath(pathname) {
  const decoded = decodeURIComponent(pathname)
  const relativePath = normalize(decoded.replace(/^\/+/, ''))
  const resolved = resolve(PREVIEW_ROOT, relativePath)
  const rootWithSeparator = PREVIEW_ROOT.endsWith(sep) ? PREVIEW_ROOT : `${PREVIEW_ROOT}${sep}`

  if (resolved !== PREVIEW_ROOT && !resolved.startsWith(rootWithSeparator)) {
    return undefined
  }

  return resolved
}

function contentType(filePath) {
  switch (extname(filePath)) {
    case '.html':
      return 'text/html; charset=utf-8'
    case '.js':
      return 'text/javascript; charset=utf-8'
    case '.css':
      return 'text/css; charset=utf-8'
    case '.json':
      return 'application/json; charset=utf-8'
    case '.svg':
      return 'image/svg+xml'
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.webp':
      return 'image/webp'
    case '.ico':
      return 'image/x-icon'
    default:
      return 'application/octet-stream'
  }
}
