import path from "node:path";
import { fileURLToPath } from "node:url";

const packageDirectory = path.dirname(fileURLToPath(import.meta.url));

export const repositoryRoot = path.resolve(packageDirectory, "../../..");
export const workshopsRoot = path.join(repositoryRoot, "workshops");
export const candidatesRoot = path.join(repositoryRoot, "generated", "candidates");
export const portalCatalogPath = path.join(repositoryRoot, "apps", "portal", "src", "catalog.json");
export const outputRoot = path.join(repositoryRoot, "dist");

