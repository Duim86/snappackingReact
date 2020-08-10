import React from 'react';

import addButton from '../../assets/add.png';

export default function FormTrips(props) {
  return (
    <div class="createTrips">
      <h1>{props.title}</h1>
      <form action="">
        <input type="text" placeholder="Digite um passeio para adicionar ao roteiro" />
        <input type="datetime-local" placeholder="Quando?" />
        <img src={addButton} alt="Adicionar Novo Passeio"/>
      </form>
    </div>
  )
}