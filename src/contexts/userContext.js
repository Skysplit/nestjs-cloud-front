import { createContext } from "react";

export const userContext = createContext({
  user: null,
  onLogin: async () => {},
  onLogout: async () => {},
  onSignUp: async () => {},
});
