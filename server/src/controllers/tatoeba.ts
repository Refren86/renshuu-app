import axios from "axios";
import type { Request, Response } from "express";

export const tatoebaController = {
  getSentences: async (req: Request, res: Response) => {
    const { keyword, page } = req.query;
    try {
      const { data } = await axios.get(
        `https://tatoeba.org/en/api_v0/search?from=jpn&to=eng&query=${keyword}&page=${page}`,
        {
          headers: {
            "User-Agent": "FlashcardRenshuu/1.0 (denley777@gmail.com)",
          },
        }
      );
      res.json(data);
    } catch (error) {
      console.log({ error });
      res.status(500).json({ error: "Error fetching data from Tatoeba" });
    }
  },
};
