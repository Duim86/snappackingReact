import React from 'react';

import Divisor from '../../assets/Line 2.png';

export default function Trip(props) {
  return (
    <div class="nextTrips">
      {props.title &&
        <h1>{props.title}</h1>
      }
      <div class="board">
        <div class="option">
          <h3>Vamos para? <br /><strong>Inajá</strong></h3>
          <h4>05/03/2020</h4>
          <a href="/route">Ver Grupo</a>
        </div>
        <img src={Divisor} alt="" />
        <div class="option">
          <h3>Vamos para? <br /><strong>Turvo</strong></h3>
          <h4>05/03/2020</h4>
          <a href="/route">Ver Grupo</a>
        </div>
        <img src={Divisor} alt="" />
        <div class="option">
          <h3>Vamos para? <br /><strong>Lapa</strong></h3>
          <h4>05/03/2020</h4>
          <a href="/route">Ver Grupo</a>
        </div>
      </div>
    </div>
  )
}