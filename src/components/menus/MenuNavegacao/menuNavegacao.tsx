import React from "react";
import "./menuNavegacao.css";
import MenuDesk from "./Subcomponents/MenuDesk";
import { IMenuItem } from "../../../types/MenuTypes";
import LogoIFSP from "../../logos/LogoIFSP/LogoIFSP";
import MenuMobileDropdown from "../MenuMobile/MenuMobile";
import useIsMobile from "../../../hooks/window/useIsMobile";

export default function MenuNavegacao(){
  const isMobile = useIsMobile();

  const items: IMenuItem[] = [
    { path: "/", label: "Home" },
    { path: "/projetos", label: "Projetos" },
    { path: "/equipe", label: "Equipe" },
    { path: "/processo-seletivo", label: "Processo Seletivo" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <div className="menu">
      <LogoIFSP />
      {isMobile ? <MenuMobileDropdown items={items} /> : <MenuDesk items={items} />}
    </div>
  );
}
