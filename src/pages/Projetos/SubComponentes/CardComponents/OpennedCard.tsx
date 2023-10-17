import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IProject } from "../../../../types/ProjectTypes";
import LogoConteiner from "./LogoConteiner";
import OpennedContent from "./OpennedContent";

interface IOpennedCard extends IProject {
  toggleIsOpen: () => void;
}

export default function OpennedCard({toggleIsOpen,tipo,status,link,titulo,expandido,tecnologias,}: IOpennedCard) {
  return (
    <>
      <LogoConteiner tipo={tipo} link={link} logoConteinerClass="logoConteinerClosed" iconClass="icon-aberto" />
      <AiFillCloseCircle className="closeButton" onClick={toggleIsOpen} />
      <OpennedContent titulo={titulo} status={status} expandido={expandido} tecnologias={tecnologias} />
    </>
  );
}
