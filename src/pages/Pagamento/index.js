import React from "react";
import Header_dois from "../../components/Header_dois";
import "./style.css";
import Footer from "../../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Pagamento() {
  return (
    <>
      <Header_dois />
      <div classname="geral">
        <div className="div_centro">
          <div className="dados_pagamento">
            <div className="cima-container ">
              <div className="dados_cartao">
                <h6>Dados do seu cartão</h6>
              </div>
              <div className="conteudo2">
                <InputGroup className="cartao1 mb-3">
                  <InputGroup.Text>Nome do titular </InputGroup.Text>
                  <Form.Control aria-label="Digite o nome "
                  placeholder="ex. Carlos Andrade" />
                </InputGroup>
              </div>
              <div className="conteudo">
                <InputGroup className="cartao2 mb-3">
                  <InputGroup.Text>Número do cartão</InputGroup.Text>
                  <Form.Control aria-label="Digite o número do cartão"
                  placeholder="1111 2222 3333" />
                </InputGroup>
              </div>

              <div className="data2">
                <InputGroup className="data mb-3">
                  <InputGroup.Text>Validade do cartão</InputGroup.Text>
                  <Form.Control
                    placeholder="MM/AAAA"
                    aria-label="Digite a validade do cartão"
                  />
                </InputGroup>
              </div>
              <div className="parcelas2">
                <Form.Select
                  aria-label="Default select example"
                  title="Número de parcelas"
                  className="parcelas"
                  placeholder="Parcelas"
                >
                  <option value="0" disable checked >
                    Número de parcelas
                  </option>
                  <option value="1">1x</option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                  <option value="4">4x</option>
                  <option value="5">5x</option>
                  <option value="6">6x</option>
                  <option value="7">7x</option>
                  <option value="8">8x</option>
                  <option value="9">9x</option>
                  <option value="10">10x</option>
                  <option value="11">11x</option>
                  <option value="12">12x</option>
                </Form.Select>
              </div>
              <div className="box-forma">
                <Form.Select
                  aria-label="Default select example"
                  className="forma m-0 mx-3"
                >
                  <option className="a_opcao " value="0" disabled>
                    Forma de pagamento
                  </option>
                  <option className="a_opcao " value="1">
                    Cartão de crédito
                  </option>
                  <option className="a_opcao" value="2">
                    Cartão de débito
                  </option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="botao_buscar">
            <Button variant="danger" className="botao_comprar">
              Finalizar pedido
            </Button>{" "}
          </div>
          <div className="despedida">
            <h1>A 321viagens agradece a sua
              compra!</h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pagamento;
