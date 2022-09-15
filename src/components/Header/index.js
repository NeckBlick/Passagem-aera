import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ rota, value }) => {
  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <h1>321 Viagens</h1>
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
        </div>
      </header>
      
    </>
  );
};

export default Header;
