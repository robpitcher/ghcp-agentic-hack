import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import fsExtra from "fs-extra";
import fg from "fast-glob";
import matter from "gray-matter";
import {
  FluxImageProvider,
  GptImageProvider,
  MaiImageProvider,
  SoraVideoProvider,
  uploadVideo,
  type GeneratedImage,
  type ImageProvider,
  type ImageProviderName
} from "@ghcp/foundry-providers";
import { generatedAssetSchema } from "@ghcp/content-schema";
import { candidatesRoot, repositoryRoot, workshopsRoot } from "./paths.js";

const { copy, ensureDir, pathExists, readJson, writeFile, writeJson } = fsExtra;

type MediaRoots = {
  candidatesRoot: string;
  workshopsRoot: string;
  repositoryRoot?: string;
};

type RasterDimensions = {
  width: number;
  height: number;
};

type CandidateMediaKind = "images" | "video";

const gptImageDimensions = new Set(["1024x1024", "1536x1024", "1024x1536"]);

export function validateImageDimensions(
  provider: ImageProviderName,
  width: number,
  height: number
): void {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) {
    throw new Error("Image width and height must be positive integers");
  }
  if (provider === "gpt-image-2" && !gptImageDimensions.has(`${width}x${height}`)) {
    throw new Error(
      "gpt-image-2 dimensions must be 1024x1024, 1536x1024, or 1024x1536"
    );
  }
}

function digest(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

export function candidateCycleDirectory(
  root: string,
  workshopId: string,
  moduleId: string,
  cycleId: string,
  kind: CandidateMediaKind
): string {
  const segments = [workshopId, moduleId, cycleId];
  if (segments.some((segment) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment))) {
    throw new Error("Workshop, module, and cycle ids must use lowercase kebab-case");
  }
  return path.join(root, workshopId, moduleId, cycleId, kind);
}

function rasterDimensions(bytes: Buffer, filename: string): RasterDimensions {
  if (
    bytes.length >= 24 &&
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  ) {
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }

  if (bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8) {
    let offset = 2;
    const startOfFrameMarkers = new Set([
      0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf
    ]);
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = bytes.readUInt8(offset + 1);
      if (startOfFrameMarkers.has(marker)) {
        return { width: bytes.readUInt16BE(offset + 7), height: bytes.readUInt16BE(offset + 5) };
      }
      if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) {
        offset += 2;
        continue;
      }
      const segmentLength = bytes.readUInt16BE(offset + 2);
      if (segmentLength < 2) break;
      offset += segmentLength + 2;
    }
  }

  if (
    bytes.length >= 30 &&
    bytes.toString("ascii", 0, 4) === "RIFF" &&
    bytes.toString("ascii", 8, 12) === "WEBP"
  ) {
    const chunk = bytes.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return {
        width: 1 + bytes.readUIntLE(24, 3),
        height: 1 + bytes.readUIntLE(27, 3)
      };
    }
    if (chunk === "VP8L" && bytes[20] === 0x2f) {
      const byte21 = bytes.readUInt8(21);
      const byte22 = bytes.readUInt8(22);
      const byte23 = bytes.readUInt8(23);
      const byte24 = bytes.readUInt8(24);
      return {
        width: 1 + byte21 + ((byte22 & 0x3f) << 8),
        height: 1 + (byte22 >> 6) + (byte23 << 2) + ((byte24 & 0x0f) << 10)
      };
    }
    if (chunk === "VP8 " && bytes.length >= 30) {
      return {
        width: bytes.readUInt16LE(26) & 0x3fff,
        height: bytes.readUInt16LE(28) & 0x3fff
      };
    }
  }

  throw new Error(`Cannot read PNG, JPEG, or WebP dimensions from ${filename}`);
}

function portableWorkshopPath(value: string): boolean {
  return (
    !value.includes("\\") &&
    !value.startsWith("/") &&
    !/^[a-zA-Z]:/.test(value) &&
    value.split("/").every((segment) => segment !== "." && segment !== "..")
  );
}

async function assertImageDimensions(
  imagePath: string,
  width: number | undefined,
  height: number | undefined
): Promise<void> {
  if (width === undefined || height === undefined) {
    throw new Error("Image manifests must declare width and height");
  }
  const actual = rasterDimensions(await readFile(imagePath), imagePath);
  if (actual.width !== width || actual.height !== height) {
    throw new Error(
      `Image dimensions ${actual.width}x${actual.height} do not match manifest ${width}x${height}`
    );
  }
}

