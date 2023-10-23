import React from "react";
import useBlur from "../../../../hooks/style/useBlur";
import { ICard } from "../../../../types/EquipeTypes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../Cards/Cards.module.css";
import Link from "../../../../components/interactive/Link/Link";

interface ICardImgProps extends ICard {
  altFoto: string;
}

export default function CardImage({ customClass, foto, altFoto, github, linkedin }: ICardImgProps) {
  const { blurred, handleMouseEnter, handleMouseLeave } = useBlur();

  return (
    <div className={styles[customClass!]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img style={blurred} className={styles.img} src={foto} alt={altFoto} />

      <div className={styles.iconWrapper}>
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <span className={styles.githubIcon}>
              <FaGithub />
            </span>
          </Link>
        )}

        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <span className={styles.linkedinIcon}>
            <FaLinkedin />
          </span>
        </Link>
      </div>
    </div>
  );
}
