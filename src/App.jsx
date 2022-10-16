import { useState } from "react";
import Banner from "./components/Banner";
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
      corPrimaria: "#991b1b",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogador = (jogador) => {
    console.log(jogador);
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoJogadorCadastrado={(jogador) => aoNovoJogador(jogador)} />

      {grupos.map((grupo) => (
        <Grupo
          key={grupo.nome}
          nome={grupo.nome}
          corPrimaria={grupo.corPrimaria}
        />
      ))}
    </div>
  );
}

export default App;
