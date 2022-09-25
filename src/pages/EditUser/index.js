import React, { useState, useEffect} from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header";


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
        <Header/>
        <form  className="container" onSubmit={buscar}>
        <Link to="/wp-admin" className="btn btn-danger">Vizualizar</Link>
          <div className="primeiro-dados">
            <div className="mb-5">
              <input  
                type="text"
                name="nome"
                placeholder="Nome"
                className="input-config"
                onChange={valorInput}
                required
               value={usuario.nome}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="nome_usuario"
                placeholder="Nome de usuário"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.nome_usuario}
              />
            </div>
            <div className="mb-5">
              <input
                type="date"
                name="data_nascimento"
                placeholder="Data de nascimento"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.data_nascimento}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="endereco_completo"
                placeholder="Endereço "
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.endereco_completo}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="endereco_comercial"
                placeholder="Endereço Comercial"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.endereco_comercial}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="cpf"
                placeholder="Número do CPF"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.cpf}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="rg"
                placeholder="Número do RG"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.rg}
              />
            </div>
            <div className="mb-5">
              <input
                type="date"
                name="data_emissao_rg"
                placeholder="Data de emissão do RG"
                className="input-config"
                onChange={valorInput}
                required
                value={usuario.data_emissao_rg}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="orgao_emissor"
                placeholder="Orgão emissor"
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
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Número de telefone"
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
            <p className="fs-5 mb-5">
              Dê preferência ao seu email pessoal para garantir que vai receber
              nossas comunicações.
            </p>
            <div className="dados-login">
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-config"
                  onChange={valorInput}
                  required
                  autoComplete="off"
                  value={usuario.email}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
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