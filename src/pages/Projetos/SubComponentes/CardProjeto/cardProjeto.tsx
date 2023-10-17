import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import LogoConteiner from "../Logo";
import ClosedContent from "./ClosedContent";
import OpennedContent from "./OpennedContent";
import { IProject } from "../../../../types/ProjectTypes";

export default function CardProjeto(props: IProject) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!isOpen && (
        <motion.div className={isOpen ? "card aberto" : "card fechado"} onClick={toggleIsOpen}>
          <LogoConteiner
            tipo={props.tipo}
            link={props.link}
            logoConteinerClass="logoConteinerOpenned"
            iconClass="Icon"
          />
          <ClosedContent titulo={props.titulo} descricao={props.descricao} />
        </motion.div>
      )}

      {isOpen && (
        <>
          <div className="card_background" onClick={() => setIsOpen(!isOpen)}></div>
          <motion.div className={isOpen ? "card aberto" : "card fechado"}>
            <LogoConteiner
              tipo={props.tipo}
              link={props.link}
              logoConteinerClass="logoConteinerClosed"
              iconClass="icon-aberto"
            />
            <AiFillCloseCircle className="closeButton" onClick={toggleIsOpen} />
            <OpennedContent
              titulo={props.titulo}
              status={props.status}
              expandido={props.expandido}
              tecnologias={props.tecnologias}
            />
          </motion.div>
        </>
      )}
    </>
  );
}
