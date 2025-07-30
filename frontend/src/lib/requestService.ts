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
  const { data } = await apiInstance.get("/tatoeba/search", {
    params: { keyword, page },
  });
  return data;
};

export const uploadImageToCloudinary = async (formData: FormData) => {
  const { data } = await apiInstance.post<UploadImageRes>("/cloudinary/uploadFlashcardImage", formData);
  return data;
};

export const removeImageFromCloudinary = async (flashcardId: string) => {
  const { data } = await apiInstance.delete<unknown>(`/cloudinary/deleteFlashcardImage/${flashcardId}`);
  return data;
};

export const register = async (email: string, username: string, password: string) => {
  const { data } = await apiInstance.post("/auth/register", {
    email,
    username,
    password,
  });
  return data;
};

export const login = async (email: string, password: string) => {
  const { data } = await apiInstance.post("/auth/login", {
    email,
    password,
  });
  return data;
};

export const verifyGoogleCredentials = async (credential: string) => {
  const { data } = await apiInstance.post("/auth/google/verify", { credential });
  return data;
};

export const getUser = async () => {
  const { data } = await apiInstance.get("/user");
  return data;
};
