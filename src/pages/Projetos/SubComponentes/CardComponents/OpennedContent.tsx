import React from "react";
import { motion } from "framer-motion";
import { IOpennedContentProps} from "../../../../types/ProjectTypes";

export default function OpennedContent({titulo, status, expandido, tecnologias}:IOpennedContentProps){ 
    return(
        <motion.div>
              <motion.h2 className="card-titulo">
                {titulo} → {status}
              </motion.h2>
              <motion.div className="scrowSpace">
                <p className="card--texto__expandido">{expandido}</p>
                <div className="card--texto__envolvidos">
                  <p className="card--texto__expandido">{tecnologias} </p>
                  <p className="card--texto__expandido"></p>
                </div>
              </motion.div>
            </motion.div>
    )
}