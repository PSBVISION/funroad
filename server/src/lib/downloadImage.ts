import { fileTypeFromBuffer } from "file-type";
import sharp from "sharp";

type DownloadImageInput = {
  url: string;
  sourcePageUrl?: string;
};

async function fetchImageWithRetry(url: string, sourcePageUrl?: string) {
  const attempts = 2;
  const timeoutMs = 8000;
  let lastErr: unknown;

  for (let i = 0; i < attempts; i++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const parsedSource = sourcePageUrl ? new URL(sourcePageUrl) : null;
      const res = await fetch(url, {
        signal: controller.signal,
        redirect: "follow",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          ...(sourcePageUrl ? { referer: sourcePageUrl } : {}),
          ...(parsedSource ? { origin: parsedSource.origin } : {}),
        },
      });

      if (!res.ok) {
        throw new Error(
          `Download failed with status ${res.status} ${res.statusText}`
        );
      }

      return res;
    } catch (err) {
      lastErr = err;
      if (i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, 350));
      }
    } finally {
      clearTimeout(timer);
    }
  }

  throw lastErr instanceof Error
    ? lastErr
    : new Error("Download failed for unknown reason");
}

export async function downloadAndInspectImage({
  url,
  sourcePageUrl,
}: DownloadImageInput) {

  try {
    const res = await fetchImageWithRetry(url, sourcePageUrl);

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const MAX_BYTES = 10 * 1024 * 1024;

    if (buffer.length > MAX_BYTES) {
      throw new Error("Image too large");
    }

    const extractFileType = await fileTypeFromBuffer(buffer);
    if (!extractFileType) throw new Error("unknown file type");
    if (!extractFileType.mime.startsWith("image/"))
      throw new Error("Not an image");

    const meta = await sharp(buffer).metadata();
    const width = meta.width ?? 0;
    const height = meta.height ?? 0;

    const fileName = `img_${Date.now()}.${extractFileType.ext}`;

    return {
      buffer,
      contentType: extractFileType.mime,
      sizeBytes: buffer.length,
      width,
      height,
      fileName,
      fileNameNoExt: fileName.replace(/\.[^.]+$/, ""),
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
}
