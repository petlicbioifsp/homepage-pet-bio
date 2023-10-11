import "./equipe.css";
import React from "react";
import Collapsible from "react-collapsible";
import { IEquipeData } from "../../types/EquipeTypes";
import Header from "../../components/ui/Header/header";
import FetchEquipe from "../../hooks/fetch/useFetchEquipe";
import CardIntegrtante from "./SubComponentes/Cards/CardIntegrantes";
import CardExMembros from "./SubComponentes/Cards/CardExMembros";
import CollapsibleOpen from "../../hooks/collapsible/useCollapsibleOpen";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import CollapsibleTrigger from "../../hooks/collapsible/useCollapsibleTrigger";
import Render from "./SubComponentes/CardComponents/Render";

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: IEquipeData) => (
            <>
              <Header texto="Integrantes" />
              <Render
                data={tutores}
                customClass="equipe--tutor"
                render={(tutor, index) => (
                  <CardIntegrtante
                    key={tutor.id}
                    github={tutor.github}
                    nome={tutor.nome}
                    tipo={tutor.tipo!}
                    srcFoto={tutor.srcFoto}
                    ano={tutor.ano}
                    linkedin={tutor.linkedin!}
                    altFoto={""}
                  />
                )}
              />

              <Render
                data={alunos}
                customClass="equipe--alunos"
                render={(aluno, index) => (
                  <CardIntegrtante
                    key={aluno.id}
                    nome={aluno.nome}
                    srcFoto={aluno.srcFoto}
                    tipo={aluno.tipo}
                    ano={aluno.ano}
                    github={aluno.github}
                    linkedin={aluno.linkedin}
                    altFoto={""}
                  />
                )}
              />

              <Collapsible
                classParentString="EquipeCollapsible"
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >
                <Render
                  data={exTutores}
                  customClass="equipe--tutor"
                  render={(exTutor, index) => (
                    <CardExMembros
                      key={exTutor.id}
                      nome={exTutor.nome}
                      tipo={exTutor.tipo}
                      srcFoto={exTutor.srcFoto}
                      ano={exTutor.ano}
                      linkedin={exTutor.linkedin}
                    />
                  )}
                />

                <Render
                  data={exAlunos}
                  customClass="equipe--alunos"
                  render={(exAluno, index) => (
                    <CardExMembros
                      key={exAluno.id}
                      nome={exAluno.nome}
                      srcFoto={exAluno.srcFoto}
                      linkedin={exAluno.linkedin}
                      altFoto={""}
                    />
                  )}
                />
              </Collapsible>
            </>
          )}
        />
      </div>
    </>
  );
}
