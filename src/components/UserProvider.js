import { useCallback, useEffect, useMemo, useState } from "react";
import { userContext } from "../contexts/userContext";
import { auth } from "../api/auth";

const { Provider } = userContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = auth.session();
    setUser(session?.user ?? null);

    const { data } = auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => data.unsubscribe();
  }, []);

  const handleLogin = useCallback(({ email, password }) => {
    return auth.signIn({ email, password });
  }, []);

  const handleLogout = useCallback(() => {
    return auth.signOut();
  }, []);

  const handleSignUp = useCallback(({ email, password }) => {
    return auth.signUp({ email, password });
  }, []);

  const value = useMemo(
    () => ({
      user,
      onLogin: handleLogin,
      onLogout: handleLogout,
      onSignUp: handleSignUp,
    }),
    [user, handleLogin, handleLogout, handleSignUp]
  );

  return <Provider value={value}>{children(value)}</Provider>;
}
