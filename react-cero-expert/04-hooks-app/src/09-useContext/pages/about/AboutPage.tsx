import { Link } from "react-router";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
        <Link to="/">About</Link>
      </div>
    </div>
  );
};
