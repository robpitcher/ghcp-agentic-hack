import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { execFileSync, execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");
const baseSegment = "ghcp-video-content";
const args = new Set(process.argv.slice(2));
const shouldBuild = !args.has("--no-build");
const prepareOnly = args.has("--prepare-only");
const portArg = process.argv.find((arg) => arg.startsWith("--port="));
const port = Number(portArg?.split("=")[1] ?? process.env.PORT ?? "4201");

if (shouldBuild) {
  const env = {
    ...process.env,
    GITHUB_PAGES_BASE: `/${baseSegment}/`
  };
  const packageManager = process.env.npm_execpath;

  if (packageManager?.toLowerCase().includes("pnpm")) {
    execFileSync(process.execPath, [packageManager, "build"], {
      cwd: root,
      env,
      stdio: "inherit"
    });
  } else {
    execSync("npm exec --yes --package=pnpm@10.14.0 -- pnpm build", {
      cwd: root,
      env,
      stdio: "inherit"
    });
  }
}

if (!existsSync(dist)) {
  throw new Error(`Expected built site at ${dist}. Run pnpm build first or omit --no-build.`);
}

const previewUrl = `http://localhost:${port}/${baseSegment}/`;
console.log(`Prepared local slide review at ${previewUrl}`);

if (prepareOnly) {
  process.exit(0);
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://localhost:${port}`);
  if (url.pathname === "/") {
    response.writeHead(302, { Location: `/${baseSegment}/` });
    response.end();
    return;
  }

  let filePath = resolveRequestPath(url.pathname);
  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    filePath = resolveDeckFallbackPath(url.pathname);
    if (!filePath) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
  }

  const stat = statSync(filePath);
  const finalPath = stat.isDirectory() ? join(filePath, "index.html") : filePath;
  if (!existsSync(finalPath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": contentType(finalPath),
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*"
  });
  createReadStream(finalPath).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Try: pnpm review:slides -- --port=4202`);
    process.exit(1);
  }

  throw error;
});

server.listen(port, () => {
  console.log(`Serving local slide review at ${previewUrl}`);
  console.log("Press Ctrl+C to stop.");
});

function resolveRequestPath(pathname) {
  const prefix = `/${baseSegment}`;
  if (pathname !== prefix && !pathname.startsWith(`${prefix}/`)) {
    return undefined;
  }

  const decoded = decodeURIComponent(pathname.slice(prefix.length));
  const relativePath = normalize(decoded.replace(/^\/+/, ""));
  const resolved = resolve(dist, relativePath);
  const rootWithSeparator = dist.endsWith(sep) ? dist : `${dist}${sep}`;

  if (resolved !== dist && !resolved.startsWith(rootWithSeparator)) {
    return undefined;
  }

  return resolved;
}

function resolveDeckFallbackPath(pathname) {
  const prefix = `/${baseSegment}/`;
  if (!pathname.startsWith(prefix)) {
    return undefined;
  }

  const relativePath = normalize(decodeURIComponent(pathname.slice(prefix.length)));
  const segments = relativePath.split(sep);
  if (segments.length < 3 || segments[0] !== "workshops") {
    return undefined;
  }

  const deckRoot = resolve(dist, segments[0], segments[1], segments[2]);
  const indexPath = join(deckRoot, "index.html");
  return existsSync(indexPath) ? indexPath : undefined;
}

function contentType(filePath) {
  switch (extname(filePath)) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}
