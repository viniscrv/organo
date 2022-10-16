import React, { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='campo-texto'>  
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigario}/>
    </div>
  )
}

export default CampoTexto