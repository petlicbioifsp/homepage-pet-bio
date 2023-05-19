import "./projetos.css";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardProjeto from "../../components/CardProjeto/cardProjeto";

export default function Projetos() {
    return (
        <>
            <MenuNavegacao></MenuNavegacao>
            <div className="menu-projetos--corpo">
                <h1 className="menu-projetos--titulo">Projetos desenvolvidos pelo PET</h1>
                <section className="menu-projetos">
                    <CardProjeto titulo="Projeto 1" descricao="Lorem ipsum "></CardProjeto>
                </section>
            </div>
        </>
    )
}