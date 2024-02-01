"use client"
import React from "react";
import styles from "./menuNavegacao.module.css";
import MenuDesk from "./Subcomponents/MenuDesk";
import { IMenuItem } from "../../../types/MenuTypes";
import LogoIFSP from "../../../components/logos/LogoIFSP/LogoIFSP";
import MenuMobileDropdown from "../MenuMobile/MenuMobile";
import useIsMobile from "../../../hooks/window/useIsMobile";

export default function MenuNavegacao() {
  const isMobile = useIsMobile();

  const items: IMenuItem[] = [
    { path: "/", label: "Home" },
    { path: "/projetos", label: "Projetos" },
    { path: "/Equipe", label: "Equipe" },
    { path: "/processoSeletivo", label: "Processo Seletivo" },
    { path: "/Faq", label: "FAQ" },
  ];

  return (
    <div className={styles.menu} >
      <LogoIFSP />
      {!isMobile ? <MenuDesk items={items}/>:<MenuMobileDropdown items={items} />}
    </div>
  );
}
