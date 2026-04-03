import { type JSX } from "react";

import { useUserContext } from "../context/hooks/useUserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element;
}

export const PrivateRoute = ({ element }: Props) => {
  const { authStatus } = useUserContext();

  if (authStatus === "checking") {
    return <div>Checking...</div>;
  }

  if (authStatus === "authenticated") {
    return <>{element}</>;
  }

  return <Navigate to="/login" replace />;
};
