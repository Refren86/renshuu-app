import express from "express";

import { authController } from "@/controllers/authController";

const authRouter = express.Router();

// manual auth routes
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

// google OAuth
authRouter.post("/google/verify", authController.verifyGoogleCredentials);

export { authRouter };
