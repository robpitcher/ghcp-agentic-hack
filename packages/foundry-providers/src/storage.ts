import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient } from "@azure/storage-blob";
import { requiredEnvironment } from "./http.js";

export interface UploadedVideo {
  blobName: string;
  url: string;
}

export async function uploadVideo(
  blobName: string,
  bytes: Uint8Array,
  contentType: string
): Promise<UploadedVideo> {
  const accountUrl = requiredEnvironment("AZURE_STORAGE_ACCOUNT_URL");
  const containerName = requiredEnvironment("AZURE_STORAGE_VIDEO_CONTAINER");
  const service = new BlobServiceClient(accountUrl, new DefaultAzureCredential());
  const container = service.getContainerClient(containerName);
  const blob = container.getBlockBlobClient(blobName);

  await blob.uploadData(bytes, {
    blobHTTPHeaders: { blobContentType: contentType }
  });

  return { blobName, url: blob.url };
}

