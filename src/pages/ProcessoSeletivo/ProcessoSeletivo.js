import Footer from "../../components/Footer/footer";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Info from "./SubComponentes/Info"
import Requisitos from './SubComponentes/Requisitos';
import Inscricao from './SubComponentes/Inscricao';
import Edital from './SubComponentes/Edital';
import Etapa from './SubComponentes/Etapa';
import { AiOutlineCheck } from 'react-icons/ai';

function ProcessoSeletivo() {
    return (
        <div>
            <MenuNavegacao></MenuNavegacao>
            <div><h2 className="menu-projetos--titulo">Processo Seletivo 2023/2</h2></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo reiciendis consectetur, illum nesciunt molestias eius delectus veniam dolores necessitatibus fuga quia iure aut commodi et cum laboriosam suscipit adipisci.</p>
            <section>
                <h3>Informações Importantes</h3>
                <Info icone={<AiOutlineCheck size={28} />}
                    nome="Vagas "
                    descricao="Bolsista: 8"
                    textoAlternativo="Icone"
                ></Info>
                <Info icone={<AiOutlineCheck size={28} />}
                    nome="Vagas"
                    descricao="Bolsista: 8"
                    textoAlternativo="Icone"
                ></Info>
                <Etapa numero="1" titulo="Prova" descricao="resultado 11/12"></Etapa>
                <Etapa numero="2" titulo="Entrevista" descricao="resultados 12/12"></Etapa>
                <Etapa numero="3" titulo="Apresentação" descricao="resultados 13/12"></Etapa>

                <div>
                    <Requisitos></Requisitos>
                </div>
                <div>
                    <Inscricao></Inscricao>
                </div>
                <div>
                    <Edital icone={<AiOutlineCheck size={28} />}> </Edital>
                </div>
            </section>
            <Footer></Footer>
        </div>

    )
}

export default ProcessoSeletivo;