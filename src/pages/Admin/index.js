import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header_dois from "../../components/Header_dois";
import "./style.css";
import { BiEdit } from "react-icons/bi";
import {AiFillDelete} from 'react-icons/ai'

export default function Admin() {
  const [voos, setVoos] = useState([]);
  const [user, setUser] = useState([]);
  const [table, setTable] = useState();
//   const [id] = useState(props.match.params.id)
  useEffect(() => {
    const buscarVoos = async () => {
      await fetch("http://localhost/api/buscarvoos.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setVoos(data);
        });
    };
    const buscarUser = async () => {
      await fetch("http://localhost/api/buscaruser.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    };
    buscarVoos();
    buscarUser();
  }, []);
  const exibirVoos = () => {
    setTable(
      <table className="voo">
        <tr>
          <th className="p-2 bg-primary text-white text-center">Id voo</th>
          <th className="p-2 bg-primary text-white text-center">Companhia</th>
          <th className="p-2 bg-primary text-white text-center">
            Número de Vagas
          </th>
          <th className="p-2 bg-primary text-white text-center">Destino</th>
          <th className="p-2 bg-primary text-white text-center">Dia do Voo</th>
          <th className="p-2 bg-primary text-white text-center">
            Preço do voo
          </th>
        </tr>
        {voos.map((voo) => {
          return (
            <tr key={voo.id}>
              <td className="p-2 text-center">{voo.id}</td>
              <td className="p-2 text-center">{voo.companhia}</td>
              <td className="p-2 text-center">{voo.vagas}</td>
              <td className="p-2 text-center">{voo.destino}</td>
              <td className="p-2 text-center">{voo.diavoo}</td>
              <td className="p-2 text-center">{voo.preco}</td>
              <td className="p-2 text-center">
                <Link to={'/edituser/'+ voo.id}>
                  <BiEdit />
                </Link>
                <Link to={'/edituser/'+ voo.id}>
                  <AiFillDelete/>
                </Link></td>
            </tr>
          );
        })}
      </table>
    );
  };
  const exibirUsuarios = () => {
    setTable(
      <table className="voo">
        <tr>
          <th className="p-2 bg-primary text-white text-center">Id usuario</th>
          <th className="p-2 bg-primary text-white text-center">CPF</th>
          <th className="p-2 bg-primary text-white text-center">Nome</th>
          <th className="p-2 bg-primary text-white text-center">
            Nome de usuário
          </th>
          <th className="p-2 bg-primary text-white text-center">
            Endereço completo
          </th>
          <th className="p-2 bg-primary text-white text-center">Telefone</th>
          <th className="p-2 bg-primary text-white text-center">Email</th>
          <th className="p-2 bg-primary text-white text-center">
            Endereço Comercial
          </th>
          <th className="p-2 bg-primary text-white text-center">
            Data de nascimento
          </th>
          <th className="p-2 bg-primary text-white text-center">RG</th>
          <th className="p-2 bg-primary text-white text-center">
            Data de emissão do RG
          </th>
          <th className="p-2 bg-primary text-white text-center">
            Orgão emissor
          </th>
          <th className="p-2 bg-primary text-white text-center">
            Data de criação
          </th>
          <th className="p-2 bg-primary text-white text-center">Senha</th>
          
        </tr>
        {user.map((user) => {
          return (
            <tr key={user.id}>
              <td className="p-2 text-center">{user.id}</td>
              <td className="p-2 text-center">{user.cpf}</td>
              <td className="p-2 text-center">{user.nome}</td>
              <td className="p-2 text-center">{user.user}</td>
              <td className="p-2 text-center">{user.endereco}</td>
              <td className="p-2 text-center">{user.telefone}</td>
              <td className="p-2 text-center">{user.email}</td>
              <td className="p-2 text-center">{user.endereco_comercial}</td>
              <td className="p-2 text-center">{user.data_nascimento}</td>
              <td className="p-2 text-center">{user.rg}</td>
              <td className="p-2 text-center">{user.emissao_rg}</td>
              <td className="p-2 text-center">{user.uf}</td>
              <td className="p-2 text-center">{user.criacao}</td>
              <td className="p-2 text-center">{user.senha}</td>
              <td className="p-2 text-center">
                <Link to={'/edituser/'+ user.id}>
                  <BiEdit />
                </Link>
                <Link to={'/edituser/'+ user.id}>
                  <AiFillDelete/>
                </Link>
                
              </td>
            </tr>
          );
        })}
      </table>
    );
  };
  return (
    <>
      <Header_dois />
      <div className="container">
        <div className="container-admin">
          <div className="top-container d-flex align-items-center justify-content-between">
            <h1 className="fs-1">Admin</h1>
            <div className="top-button d-flex">
              <p className="btn btn-danger mx-3" onClick={exibirUsuarios}>Vizualizar Usuário</p>
              <p className="btn btn-danger" onClick={ exibirVoos }>Vizualizar Voo</p>
            </div>
          </div>
          <div className="content-admin">{table}</div>
        </div>
      </div>
    </>
  );
}
