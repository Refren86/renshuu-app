const isProd = import.meta.env.PROD;

export const abiBaseURL = isProd ? "/api" : "http://localhost:5000/api";

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;
