"use client";
import React, { useEffect } from "react";
import styles from "./Requisitos.module.css";
import useFetchProcessos from "@/hooks/fetch/useFetchProcessos";

export default function Requisitos() {
  const { requisitos } = useFetchProcessos();

    console.log(requisitos);

  return (
    <div className={styles.requisitos}>
      <h2 className={styles.titulo_secundario}>Requisitos</h2>
      <p className={styles.texto}>{requisitos?.introducao}</p>
      <ul>
        { requisitos && requisitos?.requirements.length > 0 ? requisitos.requirements.map( (item: {text: string}, index: number) => <li key={index} className={styles.texto}>{item.text}</li> ) : (<p>Não há requisitos</p>)
        }
      </ul>
    </div>
  );
}
