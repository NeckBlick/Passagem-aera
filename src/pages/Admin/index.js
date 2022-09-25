import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header_dois from "../../components/Header_dois";
import "./style.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export default function Admin() {
  const [user, setUser] = useState([]);
  const [table, setTable] = useState();

 
  const reload = () => {
    console.log(user.length);
    const buscarUser = async () => {
      await fetch("http://localhost/api/buscaruser.php")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    };
    buscarUser();
    if (user.length === undefined) {
      setTable(<h1 className="display-5">Nenhum usuário encontrado</h1>);
    } else {
      setTable(
        <table className="voo ">
          <thead>

          <tr>
            <th className="p-2 bg-primary text-white text-center">
              Id usuario
            </th>
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
          </thead>
          {Object.values(user).map((user) => {
            return (
              <tbody key={user.id}>

              <tr >
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
                <td className="p-2 text-center d-flex align-items-center justify-content-center">
                  <Link
                    to={"/edituser/" + user.id}
                    className="btn btn-warning mx-2"
                  >
                    Editar
                  </Link>
                  
                </td>
                <td className="p-2 text-center d-flex align-items-center justify-content-center">
                <p className="btn btn-danger">Apagar</p>
                </td>
              </tr>
              </tbody>
            );
          })}
        </table>
      );
    }
  };

  return (
    <>
      <Header_dois />
      <div className="container">
        <div className="container-admin ">
          <div className="top-container d-flex align-items-center justify-content-between mt-5 p-3">
            <h1 className="fs-1">Admin</h1>
            <p className="btn btn-danger" onClick={reload}>
              Recarregar
            </p>
          </div>
          <div className="content-admin overflow-auto">{table}</div>
        </div>
      </div>
    </>
  );
}
