import axios from "axios";
import { auth } from "./auth";

export const api = axios.create();

api.interceptors.request.use((config) => {
  const token = auth.session()?.access_token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
