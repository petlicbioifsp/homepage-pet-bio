import React from "react";
import styles from "./Title.module.css";
import { IInformationProps} from "../../../../types/TextTypes";
import LogoPET from "../../../../components/logos/LogoPET/LogoPET";

export default function PageHeader({ title, content }: IInformationProps) {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{content}</h2>
        </div>
        <LogoPET />
      </div>
    </header>
  );
}
