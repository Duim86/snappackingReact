import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

import AvatarIMG from '../../assets/profile.png';
import Trips from '../../components/Trips';
import Verify from '../../assets/verify.png';

export default function Profile() {
  return (
    <PageDefault logged={true}>
      <div class="profile">
        <img src={AvatarIMG} alt="profile" />
        <div class="profiledate">
          <h2>John Doe</h2>
          <h4>5 Viagens</h4>
        </div>
      </div>
      <p>
        Gosto de viagens de baixo custo. Costumo ficar em hostel e sair a noite para conhecer os bares e boates das cidades. Também costumo buscar passeios com aventura como trilhas, rapel e trakking.
      </p>
      <div class="verify">
        <div class="verify-item">
          <img src={Verify} />
          <p>Documentação confirmada</p>
        </div>
        <div class="verify-item">
          <img src={Verify} />
          <p>Celular confirmado</p>
        </div>
        <div class="verify-item">
          <img src={Verify} />
          <p>E-mail confirmado</p>
        </div>
      </div>
      <Trips title="Viagens Organizadas" />
    </PageDefault>
  )
}