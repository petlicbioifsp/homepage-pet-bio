import "./projetos.css";
import Footer from "../../components/Footer/footer";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardProjeto from "../../components/CardProjeto/cardProjeto";

export default function Projetos(){
    return(
        <body>
            <MenuNavegacao></MenuNavegacao>
            <h2 className="menu-projetos--titulo">Projetos desenvolvidos pelo PET</h2>
            <section className="menu-projetos">
                <CardProjeto titulo="Projeto 1" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                 neque et voluptates quaerat."></CardProjeto>
                 <CardProjeto titulo="Projeto 2" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                 neque et voluptates quaerat."></CardProjeto>
                 <CardProjeto titulo="Projeto 3" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                 neque et voluptates quaerat."></CardProjeto>
                 <CardProjeto titulo="Projeto 4" descricao="Lorem ipsum dolor sit amet. Ut voluptate sint est dignissimos
                 neque et voluptates quaerat."></CardProjeto>
            </section> e
            <Footer></Footer>
        </body>
    )
}