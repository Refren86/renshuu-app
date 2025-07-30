import { userService } from "@/services/userService";

export const userController = {
  getCurrentUser: userService.getCurrentUser,
};
