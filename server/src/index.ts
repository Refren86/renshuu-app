import fs from "fs";
import path from "path";
import cors from "cors";
import multer from "multer";
import express from "express";
import { fileURLToPath } from "url";

import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";
import { tatoebaController } from "./controllers/tatoeba";
import { cloudinaryController } from "./controllers/cloudinary";

const PORT = +process.env.PORT!;
const HOST = process.env.HOST!;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = fs.readFileSync(path.join(__dirname, "schemas", "schema.graphql"), "utf8");

const app = express();

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  // 1st param - request
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

app.use(cors());

app.use("/graphql", yoga);

// Tatoeba API word lookup
app.get("/api/search", tatoebaController.getSentences);

// Cloudinary image upload
app.post("/api/uploadFlashcardImage", upload.single("image"), cloudinaryController.uploadImage);

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
