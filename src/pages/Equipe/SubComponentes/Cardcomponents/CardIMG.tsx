import React from 'react';
import useBlur from '../../../../hooks/style/useBlur';
import { ICard } from '../../../../types/EquipeTypes';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../Cards/Cards.module.css';
import Link from '../../../../components/interactive/Link/Link';

export default function CardImage({ customClass, srcFoto, altFoto, github, linkedin }: ICard) {
  const { blurred, handleMouseEnter, handleMouseLeave } = useBlur();
 
  return (
    <div
      className={styles[customClass!]}
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
     {github && <Link href={github!} target='_blank' rel='noopener noreferrer'>
        <span className={styles.githubIcon}>
          <FaGithub />
        </span>
      </Link>
    } 
  
      <Link href={linkedin!} target='_blank' rel='noopener noreferrer'>
        <span className={styles.linkedinIcon}>
          <FaLinkedin />
        </span>
      </Link>  
    </div>
  </div>
    );
  }

