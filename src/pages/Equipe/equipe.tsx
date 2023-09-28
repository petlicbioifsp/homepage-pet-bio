import './equipe.css';
import React from 'react';
import Collapsible from 'react-collapsible';
import FetchEquipe from '../../hooks/fetch/useFetchEquipe';
import Header from "../../components/ui/Header/header";
import CollapsibleOpen from '../../hooks/collapsible/useCollapsibleOpen';
import CollapsibleTrigger from '../../hooks/collapsible/useCollapsibleTrigger';
import CardTutor from './SubComponentes/Card_Integrantes/CardTutor';
import CardAluno from './SubComponentes/Card_Integrantes/CardAluno';
import MenuNavegacao from '../../components/menus/MenuNavegacao/menuNavegacao';
import CardExAluno from './SubComponentes/Card_Integrantes/CardExAlunos';
import CardExTutores from './SubComponentes/Card_Integrantes/CardExTutores';

interface CardInterface {
  id?:string
  nome: string;
  ano?: string;
  srcFoto: string;
  tipo?: string;
  github?: string;
  linkedin?: string 
}

interface EquipeData {
  alunos: CardInterface[];
  tutores: CardInterface[];
  exAlunos: CardInterface[];
  exTutores: CardInterface[];
}

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: EquipeData) => (
            <>
              <Header texto="Integrantes" />
              <section className="equipe--tutor">
                {tutores.map((tutor) => (
                  <CardTutor
                    key={tutor.id} 
                    github={tutor.github}
                    nome={tutor.nome}
                    tipo={tutor.tipo!}
                    srcFoto={tutor.srcFoto}
                    ano={tutor.ano}
                    linkedin={tutor.linkedin!}
                  />
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
                    linkedin={aluno.linkedin}
                  />
                ))}
              </section>
              <Collapsible
                classParentString="EquipeCollapsible"
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >
                <section className="equipe--tutor">
                  {exTutores.map((exTutor) => (
                    <CardExTutores
                      key={exTutor.id} 
                      nome={exTutor.nome}
                      srcFoto={exTutor.srcFoto}
                      ano={exTutor.ano}
                    />
                  ))}
                </section>
                <section className="equipe--alunos">
                  {exAlunos.map((exAluno) => (
                    <CardExAluno
                      key={exAluno.id} 
                      nome={exAluno.nome}
                      srcFoto={exAluno.srcFoto}
                      linkedin={exAluno.linkedin!}
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
