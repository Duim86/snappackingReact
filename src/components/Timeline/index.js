import React from 'react';
import './styles.css';

import DeleteIMG from '../../assets/delete.png';

export default function Timeline() {
  return (
    <div class="timeline">
      <div class="timeline-item">
        <h2>Cataratas do Iguaçu 20/12 - 08:00h</h2>
        <img src={DeleteIMG} alt="Deletar Passeio" />
      </div>
      <div class="timeline-item">
        <h2>Cataratas do Iguaçu 20/12 - 08:00h</h2>
        <img src={DeleteIMG} alt="Deletar Passeio" />
      </div>
      <div class="timeline-item">
        <h2>Cataratas do Iguaçu 20/12 - 08:00h</h2>
        <img src={DeleteIMG} alt="Deletar Passeio" />
      </div>
    </div>
  )
}