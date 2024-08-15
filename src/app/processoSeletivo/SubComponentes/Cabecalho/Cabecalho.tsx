"use client";
import React from "react";
import styles from "./Cabecalho.module.css";
import Header from "../../../../components/ui/Header/header";
import useFetchProcessos from "@/hooks/fetch/useFetchProcessos";

export default function Cabecalho() {
  const { informacoes } = useFetchProcessos();
  return (
    <div className={styles.cabecalho}>
      <Header texto="Processo Seletivo" />
      <p className={styles.texto}>{informacoes?.content}</p>
    </div>
  );
}
