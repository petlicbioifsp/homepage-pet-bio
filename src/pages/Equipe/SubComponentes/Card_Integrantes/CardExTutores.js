import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './CardExAluno.module.css';

function CardExTutores({ nome, srcFoto,ano}) {
  function Evento() {
    console.log('Teste do evento');
  }

  var altFoto = `Foto de ${nome}, Ex integrante do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <img
        onMouseOver={Evento}
        className={styles.img}
        src={srcFoto}
        alt={altFoto}
      />
      <div className={styles.descricao}>
        <p className={styles.p}>{nome}</p>
        <p className={styles.p}>{ano}</p>
      </div>
    </div>
  );
}

export default CardExTutores;
