import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";
import matter from "gray-matter";
import { loadCatalog } from "@ghcp/content-schema";
import { scaffoldLocation, scaffoldMission, scaffoldWorkshop } from "./scaffold.js";

const execFileAsync = promisify(execFile);
const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

describe("lifecycle v2 scaffolding", () => {
  it("creates a resumable workshop and wires missions and locations", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-scaffold-"));
    temporaryDirectories.push(root);
    const testWorkshopsRoot = path.join(root, "workshops");
    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["config", "user.email", "test@example.com"], { cwd: root });
    await execFileAsync("git", ["config", "user.name", "Test"], { cwd: root });
    await writeFile(path.join(root, "seed.txt"), "seed");
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Initial"], { cwd: root });

    await scaffoldWorkshop("test-workshop", "Test Workshop", {
      repositoryRoot: root,
      workshopsRoot: testWorkshopsRoot
    });
    await scaffoldMission(
      "test-workshop",
      "introduction",
      "first-mission",
      "First Mission",
      testWorkshopsRoot
    );
    await scaffoldLocation("test-workshop", "field-office", "Field Office", testWorkshopsRoot);

    const catalog = await loadCatalog(root);
    const entry = catalog.workshops[0];
    expect(entry?.productionState?.data.lifecycleVersion).toBe(2);
    expect(entry?.missions.map((mission) => mission.data.id)).toEqual(["first-mission"]);
    expect(entry?.locations.map((location) => location.data.id)).toEqual(["field-office"]);
    expect(entry?.complexTopicPlans[0]?.data.module).toBe("introduction");

    const modulePath = path.join(
      testWorkshopsRoot,
      "test-workshop",
      "content",
      "modules",
      "01-introduction",
      "module.md"
    );
    const module = matter(await readFile(modulePath, "utf8"));
    expect(module.data.missions).toEqual(["content/missions/introduction/first-mission.md"]);

    const iterationReviewPath = path.join(
      testWorkshopsRoot,
      "test-workshop",
      "content",
      "production",
      "iteration-review.md"
    );
    const iterationReview = await readFile(iterationReviewPath, "utf8");
    expect(iterationReview).toContain("## Initiative preflight template");
    expect(iterationReview).toContain("## Review log template");

    await expect(
      scaffoldWorkshop("test-workshop", "Replacement", {
        repositoryRoot: root,
        workshopsRoot: testWorkshopsRoot
      })
    ).rejects.toThrow("Refusing to overwrite existing file");
    expect(await readFile(iterationReviewPath, "utf8")).toBe(iterationReview);
  });

  it("never overwrites a pre-existing iteration review", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "ghcp-scaffold-"));
    temporaryDirectories.push(root);
    const testWorkshopsRoot = path.join(root, "workshops");
    const iterationReviewPath = path.join(
      testWorkshopsRoot,
      "protected-workshop",
      "content",
      "production",
      "iteration-review.md"
    );
    const existingReview = "# User-owned iteration evidence\n";

    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["config", "user.email", "test@example.com"], { cwd: root });
    await execFileAsync("git", ["config", "user.name", "Test"], { cwd: root });
    await writeFile(path.join(root, "seed.txt"), "seed");
    await execFileAsync("git", ["add", "."], { cwd: root });
    await execFileAsync("git", ["commit", "-m", "Initial"], { cwd: root });
    await mkdir(path.dirname(iterationReviewPath), { recursive: true });
    await writeFile(iterationReviewPath, existingReview, { encoding: "utf8", flag: "wx" });

    await expect(
      scaffoldWorkshop("protected-workshop", "Protected Workshop", {
        repositoryRoot: root,
        workshopsRoot: testWorkshopsRoot
      })
    ).rejects.toThrow("Refusing to overwrite existing file");
    expect(await readFile(iterationReviewPath, "utf8")).toBe(existingReview);
  });
});
