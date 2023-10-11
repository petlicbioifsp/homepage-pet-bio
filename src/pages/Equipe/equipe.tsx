import React from "react";
import styles from "./Equipe.module.css";
import Collapsible from "react-collapsible";
import { IEquipeData } from "../../types/EquipeTypes";
import Header from "../../components/ui/Header/header";
import FetchEquipe from "../../hooks/fetch/useFetchEquipe";
import CardAluno from "./SubComponentes/Cards/CardIntegrantes";
import CardExMembros from "./SubComponentes/Cards/CardExMembros";
import CollapsibleOpen from "../../hooks/collapsible/useCollapsibleOpen";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import CollapsibleTrigger from "../../hooks/collapsible/useCollapsibleTrigger";
import Render from "./SubComponentes/CardComponents/Render";

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />
      <div className={styles["equipe--corpo"]}>
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: IEquipeData) => (
            <>
              <Header texto="Integrantes" />

              <Render
                data={tutores}
                customClass={styles["equipe--tutor"]}
                render={(tutor) => (
                  <CardAluno key={tutor.id} github={tutor.github} nome={tutor.nome}
                    tipo={tutor.tipo} srcFoto={tutor.srcFoto} ano={tutor.ano} linkedin={tutor.linkedin}
                  />
                )}
              />

              <Render
                data={alunos}
                customClass={styles["equipe--alunos"]}
                render={(aluno) => (
                  <CardAluno key={aluno.id} nome={aluno.nome} srcFoto={aluno.srcFoto}
                    tipo={aluno.tipo} ano={aluno.ano} github={aluno.github} linkedin={aluno.linkedin}
                  />
                )}
              />

              <Collapsible
                classParentString={styles["EquipeCollapsible"]}
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >
                <Render
                  data={exTutores} customClass={styles["equipe--tutor"]}
                  render={(exTutor) => (
                    <CardExMembros 
                    key={exTutor.id} nome={exTutor.nome} tipo={exTutor.tipo}
                      srcFoto={exTutor.srcFoto} ano={exTutor.ano}
                    />
                  )}
                />

                <Render
                  data={exAlunos}
                  customClass={styles["equipe--alunos"]}
                  render={(exAluno) => (
                    <CardExMembros key={exAluno.id} nome={exAluno.nome}
                      srcFoto={exAluno.srcFoto} linkedin={exAluno.linkedin!}/>)}
                />

              </Collapsible>
            </>
          )}
        />
      </div>
    </>
  );
}
