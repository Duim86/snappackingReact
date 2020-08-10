import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

import AvatarIMG from '../../assets/profile.png';
import Trips from '../../components/Trips';
import FormTrips from '../../components/FormTrips';


export default function CreateGroup() {
  return (
    <PageDefault logged={true}>
      <FormTrips title="Crie um novo grupo de viagens" buttonTitle="Criar" url="/route" />
      <FormTrips title="Próximos grupos de viagens" buttonTitle="Pesquisar" url="/creategroup" />
      <Trips />
    </PageDefault>
  )
}