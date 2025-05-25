import express from "express";

import { uploadImageMulter } from "@/utils/uploadImageMulter";
import { cloudinaryController } from "@/controllers/cloudinaryController";

const cloudinaryRouter = express.Router();

cloudinaryRouter.post("/uploadFlashcardImage", uploadImageMulter.single("image"), cloudinaryController.uploadImage);

cloudinaryRouter.delete("/deleteFlashcardImage/:flashcardId", cloudinaryController.deleteImage);

export { cloudinaryRouter };
