import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Collapsible from 'react-collapsible'
import "./Faq.css"
import CollapsibleTrigger from "../../components/Faq/CollapsibleTrigger"
import CollapsibleOpen from "../../components/Faq/CollapsibleOpen"


export default function Faq() {
    return (

        <body>
            <MenuNavegacao></MenuNavegacao>

            <h2 className="faq-titulo">Perguntas frequentes</h2>
            <section className="faq--caixa__perguntas">

                <Collapsible trigger={<CollapsibleTrigger text=" Quais as responsabilidades de um membro do PET?" />} triggerWhenOpen={<CollapsibleOpen text=" Quais as responsabilidades de um membro do PET?" />} transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                        Os membros precisam se dedicar integralmente às atividades acadêmicas do grupo, alêm de suas atividades acadêmicas regulares. As atividades do grupo são definidas pelo tutor, e podem incluir o desenvolvimento de planos de estudos, a criação de atividades de extensão com membros da comunidade acadêmica e a implementação de projetos internos ao PET, entre outras.
                        As responsabilidades estão descritas em maior detalhe no Edital(link).
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Como eu entro no PET?" />} triggerWhenOpen={<CollapsibleOpen text=" Como eu entro no PET?" />} transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                        Para se juntar ao PET, você deve ser aluno de ADS no IFSP/SC e passar pelo processo seletivo. Em cada processo seletivo, é selecionado uma quantidade de novos entrantes correspondente à quantia de vagas disponíveis. 
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Quanto vale a bolsa do PET?" />} triggerWhenOpen={<CollapsibleOpen text=" Quanto vale a bolsa do PET?" />} transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                        Atualmente, a bolsa é de R$700 mensais.
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Quando é o próximo processo seletivo?" />} triggerWhenOpen={<CollapsibleOpen text=" Quando é o próximo processo seletivo?" />}  transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                    Os processos seletivos acontecem, de modo geral, várias vezes por ano. Não podemos te dizer exatamente quando será o próximo, mas fique de olho aqui na página (e no seu e-mail institucional)!
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Como funciona o processo seletivo?" />} triggerWhenOpen={<CollapsibleOpen text=" Como funciona o processo seletivo?" />}  transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                    O processo seletivo é realizado em duas fases, contendo uma prova e uma entrevista. Dependendo da sua colocação, é possível entrar no PET como bolsista ou voluntário. Confira a página Processo Seletivo(link) para mais detalhes. 
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Qual a diferença entre voluntários e bolsistas?" />} triggerWhenOpen={<CollapsibleOpen text=" Qual a diferença entre voluntários e bolsistas?" />}  transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                    Ambos possuem as mesmas responsabilidades dentro do grupo, e realizam as mesmas atividades. A única diferença é a bolsa.
                    </p>
                </Collapsible>

                <Collapsible trigger={<CollapsibleTrigger text=" Um voluntário pode vir a receber bolsa?" />} triggerWhenOpen={<CollapsibleOpen text=" Um voluntário pode vir a receber bolsa?" />}  transitionTime='200' className="faq-pergunta">
                    <p className="faq-resposta">
                    Sim! Os alunos que entrarem como voluntários terão a oportunidade de, caso ocorra a desistência de um bolsista, passarem a ser bolsistas. A "ordem" na qual a transferência do tipo de membro é realizada é baseada na colocação durante o processo seletivo.
                    </p>
                </Collapsible>


            </section>


        </body>
    )
}