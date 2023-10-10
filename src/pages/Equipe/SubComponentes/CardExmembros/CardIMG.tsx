import React, { useState } from 'react';
import styles from './CardExAluno.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ICard } from '../../../../types/EquipeTypes';
import Link from '../../../../components/interactive/Link/Link';
import { noBlurStyle, withBlurStyle } from '../../../../types/EquipeTypes';

export default function CardImage({ srcFoto, altFoto, github, linkedin }:ICard) {
  const [blurred, setBlur] = useState(noBlurStyle);

  const handleMouseEnter = () => {
    setBlur(withBlurStyle);
  };

  const handleMouseLeave = () => {
    setBlur(noBlurStyle);
  };

  return (
    <div
      className={styles.imgContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        style={blurred}
        className={styles.img}
        src={srcFoto}
        alt={altFoto}
      />
      <div className={styles.iconWrapper}>
        <Link href={github!} target='_blank' rel='noopener noreferrer'>
          <span className={styles.githubIcon}>
            <FaGithub />
          </span>
        </Link>
        <Link href={linkedin!} target='_blank' rel='noopener noreferrer'>
          <span className={styles.linkedinIcon}>
            <FaLinkedin />
          </span>
        </Link>
      </div>
    </div>
  );
}


