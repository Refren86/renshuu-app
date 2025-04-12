import "dotenv/config";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function uploadImageToCloudinary(imageFile: string, name: string) {
  try {
    const uploadResult = await cloudinary.uploader.upload(imageFile, {
      public_id: name,
      folder: "renshuu",
      resource_type: "image",
      overwrite: true, // Replace existing images with same public_id
    });

    console.log("Upload successful:", uploadResult.secure_url);

    // Create an optimized version with auto-format and auto-quality
    const optimizedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
      secure: true,
    });

    // Create a square cropped version
    const croppedUrl = cloudinary.url(uploadResult.public_id, {
      crop: "fill",
      gravity: "auto",
      width: 300,
      height: 300,
      fetch_format: "auto",
      quality: "auto",
      secure: true,
      version: uploadResult.version, // Prevent caching issues
    });

    return {
      originalUrl: uploadResult.secure_url,
      optimizedUrl: optimizedUrl,
      croppedUrl: croppedUrl,
      publicId: uploadResult.public_id,
    };
  } catch (error) {
    console.log("Cloudinary upload failed:", error);

    if (error instanceof Error) {
      throw new Error(`Image upload failed: ${error.message}`);
    }
  }
}

export async function deleteImageFromCloudinary(flashcardId: string) {
  try {
    const fullPublicId = `renshuu/${flashcardId}`;

    const result = await cloudinary.uploader.destroy(fullPublicId);

    console.log("Image deletion result: ", result);

    return { result };
  } catch (error) {
    console.error("Cloudinary deletion failed:", error);

    if (error instanceof Error) {
      throw new Error(`Image deletion failed: ${error.message}`);
    }
  }
}
