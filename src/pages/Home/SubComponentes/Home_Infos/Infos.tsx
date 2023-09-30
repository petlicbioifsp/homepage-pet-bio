import React from 'react';
import styles from './Infos.module.css'
import { TextPropsInterface } from '../../../../types/TextTypes';



function Info({title, content}: TextPropsInterface){
    return(
        <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{content}</p>
        </>       
    )
}export default Info;