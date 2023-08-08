import "./cardProjeto.css";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import logoExtensao from '../../../../resources/extensao.png'
import logoEnsino from '../../../../resources/ensino-superior.png';
import logoPesquisa from '../../../../resources/big-search-len.png'
import logoDesenvolvimento from "../../../../resources/cloud-coding.png";
export default function CardProjeto(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className={isOpen ? "card aberto" : "card"}>
            <motion.div className="logoConteiner">
                {props.tipo === 'ensino' && <motion.img className= 'logo-projeto' src={logoEnsino} alt="ensino"/>}

                {props.tipo === 'pesquisa' && <motion.img className= 'logo-projeto' src={logoPesquisa} alt="pesquisa" />}

                {props.tipo === 'extensão' && <motion.img className = 'logo-projeto'  src={logoExtensao} alt="extensao" />}

                {props.tipo === 'extensão-desenvolivmento' && <motion.img className = 'logo-projeto'  src={logoDesenvolvimento} alt="extensao-desenvolvimento" />}

                <motion.a rel='noopener noreferrer' target="_blank" href={props.link}>
                    <FaGithub className="Icon"/>
                </motion.a>
            
            </motion.div>
           
           <motion.div onClick={() => setIsOpen(!isOpen)}>

           {!isOpen && (
                
                <><motion.h2 className="card-titulo">{props.titulo}</motion.h2>
                <motion.p className="card-descricao">{props.descricao}</motion.p></>)}
                
            {isOpen && (
            <>
                <motion.h2 className="card-titulo">{props.titulo} → {props.status}</motion.h2>
                    <motion.div>
                        <p className='card--texto__expandido'>{props.expandido}</p>
                        <div className='card--texto__envolvidos'>
                            <p className='card--texto__expandido'>{props.tecnologias} </p>
                            <p className='card--texto__expandido'></p>
                        </div>
                </motion.div>
            </>
            )}
           </motion.div>
            

        </motion.div>
    )
}