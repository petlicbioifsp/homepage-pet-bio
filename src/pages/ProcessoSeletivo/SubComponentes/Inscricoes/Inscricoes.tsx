import { AiOutlineCloudDownload } from 'react-icons/ai';
import styles from "./Inscricoes.module.css"
import React from 'react';

interface InscricoesPropsInterface{
    titulo: string ,
    texto_1: string, 
    email:string,
    texto_2:string, 
    data:string, 
    estado: string, 
    texto_3: string,
}


function Inscricoes({titulo,texto_1,email,texto_2,data,estado,texto_3}: InscricoesPropsInterface){
    return(
        <div className={styles.Inscricao}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>
                {texto_1} <a className={styles.email} href="mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS">{email}</a>.
            </p>
             <p className={styles.texto}>{texto_2} <span className={styles.encerrado}>{data}</span> {estado}</p>
             <p className={styles.texto}>{texto_3} </p>
             <p className={styles.download}><a  href=' https://drive.google.com/file/d/1mRjpnZ5xrETw9uUEJDPvhFZNyDVl8Gv3/view' rel='noreferrer' target='_blank'><AiOutlineCloudDownload className={styles.btnDownload}/></a></p>
        </div>
    )
}
export default Inscricoes;