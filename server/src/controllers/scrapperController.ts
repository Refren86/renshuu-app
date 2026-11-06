import { scrapperService } from "@/services/scrapperService";

export const scrapperController = {
  scrapeJLPTWord: scrapperService.scrapeJLPTWord,
  scrapeCommonWords: scrapperService.scrapeCommonWords,
};
