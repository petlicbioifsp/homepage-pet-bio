import Footer from "../../components/Footer/footer";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardAluno from "../../components/Card_Integrantes/CardAluno.js";

export default function Equipe() {
    return (
        <div>
            <MenuNavegacao></MenuNavegacao>

            <h2>Tutores:</h2>

            
            <h2>Alunos:</h2>

        
            <CardAluno nome="João" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
            <CardAluno nome="João" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
            <CardAluno nome="João" srcFoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJVh5x--C3pPWaAFOHsTlxb4KIszVWmMNIS7UyLY9&s" ano="2022"/>
                                                



            <Footer></Footer>
        </div>
    )
}