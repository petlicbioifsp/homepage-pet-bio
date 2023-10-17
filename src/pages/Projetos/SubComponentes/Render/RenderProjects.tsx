import React from "react";
import { IProject } from "../../../../types/ProjectTypes";
import CardProjeto from "../CardProjeto/cardProjeto";

export const renderProjetos = (arrProjetos: IProject[]): JSX.Element[] => {
  return arrProjetos.map((projeto) => (
    <CardProjeto
      key={projeto.id}
      titulo={projeto.titulo}
      status={projeto.status}
      tipo={projeto.tipo}
      link={projeto.link}
      descricao={projeto.descricao}
      expandido={projeto.expandido}
      tecnologias={projeto.tecnologias}
    />
  ));
};
