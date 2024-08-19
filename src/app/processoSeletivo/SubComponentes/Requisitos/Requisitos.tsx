"use client";
import React from "react";
import styles from "./Requisitos.module.css";
import useFetchProcessos from "@/hooks/fetch/useFetchProcessos";

export default function Requisitos() {
  const { requisitos } = useFetchProcessos();
  return (
    <div className={styles.requisitos}>
      <h2 className={styles.titulo_secundario}>Requisitos</h2>
      <p className={styles.texto}>{requisitos?.introducao}</p>
      <ul>
        <li className={styles.texto}>{requisitos?.item_1}</li>
        <li className={styles.texto}>{requisitos?.item_2}</li>
        <li className={styles.texto}>{requisitos?.item_3}</li>
      </ul>
    </div>
  );
}
