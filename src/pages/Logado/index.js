import React from "react";
import Header_dois from "../../components/Header_dois";
import "./logado.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Logado() {
  return (
    <>
      <Header_dois />

      <div className="topo">
        <img
          src="assets/headerimg.png"
          alt="Imagem de um avião"
          className="img_header"
        />
      </div>

      <div className="card_2 flex-direction-column">
        <div className="circulo_pessoa">
          <img src="assets/pessoas2.png" alt="pessoas" className="pessoas2" />
        </div>

        <div className="texto_main">
          <p>Nome do usuário:</p>
          <p>Email do usuário:</p>
          <p>CPF do usuário:</p>
        </div>

        <div className="botoes">
          <div className="botao_compras">
            <button
              type="submit"
              className="btn btn-danger button d-flex align-items-center justify-content-center"
            >
              <Link to="/logado">Compras</Link>
            </button>
          </div>
          <div className="botao_editar">
            <button
              type="submit"
              className="btn btn-danger button d-flex align-items-center justify-content-center"
            >
              <Link to="/logado">Editar</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logado;
