"use client";
import styles from "./home.module.css";
import React from "react";
import Button from "./SubComponentes/Home_button/Button";
import useIsMobile from "../../hooks/window/useIsMobile";
import Information from "./SubComponentes/Home_Infos/Infos";
import ScrollArrow from "./SubComponentes/ScrollArrow/ScrollArrow";
import useScrollToSection from "../../hooks/window/useScrollToSection";
import Reveal from "../../components/Efeito Reveal/Reveal";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import HeaderConteiner from "./SubComponentes/Header_conteiner/HeaderConteiner";
import Footer from "@/components/ui/Footer/footer";
import useFetchHome from "../../hooks/fetch/useFetchHome";

export default function Home() {
  const isMobile: boolean = useIsMobile();
  const { AboutPET, Purpose } = useFetchHome();

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

  const getContentAbout = () => {
    if (!AboutPET) return "";

    if (isMobile) return AboutPET?.mobile;

    return AboutPET?.desktop;
  };

  const getContentPurpose = () => {
    if (!Purpose) return "";
    if (isMobile) return Purpose?.mobile;

    return Purpose?.desktop;
  };

  return (
    <div className="container">
      <div className={styles.home}>
        <MenuNavegacao />

        <HeaderConteiner />

        <ScrollArrow
          showArrow={showArrowAbout!}
          scrollToSection={scrollToSectionAbout}
          containerClass={"scroll-arrow"}
          arrowClass={"home-arrow"}
        />
        <div
          className={styles.scrolltoView}
          id="section1"
          ref={sectionRefAbout}
        >
          <Reveal>
            <Information title="Sobre o PET" content={getContentAbout()} />
            <Button value="Processo Seletivo" to="/processoSeletivo" />
          </Reveal>
        </div>

        <ScrollArrow
          showArrow={showArrowPurpose!}
          scrollToSection={scrollToSectionPurpose}
          containerClass={"scroll-arrow2"}
          arrowClass={"home-arrow"}
        />

        <div
          className={styles.scrolltoView}
          id="section2"
          ref={sectionRefPurpose}
        >
          <Reveal>
            <Information title="Propósito" content={getContentPurpose()} />
            <Button value="Conheça os Projetos" to="/projetos" />
          </Reveal>
        </div>
      </div>
      <Footer />
    </div>
  );
}
