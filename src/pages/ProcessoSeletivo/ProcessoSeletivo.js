import { AiFillEdit } from 'react-icons/ai';
import { GiSchoolBag } from 'react-icons/gi';
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import './ProcessoSeletivo.css';
import Etapa from './SubComponentes/Etapa';
import Info from "./SubComponentes/Info";

function ProcessoSeletivo() {
    return (
        <div>
            <MenuNavegacao />
            <div className="processo-seletivo--corpo">
                <div className="processo-seletivo--cabecalho">
                    <h1 className="processo-seletivo--titulo">Processo Seletivo</h1>
                    <p className="processo-seletivo--texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo reiciendis consectetur, illum nesciunt molestias eius delectus veniam dolores necessitatibus fuga quia iure aut commodi et cum laboriosam suscipit adipisci.</p>
                </div>
                <section className="processo-seletivo--corpo_informacoes">
                    <h2 className="processo-seletivo--titulo_secundario">Informações Importantes</h2>
                    <div className="processo-seletivo--info_importante">
                        <Info icone={<GiSchoolBag className='mochila' />}
                            nome="Vagas"
                            descricao="Bolsista: 8"
                            textoAlternativo="Icone"
                        ></Info>
                        <Etapa numero="1" titulo="Prova" descricao="resultado 11/12"></Etapa>
                        <Etapa numero="2" titulo="Entrevista" descricao="resultados 12/12"></Etapa>
                        <Etapa numero="3" titulo="Apresentação" descricao="resultados 13/12"></Etapa>
                    </div>
                    <div>
                        <div id="requisitos">
                            <h2 className="processo-seletivo--titulo_secundario">Requisitos</h2>
                            <p className="processo-seletivo--texto">Para se inscrever no processo seletivo, o candidato deverá:</p>
                            <ul>
                                <li className="processo-seletivo--texto">Requisito 1</li>
                                <li className="processo-seletivo--texto">Requisito 2</li>
                                <li className="processo-seletivo--texto">Requisito 3</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div id='inscricoes'>
                            <h2 className="processo-seletivo--titulo_secundario">Inscrições</h2>
                            <p className="processo-seletivo--texto">As inscrições devem ser realizadas exclusivamente por suap.
                                Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificadas no edital.</p>
                        </div>
                    </div>
                    <div>
                        <div id="edital">
                            <h2 className="processo-seletivo--titulo_secundario">Edital</h2>
                            <div className="processo-seletivo--caixa">
                                <p className="processo-seletivo--texto">Acesse o edital clicando no ícone a seguir:</p>
                                <AiFillEdit className='inscricao' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ProcessoSeletivo;