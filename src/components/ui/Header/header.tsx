import styles from  './header.module.css'
import React from 'react';

interface HeaderProps{ 
    texto:string
}

function Header( {texto} :HeaderProps ){
    return(
        <h1 className={styles.titulo}>{texto}</h1>
    )
};
export default Header;
