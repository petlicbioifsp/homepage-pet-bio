import React from 'react';
import styles from'./Requisitos.module.css';

interface RequisitosPropsInterface{
    titulo:string,
    texto: string
    item_1: string, 
    item_2: string 
}

function Requisitos({titulo,texto,item_1,item_2}:RequisitosPropsInterface){
    return(
        <div className={styles.requisitos}>
        <h2 className={styles.titulo_secundario}>{titulo}</h2>
        <p className={styles.texto}>{texto}</p>
        <ul >
            <li className={styles.texto}>{item_1}</li>
            <li className={styles.texto}>{item_2} </li>
        </ul>
    </div>
    )


}
export default Requisitos;