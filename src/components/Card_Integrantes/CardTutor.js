import React from 'react';
import styles from './CardAluno.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function CardTutor({ nome, srcFoto ,ano, lattes, mail, github, linkedin }) {

  function Evento() {
    console.log('Teste do evento');
  }

  var altFoto = `Foto de ${nome}, tutor do PET ADS do IFSP Sao Carlos`;

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
        <p className={styles.p}>
          <b>Ingresso:</b> {ano}
        </p> 
        
      </div>

      <div className={styles.icons}>
      <div className={styles.iconsContainer}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
          <a href={mail} target="_blank" rel="noopener noreferrer">
          <MdEmail className={styles.icon} />
        </a>
      </div>
      </div>

    

    </div>
  );
}

export default CardTutor;
