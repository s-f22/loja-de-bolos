import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { useAuth } from "../../auth/AuthContext"; // ajuste o caminho se necessário

export const Header = () => {
  const { user, isAdmin, logout } = useAuth();

  return (
    <nav
      style={{ backgroundColor: "#FFDBBB", paddingLeft: "7%", paddingRight: "7%" }}
      className="fixed-top container-fluid navbar navbar-expand-lg navbar-light"
    >
      <Link className="navbar-brand" to="/">
        <img
          src="https://lojadebolos.com.br/wp-content/uploads/2022/03/Logo-Loja-de-Bolos300-2.fw_.png"
          alt=""
          style={{ height: "5rem", borderRadius: "50%" }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto align-items-end">
          <li className="nav-item">
            <Link className="nav-link" to="/cakes">
              Nossos bolos
            </Link>
          </li>

          {isAdmin && (
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-1" to="/cakes/create">
                Novo item <IoMdAddCircle />
              </Link>
            </li>
          )}

          {!user ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Entrar
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={logout}>
                Sair ({user.username})
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
