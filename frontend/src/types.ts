export type TRole = "admin" | "subscriber";
export type TAuthProvider = "local" | "google";
export type TSubscriptionType = "free" | "basic" | "premium";

export type TUser = {
  id: string;
  email: string;
  username: string;
  passwordHash?: string | null;
  role: TRole;
  googleId: string;
  provider: TAuthProvider;
  subscriptionType: TSubscriptionType;
  subscriptionExpiresAt: string;
  created_at: string;
  updated_at: string;
};

export type TFlashcard = {
  id: string;
  kanji: string | null;
  reading: string;
  meaning: string;
  status: FlashcardStatus;
  imageUrl: string | null;
};

export type FlashcardStatus = "unset" | "unrecognized" | "familiar" | "known";
