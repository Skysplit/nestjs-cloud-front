import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export function useUserContext() {
  return useContext(userContext);
}
