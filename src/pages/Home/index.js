import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [voos, setVoos] = useState([]);
  const [table, setTable] = useState();
  useEffect(() => {
    const buscarVoos = async (e) => {
      await fetch("http://localhost/api/buscarvoos.php")
        .then((response) => 
         response.json()
         )
        .then((data) => {
          
          setVoos(data);
        });
    };
    buscarVoos();
  }, []);
  const exibirVoos = () => {
    if(voos.error){
      setTable(
        <h1 className="display-5">Nenhum voo foi encontrado</h1>
      )
    }else{
    setTable(<table>
      <tr>
        <th className="fs-2 p-2 text-center bg-danger text-white">Companhia</th>
        <th className="fs-2 p-2 text-center bg-danger text-white">Dia do Voo</th>
        <th className="fs-2 p-2 text-center bg-danger text-white">Destino</th>
        <th className="fs-2 p-2 text-center bg-danger text-white">Preço</th>
      </tr>
      {voos.map((voo) => {
        return (
          <tr key={voo.id}>
            <td className="fs-4 text-center p-2 ">{voo.companhia}</td>
            <td className="fs-4 text-center p-2">{voo.diavoo}</td>
            <td className="fs-4 text-center p-2">{voo.destino}</td>
            <td className="fs-4 text-center p-2">R${voo.preco}</td>
            <td className="fs-4 text-center p-2 bg-danger "><Link to="/pagamento" className="bg-danger w-100 h-100 text-white">Comprar</Link></td>
          </tr>
        );
      })}
    </table>)
    }
  }
  return (
    <div>
      <Header value="Cadastrar" rota="/cadastro" />

      <div className="topo">
        <div className="imagem-aviao">
          <img
            className="aviao_imagem"
            src="assets/imagem_aviao.png"
            alt="imagem de um aviao"
          />
        </div>

        <div className="container dados-passagens ">
          <div className="conatiner cima-container align-items-center  d-flex p-2 mt-4">
            <Form.Select
              aria-label="Default select example"
              className="idaevolta m-0"
            >
              <option>Ida e Volta</option>
              <option value="1">Somente ida</option>
            </Form.Select>

            <Form.Select
              aria-label="Default select example"
              className="economico m-0 mx-3"
            >
              <option>econômica</option>
              <option value="1">primeira classe</option>
              <option value="2">executiva</option>
            </Form.Select>

            <Form.Select
              aria-label="Default select example"
              className="umpassageiro m-0"
            >
              <option>1 passageiro</option>
              <option value="1">2 passageiros</option>
              <option value="2">3 ou +</option>
            </Form.Select>
          </div>

          <div className=" baixo-container mt-4 d-flex flex-direction-row align-itens-center p-2 flex-wrap">
            <Form.Select
              aria-label="Default select example"
              title="Origem"
              className="origem m-0"
              placeholder="Origem"
            >
              <option value="0" disabled>
                Origem
              </option>
              <option value="1">Fernando de Noronha</option>
              <option value="2">Natal</option>
              <option value="3">Salvador</option>
              <option value="4">Rio de Janeiro</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              title="Destino"
              className="destino m-0"
              placeholder="Destino"
            >
              <option value="0" disabled>
                Destino
              </option>
              <option value="1">Natal</option>
              <option value="2">Fernando de Noronha</option>
              <option value="3">Rio de Janeiro</option>
              <option value="4">Salvador</option>
            </Form.Select>

              <div className="botao_buscar ">
                <Button variant="danger" className="botao_voos" onClick={exibirVoos}>
                  Buscar
                </Button>{" "}
              </div>
          </div>
        </div>
      </div>
      
      <div className="busca">
        <div className="container busca p-1">
          {table}
        </div>
      </div>

      <div className="inferior_baixo ">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <p className="texto_oferta">Ofertas a partir de R$380,57</p>
        </div>

        <div className=" container mb-6">
          <div className="row flex-wrap">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center my-3">
              <div className="card_home">
                <div className="img-top w-100">
                  <img
                    src="assets/imagem_cidade_1.png"
                    alt="imagem de uma cidade"
                    className="w-100 img-fluid"
                  />
                </div>
                <div className="bottom-card">
                  <p className="title">Rio de Janeiro</p>
                  <div className="bottom-ida">
                    <p>Somente ida</p>
                    <p>Economica</p>
                  </div>
                  <div className="price">
                    <span>Viagens a partir de</span>
                    <p>R$ 380,57</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center my-3">
              <div className="card_home">
                <div className="img-top w-100">
                  <img
                    src="assets/imagem_cidade_02.png"
                    alt="imagem de uma cidade"
                    className="w-100 img-fluid"
                  />
                </div>
                <div className="bottom-card">
                  <p className="title">Fernando de Noronha</p>
                  <div className="bottom-ida">
                    <p>Ida e Volta</p>
                    <p>Economica</p>
                  </div>
                  <div className="price">
                    <span>Viagens a partir de</span>
                    <p>R$ 473,41</p>
                  </div>
                </div>
              </div>
            </div>
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
                  <p className="title">Salvador</p>
                  <div className="bottom-ida">
                    <p>Somente ida</p>
                    <p>Economica</p>
                  </div>
                  <div className="price">
                    <span>Viagens a partir de</span>
                    <p>R$ 423,10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
