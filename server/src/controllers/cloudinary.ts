import type { Request, Response } from "express";

import { uploadImageToCloudinary } from "../cloudinary";

export const cloudinaryController = {
  uploadImage: async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "File was not provided" });
        return;
      }

      const flashcardId = req.body.flashcardId;

      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const uploadResult = await uploadImageToCloudinary(base64Image, flashcardId);

      res.json({
        imageUrl: uploadResult?.croppedUrl || null, // Return the cropped URL
        imageDetails: uploadResult || null,
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Error uploading image to cloudinary" });
    }
  },
};
