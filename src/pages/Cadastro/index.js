import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import Footer from '../../components/Footer'

function Cadastro() {
  const [usuario, setUsuario] = useState({
    cpf: "",
    nome: "",
    nome_usuario: "",
    endereco_completo: "",
    telefone: "",
    email: "",
    endereco_comercial: "",
    data_nascimento: "",
    rg: "",
    data_emissao_rg: "",
    orgao_emissor: "",
    senha: "",
  });
  const valorInput = (e) =>
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });
  const cadUsuario = async (e) => {
    e.preventDefault()
    await fetch("http://localhost/api/cadastrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.error) {
          setStatus({
            type: "erro",
            mensagem:
            responseJson.mensagem,
          });
        } else {
          setStatus({
            type: "sucesso",
            mensagem: responseJson.mensagem,
          });
        }
      });
      
      
  };
  return (
    <>
      <Header />
      <div className="mb-5">
        <div className="container-fluid headerimg"><img src="assets/headerimg.png" alt="" className="headerimg"/></div>
        <div className="container my-5">
          <h1 className="display-5">Cadastro</h1>
          <p className="fs-5 p-0">
            Se você já faz parte da 321viagens, não precisa criar uma conta
            nova. <Link to="/login">Acesse sua conta aqui.</Link>
          </p>
        </div>
        <div className="container my-5">
          <h1 className="display-5">Dados Pessoais</h1>
          <p className="fs-5 p-0">
            Insira seus dados exatamente como aparecem em seu CPF e RG. Eles
            serão usados quando você comprar suas passagens.
          </p>
        </div>

        <form  className="container" onSubmit={cadUsuario}>
          <div className="primeiro-dados">
            <div className="mb-5">
            <label>Nome*</label>
              <input  
                type="text"
                name="nome"
                className="input-config"
                placeholder="Nome completo"
                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>Nome de usuário*</label>
              <input
                type="text"
                name="nome_usuario"
                placeholder="Nome de usuário"
                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                className="input-config"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>Data de nascimento*</label>
              <input
                type="date"
                name="data_nascimento"
                className="input-config"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>Endereço completo*</label>
              <input
                type="text"
                name="endereco_completo"
                placeholder="Rua amarela, 123."
                className="input-config"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>Endereço comercial</label>
              <input
                type="text"
                name="endereco_comercial"
                placeholder="Avenida europa, 321"
                className="input-config"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>CPF*</label>
              <input
                type="text"
                name="cpf"
                pattern="[0-9]+$" 
                placeholder="123.456.789-10"
                className="input-config"
                onChange={valorInput}
                maxLength="11"
                minLength="11"
                required
              />
            </div>
            <div className="mb-5">
            <label>RG*</label>
              <input
                type="text"
                name="rg"
                pattern="[0-9]+$" 
                placeholder="12.345.789-1"
                className="input-config"
                onChange={valorInput}
                maxLength='9'
                minLength='9'
                required
              />
            </div>
            <div className="mb-5">
            <label>Data de emissão do RG*</label>
              <input
                type="date"
                name="data_emissao_rg"
                className="input-config"
                onChange={valorInput}
                required
              />
            </div>
            <div className="mb-5">
            <label>Orgão emissor*</label>
              <input
                type="text"
                name="orgao_emissor"
                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                placeholder="SP"
                className="input-config"
                onChange={valorInput}
                maxLength='2'
                minLength='2'
                required
              />
            </div>
          </div>
          <div className="celular">
            <h1 className="display-5">Número de celular*</h1>
            <div className="dados-login-input">
              <div className="mt-5">
              <label>Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  pattern="[0-9]+$" 
                  placeholder="11912345678"
                  className="input-config "
                  onChange={valorInput}
                  maxLength='11'
                  minLength='11'
                  required
                />
              </div>
            </div>
          </div>
          <div className="dados-login-input mt-5">
            <h1 className="display-5">Dados de login para sua conta</h1>
            <p className="fs-5 mb-5 p-0">
              Dê preferência ao seu email pessoal para garantir que vai receber
              nossas notificações.
            </p>
            <div className="dados-login">
              <div className="mb-4">
              <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="user@email.com"
                  className="input-config"
                  onChange={valorInput}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
              <label>Senha*</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha123"
                  className="input-config"
                  onChange={valorInput}
                  required
                  minLength="6"
                  autoComplete="current-password"
                />
              </div>
            </div>
          </div>
          {status.type === "error" ? <p className="fs-5">{status.mensagem}</p>: ""}
          {status.type === "sucesso" ? <Navigate to="/login"/>: ""}

          <button type="submit" className="btn btn-danger button mb-5">
            Cadastrar
          </button>
          
        </form>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Cadastro;