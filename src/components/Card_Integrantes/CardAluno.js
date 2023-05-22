import React from 'react';
import styles from './CardAluno.module.css';
<<<<<<< HEAD

function CardAluno({ nome, srcFoto,tipo ,ano, lattes, mail, github }) {
=======
import {FaGithub,FaLinkedin} from 'react-icons/fa'

function CardAluno({ nome, srcFoto,tipo ,ano, lattes, mail, github,linkedin }) {
>>>>>>> master
  function Evento() {
    console.log('Teste do evento');
  }

  var altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;

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
        <p className={styles.p}>
          <b>Tipo:</b> {tipo}
        </p>
      </div>
<<<<<<< HEAD
      <div className={styles.icons}>{/* Adicione seus ícones aqui */}</div>
    </div>
=======
      <div className={styles.icons}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
</div>
>>>>>>> master
  );
}

export default CardAluno;
