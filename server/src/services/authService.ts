import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { generateJWT, hashPassword, validatePassword } from "@/utils/common";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const authService = {
  register: async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, username, password } = req.body;

      if (!email || !username || !password) {
        res.status(400).json({ error: "Email, username, and password are required." });
        return;
      }

      const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

      if (existingUser.length > 0) {
        res.status(409).json({ error: "User already exists." });
        return;
      }

      const passwordHash = await hashPassword(password);

      const newUser = await db
        .insert(usersTable)
        .values({
          email,
          username,
          passwordHash,
          provider: "local",
        })
        .returning();

      const token = generateJWT(newUser[0].id, newUser[0].role || "subscriber");

      const { passwordHash: _, ...userWithoutPassword } = newUser[0];

      res.status(201).json({
        message: "User registered successfully",
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      console.log("Registration error:", error);
      res.status(500).json({ error: "Internal server error during registration." });
    }
  },

  login: async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: "Email and password are required." });
        return;
      }

      const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

      if (user.length === 0) {
        res.status(401).json({ error: "Invalid email or password." });
        return;
      }

      // Check if user has a password (not OAuth-only account)
      if (!user[0].passwordHash) {
        res.status(401).json({ error: "Please use Google login for this account." });
        return;
      }

      const isPasswordValid = await validatePassword(password, user[0].passwordHash);

      if (!isPasswordValid) {
        res.status(401).json({ error: "Invalid email or password." });
        return;
      }

      const token = generateJWT(user[0].id, user[0].role || "subscriber");

      const { passwordHash: _, ...userWithoutPassword } = user[0];

      res.status(200).json({
        message: "Login successful",
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      console.log("Login error:", error);
      res.status(500).json({ error: "Internal server error during login." });
    }
  },

  verifyGoogleCredentials: async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("BODY: ", req.body);

      const { credential } = req.body;

      if (!credential) {
        res.status(400).json({ error: "Google credentials are required." });
        return;
      }

      // verify google token
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload) {
        res.status(401).json({ error: "Invalid Google credentials." });
        return;
      }

      const { sub: googleId, email, name } = payload;

      const existingGoogleUser = await db.select().from(usersTable).where(eq(usersTable.googleId, googleId)).limit(1);

      if (existingGoogleUser.length > 0) {
        const token = generateJWT(existingGoogleUser[0].id, existingGoogleUser[0].role || "subscriber");

        const { passwordHash: _, ...userWithoutPassword } = existingGoogleUser[0];

        res.status(200).json({
          message: "Google login successful",
          user: userWithoutPassword,
          token,
        });
        return;
      }

      const existingEmailUser = await db.select().from(usersTable).where(eq(usersTable.email, email!)).limit(1);

      if (existingEmailUser.length > 0) {
        // Link Google account to existing user
        const updatedUser = await db
          .update(usersTable)
          .set({
            googleId,
            provider: "google",
          })
          .where(eq(usersTable.id, existingEmailUser[0].id))
          .returning();

        const token = generateJWT(updatedUser[0].id, updatedUser[0].role || "subscriber");

        const { passwordHash: _, ...userWithoutPassword } = updatedUser[0];

        res.json({
          message: "Account linked successfully",
          user: userWithoutPassword,
          token,
        });
        return;
      }

      // Create new user with Google account
      const newUser = await db
        .insert(usersTable)
        .values({
          email: email!,
          username: name || email!.split("@")[0],
          googleId,
          provider: "google",
          role: "subscriber",
        })
        .returning();

      const token = generateJWT(newUser[0].id, newUser[0].role);

      const { passwordHash: _, ...userWithoutPassword } = newUser[0];

      res.status(201).json({
        message: "Account created successfully",
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      console.error("Google verification error:", error);
      res.status(500).json({ error: "Google authentication failed" });
    }
  },
};
