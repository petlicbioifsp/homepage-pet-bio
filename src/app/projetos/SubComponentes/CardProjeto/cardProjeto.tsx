import "./cardProjeto.css";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ClosedCard from "../CardComponents/ClosedCard";
import OpennedCard from "../CardComponents/OpennedCard";
import { IProject } from "../../../../types/ProjectTypes";


export default function CardProjeto({ titulo, tipo, descricao, expandido, link, status, images }: IProject) {  
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () =>  setIsOpen(!isOpen);
  return (
    <>
      {!isOpen ? (
        <motion.div className={isOpen ? "card aberto" : "card fechado"} onClick={toggleIsOpen}>
          <ClosedCard tipo={tipo} link={link} titulo={titulo} descricao={descricao} />
        </motion.div>
      ) : (
        <>
          <div className="card_background" onClick={toggleIsOpen}>
            <motion.div className={isOpen ? "card aberto" : "card fechado"}>
              <OpennedCard
                tipo={tipo}
                link={link}
                titulo={titulo}
                status={status}
                expandido={expandido}
                toggleIsOpen={toggleIsOpen}
                images={images}
              />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
