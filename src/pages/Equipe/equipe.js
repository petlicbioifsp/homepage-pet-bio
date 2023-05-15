import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardAluno from "../../components/Card_Integrantes/CardAluno";
import './equipe.css';

export default function Equipe() {
    return (
        <>
            <MenuNavegacao></MenuNavegacao>
            <div className="equipe--corpo">

                <h2 className="equipe--titulo">Tutores:</h2>
                <section className="equipe--tutores">
                    <CardAluno nome="Sr. Breno Duarte" srcFoto="http://4.bp.blogspot.com/_8BBWUsjhbHQ/TH6tsnB5zfI/AAAAAAAACrQ/3A8M7bbJRTI/s320/the-karate-kid2010jackie-chancatching-the-fly-with.jpg" ano="2022"/>
                    <CardAluno nome="Dr. Benjamin da Conceição" srcFoto="http://4.bp.blogspot.com/_8BBWUsjhbHQ/TH6tsnB5zfI/AAAAAAAACrQ/3A8M7bbJRTI/s320/the-karate-kid2010jackie-chancatching-the-fly-with.jpg" ano="2022"/>
                </section>
                    
                <h2 className="equipe--titulo">Alunos:</h2>
                <section className="equipe--alunos">
                    <CardAluno nome="Srta. Stella Fernandes" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Vicente Cavalcanti" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Nicole Dias" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Alana Dias" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Dr. Emanuel Monteiro" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Luiz Gustavo Gomes Gustavo Gomeso" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="João Alícia Alves" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Thales Moreira" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                    <CardAluno nome="Ana Laura Barros" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                </section>
            </div>                                
        </>
        
    )
}