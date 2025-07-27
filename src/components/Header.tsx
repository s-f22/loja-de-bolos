import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-pink-200 p-4 shadow">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cakes">Ver Bolos</Link>
        <Link to="/cakes/create">Novo Bolo</Link>
      </nav>
    </header>
  );
};
