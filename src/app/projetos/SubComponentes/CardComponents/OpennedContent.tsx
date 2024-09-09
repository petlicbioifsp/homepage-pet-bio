import React from "react";
import { motion } from "framer-motion";
import { IOpennedContentProps } from "../../../../types/ProjectTypes";
import "../CardProjeto/cardProjeto.css";
import Carousel from "../CarouselComponent/Carousel";
import useIsMobile from "@/hooks/window/useIsMobile";

export default function OpennedContent({
  titulo,
  status,
  expandido,
  images,
}: IOpennedContentProps) {
  const isMobile: boolean = useIsMobile();
  return (
    <>
      {isMobile ? (
        <motion.div className="content-card-aberto">
          <div className="carousel">
            <Carousel images={images} />
          </div>
          <motion.h2 className="card-titulo">
            {titulo} → {status}
          </motion.h2>
          <motion.div className="scrowSpace">
            <p className="card--texto__expandido">{expandido}</p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div className="content-card-aberto">
          <motion.h2 className="card-titulo">
            {titulo} → {status}
          </motion.h2>
          <motion.div className="scrowSpace">
            <p className="card--texto__expandido">{expandido}</p>
            <div className="carousel">
              <Carousel images={images} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
