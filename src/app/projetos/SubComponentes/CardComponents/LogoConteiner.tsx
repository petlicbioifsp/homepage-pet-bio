import React from "react";
import { motion } from "framer-motion";
import { MdExtension, MdOutlineComputer } from "react-icons/md";
import { FaGraduationCap, FaSearch, FaGithub } from "react-icons/fa";
import { ILogoConteinerProps} from "../../../../types/ProjectTypes";

export default function LogoConteiner({tipo, link, logoConteinerClass, iconClass}:ILogoConteinerProps ){
    return (
        <motion.div className={logoConteinerClass}>
        {tipo === "ensino" && <FaGraduationCap className="logo-projeto" />}
        {tipo === "pesquisa" && <FaSearch className="logo-projeto" />}
        {tipo === "extensão" && <MdExtension className="logo-projeto" />}
        {tipo === "extensão-desenvolivmento" && <MdOutlineComputer className="logo-projeto" />}

        <motion.a rel="noopener noreferrer" target="_blank" href={link}>
          <FaGithub className= {iconClass} />
        </motion.a>
        </motion.div>
    )
}