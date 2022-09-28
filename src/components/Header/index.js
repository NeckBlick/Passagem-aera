import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ rota, value }) => {
  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/">
            <div className="logo">
              <h1 className="tres">3</h1>
              <h1 className="dois">2</h1>
              <h1 className="um">1</h1>
              <h1 className="viagens">viagens</h1>
            </div>

          </Link>
          <div className="links">
            <nav className="h-100 d-flex align-items-center">
              <div className="login">
                <Link
                  to={rota}
                  className="text-decoration-none h-100 w-100 login-text"
                >
                  {value}
                </Link>
              </div>
            </nav>
            <div className="img">
              <Link to="/logado" className="icon_pessoa">
                <img
                  src="assets/pessoas.png"
                  className="imagem_pessoa"
                  alt="logo_pessoa"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
