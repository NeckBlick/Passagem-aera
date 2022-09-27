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
    setTable(<table className="w-100">
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
            <div className="row w-100 h-100">
              <div className="col-12 col-sm-12 col-md-6">
                <p className="fs-4">Clique aqui para buscar os voos disponíveis</p>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <Button variant="danger" className="botao_voos" onClick={exibirVoos}>
                  Buscar
                </Button>
              </div>
            </div>

              
          </div>
        </div>
      </div>
      
        <div className="container-md buscar p-1 d-flex align-items-center justify-content-center">
          {table}
        </div>
      <div className="busca">
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
