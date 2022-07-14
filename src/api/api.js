import axios from "axios";
import { tenantStorageKey } from "../constants/tenant";
import { auth } from "./auth";

export const api = axios.create();

api.interceptors.request.use((config) => {
  const token = auth.session()?.access_token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["x-tenant-id"] = localStorage.getItem(tenantStorageKey);
  }

  return config;
});
