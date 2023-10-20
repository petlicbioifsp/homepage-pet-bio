import { useState, useEffect } from "react";
import { IProject } from "../../types/ProjectTypes";
import { IFetchProjects } from "../../types/FetchTypes";

export default function FetchProjetos({ render }: IFetchProjects) {
  const projectDataURL: string = "./data/projetos.json";
  const [arrProjetos, setProjetos] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await fetch(projectDataURL);
        const data = await response.json();
        setProjetos(data.projetos);
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    };

    fetchProjetos();
  }, []);

  return render(arrProjetos);
}
