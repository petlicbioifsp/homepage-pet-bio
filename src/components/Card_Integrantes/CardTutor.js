import React from 'react';
import styles from './CardAluno.module.css';

<<<<<<< HEAD
function CardTutor({ nome, srcFoto ,ano, lattes, mail, github }) {
=======
function CardTutor({ nome, srcFoto ,ano, lattes, mail, github,linkedin }) {
>>>>>>> master
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
<<<<<<< HEAD
      <div className={styles.icons}>{/* Adicione seus ícones aqui */}</div>
=======
    
>>>>>>> master
    </div>
  );
}

export default CardTutor;
