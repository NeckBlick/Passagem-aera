import "./style.css";
import React, { useState } from "react";
import Header_dois from "../../components/Header_dois";
import Footer from '../../components/Footer'
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";


function Assento() {


    return (
        <>
            <Header_dois />
            <div className="geral">
                <div className="topo">
                    <div className="imagem-aviao2">
                        <img
                            className="aviao_imagem2"
                            src="assets/amizade.png"
                            alt="imagem de um aviao"
                        />
                    </div>
                </div>

                <div className="text">
                    <h5>Selecione o seu assento.</h5>
                </div>
                    <div className="assentos">
                        <InputGroup className="data mb-3">
                            <InputGroup.Text>Digite o seu assento</InputGroup.Text>
                            <Form.Control
                                placeholder="B22"
                                aria-label="Digite o seu assento"
                                type="text"
                                name="nome_usuario"
                                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                            />
                        </InputGroup>


                    </div>

                    <div className="botao_buscar">
                        <Link to="/pagamento" className="btn btn-danger">Ir para o pagamento</Link>
                    </div>
            </div>

            <Footer />
        </>
    );
}

export default Assento;

