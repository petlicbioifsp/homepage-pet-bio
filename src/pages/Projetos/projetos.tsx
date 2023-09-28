import "./projetos.css";
import React from 'react';
import Header from "../../components/ui/Header/header";
import useIsMobile from "../../hooks/window/useIsMobile";
import FetchProj from "../../hooks/fetch/useFetchProjetos";
import CardProjeto from "./SubComponentes/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";

interface ProjectInterface {
  id?: string;
  titulo: string;
  status: string;
  tipo: string;
  link: string;
  descricao: string;
  expandido: string;
  tecnologias: string;
}

export default function Projetos() {
  const isMobile = useIsMobile();

  return (
    <>
      <MenuNavegacao />
      <div className="menu-projetos--corpo">
        <Header texto={isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS"} />
        <section className="menu-projetos">
          <FetchProj
            render={(arrProjetos: ProjectInterface[]) =>
              arrProjetos.map((projeto) => (
                <CardProjeto
                  key={projeto.id}
                  titulo={projeto.titulo}
                  status={projeto.status}
                  tipo={projeto.tipo}
                  link={projeto.link}
                  descricao={projeto.descricao}
                  expandido={projeto.expandido}
                  tecnologias={projeto.tecnologias}
                />
              ))
            }
          />
        </section>
      </div>
    </>
  );
}
