import { foundryDownload, foundryRequest, foundryResourceUrl, requiredEnvironment } from "./http.js";
import type { VideoGenerationRequest, VideoJob, VideoProvider } from "./types.js";

interface SoraResponse {
  id: string;
  status: "queued" | "in_progress" | "completed" | "failed";
  url?: string;
  error?: { message?: string } | string;
}

function outputSize(aspectRatio: VideoGenerationRequest["aspectRatio"]): string {
  if (aspectRatio === "16:9") return "1280x720";
  if (aspectRatio === "9:16") return "720x1280";
  return "720x720";
}

export function createSoraRequestBody(request: VideoGenerationRequest, deployment: string): string | FormData {
  if (![4, 8, 12].includes(request.durationSeconds)) {
    throw new Error("Sora video duration must be 4, 8, or 12 seconds");
  }
  const values = {
    model: deployment,
    prompt: request.prompt,
    seconds: request.durationSeconds.toString(),
    size: outputSize(request.aspectRatio)
  };
  if (!request.inputReference) return JSON.stringify(values);

  const form = new FormData();
  for (const [name, value] of Object.entries(values)) form.append(name, value);
  const referenceBuffer = new ArrayBuffer(request.inputReference.bytes.byteLength);
  new Uint8Array(referenceBuffer).set(request.inputReference.bytes);
  form.append(
    "input_reference",
    new Blob([referenceBuffer], { type: request.inputReference.contentType }),
    request.inputReference.filename
  );
  return form;
}

function toVideoJob(response: SoraResponse): VideoJob {
  return {
    id: response.id,
    status: response.status === "in_progress" ? "running" : response.status,
    downloadUrl: response.url,
    error: typeof response.error === "string" ? response.error : response.error?.message
  };
}

export class SoraVideoProvider implements VideoProvider {
  readonly name = "sora-2" as const;
  private readonly endpoint = requiredEnvironment("FOUNDRY_SORA_ENDPOINT");
  private readonly deployment = requiredEnvironment("FOUNDRY_SORA_DEPLOYMENT");
  private readonly scope = "https://ai.azure.com/.default";

  async create(request: VideoGenerationRequest): Promise<VideoJob> {
    const response = await foundryRequest<SoraResponse>(this.endpoint, this.scope, "videos", {
      method: "POST",
      body: createSoraRequestBody(request, this.deployment)
    });
    return toVideoJob(response);
  }

  async download(jobId: string): Promise<Uint8Array> {
    return foundryDownload(this.endpoint, this.scope, `videos/${encodeURIComponent(jobId)}/content`);
  }

  async get(jobId: string): Promise<VideoJob> {
    const response = await foundryRequest<SoraResponse>(
      this.endpoint,
      this.scope,
      `videos/${encodeURIComponent(jobId)}`,
      { method: "GET" }
    );
    const job = toVideoJob(response);
    // Fetch the signed download URL from the content endpoint when the job is done
    if (job.status === "completed" && !job.downloadUrl) {
      try {
        job.downloadUrl = await foundryResourceUrl(
          this.endpoint,
          this.scope,
          `videos/${encodeURIComponent(jobId)}/content`
        );
      } catch {
        // content endpoint not available yet — caller can retry
      }
    }
    return job;
  }
}

