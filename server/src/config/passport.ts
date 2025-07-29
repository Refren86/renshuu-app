import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { passportService } from "@/services/passportService";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.SERVER_URL}/auth/google/callback`,
    },
    passportService.verifyUserForGoogleStrategy
  )
);

passport.use(new LocalStrategy({ usernameField: "email" }, passportService.verifyUserForLocalStrategy));

passport.serializeUser(passportService.serializeUser);
passport.deserializeUser(passportService.deserializeUser);

export default passport;
