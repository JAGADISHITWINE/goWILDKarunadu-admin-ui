/**
 * Client-side HD Image Optimizer.
 * Ensures uploaded images maintain crisp HD fidelity (up to 1920x1080)
 * while keeping file sizes small (~150KB-300KB) and memory usage minimal.
 */
export async function optimizeImageForUpload(
  file: File,
  maxDimension = 1920,
  quality = 0.85
): Promise<File> {
  if (!file) return file;
  const mime = String(file.type || '').toLowerCase();

  // If already svg or gif (potentially animated), preserve as-is
  if (mime.includes('svg') || mime.includes('gif')) {
    return file;
  }

  // If small enough already (< 200KB) and known raster, return
  if (file.size < 200 * 1024) {
    return file;
  }

  return new Promise<File>((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;

      // Calculate HD proportions (max 1920 inside fit)
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      const outputType = 'image/webp';
      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= file.size) {
            resolve(file);
            return;
          }

          const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
          const optimizedFile = new File([blob], `${baseName}.webp`, {
            type: outputType,
            lastModified: Date.now(),
          });
          resolve(optimizedFile);
        },
        outputType,
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };

    img.src = url;
  });
}
