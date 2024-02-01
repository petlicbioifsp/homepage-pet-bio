import React from "react";
import styles from "./ProcessoSeletivo.module.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import { processoSeletivoContent, requisitosContent, inscricoesContent } from "./SubComponentes/Constants/Constants";
import Footer from "@/components/ui/Footer/footer";

export default function ProcessoSeletivo() {
  return (
    <>
      <MenuNavegacao />

      <div className={styles.corpo}>
        <Cabecalho title="Processo Seletivo" content={processoSeletivoContent} />

        <section className={styles["corpo_informacoes"]}>
          <Requisitos
            title="Requisitos"
            introducao={requisitosContent.introducao}
            item_1={requisitosContent.item_1}
            item_2={requisitosContent.item_2}
            item_3={requisitosContent.item_3}
          />

          <Inscricoes
            title="Inscrições"
            introducao={inscricoesContent.introducao}
            email={inscricoesContent.email}
            prazo={inscricoesContent.prazo}
            data={inscricoesContent.data}
            estado={inscricoesContent.estado}
            detalhes={inscricoesContent.detalhes}
          />
        </section>
      </div>
      <Footer/>
    </>
  );
}
