import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import fsExtra from "fs-extra";
import { loadCatalog } from "@ghcp/content-schema";
import { candidatesRoot, repositoryRoot } from "./paths.js";

const { ensureDir, writeFile } = fsExtra;

export async function compileStoryboardPrompt(workshopId: string, storyboardId: string): Promise<string> {
  const catalog = await loadCatalog(repositoryRoot);
  const workshop = catalog.workshops.find(({ workshop }) => workshop.data.id === workshopId);
  if (!workshop) throw new Error(`Unknown workshop: ${workshopId}`);
  const storyboard = workshop.storyboards.find(({ data }) => data.id === storyboardId);
  if (!storyboard) throw new Error(`Unknown storyboard: ${storyboardId}`);

  const characterSections = await Promise.all(
    storyboard.data.characters.map(async (relativePath) => {
      const source = matter(await readFile(path.join(workshop.root, relativePath), "utf8"));
      return `## Character reference\n\n${source.content.trim()}\n\nContinuity: ${(source.data.continuityRules ?? []).join("; ")}`;
    })
  );
  const sceneSections = await Promise.all(
    storyboard.data.scenes.map(async (relativePath, index) => {
      const source = matter(await readFile(path.join(workshop.root, relativePath), "utf8"));
      return `## Scene ${index + 1}: ${source.data.title}\n\nDuration: ${source.data.durationSeconds} seconds\n\nNarration: ${source.data.narration || "None"}\n\nVisual direction: ${source.data.visualDirection}\n\nContinuity: ${(source.data.continuityNotes ?? []).join("; ") || "Follow the character reference."}`;
    })
  );
  const prompt = [
    `# ${storyboard.data.title}`,
    `Purpose: ${storyboard.data.purpose}`,
    `Target duration: ${storyboard.data.targetDurationSeconds} seconds`,
    `Aspect ratio: ${storyboard.data.aspectRatio}`,
    ...characterSections,
    ...sceneSections
  ].join("\n\n");
  const output = path.join(path.dirname(storyboard.filePath), `${storyboardId}-prompt.md`);
  await ensureDir(path.dirname(output));
  await writeFile(output, prompt, "utf8");
  return output;
}
