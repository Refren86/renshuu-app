import express from "express";

import { tatoebaController } from "@/controllers/tatoebaController";

const tatoebaRouter = express.Router();

tatoebaRouter.get("/search", tatoebaController.getSentences);

export { tatoebaRouter };
