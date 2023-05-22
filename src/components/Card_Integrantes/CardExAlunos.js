import React from 'react';
import styles from './CardAluno.module.css';

function CardExAluno({ nome, srcFoto, anos, lattes, mail, github }) {
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
        <p className={styles.p}>
          <b>Participacao:</b> {anos}
        </p>
      </div>
      <div className={styles.icons}>{/* Adicione seus ícones aqui */}</div>
    </div>
  );
}

export default CardExAluno;
