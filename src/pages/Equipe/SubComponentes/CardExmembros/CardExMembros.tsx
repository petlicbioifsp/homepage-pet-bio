import React from 'react';
import CardImage from './CardIMG';
import styles from './CardExAluno.module.css';
import {ICard} from '../../../../types/EquipeTypes';
import CardDescription from '../CardIntegrantes/CardDescription';


export default function CardExAluno ({ nome, srcFoto, tipo , ano , linkedin }:ICard) {
  const altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;
  return (
    <div className={styles.card}>
      <CardImage
        srcFoto={srcFoto}
        altFoto={altFoto}
        linkedin={linkedin} nome={''}      />
      <CardDescription nome={nome} tipo={tipo} ano = {ano} srcFoto={''} altFoto={''} />
    </div>
  );
}



