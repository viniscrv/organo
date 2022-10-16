import React, { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const grupos = ["grupo 1", "grupo 2", "grupo 3", "grupo 4", "grupo 5"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [grupo, setGrupo] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      cargo,
      imagem,
      grupo,
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigario={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigario={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          volor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={grupos}
          valor={grupo}
          aoAlterado={(valor) => setGrupo(valor)}
        />
        <Botao>Click me</Botao>
      </form>
    </section>
  );
};

export default Formulario;
