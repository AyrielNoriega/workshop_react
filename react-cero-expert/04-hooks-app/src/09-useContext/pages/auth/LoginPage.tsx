import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/09-useContext/context/hooks/useUserContext";

export const LoginPage = () => {
  const { login } = useUserContext();
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User ID:", { userId });

    const result = login(Number(userId));
    if (!result) {
      alert("Login failed");
    }

    navigation("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
        <Link to="/">About</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="id del usuario"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button className="mt-2 w-full bg-blue-500" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
