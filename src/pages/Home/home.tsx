import "./home.css";
import React from "react";
import { AboutPET, Purpose } from "./TextConstants/Text";
import Button from "./SubComponentes/Home_button/Button";
import useIsMobile from "../../hooks/window/useIsMobile";
import Information from "./SubComponentes/Home_Infos/Infos";
import ScrollArrow from "./SubComponentes/ScrollArrow/ScrollArrow";
import useScrollToSection from "../../hooks/window/useScrollToSection";
import Reveal from "../../components/interactive/Efeito Reveal/Reveal";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import HeaderConteiner from "./SubComponentes/Header_conteiner/HeaderConteiner";

export default function Home() {
  const isMobile = useIsMobile();

  const {
    showArrow: showArrowAbout,
    sectionRef: sectionRefAbout,
    scrollToSection: scrollToSectionAbout,
  } = useScrollToSection();

  const {
    showArrow: showArrowPurpose,
    sectionRef: sectionRefPurpose,
    scrollToSection: scrollToSectionPurpose,
  } = useScrollToSection();

  return (
    <div className="home">
      <MenuNavegacao></MenuNavegacao>

      <HeaderConteiner />

      <ScrollArrow
        showArrow={showArrowAbout!}
        scrollToSection={scrollToSectionAbout}
        containerClass={"scroll-arrow"}
        arrowClass={"home-arrow"}
      />
      <div className="scrolltoView" id="section1" ref={sectionRefAbout}>
        <Reveal>
          <Information title="Sobre o PET" content={isMobile ? AboutPET.mobile : AboutPET.desktop} />
          <Button value="Processo Seletivo" to="/processo-seletivo" />
        </Reveal>
      </div>

      <ScrollArrow
        showArrow={showArrowPurpose!}
        scrollToSection={scrollToSectionPurpose}
        containerClass={"scroll-arrow2"}
        arrowClass={"home-arrow"}
      />

      <div className="scrolltoView" id="section2" ref={sectionRefPurpose}>
        <Reveal>
          <Information title="Propósito" content={isMobile ? Purpose.mobile : Purpose.desktop} />
          <Button value="Conheça os Projetos" to="/projetos" />
        </Reveal>
      </div>
    </div>
  );
}
