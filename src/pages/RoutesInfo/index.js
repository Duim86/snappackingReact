import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

import Timeline from '../../components/Timeline';
import FormRoutes from '../../components/FormRoutes';

import { useHistory } from 'react-router-dom';


export default function RoutesInfo() {
  const history = useHistory();
  return (
    <PageDefault logged={true}>
      <h1 class="title">Foz do Iguaçu, 19/12/2020 - 31/12/2020</h1>
      <div className="info">
        <h3 onClick={() => {history.push("/profile")}} style={{cursor: "pointer"}}>Organizado por John Doe</h3>
        <h3>Contato: (00) 00000-0000</h3>
      </div>
      <Timeline />
      <FormRoutes />
      <div className="leaveGroup">
        <a href="#">Sair do Grupo</a>
      </div>
    </PageDefault>
  )
}