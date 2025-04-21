import cors from "cors";
import multer from "multer";
import express from "express";

import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";
import { tatoebaController } from "./controllers/tatoeba";
import { cloudinaryController } from "./controllers/cloudinary";

import typeDefs from "./schemas/schema.graphql?raw";

const PORT = +process.env.PORT!;
const HOST = process.env.HOST!;
const isProd = import.meta.env.PROD;

const app = express();

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const storage = multer.memoryStorage();
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

// Tatoeba API
app.get("/api/search", tatoebaController.getSentences);

// Cloudinary API
app.post("/api/uploadFlashcardImage", upload.single("image"), cloudinaryController.uploadImage);
app.delete("/api/deleteFlashcardImage/:flashcardId", cloudinaryController.deleteImage);

export { app };

if (isProd) {
  app.listen(PORT, HOST, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
  });
}
