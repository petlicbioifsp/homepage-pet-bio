import React from "react";
import styles from "./Equipe.module.css";
import Collapsible from "react-collapsible";
import {IEquipeData} from "../../types/EquipeTypes"; 
import Header from "../../components/ui/Header/header";
import FetchEquipe from "../../hooks/fetch/useFetchEquipe";
import CollapsibleOpen from "../../hooks/collapsible/useCollapsibleOpen";
import MemberSection from "./SubComponentes/CardComponents/EquipeSection";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import CollapsibleTrigger from "../../hooks/collapsible/useCollapsibleTrigger";

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />

      <div className={styles["equipe--corpo"]}>
        
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: IEquipeData) => (
            <>
              <Header texto="Integrantes" />


              <MemberSection data = {tutores} customClass="equipe--tutor" 
              cardClass="card" imgContainerClass="imgContainer"/>
  
              <MemberSection data = {alunos} customClass="equipe--alunos" 
              cardClass="card" imgContainerClass="imgContainer"/>

              <Collapsible
                classParentString={styles["EquipeCollapsible"]}
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >

                <MemberSection data = {exTutores} customClass="equipe--tutor" 
                  cardClass="cardExMembro" imgContainerClass="ExImgContainter"/>
                
                <MemberSection data = {exAlunos} customClass="equipe--alunos" 
                  cardClass="cardExMembro" imgContainerClass="ExImgContainter"/>
                
              </Collapsible>
            </>
          )}
        />
      </div>
    </>
  );
}
