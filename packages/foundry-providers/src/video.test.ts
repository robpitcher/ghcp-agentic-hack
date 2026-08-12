import { describe, expect, it } from "vitest";
import { createSoraRequestBody } from "./video.js";

describe("createSoraRequestBody", () => {
  it("creates the JSON body used for text-only video", () => {
    const body = createSoraRequestBody(
      { prompt: "A precise animation", durationSeconds: 8, aspectRatio: "16:9" },
      "sora-2"
    );

    expect(typeof body).toBe("string");
    expect(JSON.parse(body as string)).toEqual({
      model: "sora-2",
      prompt: "A precise animation",
      seconds: "8",
      size: "1280x720"
    });
  });

  it("creates multipart form data for an input reference", async () => {
    const body = createSoraRequestBody(
      {
        prompt: "Animate the supplied frame",
        durationSeconds: 12,
        aspectRatio: "9:16",
        inputReference: {
          bytes: new Uint8Array([1, 2, 3]),
          filename: "frame-01.png",
          contentType: "image/png"
        }
      },
      "sora-2"
    );

    expect(body).toBeInstanceOf(FormData);
    const form = body as FormData;
    expect(form.get("model")).toBe("sora-2");
    expect(form.get("seconds")).toBe("12");
    expect(form.get("size")).toBe("720x1280");
    const reference = form.get("input_reference") as File;
    expect(reference.name).toBe("frame-01.png");
    expect(reference.type).toBe("image/png");
    expect(new Uint8Array(await reference.arrayBuffer())).toEqual(new Uint8Array([1, 2, 3]));
  });

  it("rejects durations unsupported by the v1 API", () => {
    expect(() =>
      createSoraRequestBody(
        { prompt: "An unsupported long clip", durationSeconds: 20, aspectRatio: "16:9" },
        "sora-2"
      )
    ).toThrow("4, 8, or 12 seconds");
  });
});