import { useEffect, useState, type PropsWithChildren } from "react";

import { users, type User } from "../data/user-mock";

import { UserContext, type AuthStatus } from "./context";

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      console.log(`User not fount ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", String(userId));

    return true;
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      const loginUser = async () => {
        await handleLogin(+storedUserId);
      };

      loginUser();

      return;
    }

    handleLogout();
  }, []);

  return (
    <UserContext
      value={{
        authStatus,
        isAuthenticated: authStatus === "authenticated",
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
