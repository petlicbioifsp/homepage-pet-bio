import"./home.css"
import"./Button.css"
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Info from "./Infos";
import Title from "./Title";
import Reveal from "./Reveal";
import Button from "./Button";
export default function Home() {
    return (
        <body className="home">
            <MenuNavegacao></MenuNavegacao>  

            <Title title="Bem vindo a Pagina do PET" content="Programa de Educação Tutorial"/>
            <Reveal>
                 <Info 
                    title ="Sobre o PET"  
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean magna quam, aliquet id tortor a, facilisis faucibus erat. Nunc pretium tempor commodo. 
                    Sed egestas, tortor id tincidunt pretium, nulla lectus molestie quam, in ornare elit magna et lacus.
                     Integer aliquet feugiat lacus a rutrum. Praesent sed tempor nisl, sit amet cursus libero. 
                    Etiam vel est bibendum, pulvinar neque ac, convallis lacus. 
                    Nullam nec eleifend purus, non ullamcorper turpis"/>
                <Button 
                value ="Processo Seletivo" 
                to='/processo-seletivo' 
                />
            
            </Reveal>

            <Reveal>
            <Info 
            title="Proposito" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean magna quam, aliquet id tortor a, facilisis faucibus erat. Nunc pretium tempor commodo. 
            Sed egestas, tortor id tincidunt pretium, nulla lectus molestie quam, in ornare elit magna et lacus. 
            Integer aliquet feugiat lacus a rutrum. Praesent sed tempor nisl, sit amet cursus libero. 
            Etiam vel est bibendum, pulvinar neque ac, convallis lacus. 
            Nullam nec eleifend purus, non ullamcorper turpis"/>

                <Button 
                value ="Ver Projetos" 
                to='/projetos' 
                />
            
            </Reveal>

            
           
        </body>
    )
}
