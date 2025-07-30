import { NextFunction, Request, Response } from "express";

import { verifyJWT } from "@/utils/common";

export const middlewares = {
  authenticateToken: (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access token is required." });
    }

    try {
      const decodedToken = verifyJWT(token);

      console.log({ decodedToken });

      if (typeof decodedToken !== "string" && "userId" in decodedToken) {
        req.userId = decodedToken.userId;
        req.userRole = decodedToken.role;
      }

      next();
    } catch (error) {
      next(error);
    }
  },
};
