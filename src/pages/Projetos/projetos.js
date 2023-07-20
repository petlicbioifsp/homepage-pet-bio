import "./projetos.css";
import FetchProj from "../../hooks/FetchProjetos"
import Header from "../../components/Header/header";
import CardProjeto from "./SubComponentes/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";

export default function Projetos() {
    return (
        <>
            <MenuNavegacao />
            <div className="menu-projetos--corpo">
                <Header texto = "Projetos Desenvolvidos pelo PET/ADS"/>
                <section className="menu-projetos">
                    <FetchProj
                        render={(arrProjetos) =>
                            arrProjetos.map((projetos) => (
                                <CardProjeto
                                key={projetos.id}
                                titulo={projetos.titulo}
                                status={projetos.status}
                                tipo={projetos.tipo}
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