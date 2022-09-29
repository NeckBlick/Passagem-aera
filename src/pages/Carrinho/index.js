import React, { useEffect, useState } from "react";
import Header_dois from "../../components/Header_dois";
import "./carrinho.css";
import Footer from "../../components/Footer";
import { BsArrowRight } from "react-icons/bs";
import { id } from "../Login";

function Carrinho() {
  const [compra, setCompra] = useState("");
  useEffect(() => {
    const buscarCompra = async (e) => {
      await fetch(`http://localhost/api/vizualizar.php?id=${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
    buscarCompra();
  }, []);

  return (
    <>
      <Header_dois />

      <div className="geral">
        <div className="text-minhasviagens">
          <p>Minhas viagens</p>
        </div>

        <div className="box">
          <div className="text_box">
            <p>Você não possui nenhuma passagem no carrinho.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrinho;
