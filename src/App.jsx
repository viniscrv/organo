import { useState } from "react";
import Formulario from "./components/Formulario";
import Grupo from "./components/Grupo";

function App() {
  const grupos = [
    {
      nome: "Grupo 1",
      corPrimaria: "#9f1239",
    },
    {
      nome: "Grupo 2",
      corPrimaria: "#86198f",
    },
    {
      nome: "Grupo 3",
      corPrimaria: "#3730a3",
    },
    {
      nome: "Grupo 4",
      corPrimaria: "#115e59",
    },
    {
      nome: "Grupo 5",
      corPrimaria: "#fcd34d",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogador = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Formulario grupos={grupos.map(grupo => grupo.nome)} aoJogadorCadastrado={(jogador) => aoNovoJogador(jogador)} />

      {grupos.map((grupo) => (
        <Grupo
          key={grupo.nome}
          nome={grupo.nome}
          corPrimaria={grupo.corPrimaria}
          jogadores={jogadores.filter(jogador => jogador.grupo === grupo.nome)}
        />
      ))}
    </div>
  );
}

export default App;
