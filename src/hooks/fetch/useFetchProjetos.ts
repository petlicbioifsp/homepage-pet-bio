import { useState, useEffect } from 'react';
import { IProject } from '../../types/ProjectTypes';
import  {IFetchRenderProjects}  from '../../types/FetchTypes';

export default function  FetchProjetos ({ render }: IFetchRenderProjects)  {
  const [arrProjetos, setProjetos] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await fetch('./data/projetos.json'); 
        const data = await response.json();
        setProjetos(data.projetos);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  return render(arrProjetos);
};
