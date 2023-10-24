import React from "react";
import styles from "./Equipe.module.css";
import Collapsible from "react-collapsible";
import { IEquipeData } from "../../types/EquipeTypes";
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

      <FetchEquipe
        render={({ alunos, tutores, exAlunos, exTutores }: IEquipeData) => (
          <div className={styles["equipe--corpo"]}>
            <Header texto="Integrantes" />
            <MemberSection
              data={tutores}
              customStyles="equipe--tutor"
              cardStyles="card"
              imageContainerStyles="imgContainer"
            />

            <MemberSection
              data={alunos}
              customStyles="equipe--alunos"
              cardStyles="card"
              imageContainerStyles="imgContainer"
            />

            <Collapsible
              classParentString={styles["EquipeCollapsible"]}
              trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
              triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
            >
              <MemberSection
                data={exTutores}
                customStyles="equipe--tutor"
                cardStyles="cardExMembro"
                imageContainerStyles="ExImgContainter"
              />

              <MemberSection
                data={exAlunos}
                customStyles="equipe--alunos"
                cardStyles="cardExMembro"
                imageContainerStyles="ExImgContainter"
              />
            </Collapsible>
          </div>
        )}
      />
    </>
  );
}
