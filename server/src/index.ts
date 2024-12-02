import fs from "fs";
import path from "path";
import cors from "cors";
import axios from "axios";
import express from "express";
import { fileURLToPath } from 'url';
import type { Request, Response } from "express";
import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schemas", "schema.graphql"),
  "utf8"
);

const app = express();

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const PORT = 5000;

app.use(cors());

app.use("/graphql", yoga);

// Tatoeba API word lookup
app.get("/api/search", async (req: Request, res: Response) => {
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
    res.status(500).json({ error: "Error fetching data from Jisho.org" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
