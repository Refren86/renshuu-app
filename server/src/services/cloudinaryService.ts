import type { Request, Response } from "express";

import cloudinary from "@/config/cloudinary";

export const cloudinaryService = {
  uploadImageToCloudinary: async (req: Request, res: Response): Promise<void> => {
    try {
      const file = req.file;

      if (!file) {
        res.status(400).json({ error: "Image file was not provided" });
        return;
      }

      const flashcardId = req.body.flashcardId;

      if (!flashcardId) {
        res.status(400).json({ error: "flashcardId was not provided" });
        return;
      }

      const base64Image = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        public_id: flashcardId,
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

      res.json({
        imageUrl: uploadResult?.croppedUrl || null,
        optimizedUrl: optimizedUrl || null,
        croppedUrl: croppedUrl || null,
        imageDetails: uploadResult || null,
      });
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      res.status(500).json({ error: "Error uploading image to cloudinary" });
    }
  },
  deleteImageFromCloudinary: async (req: Request, res: Response): Promise<void> => {
    try {
      const flashcardId = req.params.flashcardId || (req.query.flashcardId as string);

      if (!flashcardId) {
        res.status(400).json({ error: "flashcardId was not provided" });
        return;
      }

      const fullPublicId = `renshuu/${flashcardId}`;

      const result = await cloudinary.uploader.destroy(fullPublicId);

      console.log("Image deletion result: ", result);

      res.json({ result });
    } catch (error) {
      console.error("Cloudinary deletion error:", error);
      res.status(500).json({ error: "Error deleting image from cloudinary" });
    }
  },
};
