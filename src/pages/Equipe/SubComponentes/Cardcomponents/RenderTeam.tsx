import React from "react"; 
import Card from "../Cards/Card";
import styles from '../Cards/Cards.module.css'
import { ICard } from "../../../../types/EquipeTypes";

export const renderMembers = (arrMembers:ICard[], customClassCard:string, customCardSize:string):JSX.Element[] =>{
  
  const renderMembers = (arrMember:ICard):JSX.Element =>( 

    <div className={styles[customClassCard]}>

    <Card customClass={customCardSize} key={arrMember.id} nome={arrMember.nome} 
    srcFoto={arrMember.srcFoto} tipo={arrMember.tipo} ano={arrMember.ano} 
    github={arrMember.github} linkedin={arrMember.linkedin}
    />

    </div>
  );
  const Members = arrMembers.map(renderMembers); 
  return Members
}
  