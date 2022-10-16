import React from 'react'
import './Grupo.css'

const Grupo = (props) => {
  return (

    <section className='grupo'>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
    </section>
  )
}

export default Grupo