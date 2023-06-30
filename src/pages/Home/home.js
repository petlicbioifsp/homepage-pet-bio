import "./home.css";
import useScrollToSection from "./useScrollToSection";
import Info from "./SubComponentes/Home_Infos/Infos.js";
import Button from "./SubComponentes/Home_button/Button";
import Reveal from "../../components/Efeito Reveal/Reveal";
import ScrollArrow from "./SubComponentes/ScrollArrow/ScrollArrow";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import HeaderConteiner from "./SubComponentes/Header_conteiner/HeaderConteiner";

export default function Home() {
    const { showArrow, sectionRef, scrollToSection } = useScrollToSection();

    return (
        <div className="home">
            <MenuNavegacao></MenuNavegacao>
            
            <HeaderConteiner/>
     
            <ScrollArrow
                showArrow={showArrow}
                sectionRef={sectionRef}
                scrollToSection={scrollToSection}
            />

            <Reveal>

                <Info
                    title="Sobre o PET"

                    content='O Programa de Educação Tutorial (PET) é um programa do governo federal brasileiro de estímulo a 
                        atividades de pesquisa, ensino e extensão em nível de graduação. O PET foi criado e implantado em 1979 
                        pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - CAPES, com o nome original de Programa 
                        Especial de Treinamento, cujo objetivo era criar um grupo de elite intelectual, dedicado à pesquisa e ao 
                        estudo. Em 2004, o nome foi alterado para Programa de Educação Tutorial e adotou uma nova filosofia. Os 
                        objetivos do programa, de acordo com o SESu, são a melhoria do ensino de graduação, a formação acadêmica 
                        do aluno, a interdisciplinaridade, e o planejamento e execução de atividades acadêmicas diversificadas 
                        em grupos de tutoria. De 2006 a 2012 ocorreu uma grande expansão dos grupos PET no país. Atualmente, existem
                        842 grupos distribuídos em 121 Instituições de Ensino Superior.'/>

                <Button value="Processo Seletivo"
                    to='/processo-seletivo'
                />
                
            </Reveal>

            <div ref={sectionRef}></div>

            <Reveal>
                <Info
                    title="Propósito"
                    content='O grupo PET do curso de Análise e Desenvolvimento de Sistemas do IFSP São Carlos (PET/ADS/SCL) 
                        foi criado em 2010. Desde sua criação, o PET/ADS/SCL já desenvolveu diversas atividades voltadas 
                        ao ensino, à pesquisa e à extensão. O grupo é formado por um docente tutor, até doze bolsistas e até seis 
                        voluntários. Cada estudante do PET possui uma dedidação semanal de 20h e atua simultaneamente em diferentes
                        atividades, que vão desde o estudo de técnicas de Computação, linguagens e frameworks, até o desenvolvimento
                        de sistemas e a organização de eventos acadêmicos. Os estudantes também se envolvem em projetos de extensão e
                        de pesquisa tanto locais quanto em parceria com outras instituições de ensino. Entre 2010 e 2022, o PET/ADS/SCL
                        teve como tutor o prof. João Luiz Franco. Atualmente, o grupo é coordenado pelo prof. Lucas Oliveira. '>
                </Info>

                <Button
                    value="Conheça os Projetos"
                    to='/projetos'
                />

            </Reveal>

        </div>

    )
}
