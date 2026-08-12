import { describe, expect, it } from "vitest";
import type { VideoJob } from "./types.js";

describe("provider contracts", () => {
  it("represent a completed video job", () => {
    const job: VideoJob = {
      id: "video-1",
      status: "completed",
      downloadUrl: "https://example.test/video.mp4"
    };

    expect(job.status).toBe("completed");
  });
});

