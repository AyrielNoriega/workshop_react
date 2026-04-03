import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { useUserContext } from "@/09-useContext/context/hooks/useUserContext";

export const ProfilePage = () => {
  const { user, logout } = useUserContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
        <Link to="/">About</Link>
      </div>
      <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button className="mt-4" onClick={logout}>
        Cerrar sesión
      </Button>
    </div>
  );
};
