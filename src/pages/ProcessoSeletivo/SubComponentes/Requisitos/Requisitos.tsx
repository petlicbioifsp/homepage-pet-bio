import React from 'react';
import styles from'./Requisitos.module.css';
import { ITextProps } from '../../../../types/TextTypes';

function Requisitos({title,content,item_1,item_2}:ITextProps){
    return(
        <div className={styles.requisitos}>
        <h2 className={styles.titulo_secundario}>{title}</h2>
        <p className={styles.texto}>{content}</p>
        <ul >
            <li className={styles.texto}>{item_1}</li>
            <li className={styles.texto}>{item_2} </li>
        </ul>
    </div>
    )


}
export default Requisitos;