import { useState, useEffect } from 'react';
import { CardInterface} from '../../types/EquipeTypes';
import { FetchEquipeProps } from '../../types/FetchTypes';



const FetchEquipe = ({ render }:FetchEquipeProps) => {
  const [alunos, setAlunos] = useState<CardInterface[]>([]);
  const [tutores, setTutores] = useState <CardInterface[]>([]);
  const [exAlunos, setExAlunos] = useState <CardInterface[]>([]);
  const [exTutores, setExTutores] = useState <CardInterface[]>([]);

  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch('./data/integrantes.json');
        const data = await response.json();
        setAlunos(data.aluno);
        setTutores(data.tutores);
        setExAlunos(data.exAlunos);
        setExTutores(data.exTutores);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os integrantes:', error);
      }
    };

    fetchIntegrantes();
  }, []);

  return render({ alunos, tutores, exAlunos, exTutores });
};

export default FetchEquipe;
