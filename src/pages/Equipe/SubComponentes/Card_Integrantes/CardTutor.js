import React, { useState } from 'react';
import styles from './CardAluno.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const withBlur = {filter: "blur(2px) grayscale(80%)  brightness(0.5)"}
const noBlur = {filter: "blur(0px)"}

function CardTutor({ nome, srcFoto ,ano, lattes, mail, github, linkedin }) {
  const [blurred, setBlur] = useState(noBlur);
  var altFoto = `Foto de ${nome}, tutor do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            style = {blurred}
            className={styles.img}
            src={srcFoto}
            alt={altFoto}
          />
          <img className={styles.githubFilterImage}
            onMouseEnter={
              () => setBlur(withBlur)
            }
            onMouseLeave={
              () => setBlur(noBlur)
            }
            src="./fotos_alunos/filter_Github.png"
            alt="link para github do integrante"
            />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <div className={styles.descricao}>
        <strong><p className={styles.p}>{nome}</p></strong>
        </div>
      </a>

    </div>
  );
}

export default CardTutor;
