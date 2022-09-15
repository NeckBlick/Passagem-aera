import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {
  return (
    <div>
      <Header rota="/cadastro"/>


      <div className='topo'>

        <div  className='imagem-aviao'>
          <img src='assets/imagem_aviao.png' alt='imagem de um aviao'/> 
        </div>

        <div className='container dados-passagens'>
 
          <div className='conatiner align-items-center  d-flex p-2 mt-4'>
            <Form.Select aria-label="Default select example" className='idaevolta m-0'>
              <option>Ida e Volta</option>
              <option value="1">Somente ida</option>  
            </Form.Select>

            <Form.Select aria-label="Default select example" className='economico m-0 mx-3'>
              <option>econômica</option>
              <option value="1">primeira classe</option>
              <option value="2">executiva</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" className='umpassageiro m-0'>
              <option>1 passageiro</option>
              <option value="1">2 passageiros</option>
              <option value="2">3 ou +</option>
            </Form.Select>
          </div>
          
          <div className='mt-4 d-flex flex-direction-row align-itens-center p-2'>
            
            <Form.Control
              className='origem w-40'
              type="text"
              placeholder="Digite a origem"
            />
            <Form.Control
              className='destino w-40'
              type="text"
              placeholder="Digite o destino"
            />
            <Form.Control
              className='ida w-40'
              type="date"
              placeholder="Ida : Data"
            />
            <Form.Control
              className='volta w-40'
              type="date"
              placeholder="Volta : Data"
            />

            <Button variant="danger" className='botao_voos'>Buscar</Button>{' '}

          </div>


          
        </div>
        
      </div>


      <div className='container baixo'>

        <div>
          <p className='texto_oferta'>Ofertas a partir de R$380,57</p>
        </div>

        

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
          <div  className='col-4'>
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


        <Footer/>
    </div>
  )
 
}

export default Home;