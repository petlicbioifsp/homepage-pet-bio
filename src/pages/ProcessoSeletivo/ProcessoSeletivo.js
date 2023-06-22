import { AiOutlineCloudDownload } from 'react-icons/ai';
//import { GiSchoolBag } from 'react-icons/gi';
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import './ProcessoSeletivo.css';

function ProcessoSeletivo() {
    return (
        <div>
            <MenuNavegacao />
            <div className="processo-seletivo--corpo">
                <div className="processo-seletivo--cabecalho">
                    <h1 className="processo-seletivo--titulo">Processo Seletivo</h1>
                    <p className="processo-seletivo--texto">
                        Todos os estudantes regularmente matriculados no curso de Tecnologia em Análise e Desenvolvimento de Sistemas do IFSP Câmpus São Carlos podem participar dos processos seletivos do PET/ADS.
                        O grupo é composto por até doze bolsistas e até seis voluntários. Os processos seletivos são regidos por editais publicados periodicamente.
                    </p>
                </div>
                <section className="processo-seletivo--corpo_informacoes">
                    {/* <h2 className="processo-seletivo--titulo_secundario">Informações Importantes</h2>
                    <div className="processo-seletivo--info_importante">
                        <Info icone={<AiOutlineTeam className='mochila' />} nome="Vagas" descricao="Voluntários: 5" textoAlternativo="Icone"></Info>
                        <Etapa numero="1" titulo="Prova" descricao="Prova teórico-prática}"></Etapa>
                        <Etapa numero="2" titulo="Histórico" descricao="Análise de histórico escolar"></Etapa>
                        <Etapa numero="3" titulo="Entrevista" descricao="Entrevista para análise de perfil"></Etapa>
                    </div> */}
                    <div>
                        <div id="requisitos">
                            <h2 className="processo-seletivo--titulo_secundario">Requisitos</h2>
                            <p className="processo-seletivo--texto">Para se inscrever no processo seletivo, o candidato deverá:</p>
                            <ul>
                                <li className="processo-seletivo--texto">Estar regularmente matriculado no curso de Análise e Desenvolvimento de Sistemas.</li>
                                <li className="processo-seletivo--texto">Possuir disponibilidade para se dedicar 20 horas semanais ao PET/ADS. </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div id='inscricoes'>
                            <h2 className="processo-seletivo--titulo_secundario">Inscrições</h2>
                            <p className="processo-seletivo--texto">
                                As inscrições devem ser realizadas pelo e-mail <a className="email" href="mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS"> pet.ads.scl@ifsp.edu.br</a>.
                            </p>
                            <p className="processo-seletivo--texto">Prazo de inscrição: <span className='encerrado'>27 de março de 2023</span> (encerrado)</p>
                            <p className="processo-seletivo--texto">Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificadas no edital: </p>
                            <p className='download'><AiOutlineCloudDownload /></p>
                        </div>
                    </div>
                    {/* <div>
                        <div id="edital">
                            <h2 className="processo-seletivo--titulo_secundario">Edital</h2>
                            <p className="processo-seletivo--texto">Acesse o edital clicando no ícone a seguir: <AiFillEdit className='inscricao' /></p>
                        </div>
                    </div> */}
                </section>
            </div>
        </div>

    )
}

export default ProcessoSeletivo;