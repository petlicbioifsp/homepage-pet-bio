import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import CardAluno from "../../components/Card_Integrantes/CardAluno";
import './equipe.css';

export default function Equipe() {
    return (
        <>
            <MenuNavegacao></MenuNavegacao>
            <div className="equipe--corpo">

                <h2 className="equipe--titulo">Tutor(es):</h2>
                <section className="equipe--tutores">
                    <CardAluno nome="Sr. Breno Duarte" srcFoto="http://4.bp.blogspot.com/_8BBWUsjhbHQ/TH6tsnB5zfI/AAAAAAAACrQ/3A8M7bbJRTI/s320/the-karate-kid2010jackie-chancatching-the-fly-with.jpg" ano="2022"/>
                    <CardAluno nome="Dr. Benjamin da Conceição" srcFoto="https://i.pinimg.com/474x/11/aa/df/11aadfacde157057c67d6489e9abe9f1.jpg" ano="2022"/>
                </section>
                    
                <h2 className="equipe--titulo">Alunos:</h2>
                <section className="equipe--alunos">
                    <CardAluno nome="Srta. Stella Fernandes" srcFoto="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Ootp076.jpg/220px-Ootp076.jpg" ano="2022"/>
                    <CardAluno nome="Vicente Cavalcanti" srcFoto="https://cdn.britannica.com/11/215011-050-3127A07E/American-actor-Keanu-Reeves-2014.jpg" ano="2022"/>
                    <CardAluno nome="Nicole Dias" srcFoto="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg/220px-Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg" ano="2022"/>
                    <CardAluno nome="Alana Dias" srcFoto="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Naomie_Harris_2014.jpg/220px-Naomie_Harris_2014.jpg" ano="2022"/>
                    <CardAluno nome="Dr. Emanuel Monteiro" srcFoto="https://cdn.britannica.com/77/191077-050-63262B99/Samuel-L-Jackson.jpg?w=400&h=300&c=crop" ano="2022"/>
                    <CardAluno nome="Nicole Dias" srcFoto="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg/220px-Amy_Adams_UK_Nocturnal_Animals_Premiere_%28cropped%29.jpg" ano="2022"/>
                    <CardAluno nome="Alana Dias" srcFoto="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Naomie_Harris_2014.jpg/220px-Naomie_Harris_2014.jpg" ano="2022"/>
                    <CardAluno nome="Dr. Emanuel Monteiro" srcFoto="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/300px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg" ano="2022"/>
                </section>
            </div>                                
        </>
        
    )
}