export function videoReferenceContentType(
  filename: string
): "image/jpeg" | "image/png" | "image/webp" {
  const extension = path.extname(filename).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".png") return "image/png";
  if (extension === ".webp") return "image/webp";
  throw new Error("Input reference must be a PNG, JPEG, or WebP image");
}

export function imageReferenceContentType(filename: string): "image/jpeg" | "image/png" {
  const extension = path.extname(filename).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".png") return "image/png";
  throw new Error("Image edit reference must be a PNG or JPEG image");
}

function imageProvider(name: ImageProviderName): ImageProvider {
  if (name === "gpt-image-2") return new GptImageProvider();
  if (name === "flux-2-pro") return new FluxImageProvider();
  return new MaiImageProvider();
}

function imageDeployment(provider: ImageProviderName): string | undefined {
  if (provider === "gpt-image-2") return process.env.FOUNDRY_GPT_IMAGE_DEPLOYMENT;
  if (provider === "flux-2-pro") return process.env.FOUNDRY_FLUX_DEPLOYMENT;
  return process.env.FOUNDRY_MAI_IMAGE_DEPLOYMENT;
}

async function normalizedSource(workshopId: string, source: string): Promise<string> {
  const workshopRoot = path.resolve(workshopsRoot, workshopId);
  const sourcePath = path.resolve(workshopRoot, source);
  if (!sourcePath.startsWith(`${workshopRoot}${path.sep}`)) {
    throw new Error("Source must remain inside the workshop folder");
  }
  if (!(await pathExists(sourcePath))) throw new Error(`Source does not exist: ${source}`);
  return path.relative(workshopRoot, sourcePath).split(path.sep).join("/");
}

async function writeImageCandidate(
  workshopId: string,
  moduleId: string,
  cycleId: string,
  assetId: string,
  source: string,
  prompt: string,
  provider: ImageProvider,
  image: GeneratedImage,
  outputFormat: "png" | "jpeg",
  inputReference?: {
    path: string;
    hash: string;
    contentType: "image/jpeg" | "image/png";
  }
): Promise<string> {
  const promptHash = digest(prompt);
  const candidateDirectory = candidateCycleDirectory(
    candidatesRoot,
    workshopId,
    moduleId,
    cycleId,
    "images"
  );
  const candidateName = `${assetId}-${promptHash.slice(0, 12)}.${outputFormat === "jpeg" ? "jpg" : "png"}`;
  const candidatePath = path.join(candidateDirectory, candidateName);
  const manifestPath = `${candidatePath}.json`;
  const actualDimensions = rasterDimensions(Buffer.from(image.bytes), candidateName);
  await ensureDir(candidateDirectory);
  await writeFile(candidatePath, image.bytes);
  await writeJson(
    manifestPath,
    {
      schemaVersion: 1,
      id: assetId,
      kind: "image",
      provider: provider.name,
      deployment: imageDeployment(provider.name),
      promptHash,
      prompt,
      revisedPrompt: image.revisedPrompt,
      source,
      createdAt: new Date().toISOString(),
      reviewStatus: "candidate",
      location: candidatePath,
      width: actualDimensions.width,
      height: actualDimensions.height,
      inputReference
    },
    { spaces: 2 }
  );
  return manifestPath;
}

