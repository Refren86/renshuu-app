import { eq } from "drizzle-orm";

import { db } from "@/db";
import { verifyJWT } from "@/utils/common";
import { User, usersTable } from "@/db/schema";

export type GraphQLContext = {
  userId: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  requireAuth: () => void;
  requireAdmin: () => void;
};

export async function createGraphQLContext(request: Request): Promise<GraphQLContext> {
  const authHeader = request.headers.get("authorization");
  const token = authHeader ? authHeader.split(" ")[1] : null;

  let userId: string | null = null;
  let user: User | null = null;

  if (token) {
    try {
      const decodedToken = verifyJWT(token);

      if (typeof decodedToken !== "string" && "userId" in decodedToken) {
        userId = decodedToken.userId!;

        // cache in production (redis or similar)
        const userData = await db.select().from(usersTable).where(eq(usersTable.id, userId)).limit(1);

        user = userData.length > 0 ? userData[0] : null;
      }
    } catch (error) {
      console.log("Error verifying token:", error);
      userId = null;
      user = null;
    }
  }

  const isAuthenticated = userId !== null;
  const isAdmin = user?.role === "admin";

  const requireAuth = () => {
    if (!isAuthenticated) {
      throw new Error("Authentication required");
    }
  };

  const requireAdmin = () => {
    requireAuth();

    if (!isAdmin) {
      throw new Error("Admin access required");
    }
  };

  return {
    userId,
    user,
    isAuthenticated,
    isAdmin,
    requireAuth,
    requireAdmin,
  };
}
