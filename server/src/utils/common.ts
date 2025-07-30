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
