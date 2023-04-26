import logoProjeto from "../../resources/kisspng-computer-icons-directory-icon-design-folder-icon-5b23828b1c8d19.801150631529053835117.png";
import "./cardProjeto.css";

export default function CardProjeto(props){
    return(
        <div className="card">
            <img className="logo-projeto" alt="simbolo de uma pasta" 
            src={logoProjeto}></img>
            <h3 className="card-titulo">{props.titulo}</h3>
            <p className="card-descricao">{props.descricao}</p>
        </div>
    )
}