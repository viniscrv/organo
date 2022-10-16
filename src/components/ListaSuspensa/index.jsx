import React from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select onChange={event => props.aoAlterado(event.target.value)} value={props.value}>
            {props.itens.map(item => <option key={item}>{item}</option>)}           
        </select>
    </div>
  )
}

export default ListaSuspensa