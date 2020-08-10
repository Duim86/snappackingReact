import React from 'react';
import { useHistory } from 'react-router-dom';

export default function FormTrips(props) {
  const title = props.title;
  const history = useHistory();

  return (
    <div class="createTrips">
      {title.length > 0 && <h1>{props.title}</h1>}
      
      <form action="">
        <input type="text" placeholder="Para onde você vai?" />
        <input type="date" placeholder="Data de início" />
        <input type="date" placeholder="Data de término"/>
        <button type="submit" class="button" onClick={() => {history.push(props.url)}}>{props.buttonTitle}</button>
      </form>
    </div>
  )
}