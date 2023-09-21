import "./projetos.css";
import React from 'react';
import FetchProj from "../../hooks/fetch/useFetchProjetos"
import Header from "../../components/ui/Header/header";
import useWindowSize from "../../hooks/window/useWindowSize"
import CardProjeto from "./SubComponentes/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";

export default function Projetos() {
  const size = useWindowSize();
  const isMobile = size.width <= 628;

  return (
    <>
      <MenuNavegacao />
      <div className="menu-projetos--corpo">
        <Header texto={isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS"} />
        <section className="menu-projetos">
          <FetchProj
            render={(arrProjetos) =>
              arrProjetos.map((projetos) => (
                <CardProjeto
                  key={projetos.id}
                  titulo={projetos.titulo}
                  status={projetos.status}
                  tipo={projetos.tipo}
                  link = {projetos.link}
                  descricao={projetos.descricao}
                  expandido={projetos.expandido}
                  tecnologias={projetos.tecnologias}
                >
                </CardProjeto>
              ))
            }
          />
        </section>
      </div>
    </>
  )
}
