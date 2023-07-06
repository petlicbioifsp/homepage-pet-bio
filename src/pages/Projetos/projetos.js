import CardProjeto from "../../components/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Header from "../../components/Header/header";
import FetchProj from "../../components/CardProjeto/FetchProjetos"
import "./projetos.css";

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
                            <CardProjeto key={projetos.id}
                            titulo={projetos.titulo}
                            status={projetos.status}
                            
                            descricao={projetos.descricao}
                            expandido={projetos.expandido}
                            tecnologias={projetos.tecnologias}
                            ></CardProjeto>
                        ))
                    }
                />
                </section>
            </div>
        </>
    )
}