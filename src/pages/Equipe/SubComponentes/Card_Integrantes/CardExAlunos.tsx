import React,{useState} from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './CardExAluno.module.css';
import { ICard, noBlurStyle, withBlurStyle} from '../../../../types/EquipeTypes';


function CardExAluno({ nome, srcFoto, tipo,linkedin }:ICard) {
  const [blurred, setBlur] = useState(noBlurStyle);

  const altFoto = `Foto de ${nome}, Ex integrante do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
    <div
      className={styles.imgContainer}
      onMouseEnter={() => setBlur(withBlurStyle)}
      onMouseLeave={() => setBlur(noBlurStyle)}
    >
      <img
        style={blurred}
        className={styles.img}
        src={srcFoto}
        alt={altFoto}
      />
      <div className={styles.iconWrapper}>
        <a href={linkedin} target='_blank' rel='noopener noreferrer'>
          <span className={styles.linkedinIcon}>
            <FaLinkedin />
          </span>
        </a>
      </div>
    </div>

    <div className={styles.descricao}>
      <strong>
        <p className={styles.p}>{nome}</p>
      </strong>
      <pre></pre>
      <strong>
        <p className={styles.p}>{tipo}</p>
      </strong>
    </div>
  </div>
  );
}

export default CardExAluno;
