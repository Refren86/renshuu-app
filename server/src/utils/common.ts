import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

export const generateJWT = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};

export const verifyJWT = (token: string): JwtPayload | string => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};

export const validatePassword = async (password: string, savedPassword: string | null | undefined) =>
  await bcrypt.compare(password, savedPassword || "");

export const hashPassword = async (password: string) => await bcrypt.hash(password, 10);

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 2000
): Promise<T | null> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error instanceof Error ? error.message : error);
      if (i === maxRetries - 1) throw error;

      const delayTime = baseDelay * Math.pow(2, i);
      console.log(`Waiting ${delayTime}ms before retry...`);
      await delay(delayTime);
    }
  }
  return null;
}
