import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Info from "./SubComponentes/Info"
import Etapa from './SubComponentes/Etapa';

function ProcessoSeletivo() {
    return (
        <div>
            <MenuNavegacao></MenuNavegacao>
            <div><h2 className="menu-projetos--titulo">Processo Seletivo 2023/2</h2></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo reiciendis consectetur, illum nesciunt molestias eius delectus veniam dolores necessitatibus fuga quia iure aut commodi et cum laboriosam suscipit adipisci.</p>
            <section>
                <h3>Informações Importantes</h3>
                <Info icone=""
                    nome="Vagas"
                    descricao="Bolsista: 8"
                    textoAlternativo="Icone"
                ></Info>
                <Info icone=""
                    nome="Vagas"
                    descricao="Bolsista: 8"
                    textoAlternativo="Icone"
                ></Info>
                <Etapa numero="1" titulo="Prova" descricao="resultado 11/12"></Etapa>
                <Etapa numero="2" titulo="Entrevista" descricao="resultados 12/12"></Etapa>
                <Etapa numero="3" titulo="Apresentação" descricao="resultados 13/12"></Etapa>

                <div>
                    <div id="requisitos">
                        <h3>Requisitos</h3>
                        <p>Para se inscrever no processo seletivo, o candidato deverá:</p>
                        <ul>
                            <li>Requisito 1</li>
                            <li>Requisito 2</li>
                            <li>Requisito 3</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div id='inscricoes'>
                        <h3>Inscrições</h3>
                        <p>As inscrições devem ser realizadas exclusivamente por suap.
                            Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificadas no edital.</p>
                    </div>
                </div>
                <div>
                    <div id="edital">
                        <h3>Edital</h3>
                        <p>Acesse o edital clicando no ícone a seguir:</p>
                        <img src='' alt="teste" />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ProcessoSeletivo;