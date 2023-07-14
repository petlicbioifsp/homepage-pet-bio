import React from 'react';
import MenuNavegacao from '../../components/MenuNavegacao/menuNavegacao';
import CardAluno from '../../components/Card_Integrantes/CardAluno';
import './equipe.css';
import CardExAluno from '../../components/Card_Integrantes/CardExAlunos';
import CardTutor from '../../components/Card_Integrantes/CardTutor';
import Collapsible from 'react-collapsible';
import CollapsibleOpen from '../../hooks/CollapsibleOpen';
import CollapsibleTrigger from '../../hooks/CollapsibleTrigger';
import FetchEquipe from '../../hooks/FetchEquipe';
import Header from "../../components/Header/header"

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
              <h2 className="equipe--titulo">Alunos Bolsistas</h2>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  aluno.tipo === 'Bolsista' &&
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
              <h2 className="equipe--titulo">Alunos Voluntários</h2>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  aluno.tipo !== 'Bolsista' &&
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
