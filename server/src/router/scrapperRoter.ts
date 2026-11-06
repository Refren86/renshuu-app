import express from "express";

import { scrapperController } from "@/controllers/scrapperController";

const scrapperRouter = express.Router();

scrapperRouter.get("/jlpt-words", scrapperController.scrapeJLPTWord);
scrapperRouter.get("/common-words", scrapperController.scrapeCommonWords);

export { scrapperRouter };
