import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

import { useHistory } from 'react-router-dom';

import AvatarIMG from '../../assets/profile.png';
import Trips from '../../components/Trips';


export default function MyProfile() {
  const history = useHistory();
  return (
    <PageDefault logged={true}>
      <div class="profile">
        <img src={AvatarIMG} alt="profile" />
        <div class="profiledate">
          <h2>Bem vindo John Doe!</h2>
          <h4 style={{cursor: "pointer"}}>Editar perfil</h4>
          <h4 onClick={() => {history.push("/profile")}} style={{cursor: "pointer"}}>Visualizar Perfil</h4>
        </div>
      </div>
      <Trips title="Gerencie suas viagens" />
    </PageDefault>
  )
}