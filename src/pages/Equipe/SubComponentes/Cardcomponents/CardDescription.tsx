import React from 'react';
import styles from '../Cards/Cards.module.css';
import { ICardDescriptionProps } from '../../../../types/EquipeTypes';




export default function CardDescription({ nome, tipo, ano }:ICardDescriptionProps) {
  const isExTutor = tipo === 'exTutor' 
  return (
    <div className={styles.descricao}>
      <strong>
        <p className={styles.p}>{nome}</p>
      </strong>
      
      <strong>        
        {isExTutor ? <p className={styles.p}>Tutor: {ano}</p> : <p className={styles.p}>{tipo}</p>}
      </strong>
    </div>
  );
}

