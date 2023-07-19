import './equipe.css';
import React from 'react';
import Collapsible from 'react-collapsible';
import FetchEquipe from '../../hooks/FetchEquipe';
import Header from "../../components/Header/header"
import CollapsibleOpen from '../../hooks/CollapsibleOpen';
import CollapsibleTrigger from '../../hooks/CollapsibleTrigger';
import CardTutor from './SubComponentes/Card_Integrantes/CardTutor';
import CardAluno from './SubComponentes/Card_Integrantes/CardAluno';
import MenuNavegacao from '../../components/MenuNavegacao/menuNavegacao';
import CardExAluno from './SubComponentes/Card_Integrantes/CardExAlunos';

export default function Equipe() {
  
  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
        render={({ alunos, tutores, exAlunos }) => (
            <>
              <Header texto="Integrantes"/>

              <h2 className="equipe--titulo">Tutor</h2>
              <section className="equipe--tutor">
                {tutores.map((tutor) => (
                  <CardTutor
                    key={tutor.id}
                    github={tutor.github}
                    nome={tutor.nomeTutor}
                    srcFoto={tutor.foto}
                    ano={tutor.ano}
                  />
                ))}

              </section>
              <h2 className="equipe--titulo">Membros</h2>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  <CardAluno
                    key={aluno.id}
                    nome={aluno.nome}
                    srcFoto={aluno.foto}
                    tipo={aluno.tipo}
                    ano={aluno.ano}
                    github={aluno.github}
                    linkedin={aluno.linkedin}
                  />
                ))}
              </section>
              
              <Collapsible 
              classParentString="EquipeCollapsible"
              trigger={<CollapsibleTrigger text=" Ex-Integrantes" />}
              triggerWhenOpen={<CollapsibleOpen text=" Ex-Integrantes" />}
              >
                <section className="equipe--alunos">
                  {exAlunos.map((exAluno) => (
                    <CardExAluno
                      key={exAluno.id}
                      nome={exAluno.nome}
                      srcFoto={exAluno.foto}
                      anos={exAluno.anos}
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
