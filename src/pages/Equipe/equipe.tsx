import './equipe.css';
import React from 'react';
import Collapsible from 'react-collapsible';
import { IEquipeData } from '../../types/EquipeTypes';
import Header from "../../components/ui/Header/header";
import FetchEquipe from '../../hooks/fetch/useFetchEquipe';
import CardAluno from './SubComponentes/CardIntegrantes/CardIntegrantes'
import CardExMembros from './SubComponentes/CardIntegrantes/CardExMembros'
import CollapsibleOpen from '../../hooks/collapsible/useCollapsibleOpen';
import MenuNavegacao from '../../components/menus/MenuNavegacao/menuNavegacao';
import CollapsibleTrigger from '../../hooks/collapsible/useCollapsibleTrigger';

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: IEquipeData) => (
            <>
              <Header texto="Integrantes" />
              <section className="equipe--tutor">
                {tutores.map((tutor) => (
                  <CardAluno
                    key={tutor.id}
                    github={tutor.github}
                    nome={tutor.nome}
                    tipo={tutor.tipo!}
                    srcFoto={tutor.srcFoto}
                    ano={tutor.ano}
                    linkedin={tutor.linkedin!} altFoto={''}                  />
                ))}
              </section>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  <CardAluno
                    key={aluno.id}
                    nome={aluno.nome}
                    srcFoto={aluno.srcFoto}
                    tipo={aluno.tipo}
                    ano={aluno.ano}
                    github={aluno.github}
                    linkedin={aluno.linkedin} altFoto={''}                  />
                ))}
              </section>
              <Collapsible
                classParentString="EquipeCollapsible"
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >
                <section className="equipe--tutor">
                  {exTutores.map((exTutor) => (
                    <CardExMembros
                      key={exTutor.id}
                      nome={exTutor.nome}
                      tipo = {exTutor.tipo}
                      srcFoto={exTutor.srcFoto}
                      ano={exTutor.ano}
                      linkedin={exTutor.linkedin}                    />
                  ))}
                </section>
                <section className="equipe--alunos">
                  {exAlunos.map((exAluno) => (
                    <CardExMembros
                      key={exAluno.id}
                      nome={exAluno.nome}
                      srcFoto={exAluno.srcFoto}
                      linkedin={exAluno.linkedin} altFoto={''}
                  />
                                         
                  ))}
                </section>
              </Collapsible>
            </>
          )}
        />
      </div>
    </>
  );
}
