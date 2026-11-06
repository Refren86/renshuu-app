import { cloudinaryService } from "../services/cloudinaryService";

export const cloudinaryController = {
  uploadImage: cloudinaryService.uploadImageToCloudinary,
  deleteImage: cloudinaryService.deleteImageFromCloudinary,
};
