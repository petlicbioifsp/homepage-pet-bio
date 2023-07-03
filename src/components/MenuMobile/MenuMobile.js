import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuMobile.css';
import menuIcon from './menu-icon.png';

const MenuMobileDropdown = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="menu-mobile">
      <img
        className="menu-icon"
        src={menuIcon}
        alt="Menu"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <ul className="dropdown-content">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                exact
                to={item.path}
                className="dropdown-link"
                activeClassName="active"
                onClick={toggleDropdown}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuMobileDropdown;
