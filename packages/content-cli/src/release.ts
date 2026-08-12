import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fsExtra from "fs-extra";
import matter from "gray-matter";
import {
  loadCatalog,
  releaseManifestSchema,
  type ContentCatalog,
  type ReleaseManifest
} from "@ghcp/content-schema";
import { gitSnapshot } from "./lifecycle.js";
import { createPortalCatalog } from "./catalog.js";
import { repositoryRoot } from "./paths.js";

const { copy, ensureDir, pathExists, readFile, readdir, writeFile, writeJson } = fsExtra;
const execFileAsync = promisify(execFile);

export async function loadReleaseManifest(
  manifestOption: string,
  root = repositoryRoot
): Promise<{ filePath: string; manifest: ReleaseManifest }> {
  const filePath = path.resolve(root, manifestOption);
  const relative = path.relative(root, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Release manifest must remain inside the repository");
  }
  if (!(await pathExists(filePath))) throw new Error(`Release manifest does not exist: ${manifestOption}`);
  const parsed = matter(await readFile(filePath, "utf8"));
  return { filePath, manifest: releaseManifestSchema.parse(parsed.data) };
}

export function filterCatalogForRelease(
  catalog: ContentCatalog,
  release: ReleaseManifest
): ContentCatalog {
  return {
    workshops: release.workshops.map((selection) => {
      const workshop = catalog.workshops.find((entry) => entry.workshop.data.id === selection.id);
      if (!workshop) throw new Error(`Release references unknown workshop: ${selection.id}`);
      const selectedModules = selection.modules.map((moduleId) => {
        const module = workshop.modules.find((candidate) => candidate.data.id === moduleId);
        if (!module) throw new Error(`Release references unknown module "${moduleId}" in "${selection.id}"`);
        return module;
      });
      const deliveryVariants = workshop.workshop.data.deliveryVariants?.filter((variant) =>
        variant.days.every((day) =>
          day.agenda.every((block) => !block.module || selection.modules.includes(block.module))
        )
      );
      const defaultDeliveryVariant = deliveryVariants?.some(
        (variant) => variant.id === workshop.workshop.data.defaultDeliveryVariant
      )
        ? workshop.workshop.data.defaultDeliveryVariant
        : undefined;
      return {
        ...workshop,
        workshop: {
          ...workshop.workshop,
          data: {
            ...workshop.workshop.data,
            modules: selection.modules,
            defaultDeliveryVariant,
            deliveryVariants
          }
        },
        modules: selectedModules
      };
    })
  };
}

export async function validateApprovedRelease(
  manifestOption: string,
  root = repositoryRoot
): Promise<ReleaseManifest> {
  const { filePath, manifest } = await loadReleaseManifest(manifestOption, root);
  if (manifest.status !== "approved" && manifest.status !== "deploying" && manifest.status !== "verified") {
    throw new Error(`Release manifest must be approved before deployment, received ${manifest.status}`);
  }
  const snapshot = await gitSnapshot(root);
  if (snapshot.dirtyFiles.length > 0) {
    throw new Error("Release validation requires a clean worktree");
  }
  try {
    await execFileAsync("git", ["merge-base", "--is-ancestor", manifest.commit, snapshot.commit], {
      cwd: root
    });
  } catch {
    throw new Error(`Release content commit ${manifest.commit} is not an ancestor of ${snapshot.commit}`);
  }
  const { stdout } = await execFileAsync(
    "git",
    ["diff", "--name-only", `${manifest.commit}..${snapshot.commit}`],
    { cwd: root }
  );
  const manifestPath = path.relative(root, filePath).split(path.sep).join("/");
  const changedPaths = stdout
    .split(/\r?\n/)
    .map((entry) => entry.trim())
    .filter(Boolean);
  const contentChanges = changedPaths.filter((entry) => entry !== manifestPath);
  if (contentChanges.length > 0) {
    throw new Error(
      `Release content changed after reviewed commit ${manifest.commit}: ${contentChanges.join(", ")}`
    );
  }
  return manifest;
}

