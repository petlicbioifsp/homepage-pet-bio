import React, { useEffect, useState } from 'react';
import CardExAluno from '../../components/Card_Integrantes/CardExAlunos'; // Importe o componente CardExAluno 
import './ScrollArrow.css'; // Arquivo CSS para estilização

const ScrollArrow = () => {
  const [showExAlunos, setShowExAlunos] = useState(false);
  const [exAlunos, setexAlunos] = useState([]);

  const toggleExAlunos = () => {
    setShowExAlunos(!showExAlunos);
  };
  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch('./integrantes.json');
        const data = await response.json();
        
        setexAlunos(data.exAlunos);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os integrantes:', error);
      }
    };

    fetchIntegrantes();
  }, []);

  return (
    <div>
      <div className={`scroll-arrow ${showExAlunos ? 'visible' : ''}`} onClick={toggleExAlunos}>
        <span className="arrow"></span>
      </div>
      
      {showExAlunos && (
        <>
          <h2 className="equipe--titulo">Ex Integrantes</h2>
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
        </>
      )}
    </div>
  );
};

export default ScrollArrow;
