import React from 'react';
import Header from '../../../../components/ui/Header/header';
import styles from './Cabecalho.module.css'
import { TextPropsInterface } from '../../../../types/TextTypes';


function Cabecalho  ({title,content}: TextPropsInterface){ 
return(
<div className={styles.cabecalho}>
    <Header  texto = {title}/>
    <p className={styles.texto}>{content}</p>
</div> 

)
}
export default Cabecalho; 