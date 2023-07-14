import { useState, useEffect } from 'react';

const FetchEquipe = ({ render }) => {
  const [alunos, setAlunos] = useState([]);
  const [tutores, setTutores] = useState([]);
  const [exAlunos, setExAlunos] = useState([]);

  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch('./integrantes.json');
        const data = await response.json();
        setAlunos(data.aluno);
        setTutores(data.tutores);
        setExAlunos(data.exAlunos);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os integrantes:', error);
      }
    };

    fetchIntegrantes();
  }, []);

  return render({ alunos, tutores, exAlunos });
};

export default FetchEquipe;
