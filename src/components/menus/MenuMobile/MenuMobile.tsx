import './MenuMobile.css';
import React, { useState } from 'react';
import { HiMenu }  from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { IMenuItem } from '../../../types/MenuTypes';

const MenuMobileDropdown: React.FC<{ items: IMenuItem[] }> = ({ items }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownClass = `menu-mobile ${isDropdownOpen ? 'active' : ''}`
  const toggleDropdown = ():void =>  {setIsDropdownOpen(!isDropdownOpen);};

  return (
    <div className={dropdownClass}>
      <HiMenu
        aria-label="Toggle Menu"
        className='menu-icon'
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="dots" onClick={toggleDropdown}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="shadow cut"></div>
          <div className="container cut">
            <div className="drop cut2"></div>
          </div>
          <div className="list">
            <ul>
              {items.map(({path, label}) => (
                <li key={path}>
                  <NavLink  to={path} className="dropdown-link" onClick={toggleDropdown}>
                    {label}
                  </NavLink>
                </li>))}
            </ul>
          </div>
            <div className="dot"></div>
        </div>
      )}
      {isDropdownOpen && (<div className="cursor" onClick={toggleDropdown}></div>)}
    </div>
  );
};

export default MenuMobileDropdown;
