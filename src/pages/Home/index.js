import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./home.css";
=======
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217


function Home() {
  return (
    <div>
      <Header value="Cadastrar" rota="/cadastro" />

<<<<<<< HEAD
      <div className="topo">
        <div className="imagem-aviao">
          <img className="aviao_imagem" src="assets/imagem_aviao.png" alt="imagem de um aviao" />
        </div>

        <div className="container dados-passagens ">
          <div className="conatiner align-items-center  d-flex p-2 mt-4">
            <Form.Select
              aria-label="Default select example"
              className="idaevolta m-0"
            >
=======

      <div className='topo'>

        <div className='imagem-aviao'>
          <img src='assets/imagem_aviao.png' alt='imagem de um aviao' />
        </div>

        <div className='container dados-passagens'>

          <div className='conatiner align-items-center  d-flex p-2 mt-4'>
            <Form.Select aria-label="Default select example" className='idaevolta m-0'>
>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
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

<<<<<<< HEAD
          <div className="mt-4 d-flex flex-direction-row align-itens-center p-2 flex-wrap">
            <Form.Select
              aria-label="Default select example"
              title="Origem"
              className="origem m-0"
              placeholder="Origem"
            >
              <option value="0" disabled>
                Origem
              </option>
=======
          <div className='mt-4 d-flex flex-direction-row align-itens-center p-2'>
            <Form.Select aria-label="Default select example" title='Origem' className='origem m-0' placeholder='Origem'>
              <option value="0" disabled>Origem</option>
>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
              <option value="1">Fernando de Noronha</option>
              <option value="2">Natal</option>
              <option value="3">Salvador</option>
              <option value="4">Rio de Janeiro</option>
            </Form.Select>
<<<<<<< HEAD
            <Form.Select
              aria-label="Default select example"
              title="Destino"
              className="destino m-0"
              placeholder="Destino"
            >
              <option value="0" disabled>
                Destino
              </option>
=======

            <Form.Select aria-label="Default select example" title='Destino' className='destino m-0' placeholder='Destino'>
              <option value="0" disabled>Destino</option>
>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
              <option value="1">Natal</option>
              <option value="2">Fernando de Noronha</option>
              <option value="3">Rio de Janeiro</option>
              <option value="4">Salvador</option>
            </Form.Select>

<<<<<<< HEAD
            <div className="data_viagem">
=======
            {/* <Form.Control
              className='origem w-40'
              type="text"
              placeholder="Digite a origem"
            />
>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
            <Form.Control
              className="ida origem w-40"
              type="date"
              placeholder="Ida : Data"
            />
            <Form.Control
              className="volta  origem  w-40"
              type="date"
              placeholder="Volta : Data"
            />

            </div>
            <Button variant="danger" className="botao_voos">
              Buscar
            </Button>{" "}
          </div>
<<<<<<< HEAD
        </div>
=======



        </div>

>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
      </div>

      <div className="inferior_baixo">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <p className="texto_oferta">Ofertas a partir de R$380,57</p>
        </div>  

        <div className=" container mb-5">
              <div className="row flex-wrap">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center align-items-center my-3">
                  <div className="card_home">
                    <div className="img-top w-100">
                      <img src="assets/imagem_cidade_1.png" alt="imagem de uma cidade" className="w-100 img-fluid"/>
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
                      <img src="assets/imagem_cidade_02.png" alt="imagem de uma cidade" className="w-100 img-fluid"/>
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
                      <img src="assets/imagem_cidade_03.png" alt="imagem de uma cidade" className="w-100 img-fluid"/>
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

<<<<<<< HEAD
      </div>

      <Footer />
    </div>
  );
=======


        <div className='row mt-3 tamanho_card'>
          <div className='col-4'>

            <Card className='imagem' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="assets/imagem_cidade_1.png" />
              <Card.Body>
                <Card.Title className='nome_cidade'>Rio de Janeiro</Card.Title>
                <div className='varias_opcoes'>

                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>
                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>

                </div>
                <Card.Text className='texto_viagem'>
                  Viagens a partir de
                </Card.Text>
                <Card.Text className='preco_viagem'>
                  R$380,57
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-4'>
            <Card className='imagem' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="assets/imagem_cidade_02.png" />
              <Card.Body>
                <Card.Title className='nome_cidade'>Fernando de Noronha</Card.Title>
                <div className='varias_opcoes'>

                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>
                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>

                </div>
                <Card.Text className='texto_viagem'>
                  Viagens a partir de
                </Card.Text>
                <Card.Text className='preco_viagem'>
                  R$473,41
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
          <div className='col-4'>
            <Card className='imagem' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="assets/imagem_cidade_03.png" />
              <Card.Body>
                <Card.Title className='nome_cidade'>Salvador</Card.Title>
                <div className='varias_opcoes'>

                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>
                  <div className='opcoes'>
                    <p className='texto_opcoes'>Somente ida </p>
                  </div>

                </div>
                <Card.Text className='texto_viagem'>
                  Viagens a partir de
                </Card.Text>
                <Card.Text className='preco_viagem'>
                  R$423,10
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </div>

      </div>


      <Footer />
    </div>
  )

>>>>>>> d45b6027c3536e12120e99682bd93c79e6b68217
}

export default Home;