export async function prepareRelease(
  releaseId: string,
  workshopId: string,
  catalog: ContentCatalog,
  root = repositoryRoot,
  now = new Date()
): Promise<string> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(releaseId)) {
    throw new Error("Release id must use lowercase kebab-case");
  }
  const workshop = catalog.workshops.find((entry) => entry.workshop.data.id === workshopId);
  if (!workshop) throw new Error(`Workshop does not exist: ${workshopId}`);
  const snapshot = await gitSnapshot(root);
  if (snapshot.dirtyFiles.length > 0) {
    throw new Error("Release preparation requires a clean worktree and an exact reviewed commit");
  }
  const relativePath = path.join("releases", `${releaseId}.md`);
  const filePath = path.join(root, relativePath);
  if (await pathExists(filePath)) throw new Error(`Release manifest already exists: ${relativePath}`);
  const data = releaseManifestSchema.parse({
    schemaVersion: 1,
    kind: "release-manifest",
    id: releaseId,
    title: `${workshop.workshop.data.title} release`,
    status: "draft",
    commit: snapshot.commit,
    createdAt: now.toISOString(),
    workshops: [
      {
        id: workshopId,
        modules: workshop.workshop.data.modules
      }
    ]
  });
  await ensureDir(path.dirname(filePath));
  await writeFile(
    filePath,
    matter.stringify(
      `\n# ${data.title}\n\nThis draft does not authorize deployment. Record local review evidence and explicit human approval before changing status to \`approved\`.\n`,
      data
    ),
    "utf8"
  );
  return relativePath.split(path.sep).join("/");
}

const PUBLIC_WORKSPACE_PATHS = [
  ".gitignore",
  ".gitattributes",
  "package.json",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "tsconfig.base.json",
  "apps",
  "packages",
  "scripts"
];

async function copyPath(source: string, destination: string): Promise<void> {
  if (!(await pathExists(source))) return;
  await copy(source, destination, {
    filter: (candidate) => {
      const name = path.basename(candidate);
      return name !== "node_modules" && name !== "dist" && name !== ".vite" && name !== ".slidev";
    }
  });
}

async function copyRequiredPath(source: string, destination: string): Promise<void> {
  if (!(await pathExists(source))) throw new Error(`Required public release path does not exist: ${source}`);
  await copyPath(source, destination);
}

