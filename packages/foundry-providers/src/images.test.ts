import { describe, expect, it } from "vitest";
import { createMaiImageRequestBody } from "./images.js";

describe("createMaiImageRequestBody", () => {
  it("creates JSON for text-to-image generation", () => {
    const body = createMaiImageRequestBody(
      {
        prompt: "A precise process illustration",
        width: 1365,
        height: 768,
        outputFormat: "png"
      },
      "MAI-Image-2.5"
    );

    expect(typeof body).toBe("string");
    expect(JSON.parse(body as string)).toEqual({
      model: "MAI-Image-2.5",
      prompt: "A precise process illustration",
      width: 1365,
      height: 768
    });
  });

  it("creates multipart form data for an image edit", async () => {
    const body = createMaiImageRequestBody(
      {
        prompt: "Preserve the composition and make three precise edits",
        width: 1536,
        height: 864,
        outputFormat: "png",
        inputReference: {
          bytes: new Uint8Array([1, 2, 3]),
          filename: "opening-frame.png",
          contentType: "image/png"
        }
      },
      "MAI-Image-2.5"
    );

    expect(body).toBeInstanceOf(FormData);
    const form = body as FormData;
    expect(form.get("model")).toBe("MAI-Image-2.5");
    expect(form.get("prompt")).toBe("Preserve the composition and make three precise edits");
    const image = form.get("image") as File;
    expect(image.name).toBe("opening-frame.png");
    expect(image.type).toBe("image/png");
    expect(new Uint8Array(await image.arrayBuffer())).toEqual(new Uint8Array([1, 2, 3]));
  });
});
