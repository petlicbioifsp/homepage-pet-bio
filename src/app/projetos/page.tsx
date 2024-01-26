"use client";
import "./projetos.css";
import React from "react";
import { IProject } from "../../types/ProjectTypes";
import Header from "../../components/ui/Header/header";
import useIsMobile from "../../hooks/window/useIsMobile";
import FetchProj from "../../hooks/fetch/useFetchProjetos";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import { renderProjetos } from "./SubComponentes/Render/RenderProjects";
import Footer from "@/components/ui/Footer/footer";

export default function Projetos() {
  const isMobile: boolean = useIsMobile();

  return (
    <>
      <MenuNavegacao />
      <div className="menu-projetos--corpo">
        <Header texto={isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS"} />
        <section className="menu-projetos">
          <FetchProj render={(arrProjetos: IProject[]) => renderProjetos(arrProjetos)} />
        </section>
      </div>
      <Footer />
    </>
  );
}