import React from "react";
import { motion } from "framer-motion";
import { IProject } from "../../../../types/ProjectTypes";

export default function ClosedContent({ titulo, descricao }: IProject) {
  return (
    <motion.div>
      <motion.h2 className="card-titulo">{titulo}</motion.h2>
      <motion.p className="card-descricao">{descricao}</motion.p>
    </motion.div>
  );
}
