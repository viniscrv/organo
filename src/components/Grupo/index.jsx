import React from "react";
import Jogador from "../Jogador";
import "./Grupo.css";

const Grupo = (props) => {
  return (
    props.jogadores.length > 0 && (
      <section className="grupo">
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="jogadores">
          {props.jogadores.map((jogador) => (
            <Jogador
              key={jogador.nome}
              nome={jogador.nome}
              funcao={jogador.funcao}
              imagem={jogador.imagem}
              corFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Grupo;
