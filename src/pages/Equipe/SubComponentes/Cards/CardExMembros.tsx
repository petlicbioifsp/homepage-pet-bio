import React from 'react';
import CardImage from '../Cardcomponents/CardIMG';
import styles from './CardIntegrantes.module.css';
import { ICard } from '../../../../types/EquipeTypes';
import CardDescription from '../Cardcomponents/CardDescription';

export default function CardExAluno ({ nome, srcFoto, tipo , ano , linkedin }:ICard) {
  const altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;

  console.log('Valor de linkedin:', linkedin);
  
  return (
    <div className={styles.cardExMembro}>
      <CardImage
        customClass='ExImgContainter' 
        srcFoto={srcFoto}
        altFoto={altFoto}
        linkedin={linkedin}   
      />
      <CardDescription nome={nome} tipo={tipo} ano={ano}/>
    </div>
  );
}
