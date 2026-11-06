export const ENV = {
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  IS_PROD: import.meta.env.PROD,
};

export const abiBaseURL = ENV.IS_PROD ? "/api" : "http://localhost:5000/api";

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;
