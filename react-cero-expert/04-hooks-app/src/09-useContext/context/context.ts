import { createContext } from "react";

import type { User } from "../data/user-mock";

export type AuthStatus = "authenticated" | "not-authenticated" | "checking";

export interface UserContextProps {
  //state
  authStatus: AuthStatus;
  isAuthenticated: boolean;
  user: User | null;

  // methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);
