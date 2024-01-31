import React from "react";
import Title from "../Home_title/Title";
import styles from "./HeaderConteiner.module.css";

export default function HeaderConteiner() {
  const content = "Programa de Educação Tutorial";
  const title = "Bem-vindo à página do PET/LICBIO @ IFSP";

  return (
    <div className={styles.headerConteiner}>
      <Title title={title} content={content} />
    </div>
  );
}
