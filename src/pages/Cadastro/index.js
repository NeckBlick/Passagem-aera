import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";

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
    e.preventDefault();
    console.log(usuario.nome);
    await fetch("http://localhost:8080/api/cadastrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.erro) {
          setStatus({
            type: "erro",
            mensagem:
              "Usuário não foi possivel cadastrar, tente novamente mais tarde",
          });
        } else {
          setStatus({
            type: "sucesso",
            mensagem: "Usuário cadastrado com sucesso!",
          });
        }
      });
      
  };
  return (
    <>
      <Header />
      <div>
        <div className="container-fluid headerimg"><img src="assets/headerimg.png" alt=""/></div>
        <div className="container mt-5">
          <h1 className="display-5">Cadastro</h1>
          <p className="fs-5">
            Se você já faz parte da 321viagens, não precisa criar uma conta
            nova. <Link to="/login">Acesse sua conta aqui.</Link>
          </p>
        </div>
        <div className="container mt-5">
          <h1 className="display-5">Dados Pessoais</h1>
          <p className="fs-5">
            Insira seus dados exatamente como aparecem em seu CPF e RG. Eles
            serão usados quando você comprar suas passagens.
          </p>
        </div>

        <form  className="container" onSubmit={cadUsuario}>
          <div className="primeiro-dados">
            <div className="mb-5">
              <input  
                type="text"
                name="nome"
                placeholder="Nome"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="nome_usuario"
                placeholder="Nome de usuário"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="date"
                name="data_nascimento"
                placeholder="Data de nascimento"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="endereco_completo"
                placeholder="Endereço "
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="endereco_comercial"
                placeholder="Endereço Comercial"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="cpf"
                placeholder="Número do CPF"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="rg"
                placeholder="Número do RG"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="date"
                name="data_emissao_rg"
                placeholder="Data de emissão do RG"
                className="input-config"
                onChange={valorInput}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="orgao_emissor"
                placeholder="Orgão emissor"
                className="input-config"
                onChange={valorInput}
              />
            </div>
          </div>
          <div className="sexo my-5">
            <h1 className="display-5">Sexo</h1>
            <div className="mb-2">
              <input
                type="radio"
                name="masculino"
                className="mx-2"
                value="masculino"
                
              />
              <label for="masculino">Masculino</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                name="feminino"
                className="mx-2"
                value="feminino"
              />
              <label for="feminino">Feminino</label>
            </div>
            <div className="mb-2">
              <input type="radio" name="outro" className="mx-2" value="outro" />
              <label for="outro">Outro</label>
            </div>
          </div>
          <div className="celular">
            <h1 className="display-5 ">Número de celular</h1>
            <div className="dados-login-input">

            <div className="mt-5">
              <input
                type="tel"
                name="telefone"
                placeholder="Número de telefone"
                className="input-config"
                onChange={valorInput}

              />
            </div>
            </div>
          </div>
          <div className="dados-login mt-5">
            <h1 className="display-5">Dados de login para sua conta</h1>
            <p className="fs-5 mb-5">
              Dê preferência ao seu email pessoal para garantir que vai receber
              nossas comunicações.
            </p>
            <div className="dados-login-input">
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-config"
                  onChange={valorInput}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="input-config"
                  onChange={valorInput}
                />
              </div>
            </div>
          </div>
          {status.type === "error"? <p className="fs-5">{status.mensagem}</p>: ""}
          {status.type === "sucesso"? <p className="fs-5">{status.mensagem}</p>: ""}
          <button type="submit" className="btn btn-danger button">
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
