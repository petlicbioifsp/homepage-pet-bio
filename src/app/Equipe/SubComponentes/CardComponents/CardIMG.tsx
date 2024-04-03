/* eslint-disable @next/next/no-img-element */
import React from "react";
import useBlur from "../../../../hooks/style/useBlur";
import { ICard } from "../../../../types/EquipeTypes";
import { FaGithub } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";
import styles from "../Cards/Cards.module.css";
import Link from "../../../../components/Link/Link";

interface ICardImgProps extends ICard {
  altFoto: string;
}

export default function CardImage({ customClass, foto, altFoto, github, lattes }: ICardImgProps) {
  const { blurred, handleMouseEnter, handleMouseLeave } = useBlur();

  return (
    <div className={styles[customClass!]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img style={lattes !== "" ? blurred : {}} className={styles.img} src={foto} alt={altFoto} />

      <div className={styles.iconWrapper}>
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <span className={styles.githubIcon}>
              <FaGithub />
            </span>
          </Link>
        )}

        <Link href={lattes} target="_blank" rel="noopener noreferrer">
          <span className={styles.lattesIcon}>
            <FaSheetPlastic />
          </span>
        </Link>
      </div>
    </div>
  );
}
