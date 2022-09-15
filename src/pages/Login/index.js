import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

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
      console.log(usuario)
  }
  const buscarUsuario = async (e) => {
    e.preventDefault();
    await fetch("http://localhost/api/login.php")
    .then((response) => {
      response.json();
      console.log(response);
    });
  };
  return (
    <>
      <Header />
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
            />
          </div>
          <div className="w-100">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="my-5 input-config"
              onChange={valorInput}
            />
          </div>
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

export default Login;
