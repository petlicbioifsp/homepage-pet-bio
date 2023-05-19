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
                    <CardProjeto titulo="Projeto Personalidades da Computação" 
                    descricao="Projeto desenvolvido com intuito de pesquisar e montar cartazes com personalidades importantes da computação"
                    envolvidos="Laura Ranucci Luchiari, Vitor Bonelli, Luiz Chiquetano, Bianca "
                    ></CardProjeto>
                    <CardProjeto titulo="Projeto Estudo de React" 
                    descricao="Projeto desenvolvido com intuito de pesquisar e montar cartazes com personalidades importantes da computação"
                    envolvidos="Laura Ranucci Luchiari, Vitor Bonelli, Luiz Chiquetano, Bianca "
                    ></CardProjeto>
                    <CardProjeto titulo="Projeto Wecomp" 
                    descricao="Projeto desenvolvido com intuito de pesquisar e montar cartazes com personalidades importantes da computação"
                    envolvidos="Laura Ranucci Luchiari, Vitor Bonelli, Luiz Chiquetano, Bianca "
                    ></CardProjeto>
                </section>
            </div>
        </>
    )
}