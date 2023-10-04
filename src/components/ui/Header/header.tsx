import React from 'react';
import styles from  './header.module.css'

interface IHeaderProps{ 
    texto:string
}

export default function Header( {texto} :IHeaderProps ){
    return(
        <h1 className={styles.titulo}>{texto}</h1>
    )
};

