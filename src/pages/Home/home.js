import "./home.css"
import "./Button.css"
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Info from "./Infos";
import Title from "./Title";
import Reveal from "./Reveal";
import Button from "./Button";
import IFSPLogo from '../../resources/LogoIfsp.png'
import Logo from '../../resources/Icon.PNG'
export default function Home() {
    return (
        <div className="home">
            <MenuNavegacao></MenuNavegacao>
            <div className="headerContender">
                <Title
                    title="Bem-vindo a página do PET/ADS São Carlos"
                    content="Programa de Educação Tutorial"
                />
                <img className="IFSPLogo" src={IFSPLogo} alt='Identidade visual PET/ADS' />
            </div>
            <img src={Logo} alt='Identidade Visual IFSP-SC' />
            <Reveal>
                <Info
                    title="Sobre o PET"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean magna quam, aliquet id tortor a, facilisis faucibus erat. Nunc pretium tempor commodo. 
                    Sed egestas, tortor id tincidunt pretium, nulla lectus molestie quam, in ornare elit magna et lacus.
                     Integer aliquet feugiat lacus a rutrum. Praesent sed tempor nisl, sit amet cursus libero. 
                    Etiam vel est bibendum, pulvinar neque ac, convallis lacus. 
                    Nullam nec eleifend purus, non ullamcorper turpis.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32."
                />
                <Button
                    value="Processo Seletivo"
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
                    Nullam nec eleifend purus, non ullamcorper turpis.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.">
                </Info>
                <Button
                    value="Ver Projetos"
                    to='/projetos'
                />
            </Reveal>
        </div>
    )
}
