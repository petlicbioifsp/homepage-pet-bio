import React from "react";
import { motion } from "framer-motion";
import { IOpennedContentProps} from "../../../../types/ProjectTypes";
import '../CardProjeto/cardProjeto.css'
import Carousel from "../CarouselComponent/Carousel";

export default function OpennedContent({titulo, status, expandido, images}:IOpennedContentProps){ 
    return(
        <motion.div className="content-card-aberto">
              <motion.h2 className="card-titulo">
                {titulo} → {status}
              </motion.h2>
              <motion.div className="scrowSpace">
                <p className="card--texto__expandido">{expandido}</p>
                {/* <div className="card--texto__envolvidos"> */}
                  {/* <p className="card--texto__expandido">{tecnologias} </p> */}
                  {/* <p className="card--texto__expandido"></p> */}
                {/* </div> */}
                <div className="carousel">
                  <Carousel images={images}/>
                </div>
              </motion.div>
            </motion.div>
    )
}