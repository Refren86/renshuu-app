const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());

app.get("/api/search", async (req, res) => {
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
