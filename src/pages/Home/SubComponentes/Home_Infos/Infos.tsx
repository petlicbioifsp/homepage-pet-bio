import React from 'react';
import styles from './Infos.module.css'
import { ITextProps } from '../../../../types/TextTypes';



export default function Info({title, content}: ITextProps){
    return(
        <>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{content}</p>
        </>   
    )
}