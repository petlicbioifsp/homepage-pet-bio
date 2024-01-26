import { useState, useEffect } from "react";
import { ICard } from "../../types/EquipeTypes";
import { IFetchEquipeProps } from "../../types/FetchTypes";

export default function FetchEquipe({ render }: IFetchEquipeProps) {
  const FETCH_URL: string = "./data/integrantes.json";

  const [alunos, setAlunos] = useState<ICard[]>([]);
  const [tutores, setTutores] = useState<ICard[]>([]);
  const [exAlunos, setExAlunos] = useState<ICard[]>([]);
  const [exTutores, setExTutores] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok) {
          throw new Error(`Falha na requisição ao servidor. Status: ${response.status}`);
        }

        const data = await response.json();
        const { aluno, tutores, exAlunos, exTutores } = data;
        setAlunos(aluno);
        setTutores(tutores);
        setExAlunos(exAlunos);
        setExTutores(exTutores);
      } catch (error) {
        console.error(`Ocorreu um erro ao obter os integrantes: ${error}`);
      }
    };

    fetchIntegrantes();
  }, []);

  return render({ alunos, tutores, exAlunos, exTutores });
}
