import React from "react";
import Header_dois from "../../components/Header_dois";
import "./carrinho.css";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";

function Carrinho() {
  return (
    <>
      <Header_dois />

      <div className="geral">
        <div className="text-minhasviagens">
          <p>Minhas viagens</p>
        </div>

        <div className="box">
          <div className="text_box">
            <p>Você não possui nenhuma passagem no carrinho.</p>
          </div>
        </div>

        <div className="cards">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center my-3">
            <div className="card_home">
              <div className="img-top w-100">
                <img
                  src="assets/imagem_cidade_03.png"
                  alt="imagem de uma cidade"
                  className="w-100 img-fluid"
                />
              </div>
              <div className="bottom-card">
                <div className="ida_volta">
                  <p className="title_carrinho">São paulo</p>
                  <BsArrowRight className="seta_icon" />
                  <p className="title_carrinho">Salvador</p>
                </div>
                <div className="bottom-ida">
                  <p>Somente ida</p>
                  <p>Economica</p>
                </div>

                <div className="baixo-card">
                  <div className="price_carrinho col-5 ">
                    <p className="preco_carrinho">R$423,10</p>
                  </div>
                  <div className="direita-card col-7">
                    <div className="label">
                      <p className="text_label">nome do passageiro</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrinho;
