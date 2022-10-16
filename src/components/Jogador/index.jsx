import React from 'react'
import './Jogador.css'

const Jogador = ({imagem, nome, cargo}) => {
  return (
    <div className='jogador'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Jogador