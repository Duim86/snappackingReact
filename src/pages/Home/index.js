import React from 'react';
import PageDefault from '../../components/PageDefault';
import TouristIMG from '../../assets/touristfriends.svg';

import { useHistory } from 'react-router-dom';

import './styles.css'

export default function Home() {
  const history = useHistory();
  return (
    <PageDefault logged={false}>
      <div className="container">
        <div class="col-1">
          <h1>Saia do Hype</h1>
          <h3>Faça novas aventuras, encontre grupos de viagens e conheça novos roteiros, fugindo de pontos turísticos tradicionais!</h3>
          <div class="form-busca-grupos">
            <input type="text" placeholder="Para aonde você quer companhia" />
            <button type="submit" class="button" onClick={() => {history.push("/creategroup")}}>Buscar Grupos</button>
          </div>
        </div>
        <div class="col-2">
          <img src={TouristIMG} alt="Turistas" />
        </div>
      </div>
    </PageDefault>
  )
}