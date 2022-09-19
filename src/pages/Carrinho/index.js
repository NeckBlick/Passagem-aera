import React from "react";
import Header_dois from "../../components/Header_dois";
import "./style.css";
import Footer from "../../components/Footer";

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
                        <p>
                            Você não possui nenhuma passagem no carrinho.
                        </p>
                    </div>
                </div>

                <div className="cards">
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Carrinho;
