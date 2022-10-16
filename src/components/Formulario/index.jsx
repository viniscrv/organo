import React from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = () => {

  const grupos = [
    'grupo 1',
    'grupo 2',
    'grupo 3',
    'grupo 4',
    'grupo 5',
  ]

  const aoSalvar = (event) => {
    event.preventDefault()
    alert('ok')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigario={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigario={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa
        label='Time'
        itens={grupos}
        />
        <Botao>Click me</Botao>
      </form>
    </section>
  );
};

export default Formulario;
