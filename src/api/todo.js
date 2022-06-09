import { api } from "./api";

export const fetchTodos = () =>
  api.get("/todos").then((response) => response.data);
