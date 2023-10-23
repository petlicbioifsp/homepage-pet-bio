import React from "react";
import styles from "./Equipe.module.css";
import Header from "../../components/ui/Header/header";
import Members from "./SubComponentes/CardComponents/Members";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import CollapsibleSection from "./SubComponentes/CardComponents/CollapsibleSection";

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />

      <div className={styles["equipe--corpo"]}>
        <Header texto="Integrantes" />

        <Members/>

        <CollapsibleSection />
      </div>
    </>
  );
}
