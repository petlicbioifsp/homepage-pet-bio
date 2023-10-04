import React from 'react';
import styles from "./footer.module.css";
import { FaGithub } from 'react-icons/fa';
import FooterLink from "./SubComponents/FooterLink"


export default function footer(){
    return(
    <footer className={styles.footer}>
    
    <FooterLink className="gitIcon" href='https://github.com/pet-ads' 
        title='Visite nosso github' rel='noreferrer' target='_blank'>
            <FaGithub />
    </FooterLink>
  
    <pre className={styles.footer_content}>
        Desenvolvido com ♥ por{' '}
  
    <FooterLink  className= "link" href='/' title='Página inicial'>
      PET/ADS
    </FooterLink>{' '}
  
    @{' '}
    <FooterLink className = "link"href='https://scl.ifsp.edu.br' title='Página do IFSP-SCL' rel='noreferrer' target='_blank'>
      IFSP São Carlos.
    </FooterLink>
  
  </pre>
</footer>
    )
}