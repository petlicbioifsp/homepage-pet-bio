import React from 'react';
import Header from '../../../../components/ui/Header/header';
import styles from './Cabecalho.module.css'

interface TextPropsInterface{
    titulo:string, 
    texto: string
    children?: React.ReactNode;
}


function Cabecalho  ({titulo,texto }: TextPropsInterface){ 
return(
<div className={styles.cabecalho}>
    <Header  texto = {titulo}/>
    <p className={styles.texto}>{texto}</p>
</div> 

)
}
export default Cabecalho; 