async function copyWorkshopPath(workshopRoot: string, outputWorkshopRoot: string, relativePath: string) {
  const source = path.resolve(workshopRoot, relativePath);
  const relative = path.relative(workshopRoot, source);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Public release dependency escapes the workshop root: ${relativePath}`);
  }
  if (!(await pathExists(source))) {
    throw new Error(`Public release dependency does not exist: ${relativePath}`);
  }
  const destination = path.join(outputWorkshopRoot, ...relativePath.split("/"));
  await ensureDir(path.dirname(destination));
  await copyPath(source, destination);
  if (await pathExists(`${source}.json`)) await copyPath(`${source}.json`, `${destination}.json`);
}

function pathKey(value: string): string {
  const normalized = path.normalize(value);
  return process.platform === "win32" ? normalized.toLowerCase() : normalized;
}

export async function exportPublicRelease(
  manifestOption: string,
  outputDirectory: string,
  root = repositoryRoot
): Promise<string> {
  const output = path.resolve(root, outputDirectory);
  const outputRelative = path.relative(root, output);
  if (outputRelative.startsWith("..") || path.isAbsolute(outputRelative)) {
    throw new Error("Public release output must remain inside the repository");
  }
  if (await pathExists(output)) {
    if ((await readdir(output)).length > 0) throw new Error("Public release output directory must be empty");
  } else {
    await ensureDir(output);
  }

  const manifest = await validateApprovedRelease(manifestOption, root);
  const completeCatalog = await loadCatalog(root);
  const catalog = filterCatalogForRelease(completeCatalog, manifest);

  for (const relativePath of PUBLIC_WORKSPACE_PATHS) {
    await copyRequiredPath(path.join(root, relativePath), path.join(output, relativePath));
  }
  await copyRequiredPath(
    path.join(root, ".github", "public-release", "pages.yml"),
    path.join(output, ".github", "workflows", "pages.yml")
  );
  await copyRequiredPath(
    path.join(root, ".github", "public-release", "README.md"),
    path.join(output, "README.md")
  );

  for (const entry of catalog.workshops) {
    const outputWorkshopRoot = path.join(output, "workshops", entry.workshop.data.id);
    await ensureDir(outputWorkshopRoot);
    const {
      lifecycleVersion: _lifecycleVersion,
      totalMinutes: _totalMinutes,
      schedule: _schedule,
      runOfShow: _runOfShow,
      ...publicWorkshopData
    } = entry.workshop.data;
    const publicWorkshop = JSON.parse(JSON.stringify(publicWorkshopData));
    await writeFile(
      path.join(outputWorkshopRoot, "workshop.md"),
      matter.stringify(entry.workshop.body, publicWorkshop),
      "utf8"
    );

    const copied = new Set<string>();
    const copyDependency = async (relativePath: string) => {
      const normalized = relativePath.split(path.sep).join("/");
      if (copied.has(normalized)) return;
      copied.add(normalized);
      await copyWorkshopPath(entry.root, outputWorkshopRoot, normalized);
    };

    for (const module of entry.modules) {
      await copyDependency(path.relative(entry.root, module.filePath));
      const references = [
        module.data.slides,
        ...module.data.sourceDocuments,
        ...(module.data.generation ? [module.data.generation.manifest] : []),
        ...module.data.labs,
        ...module.data.missions,
        ...module.data.assets
      ];
      for (const reference of references) await copyDependency(reference);
      for (const asset of module.data.assets) {
        const sidecarPath = path.resolve(entry.root, `${asset}.json`);
        if (!(await pathExists(sidecarPath))) continue;
        const sidecar = JSON.parse(await readFile(sidecarPath, "utf8")) as { source?: unknown };
        if (typeof sidecar.source === "string") await copyDependency(sidecar.source);
      }

      const modulePublic = path.join(path.dirname(module.filePath), "public");
      if (await pathExists(modulePublic)) {
        const relativePublic = path.relative(entry.root, modulePublic);
        await copyPath(modulePublic, path.join(outputWorkshopRoot, relativePublic));
      }
    }

    const selectedSourcePaths = new Set(
      entry.modules.flatMap((module) =>
        module.data.sourceDocuments.map((item) => pathKey(path.resolve(entry.root, item)))
      )
    );
    for (const storyboard of entry.storyboards.filter((item) => selectedSourcePaths.has(pathKey(item.filePath)))) {
      for (const scenePath of storyboard.data.scenes) await copyDependency(scenePath);
      for (const characterPath of storyboard.data.characters) {
        await copyDependency(characterPath);
        const characterPathKey = pathKey(path.resolve(entry.root, characterPath));
        const character = entry.characters.find((item) => pathKey(item.filePath) === characterPathKey);
        if (character) {
          for (const referenceImage of character.data.referenceImages) await copyDependency(referenceImage);
        }
      }
    }
  }

  const manifestRelative = path.relative(root, path.resolve(root, manifestOption));
  await copyPath(path.resolve(root, manifestOption), path.join(output, manifestRelative));
  await ensureDir(path.join(output, "apps", "portal", "src"));
  await writeJson(
    path.join(output, "apps", "portal", "src", "catalog.json"),
    createPortalCatalog(catalog),
    { spaces: 2 }
  );
  await writeJson(
    path.join(output, "release-provenance.json"),
    { releaseId: manifest.id, sourceCommit: manifest.commit },
    { spaces: 2 }
  );
  await loadCatalog(output);
  return output;
}

export async function verifyReleaseRoutes(
  manifestOption: string,
  siteUrl: string,
  catalog: ContentCatalog,
  root = repositoryRoot
): Promise<string[]> {
  const manifest = await validateApprovedRelease(manifestOption, root);
  const selected = filterCatalogForRelease(catalog, manifest);
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  const routes = [
    base,
    ...selected.workshops.flatMap((entry) =>
      [
        `${base}workshops/${entry.workshop.data.id}/`,
        ...(entry.workshop.data.deliveryVariants ?? []).map(
          (variant) => `${base}workshops/${entry.workshop.data.id}/variants/${variant.id}/`
        ),
        ...entry.modules.map(
          (module) => `${base}workshops/${entry.workshop.data.id}/${module.data.id}/`
        )
      ]
    )
  ];
  for (const route of routes) {
    const response = await fetch(route, { redirect: "follow" });
    if (!response.ok) throw new Error(`Release route returned ${response.status}: ${route}`);
  }
  return routes;
}

export async function validateRollbackTarget(
  manifestOption: string,
  root = repositoryRoot
): Promise<ReleaseManifest> {
  const { manifest } = await loadReleaseManifest(manifestOption, root);
  if (manifest.status !== "verified") {
    throw new Error("Rollback target must be a previously verified release");
  }
  await validateApprovedRelease(manifestOption, root);
  return manifest;
}
