import "dotenv/config";
import cors from "cors";
import express from "express";
import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./graphql/resolvers";

import { authRouter } from "./router/authRouter";
import { userRouter } from "./router/userRouter";
import { tatoebaRouter } from "./router/tatoebaRouter";
import { cloudinaryRouter } from "./router/clourinaryRouter";

import typeDefs from "./graphql/schemas/schema.graphql?raw";
import { createGraphQLContext } from "./graphql/context";

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
  context: ({ request }) => createGraphQLContext(request),
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GraphQL route
app.use("/graphql", yoga);

// REST routes
app.get("/api/tatoeba", tatoebaRouter);
app.use("/api/cloudinary", cloudinaryRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

export { app };

if (isProd) {
  app.listen(PORT, HOST, () => {
    console.log(`Server started on ${HOST}:${PORT}`);
  });
}
