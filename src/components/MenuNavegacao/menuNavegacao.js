import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './menuNavegacao.css';

export default function MenuNavegacao() {
    const [itemAtivo, setitemAtivo] = useState('');
    const localização = useLocation();

    useEffect(() => {
        setitemAtivo(localização.pathname);
    }, [localização]);

    const handleClick = (path) => {
        setitemAtivo(path);
    };

    return (
        <div className='menu'>
            <img className="logo" alt="logo do PET"></img>
            <ul className='menu-navegacao'>
                <li className={itemAtivo === '/' ? 'ativo' : ''}>
                    <NavLink to='/' className="menu-navegacao--link" onClick={() => handleClick('/')}>Home</NavLink>
                </li>
                <li className={itemAtivo === '/projetos' ? 'ativo' : ''}>
                    <NavLink to='/projetos' className="menu-navegacao--link" onClick={() => handleClick('/projetos')}>Projetos</NavLink>
                </li>
                <li className={itemAtivo === '/equipe' ? 'ativo' : ''}>
                    <NavLink to='/equipe' className="menu-navegacao--link" onClick={() => handleClick('/equipe')}>Equipe</NavLink>
                </li>
                <li className={itemAtivo === '/processo-seletivo' ? 'ativo' : ''}>
                    <NavLink to='/processo-seletivo' className="menu-navegacao--link" onClick={() => handleClick('/processo-seletivo')}>Processo Seletivo</NavLink>
                </li>
            </ul>
        </div>
    )
}