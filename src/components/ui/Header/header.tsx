import React from 'react';
import './header.css'

interface HeaderProps{ 
    texto:string
}

function Header( {texto} :HeaderProps ){
    return(
        <h1 className="titulo">{texto}</h1>
    )
};
export default Header;
