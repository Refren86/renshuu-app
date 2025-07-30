import "dotenv/config";
import cors from "cors";
import express from "express";
import { createYoga, createSchema } from "graphql-yoga";

import { resolvers } from "./resolvers";
import { verifyJWT } from "./utils/common";

import { authRouter } from "./router/authRouter";
import { userRouter } from "./router/userRouter";
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
  context: ({ request }) => {
    const authHeader = request.headers.get("authorization");
    const token = authHeader ? authHeader.split(" ")[1] : null;

    let userId = null;
    let role = null;

    if (token) {
      try {
        const decodedToken = verifyJWT(token);

        if (typeof decodedToken !== "string" && "userId" in decodedToken) {
          userId = decodedToken.userId;
          role = decodedToken.role;
        }
      } catch (error) {
        console.log("Error verifying token:", error);
      }
    }

    return {
      userId,
      role,
    };
  },
});

app.use(cors());

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
