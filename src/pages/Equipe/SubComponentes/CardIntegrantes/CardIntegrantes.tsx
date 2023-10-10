import React from 'react';
import CardImage from './CardIMG';
import CardDescription from './CardDescription';
import styles from './CardIntegrantes.module.css';
import { ICard } from '../../../../types/EquipeTypes';

export default function CardAluno({ nome, srcFoto, tipo, github, linkedin }: ICard) {
  const altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <CardImage
        srcFoto={srcFoto}
        altFoto={altFoto}
        github={github}
        linkedin={linkedin} nome={''}      />
      <CardDescription nome={nome} tipo={tipo} srcFoto={''} altFoto={''} />
    </div>
  );
}

