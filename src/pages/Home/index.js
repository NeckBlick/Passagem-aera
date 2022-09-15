import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';
import Form from 'react-bootstrap/Form';



function Home() {
  return (
    <div>
      <Header value="Cadastrar" rota="/cadastro"/>


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
              type="text"
              placeholder="Ida : Data"
            />
            <Form.Control
              className='volta w-40'
              type="text"
              placeholder="Volta : Data"
            />

          </div>


          
        </div>
        
      </div>


        <Footer/>
    </div>
  )
 
}

export default Home;