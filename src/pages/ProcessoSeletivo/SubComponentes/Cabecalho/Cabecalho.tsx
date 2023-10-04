import React from 'react';
import Header from '../../../../components/ui/Header/header';
import styles from './Cabecalho.module.css'
import { ITextProps } from '../../../../types/TextTypes';


function Cabecalho  ({title,content}: ITextProps){ 
return(
<div className={styles.cabecalho}>
    <Header  texto = {title}/>
    <p className={styles.texto}>{content}</p>
</div> 

)
}
export default Cabecalho; 