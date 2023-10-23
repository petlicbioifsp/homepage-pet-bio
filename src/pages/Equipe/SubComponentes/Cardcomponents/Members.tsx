import React from "react";
import FetchEquipe from "../../../../hooks/fetch/useFetchEquipe";
import { IEquipeData } from "../../../../types/EquipeTypes";
import MemberSection from "./EquipeSection";

export default function Members() {
  return (
    <FetchEquipe
      render={({ alunos, tutores }: IEquipeData) => (
        <>
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
        </>
      )}
    />
  );
}
