import React, { useState } from 'react';
import MenuNavegacao from '../../components/MenuNavegacao/menuNavegacao';
import CardAluno from '../../components/Card_Integrantes/CardAluno';
import './equipe.css';
import CardExAluno from '../../components/Card_Integrantes/CardExAlunos';
import CardTutor from '../../components/Card_Integrantes/CardTutor';
import CollapsibleOpen from '../../components/Faq/CollapsibleOpen';
import CollapsibleTrigger from '../../components/Faq/CollapsibleTrigger';
import FetchEquipe from '../../components/Card_Integrantes/FetchEquipe';

export default function Equipe() {
  const [showExAlunos, setShowExAlunos] = useState(false);
  const toggleExAlunos = () => {
    setShowExAlunos(!showExAlunos);
  };

  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos }) => (
            <>
              <h2 className="equipe--titulo">Integrantes</h2>
              <section className="equipe--alunos">
                {tutores.map((tutor) => (
                  <CardTutor
                    key={tutor.id}
                    nome={tutor.nomeTutor}
                    srcFoto={tutor.foto}
                    ano={tutor.ano}
                  />
                ))}
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
              <h2 className="equipe--titulo">Ex Integrantes</h2>
              <CollapsibleTrigger
                text="Mostrar ex-integrantes"
                onClick={toggleExAlunos}
              />
              {showExAlunos && (
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
              )}
            </>
          )}
        />
      </div>
    </>
  );
}
