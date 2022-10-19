import React, { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [imagem, setImagem] = useState("");
  const [grupo, setGrupo] = useState("");


  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      funcao,
      imagem,
      grupo,
    })
    setNome('')
    setFuncao('')
    setImagem('')
    setGrupo('')
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
          label="Função"
          placeholder="Digite sua função"
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          itens={props.grupos}
          valor={grupo}
          aoAlterado={(valor) => setGrupo(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
