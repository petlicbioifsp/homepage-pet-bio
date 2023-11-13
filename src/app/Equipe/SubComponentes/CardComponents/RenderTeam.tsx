import React from "react"; 
import Card from "../Cards/Card";
import styles from '../Cards/Cards.module.css'
import { ICard } from "../../../../types/EquipeTypes";

export const renderMembers = (arrMembers: ICard[], customClassCard: string, customCardSize: string): JSX.Element[] => {
  
  const renderMember = (arrMember: ICard): JSX.Element => ( 
    <div className={styles[customClassCard]} key={arrMember.id}>
      <Card
        customClass={customCardSize}
        nome={arrMember.nome} 
        foto={arrMember.foto} 
        tipo={arrMember.tipo} 
        ano={arrMember.ano} 
        github={arrMember.github} 
        linkedin={arrMember.linkedin}
      />
    </div>
  );

  const Members = arrMembers.map(renderMember); 
  return Members;
}
