import "./style.css";
import Header_dois from "../../components/Header_dois";
import Footer from '../../components/Footer'
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";

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
                    <Form.Select
                        aria-label="Default select example"
                        title="Escolha a sua coluna"
                        className="coluna"

                    >
                        <option value="0" disable checked >
                            Coluna
                        </option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                        <option value="5">E</option>
                    </Form.Select>

                    <Form.Select
                        aria-label="Default select example"
                        title="Escolha a sua fileira"
                        className="fileira mx-5"

                    >
                        <option value="0" disable checked >
                            Fileira
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Form.Select>

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

