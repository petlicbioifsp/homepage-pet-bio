import React from 'react';
import CardImage from '../CardComponents/CardIMG';
import CardDescription from '../CardComponents/CardDescription';
import styles from './CardIntegrantes.module.css';
import { ICard } from '../../../../types/EquipeTypes';

export default function CardAluno({ nome, srcFoto, tipo, github, linkedin }: ICard) {
  const altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;
  
  return (
    <div className={styles.card}>
      <CardImage
        customClass={'imgContainer'}
        srcFoto={srcFoto}
        altFoto={altFoto}
        github={github}
        linkedin={linkedin}      />
      <CardDescription nome={nome} tipo={tipo}/>
    </div>
  );
}

