import React from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <div className='campo-texto'>  
        <label>{props.label}</label>
        <input placeholder={props.placeholder} required={props.obrigario}/>
    </div>
  )
}

export default CampoTexto