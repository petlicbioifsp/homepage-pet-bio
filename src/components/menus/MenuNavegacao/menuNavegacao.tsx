import React from 'react';
import './menuNavegacao.css';
import { NavLink }from 'react-router-dom';
import { MenuItem } from '../../../types/MenuTypes';
import LogoIFSP from '../../logos/LogoIFSP/LogoIFSP';
import MenuMobileDropdown from '../MenuMobile/MenuMobile';
import useIsMobile from '../../../hooks/window/useIsMobile';

export default function MenuNavegacao() {
  const isMobile = useIsMobile(); 

  const items: MenuItem[] = [
    { path: '/', label: 'Home' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/equipe', label: 'Equipe' },
    { path: '/processo-seletivo', label: 'Processo Seletivo' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <div className="menu">
      <LogoIFSP />
      {isMobile? (
        <MenuMobileDropdown items={items} />
      ) : (
        <ul className="menu-navegacao">
          <li>
            <NavLink to="/" className="menu-navegacao--link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projetos" className="menu-navegacao--link">
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className="menu-navegacao--link">
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/processo-seletivo" className="menu-navegacao--link">
              Processo Seletivo
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="menu-navegacao--link">
              FAQ
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