export async function generateImageCandidate(options: {
  workshopId: string;
  moduleId: string;
  cycleId: string;
  assetId: string;
  promptFile: string;
  source: string;
  provider: ImageProviderName;
  width: number;
  height: number;
  outputFormat: "png" | "jpeg";
  inputReference?: string;
}): Promise<string> {
  validateImageDimensions(options.provider, options.width, options.height);
  const promptFile = path.resolve(repositoryRoot, options.promptFile);
  const prompt = (await readFile(promptFile, "utf8")).trim();
  if (!prompt) throw new Error("The prompt file is empty");

  // Inject visual style from module metadata if available
  const workshopRoot = path.resolve(workshopsRoot, options.workshopId);
  const sourcePath = path.resolve(workshopRoot, options.source);
  const moduleManifestPath = sourcePath.endsWith("module.md") ? sourcePath : path.join(path.dirname(sourcePath), "module.md");

  let finalPrompt = prompt;
  if (await pathExists(moduleManifestPath)) {
    const content = await readFile(moduleManifestPath, "utf8");
    const { data } = matter(content);
    if (data.generation?.visualStyle) {
      finalPrompt = `STYLE GUIDE: ${data.generation.visualStyle}\n\nUSER PROMPT: ${prompt}`;
    }
  }

  const source = await normalizedSource(options.workshopId, options.source);
  const provider = imageProvider(options.provider);
  let inputReference:
    | {
        bytes: Uint8Array;
        filename: string;
        contentType: "image/jpeg" | "image/png";
        path: string;
        hash: string;
      }
    | undefined;
  if (options.inputReference) {
    if (options.provider !== "mai-image-2.5") {
      throw new Error("Image editing is currently supported only by mai-image-2.5");
    }
    const referencePath = path.resolve(repositoryRoot, options.inputReference);
    const relativeReferencePath = path.relative(repositoryRoot, referencePath);
    if (relativeReferencePath.startsWith("..") || path.isAbsolute(relativeReferencePath)) {
      throw new Error("Input reference must remain inside the repository");
    }
    if (!(await pathExists(referencePath))) {
      throw new Error(`Input reference does not exist: ${options.inputReference}`);
    }
    const bytes = new Uint8Array(await readFile(referencePath));
    inputReference = {
      bytes,
      filename: path.basename(referencePath),
      contentType: imageReferenceContentType(referencePath),
      path: relativeReferencePath.split(path.sep).join("/"),
      hash: digest(bytes)
    };
  }
  const image = await provider.generate({
    prompt: finalPrompt,
    width: options.width,
    height: options.height,
    outputFormat: options.outputFormat,
    inputReference: inputReference
      ? {
          bytes: inputReference.bytes,
          filename: inputReference.filename,
          contentType: inputReference.contentType
        }
      : undefined
  });
  return writeImageCandidate(
    options.workshopId,
    options.moduleId,
    options.cycleId,
    options.assetId,
    source,
    finalPrompt,
    provider,
    image,
    options.outputFormat,
    inputReference
      ? {
          path: inputReference.path,
          hash: inputReference.hash,
          contentType: inputReference.contentType
        }
      : undefined
  );
}

export async function promoteImage(
  manifestPath: string,
  targetRelativePath: string,
  roots: MediaRoots = { candidatesRoot, workshopsRoot }
): Promise<void> {
  const resolvedManifestPath = path.isAbsolute(manifestPath)
    ? manifestPath
    : path.resolve(roots.repositoryRoot ?? repositoryRoot, manifestPath);
  const raw = await readJson(resolvedManifestPath);
  const manifest = generatedAssetSchema.parse(raw);
  if (manifest.kind !== "image") throw new Error("Only image candidates can be promoted with this command");
  if (manifest.reviewStatus !== "candidate") {
    throw new Error(`Only candidate images can be promoted, received ${manifest.reviewStatus}`);
  }
  if (!(await pathExists(manifest.location))) throw new Error(`Candidate image does not exist: ${manifest.location}`);

  const candidateRelativePath = path.relative(roots.candidatesRoot, resolvedManifestPath);
  if (candidateRelativePath.startsWith("..") || path.isAbsolute(candidateRelativePath)) {
    throw new Error("Candidate manifest must be inside generated/candidates");
  }
  const workshopId = candidateRelativePath.split(path.sep)[0];
  if (!workshopId) throw new Error("Candidate manifest is not inside a workshop candidate folder");
  const normalizedTarget = targetRelativePath.replaceAll("\\", "/");
  if (!portableWorkshopPath(normalizedTarget)) {
    throw new Error("Target must use a path relative to the workshop folder");
  }
  const target = path.resolve(roots.workshopsRoot, workshopId, ...normalizedTarget.split("/"));
  const workshopRoot = path.resolve(roots.workshopsRoot, workshopId);
  if (!target.startsWith(`${workshopRoot}${path.sep}`)) throw new Error("Target must remain inside the workshop folder");
  const sourcePath = path.resolve(workshopRoot, ...manifest.source.split("/"));
  if (!(await pathExists(sourcePath))) throw new Error(`Source does not exist: ${manifest.source}`);

  const candidateImage = path.resolve(manifest.location);
  const candidateImageRelative = path.relative(roots.candidatesRoot, candidateImage);
  if (candidateImageRelative.startsWith("..") || path.isAbsolute(candidateImageRelative)) {
    throw new Error("Candidate image must be inside generated/candidates");
  }
  await assertImageDimensions(candidateImage, manifest.width, manifest.height);
  if ((await pathExists(target)) || (await pathExists(`${target}.json`))) {
    throw new Error(`Approved asset already exists: ${normalizedTarget}`);
  }

  await ensureDir(path.dirname(target));
  await copy(manifest.location, target, { overwrite: false });
  const approved = { ...raw, reviewStatus: "approved", location: normalizedTarget };
  await writeJson(`${target}.json`, approved, { spaces: 2 });
  await writeJson(resolvedManifestPath, approved, { spaces: 2 });
}

