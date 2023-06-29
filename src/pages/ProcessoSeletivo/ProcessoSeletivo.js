import { AiOutlineCloudDownload } from 'react-icons/ai';
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import './ProcessoSeletivo.css';

function ProcessoSeletivo() {
    return (
        <div>
            <MenuNavegacao />
            <div className="corpo">
                <div className="cabecalho">
                    <h1 className="titulo">Processo Seletivo</h1>
                    <p className="texto">
                        Todos os estudantes regularmente matriculados no curso de Tecnologia em Análise e Desenvolvimento de Sistemas do IFSP Câmpus São Carlos podem participar dos processos seletivos do PET/ADS.
                        O grupo é composto por até doze bolsistas e até seis voluntários. Os processos seletivos são regidos por editais publicados periodicamente.
                    </p>
                </div>
                <section className="corpo_informacoes">
                    <div>
                        <div id="requisitos">
                            <h2 className="titulo_secundario">Requisitos</h2>
                            <p className="texto">Para se inscrever no processo seletivo, o candidato deverá:</p>
                            <ul>
                                <li className="texto">Estar regularmente matriculado no curso de Análise e Desenvolvimento de Sistemas.</li>
                                <li className="texto">Possuir disponibilidade para se dedicar 20 horas semanais ao PET/ADS. </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div id='inscricoes'>
                            <h2 className="titulo_secundario">Inscrições</h2>
                            <p className="texto">
                                As inscrições devem ser realizadas pelo e-mail <a className="email" href="mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS"> pet.ads.scl@ifsp.edu.br</a>.
                            </p>
                            <p className="texto">Prazo de inscrição: <span className='encerrado'>27 de março de 2023</span> (encerrado)</p>
                            <p className="texto">Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificadas no edital: </p>
                            <p className='download'><AiOutlineCloudDownload /></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ProcessoSeletivo;