import { apiInstance } from "./axiosInstance";

type UploadImageRes = {
  imageUrl: string | null;
  imageDetails: {
    originalUrl: string;
    optimizedUrl: string;
    croppedUrl: string;
    publicId: string;
  } | null;
};

export const loadExamplesFromTatoeba = async (keyword: string = "", page: number = 1) => {
  const { data } = await apiInstance.get("/search", {
    params: { keyword, page },
  });
  return data;
};

export const uploadImageToCloudinary = async (formData: FormData) => {
  const { data } = await apiInstance.post<UploadImageRes>("/uploadFlashcardImage", formData);
  return data;
};
