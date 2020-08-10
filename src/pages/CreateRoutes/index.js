import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

import Timeline from '../../components/Timeline';
import FormRoutes from '../../components/FormRoutes';



export default function CreateRoutes() {
  return (
    <PageDefault logged={true}> 
      <h1 class="title">Foz do Iguaçu, 19/12/2020 - 31/12/2020</h1>
      <Timeline />
      <FormRoutes />
      <div className="deleteGroup">
        <a href="#">Excluir Grupo</a>
      </div>
    </PageDefault>
  )
}