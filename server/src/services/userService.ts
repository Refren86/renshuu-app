import { eq } from "drizzle-orm";
import type { Request, Response } from "express";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const userService = {
  getCurrentUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, req.userId as string))
        .limit(1);

      if (user.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const { passwordHash: _, ...userWithoutPassword } = user[0];
      res.status(200).json({ user: userWithoutPassword });
    } catch (error) {
      console.log("Error fetching current user:", error);
      res.status(500).json({ error: "Internal server error during get current user details" });
    }
  },
};