export async function validateApprovedImageSidecars(root = repositoryRoot): Promise<number> {
  const rasterPaths = await fg(
    [
      "workshops/*/assets/images/**/*.{png,jpg,jpeg,webp}",
      "workshops/*/content/modules/*/media/references/**/*.{png,jpg,jpeg,webp}",
      "workshops/*/content/storyboards/*/references/**/*.{png,jpg,jpeg,webp}"
    ],
    { cwd: root, absolute: true, onlyFiles: true }
  );
  const errors: string[] = [];

  for (const imagePath of rasterPaths) {
    const relativeImage = path.relative(root, imagePath).split(path.sep).join("/");
    const parts = relativeImage.split("/");
    const workshopId = parts[1];
    if (!workshopId) {
      errors.push(`${relativeImage}: cannot determine workshop id`);
      continue;
    }
    const workshopRoot = path.join(root, "workshops", workshopId);
    const sidecarPath = `${imagePath}.json`;
    if (!(await pathExists(sidecarPath))) {
      errors.push(`${relativeImage}: missing approved image sidecar`);
      continue;
    }

    try {
      const manifest = generatedAssetSchema.parse(await readJson(sidecarPath));
      if (manifest.kind !== "image") throw new Error("sidecar kind must be image");
      if (manifest.reviewStatus !== "approved") {
        throw new Error(`reviewStatus must be approved, received ${manifest.reviewStatus}`);
      }
      if (!portableWorkshopPath(manifest.location)) {
        throw new Error("location must be a forward-slash path relative to the workshop");
      }
      const expectedLocation = path.relative(workshopRoot, imagePath).split(path.sep).join("/");
      if (manifest.location !== expectedLocation) {
        throw new Error(`location must match ${expectedLocation}`);
      }
      const sourcePath = path.resolve(workshopRoot, ...manifest.source.split("/"));
      if (!(await pathExists(sourcePath))) throw new Error(`source does not exist: ${manifest.source}`);
      await assertImageDimensions(imagePath, manifest.width, manifest.height);
    } catch (error) {
      errors.push(`${relativeImage}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Approved image validation failed:\n- ${errors.join("\n- ")}`);
  }
  return rasterPaths.length;
}

export async function submitVideo(options: {
  workshopId: string;
  moduleId: string;
  cycleId: string;
  assetId: string;
  promptFile: string;
  source: string;
  durationSeconds: number;
  aspectRatio: "16:9" | "9:16" | "1:1";
  inputReference?: string;
}): Promise<string> {
  const promptPath = path.resolve(repositoryRoot, options.promptFile);
  const prompt = (await readFile(promptPath, "utf8")).trim();
  if (!prompt) throw new Error("The prompt file is empty");
  const source = await normalizedSource(options.workshopId, options.source);
  let inputReference:
    | {
        bytes: Uint8Array;
        filename: string;
        contentType: "image/jpeg" | "image/png" | "image/webp";
        path: string;
        hash: string;
      }
    | undefined;
  if (options.inputReference) {
    const referencePath = path.resolve(repositoryRoot, options.inputReference);
    const relativeReferencePath = path.relative(repositoryRoot, referencePath);
    if (relativeReferencePath.startsWith("..") || path.isAbsolute(relativeReferencePath)) {
      throw new Error("Input reference must remain inside the repository");
    }
    if (!(await pathExists(referencePath))) throw new Error(`Input reference does not exist: ${options.inputReference}`);
    const bytes = new Uint8Array(await readFile(referencePath));
    inputReference = {
      bytes,
      filename: path.basename(referencePath),
      contentType: videoReferenceContentType(referencePath),
      path: relativeReferencePath.split(path.sep).join("/"),
      hash: digest(bytes)
    };
  }
  const provider = new SoraVideoProvider();
  const job = await provider.create({
    prompt,
    durationSeconds: options.durationSeconds,
    aspectRatio: options.aspectRatio,
    inputReference: inputReference
      ? {
          bytes: inputReference.bytes,
          filename: inputReference.filename,
          contentType: inputReference.contentType
        }
      : undefined
  });
  const manifestPath = path.join(
    candidateCycleDirectory(
      candidatesRoot,
      options.workshopId,
      options.moduleId,
      options.cycleId,
      "video"
    ),
    `${options.assetId}.json`
  );
  await ensureDir(path.dirname(manifestPath));
  await writeJson(
    manifestPath,
    {
      schemaVersion: 1,
      id: options.assetId,
      kind: "video",
      provider: provider.name,
      deployment: process.env.FOUNDRY_SORA_DEPLOYMENT,
      promptHash: digest(prompt),
      source,
      createdAt: new Date().toISOString(),
      reviewStatus: "candidate",
      location: job.downloadUrl ?? `sora-job:${job.id}`,
      durationSeconds: options.durationSeconds,
      inputReference: inputReference
        ? {
            path: inputReference.path,
            hash: inputReference.hash,
            contentType: inputReference.contentType
          }
        : undefined,
      job
    },
    { spaces: 2 }
  );
  return manifestPath;
}

function approvedVideoManifestPath(manifestPath: string, assetId: string): string {
  const relative = path.relative(candidatesRoot, path.resolve(manifestPath));
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Candidate video manifest must be inside generated/candidates");
  }
  const [workshopId, moduleId] = relative.split(path.sep);
  if (!workshopId || !moduleId) {
    throw new Error("Candidate video manifest must use workshop/module/cycle layout");
  }
  return path.join(
    workshopsRoot,
    workshopId,
    "assets",
    "video-manifests",
    moduleId,
    `${assetId}.json`
  );
}

