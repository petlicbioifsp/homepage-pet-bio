import React from "react";
import ClosedContent from "./ClosedContent";
import LogoConteiner from "./LogoConteiner";
import { IClosedCardProps} from "../../../../types/ProjectTypes";

export default function ClosedCard({tipo, link, titulo,descricao}:IClosedCardProps){
    return(
        <>
        <LogoConteiner tipo={tipo} link={link} logoConteinerClass="logoConteinerOpenned" iconClass="Icon" />
        <ClosedContent titulo={titulo} descricao={descricao} />
        </>
    )

}