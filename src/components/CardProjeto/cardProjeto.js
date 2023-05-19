import {motion} from 'framer-motion';
import {useState} from 'react';
import logoProjeto from "../../resources/kisspng-computer-icons-directory-icon-design-folder-icon-5b23828b1c8d19.801150631529053835117.png";
import "./cardProjeto.css";

export default function CardProjeto(props){
    const[isOpen,setIsOpen] = useState(false);

    return(
        <motion.div className="card" onClick={()=> setIsOpen(!isOpen)}>
            <motion.img className="logo-projeto" alt="simbolo de uma pasta" 
            src={logoProjeto}></motion.img>
            <motion.h2 className="card-titulo" >{props.titulo}</motion.h2>
            <motion.p className="card-descricao" >{props.descricao}</motion.p>
            {isOpen && (
                <motion.div>
                    <p className='card--texto__espancao'>AAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                </motion.div>
            )}
        </motion.div>
    )
}