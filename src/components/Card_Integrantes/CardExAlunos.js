import React from 'react';
import styles from './CardExAluno.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function CardExAluno({ nome, srcFoto, anos, lattes, mail, github, linkedin }) {
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
      </div>
    </div>
  );
}

export default CardExAluno;
