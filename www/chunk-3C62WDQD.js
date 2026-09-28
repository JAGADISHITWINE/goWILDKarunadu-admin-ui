import {
  __async
} from "./chunk-KQE4QDNK.js";

// src/app/core/utils/image-optimizer.util.ts
function optimizeImageForUpload(file, maxDimension = 1920, quality = 0.85) {
  return __async(this, null, function* () {
    if (!file)
      return file;
    const mime = String(file.type || "").toLowerCase();
    if (mime.includes("svg") || mime.includes("gif")) {
      return file;
    }
    if (file.size < 200 * 1024) {
      return file;
    }
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round(height * maxDimension / width);
            width = maxDimension;
          } else {
            width = Math.round(width * maxDimension / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(file);
          return;
        }
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);
        const outputType = "image/webp";
        canvas.toBlob((blob) => {
          if (!blob || blob.size >= file.size) {
            resolve(file);
            return;
          }
          const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
          const optimizedFile = new File([blob], `${baseName}.webp`, {
            type: outputType,
            lastModified: Date.now()
          });
          resolve(optimizedFile);
        }, outputType, quality);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(file);
      };
      img.src = url;
    });
  });
}

export {
  optimizeImageForUpload
};
//# sourceMappingURL=chunk-3C62WDQD.js.map