export async function publishVideo(manifestPathOption: string, videoPathOption: string): Promise<void> {
  const manifestPath = path.resolve(repositoryRoot, manifestPathOption);
  const videoPath = path.resolve(repositoryRoot, videoPathOption);
  const raw = await readJson(manifestPath);
  const manifest = generatedAssetSchema.parse(raw);
  if (manifest.kind !== "video") throw new Error("Only video manifests can be published with this command");
  if (manifest.reviewStatus !== "candidate") {
    throw new Error(`Only candidate videos can be published, received ${manifest.reviewStatus}`);
  }
  const approvedManifestPath = approvedVideoManifestPath(manifestPath, manifest.id);
  if (await pathExists(approvedManifestPath)) {
    throw new Error(`Approved video manifest already exists: ${approvedManifestPath}`);
  }
  const bytes = new Uint8Array(await readFile(videoPath));
  const extension = path.extname(videoPath).toLowerCase();
  const contentType = extension === ".webm" ? "video/webm" : "video/mp4";
  const uploaded = await uploadVideo(`${manifest.id}/${manifest.promptHash.slice(0, 12)}${extension}`, bytes, contentType);
  const approved = {
    ...raw,
    reviewStatus: "approved",
    location: uploaded.url,
    blobName: uploaded.blobName
  };
  await ensureDir(path.dirname(approvedManifestPath));
  await writeJson(approvedManifestPath, approved, { spaces: 2 });
  await writeJson(
    manifestPath,
    approved,
    { spaces: 2 }
  );
}

export async function refreshVideoStatus(manifestPathOption: string): Promise<void> {
  const manifestPath = path.resolve(repositoryRoot, manifestPathOption);
  const raw = await readJson(manifestPath);
  const manifest = generatedAssetSchema.parse(raw);
  if (manifest.kind !== "video") throw new Error("Only video manifests have Sora job status");
  const jobId = raw.job?.id;
  if (typeof jobId !== "string" || !jobId) throw new Error("The manifest does not contain a Sora job id");
  const job = await new SoraVideoProvider().get(jobId);
  await writeJson(
    manifestPath,
    { ...raw, location: job.downloadUrl ?? raw.location, job },
    { spaces: 2 }
  );
}

export async function downloadVideo(manifestPathOption: string, outputPathOption: string): Promise<void> {
  const manifestPath = path.resolve(repositoryRoot, manifestPathOption);
  const raw = await readJson(manifestPath);
  const manifest = generatedAssetSchema.parse(raw);
  if (manifest.kind !== "video") throw new Error("Only video manifests can be downloaded with this command");
  const jobId = raw.job?.id;
  if (typeof jobId !== "string" || !jobId) throw new Error("The manifest does not contain a Sora job id");
  if (raw.job?.status !== "completed") throw new Error(`Job is not complete (status: ${raw.job?.status})`);
  const bytes = await new SoraVideoProvider().download(jobId);
  const dest = path.resolve(repositoryRoot, outputPathOption);
  await ensureDir(path.dirname(dest));
  await writeFile(dest, bytes);
  console.log(`Saved ${bytes.byteLength} bytes to ${dest}`);
}
