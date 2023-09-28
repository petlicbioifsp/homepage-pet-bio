import React from 'react';
import styles from './Infos.module.css'

interface TextPropsInterface{
    title:string, 
    content: string
    children?: React.ReactNode;
}


function Info({title, content}: TextPropsInterface){
    return(
        <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{content}</p>
        </>       
    )
}export default Info;