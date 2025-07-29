import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { IVerifyOptions } from "passport-local";
import { Profile, VerifyCallback } from "passport-google-oauth20";

import { db } from "../db";
import { User, usersTable } from "@/db/schema";

export const passportService = {
  // accessToken, refreshToken, profile, done
  verifyUserForGoogleStrategy: async (_: string, __: string, profile: Profile, done: VerifyCallback): Promise<void> => {
    try {
      // Check if user already exists with Google ID
      const existingUser = await db.select().from(usersTable).where(eq(usersTable.googleId, profile.id)).limit(1);

      if (existingUser.length > 0) {
        return done(null, existingUser[0]);
      }

      // Check if user already exists with Google ID
      const existingEmailUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, profile.emails![0].value))
        .limit(1);

      if (existingEmailUser.length > 0) {
        // Link Google account to existing user
        const updatedUser = await db
          .update(usersTable)
          .set({ googleId: profile.id, provider: "google" })
          .where(eq(usersTable.id, existingEmailUser[0].id))
          .returning();

        return done(null, updatedUser[0]);
      }

      // Create new user
      const newUser = await db
        .insert(usersTable)
        .values({
          email: profile.emails![0].value,
          username: profile.displayName || profile.emails![0].value.split("@")[0],
          googleId: profile.id,
          provider: "google",
        })
        .returning();

      return done(null, newUser[0]);
    } catch (error) {
      return done(error, undefined);
    }
  },

  verifyUserForLocalStrategy: async (
    email: string,
    password: string,
    done: (error: unknown, user?: Express.User | false, options?: IVerifyOptions) => void
  ): Promise<void> => {
    try {
      const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

      if (user.length === 0) {
        return done(null, false, { message: "Invalid email or password" });
      }

      const isValidPassword = await bcrypt.compare(password, user[0].passwordHash || "");

      if (!isValidPassword) {
        return done(null, false, { message: "Invalid email or password" });
      }

      return done(null, user[0]);
    } catch (error) {
      return done(error);
    }
  },

  serializeUser: (user: User, done: (err: unknown, id?: unknown) => void): void => {
    done(null, user.id);
  },

  deserializeUser: async (id: string, done: (err: unknown, user?: Express.User | null) => void): Promise<void> => {
    try {
      const user = await db.select().from(usersTable).where(eq(usersTable.id, id)).limit(1);

      done(null, user?.[0] || null);
    } catch (error) {
      done(error);
    }
  },
};
