import React, { useState, useEffect} from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Header_dois from "../../components/Header_dois";
import './style.css'


function EditUser() {
    const [status, setStatus] = useState({
        type: "",
        mrnsagem: ""
    })
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
    const {id} = useParams()
    useEffect(() =>{
        const buscarUser = async () => {
            await fetch("http://localhost/api/vizualizar.php?id="+id)
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                setUsuario({
                    cpf: data.cpf,
                    nome: data.nome,
                    nome_usuario: data.user,
                    endereco_completo: data.endereco,
                    telefone: data.telefone,
                    email: data.email,
                    endereco_comercial: data.endereco_comercial,
                    data_nascimento: data.data_nascimento,
                    rg: data.rg,
                    data_emissao_rg: data.emissao_rg,
                    orgao_emissor: data.uf,
                    senha: data.senha,
                  });
                  
              });
          };
          buscarUser()
        },[id])
        console.log(usuario)
       
        const buscar = async (e) => {
            e.preventDefault()
            await fetch(`http://localhost/api/edituser.php?id=${id}`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario }),
              })
           .then(response => response.json())
           .then(data => {
            if(data.error){
                setStatus({
                    type: "erro",
                    mrnsagem: "Usuário não foi editado"
                })
            }else{
                setStatus({
                    type: "sucesso",
                    mrnsagem: "Usuário foi editado com sucesso"
                })
            }
            
           })
        };
        buscar()
       
        return (
    <>
        <Header_dois/>
        <div className="container d-flex align-items-center justify-content-between mb-5 edit" >
          <h1 className="display-5">Editar Usuário</h1>
          <Link to="/wp-admin" className="btn btn-danger">Vizualizar</Link>
        </div>
        <form  className="container" onSubmit={buscar}>
          <div className="primeiro-dados">
            <div className="mb-5">
            <label>Nome</label>
              <input  
                type="text"
                name="nome"
                className="input-config"
                onChange={valorInput}
                required
               value={usuario.nome}
              />
            </div>
            <div className="mb-5">
            <label>Nome usuario</label>
              <input
                type="text"
                name="nome_usuario"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.nome_usuario}
              />
            </div>

            <div className="mb-5">
            <label>Data de nascimento</label>
              <input
                type="date"
                name="data_nascimento"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.data_nascimento}
              />
            </div>
            <div className="mb-5">
            <label>Endereço Completo</label>
              <input
                type="text"
                name="endereco_completo"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.endereco_completo}
              />
            </div>
            <div className="mb-5">
            <label>Endereço Comercial</label>
              <input
                type="text"
                name="endereco_comercial"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.endereco_comercial}
              />
            </div>
            <div className="mb-5">
            <label>CPF</label>
              <input
                type="text"
                name="cpf"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.cpf}
              />
            </div>
            <div className="mb-5">
            <label>RG</label>
              <input
                type="text"
                name="rg"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.rg}
              />
            </div>
            <div className="mb-5">
            <label>Data Emissão do RG</label>
              <input
                type="date"
                name="data_emissao_rg"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.data_emissao_rg}
              />
            </div>
            <div className="mb-5">
            <label>Orgão Emissor</label>
              <input
                type="text"
                name="orgao_emissor"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.orgao_emissor}
              />
            </div>
          </div>
          <div className="celular">
            <h1 className="display-5">Número de celular</h1>
            <div className="dados-login-input">
              <div className="mt-5">
              <label>Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  className="input-config "
                  onChange={valorInput}
                  required
                  value={usuario.telefone}
                />
              </div>
            </div>
          </div>
          <div className="dados-login-input mt-5">
            <h1 className="display-5">Dados de login para sua conta</h1>
            <p className="fs-5 mb-5 p-0 d-block">
              Dê preferência ao seu email pessoal para garantir que vai receber
              nossas comunicações.
            </p>
            <div className="dados-login">
              <div className="mb-4">
              <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="input-config"
                  onChange={valorInput}
                  required
                  autoComplete="off"
                  value={usuario.email}
                />
              </div>
              <div className="mb-4">
              <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  className="input-config"
                  onChange={valorInput}
                  required
                  minLength="6"
                  autoComplete="current-password"
                  value={usuario.senha}
                />
              </div>
            </div>
          </div>
          {status.type === "erro"? <p>{status.mensagem}</p>: ""}
          {status.type === "sucesso"? <Navigate to="/wp-admin"/>: ""}

          <button type="submit" className="btn btn-danger button mb-5">
            Editar
          </button>
          
        </form>
    </>
  );
}

export default EditUser;