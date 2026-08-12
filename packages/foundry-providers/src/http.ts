import { DefaultAzureCredential } from "@azure/identity";

const tenantId = process.env.AZURE_TENANT_ID;
const credential = tenantId
  ? new DefaultAzureCredential({ tenantId })
  : new DefaultAzureCredential();

export class FoundryRequestError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly responseBody: string
  ) {
    super(message);
  }
}

export async function foundryRequest<T>(
  endpoint: string,
  scope: string,
  path: string,
  init: RequestInit
): Promise<T> {
  const token = await credential.getToken(scope);
  if (!token) throw new Error(`Unable to obtain an Entra token for ${scope}`);

  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token.token}`);
  if (!(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${endpoint.replace(/\/$/, "")}/${path.replace(/^\//, "")}`, {
    ...init,
    headers,
    signal: AbortSignal.timeout(120_000)
  });

  if (!response.ok) {
    const body = await response.text();
    throw new FoundryRequestError(`Foundry request failed with ${response.status}`, response.status, body);
  }

  return (await response.json()) as T;
}

/** Downloads binary content from a Foundry endpoint using bearer auth. */
export async function foundryDownload(endpoint: string, scope: string, path: string): Promise<Uint8Array> {
  const token = await credential.getToken(scope);
  if (!token) throw new Error(`Unable to obtain an Entra token for ${scope}`);

  const url = `${endpoint.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token.token}` },
    signal: AbortSignal.timeout(300_000)
  });

  if (!response.ok) {
    const body = await response.text();
    throw new FoundryRequestError(`Foundry download failed with ${response.status}`, response.status, body);
  }
  return new Uint8Array(await response.arrayBuffer());
}

/** Returns the redirect URL (or direct URL) for a Foundry binary resource without downloading the body. */
export async function foundryResourceUrl(endpoint: string, scope: string, path: string): Promise<string> {
  const token = await credential.getToken(scope);
  if (!token) throw new Error(`Unable to obtain an Entra token for ${scope}`);

  const url = `${endpoint.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  const response = await fetch(url, {
    method: "GET",
    redirect: "manual",
    headers: { Authorization: `Bearer ${token.token}` },
    signal: AbortSignal.timeout(30_000)
  });

  if (response.status === 302 || response.status === 301 || response.status === 307 || response.status === 308) {
    const location = response.headers.get("location");
    if (location) return location;
  }
  if (response.ok) return url;
  const body = await response.text();
  throw new FoundryRequestError(`Foundry resource URL request failed with ${response.status}`, response.status, body);
}

export function requiredEnvironment(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Required environment variable is not set: ${name}`);
  return value;
}
