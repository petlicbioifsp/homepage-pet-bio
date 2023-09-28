import { FaGithub } from 'react-icons/fa';
import styles from "./footer.module.css";
import React from 'react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a className={styles.gitIcon} href='https://github.com/pet-ads' title = 'Visite nosso github' rel="noreferrer" target="_blank"><FaGithub /></a>
            <pre className={styles.footer_content}>Desenvolvido com ♥ por 
            <a  className = {styles.link} href='/' title='Página inicial'> PET/ADS</a> @
            <a  className= {styles.link} href='https://scl.ifsp.edu.br'  title= 'Página do IFSP-SCL'
                rel='noreferrer' target='_blank'>IFSP São Carlos.</a>
            </pre>
        </footer>
    )
} 