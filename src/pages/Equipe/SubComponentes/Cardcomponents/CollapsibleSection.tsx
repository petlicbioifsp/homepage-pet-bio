import React from "react";
import Collapsible from "react-collapsible";
import CollapsibleOpen from "../../../../hooks/collapsible/useCollapsibleOpen";
import CollapsibleTrigger from "../../../../hooks/collapsible/useCollapsibleTrigger";
import MemberSection from "./EquipeSection";
import { IEquipeData } from "../../../../types/EquipeTypes";
import styles from "../../Equipe.module.css";
import FetchEquipe from "../../../../hooks/fetch/useFetchEquipe";

export default function CollapsibleSection() {
  return (
    <>
      <FetchEquipe
        render={({ exAlunos, exTutores }: IEquipeData) => (
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
        )}
      />
    </>
  );
}
