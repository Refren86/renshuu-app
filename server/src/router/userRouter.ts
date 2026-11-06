import express from "express";

import { middlewares } from "@/middleware";
import { userController } from "@/controllers/userController";

const userRouter = express.Router();

userRouter.get("/", middlewares.authenticateToken, userController.getCurrentUser);

export { userRouter };
