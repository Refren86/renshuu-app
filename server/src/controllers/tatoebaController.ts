import { tatoebaService } from "@/services/tatoebaService";

export const tatoebaController = {
  getSentences: tatoebaService.getTatoebaSentences,
};
