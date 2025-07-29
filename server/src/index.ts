import "dotenv/config";
import cors from "cors";
import express from "express";

import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";

import { tatoebaRouter } from "./router/tatoebaRouter";
import { cloudinaryRouter } from "./router/clourinaryRouter";

import typeDefs from "./schemas/schema.graphql?raw";

const PORT = +process.env.PORT! || 5000;
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

app.use(cors());

// GraphQL route
app.use("/graphql", yoga);

// REST routes
app.get("/api/tatoeba", tatoebaRouter);
app.use("/api/cloudinary", cloudinaryRouter);

export { app };

if (isProd) {
  app.listen(PORT, HOST, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
  });
}
