import React from 'react';
import CardImage from '../CardComponents/CardIMG';
import { ICard } from '../../../../types/EquipeTypes';
import CardDescription from '../CardComponents/CardDescription';



export default function Card({ customClass, nome, foto, tipo, github, linkedin, ano }: ICard) {
  const altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;  
  return (
    <>
      <CardImage
        customClass={customClass}
        foto={foto}
        altFoto={altFoto}
        github={github}
        linkedin={linkedin} nome={''} tipo={''} ano={''}      />
      <CardDescription nome={nome} tipo={tipo} ano = {ano} />
    </>
  );
}

