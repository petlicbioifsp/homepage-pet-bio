import "./home.css";
import React from 'react';
import Info from "./SubComponentes/Home_Infos/Infos";
import Button from "./SubComponentes/Home_button/Button";
import useIsMobile from "../../hooks/window/useIsMobile";
import ScrollArrow from "./SubComponentes/ScrollArrow/ScrollArrow";
import useScrollToSection from "../../hooks/window/useScrollToSection";
import Reveal from "../../components/interactive/Efeito Reveal/Reveal";
import { AboutPET } from "./TextConstants/AboutPETtext";
import {Purpose} from "./TextConstants/PurposePET"
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import HeaderConteiner from "./SubComponentes/Header_conteiner/HeaderConteiner";


export default function Home() {
    
    const isMobile = useIsMobile();  
    
    const { showArrow: showArrowAbout, sectionRef: sectionRefAbout, 
        scrollToSection: scrollToSectionAbout } = useScrollToSection ();
    
    const { showArrow: showArrowPurpose, sectionRef: sectionRefPurpose, 
        scrollToSection: scrollToSectionPurpose } = useScrollToSection();


    return (
        <div className="home">
            <MenuNavegacao></MenuNavegacao>
            
            <HeaderConteiner/>
     
            <ScrollArrow
                showArrow={showArrowAbout!}
                scrollToSection={scrollToSectionAbout}
                customClass1={'scroll-arrow'}
                customClass2={'home-arrow'}
            />
            <div className ='scrolltoView' id='section1' ref={sectionRefAbout}>
                <Reveal>
                    <Info
                        title="Sobre o PET"
                        content={isMobile ? AboutPET.mobile : AboutPET.desktop } 
                    />
                    <Button
                        value="Processo Seletivo"
                        to='/processo-seletivo'
                    />
                </Reveal>
            </div>

            <ScrollArrow
                
                showArrow={showArrowPurpose!}
                scrollToSection={scrollToSectionPurpose}
                customClass1={'scroll-arrow2'}
                customClass2={'home-arrow'}
           
           />

            <div className ='scrolltoView' id='section2' ref={sectionRefPurpose}>
            <Reveal>
                <Info
                    title="Propósito"
                    content={ isMobile? Purpose.mobile: Purpose.desktop}>
                </Info>
                <Button
                    value="Conheça os Projetos"
                    to='/projetos'
                />

            </Reveal>
            </div>
        </div>
    );
}
