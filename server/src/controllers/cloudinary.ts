import type { Request, Response } from "express";

import { deleteImageFromCloudinary, uploadImageToCloudinary } from "../cloudinary";

export const cloudinaryController = {
  uploadImage: async (req: Request, res: Response): Promise<void> => {
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

      const uploadResult = await uploadImageToCloudinary(base64Image, flashcardId);

      res.json({
        imageUrl: uploadResult?.croppedUrl || null,
        imageDetails: uploadResult || null,
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Error uploading image to cloudinary" });
    }
  },
  deleteImage: async (req: Request, res: Response): Promise<void> => {
    try {
      const flashcardId = req.params.flashcardId || (req.query.flashcardId as string);

      if (!flashcardId) {
        res.status(400).json({ error: "flashcardId was not provided" });
        return;
      }

      const result = await deleteImageFromCloudinary(flashcardId);

      res.json({ result: result });
    } catch (error) {
      console.error("Image deletion error:", error);
      res.status(500).json({ error: "Error deleting image from cloudinary" });
    }
  },
};
