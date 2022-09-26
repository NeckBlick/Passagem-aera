import React, { useState } from "react";
import "./login.css";
import Header from "../../components/Header";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState({
    nome_usuario: "",
    senha: "",
  });
  
  const valorInput = (e) =>{
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
      });
  }
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });
  const buscarUsuario = async (e) => {
    e.preventDefault();
    const settins = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario }),
    }
    await fetch("http://localhost/api/login.php", settins)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      id = responseJson.id
      setUsuario({
        nome_usuario: responseJson.usuario,
        senha: responseJson.senha,
      })
      if(responseJson.error){
        setStatus({
          type:"erro",
          mensagem: responseJson.mensagem
        })
      }else {
        setStatus({
        type: "sucesso",
        mensagem: responseJson.mensagem,
      });
        
      }
    })
    console.log(usuario)
  };
  return (
    <>
      <Header value="Home" rota="/" />
      <div className="container-fluid headerimg">
        <img src="assets/headerimg.png" alt="" className="headerimg"/>
      </div>
      <div className="container mt-5  d-flex align-items-center justify-content-center flex-column">
        <h1 className="display-5">Insira seu nome de usuário</h1>
        <p className="fs-5">
          Use os dados de seu cadastro para efetuar o login
        </p>
        <form
          className="forms d-flex align-items-center justify-content-center flex-column"
          onSubmit={buscarUsuario}
        >
          <div className="w-100">
            <input
              type="text"
              name="nome_usuario"
              placeholder="Nome de usuário ou email"
              className="mt-5 input-config"
              onChange={valorInput}
              autoComplete="off"
            />
          </div>
          <div className="w-100">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="my-5 input-config"
              onChange={valorInput}
              autoComplete="current-password"
            />
          </div>
          {status.type === "erro"? <p>{status.mensagem}</p>: ""}
          {usuario.nome_usuario === "admin" && usuario.senha === "admin"? <Navigate to="/wp-admin"/>: ""}
          {status.type === "sucesso"? <Navigate to="/"/>: ""}
          <button
            type="submit"
            className="btn btn-danger button d-flex align-items-center justify-content-center"
          >
            Entrar
          </button>
          <Link
            to="/cadastro"
            className="mt-4 text-decoration-none text-danger"
          >
            Criar conta
          </Link>
        </form>
      </div>
    </>
  );
}
export var id;
export default Login;
