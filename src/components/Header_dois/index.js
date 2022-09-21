import "bootstrap/dist/css/bootstrap.min.css";
import "./header_dois.css";
import { Link } from "react-router-dom";

const Header_Dois = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex align-items-center justify-content-between">
          <Link
            to='/'>
              <h1 className="title">321 viagens</h1>
            </Link>
            <div className="img">
                <Link
                    to='/logado'
                    className="icon_pessoa">

            <img src="assets/pessoas.png" className="imagem_pessoa" alt="logo_pessoa"/>
                </Link>
            
            </div>
        </div>
      </header>
      
    </>
  );
};

export default Header_Dois;
