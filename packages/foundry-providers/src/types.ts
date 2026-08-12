export interface ImageGenerationRequest {
  prompt: string;
  width: number;
  height: number;
  outputFormat: "png" | "jpeg";
  inputReference?: {
    bytes: Uint8Array;
    filename: string;
    contentType: "image/jpeg" | "image/png";
  };
}

export interface GeneratedImage {
  bytes: Uint8Array;
  contentType: string;
  revisedPrompt?: string;
}

export type ImageProviderName = "gpt-image-2" | "flux-2-pro" | "mai-image-2.5";

export interface VideoGenerationRequest {
  prompt: string;
  durationSeconds: number;
  aspectRatio: "16:9" | "9:16" | "1:1";
  inputReference?: {
    bytes: Uint8Array;
    filename: string;
    contentType: "image/jpeg" | "image/png" | "image/webp";
  };
}

export interface VideoJob {
  id: string;
  status: "queued" | "running" | "completed" | "failed";
  downloadUrl?: string;
  error?: string;
}

export interface ImageProvider {
  readonly name: ImageProviderName;
  generate(request: ImageGenerationRequest): Promise<GeneratedImage>;
}

export interface VideoProvider {
  readonly name: "sora-2";
  create(request: VideoGenerationRequest): Promise<VideoJob>;
  get(jobId: string): Promise<VideoJob>;
  download(jobId: string): Promise<Uint8Array>;
}
