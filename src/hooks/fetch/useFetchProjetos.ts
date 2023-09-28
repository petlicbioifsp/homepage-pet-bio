import { useState, useEffect } from 'react';
import { ProjectInterface } from '../../types/ProjectTypes';
import  {FetchRenderProjectsInterface}  from '../../types/FetchTypes';

const FetchProjetos = ({ render }: FetchRenderProjectsInterface) => {
  const [arrProjetos, setProjetos] = useState<ProjectInterface[]>([]);

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

export default FetchProjetos;
