import { authService } from "@/services/authService";

export const authController = {
  register: authService.register,
  login: authService.login,
  verifyGoogleCredentials: authService.verifyGoogleCredentials,
};
