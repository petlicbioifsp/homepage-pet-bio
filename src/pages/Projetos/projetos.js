import "./projetos.css";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardProjeto from "../../components/CardProjeto/cardProjeto";

export default function Projetos(){
    return(
        <body>
            <MenuNavegacao></MenuNavegacao>
            <div className="menu-projetos--corpo">
                <h1 className="menu-projetos--titulo">Projetos desenvolvidos pelo PET</h1>
                <section className="menu-projetos">
                    <CardProjeto titulo="Projeto 1" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                    neque et voluptates quaerat."></CardProjeto>
                    <CardProjeto titulo="Projeto 2" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                    neque et voluptates quaerat."></CardProjeto>
                    <CardProjeto titulo="Projeto 3" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                    neque et voluptates quaerat."></CardProjeto>
                    <CardProjeto titulo="Projeto 4" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                    neque et voluptates quaerat."></CardProjeto>
                </section>
            </div>
        </body>
    )
}