import React, { useState, useEffect } from 'react';
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardAluno from "../../components/Card_Integrantes/CardAluno";
import './equipe.css';
import CardExAluno from '../../components/Card_Integrantes/CardExAlunos';
import CardTutor from '../../components/Card_Integrantes/CardTutor';

export default function Equipe() {
  const [alunos, setAlunos] = useState([]);
  const [tutores, setTutores] = useState([]);
<<<<<<< HEAD
  const [exAlunos,setexAlunos] = useState([]);
=======
  const [exAlunos, setExAlunos] = useState([]);
>>>>>>> master

  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch('./integrantes.json');
        const data = await response.json();
        setAlunos(data.aluno);
        setTutores(data.tutores);
<<<<<<< HEAD
        setexAlunos(data.exAlunos);
=======
        setExAlunos(data.exAlunos);
>>>>>>> master
      } catch (error) {
        console.error('Ocorreu um erro ao obter os integrantes:', error);
      }
    };

    fetchIntegrantes();
  }, []);

  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <h2 className="equipe--titulo">Tutor:</h2>
        <section className="equipe--tutores">
          {tutores.map((tutor) => (
            <CardTutor
              key={tutor.nome}
              nome={tutor.nome}
              srcFoto={tutor.foto}
              ano="2022"
            />
          ))}
        </section>
        <h2 className="equipe--titulo">Alunos:</h2>
        <section className="equipe--alunos">
          {alunos.map((aluno) => (
            <CardAluno
              key={aluno.id}
              nome={aluno.nome}
              srcFoto={aluno.foto}
              tipo={aluno.tipo}
              ano={aluno.ano}
<<<<<<< HEAD
=======
              github={aluno.github}
              linkedin={aluno.linkedin}
>>>>>>> master
            />
          ))}
        </section>
        <h2 className="equipe--titulo">Ex Alunos:</h2>
        <section className="equipe--alunos">
<<<<<<< HEAD
          {exAlunos.map((exAlunos) => (
            <CardExAluno
              key={exAlunos.id}
              nome={exAlunos.nome}
              srcFoto={exAlunos.foto}
              anos={exAlunos.anos}
=======
          {exAlunos.map((exAluno) => (
            <CardExAluno
              key={exAluno.id}
              nome={exAluno.nome}
              srcFoto={exAluno.foto}
              anos={exAluno.anos}
>>>>>>> master
            />
          ))}
        </section>
      </div>
    </>
  );
}
