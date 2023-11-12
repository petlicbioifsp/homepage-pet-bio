import React from "react";
import styles from "./Infos.module.css";
import { IInformationProps } from "../../../../types/TextTypes";

export default function Informations({ title, content }: IInformationProps) {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{content}</p>
    </>
  );
}
