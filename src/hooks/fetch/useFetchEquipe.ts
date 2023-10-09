import { useState, useEffect } from 'react';
import { ICard} from '../../types/EquipeTypes';
import { IFetchEquipeProps } from '../../types/FetchTypes';

export default function FetchEquipe ({ render }:IFetchEquipeProps) {
  const [alunos, setAlunos] = useState<ICard[]>([]);
  const [tutores, setTutores] = useState <ICard[]>([]);
  const [exAlunos, setExAlunos] = useState <ICard[]>([]);
  const [exTutores, setExTutores] = useState <ICard[]>([]);

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

