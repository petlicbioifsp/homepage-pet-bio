import React from "react";
import styles from "../Cards/Cards.module.css";
import { ICardDescriptionProps } from "../../../../types/EquipeTypes";

export default function CardDescription({ nome, tipo, ano }: ICardDescriptionProps) {
  const isExTutor = tipo === "exTutor";

  return (
    <div className={styles.descricao}>
      <strong>
        <p className={styles.p}>{nome}</p>
      </strong>
      <strong>
        <p className={styles.p}>{isExTutor ? `Tutor: ${ano}` : tipo}</p>
      </strong>
    </div>
  );
}
