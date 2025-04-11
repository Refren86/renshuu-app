import axios from "axios";
import { abiBaseURL } from "./const";

export const apiInstance = axios.create({
  baseURL: abiBaseURL,
});
