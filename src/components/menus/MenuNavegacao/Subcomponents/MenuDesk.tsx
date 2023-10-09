import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuItem } from '../../../../types/MenuTypes';

export default function MenuDesk({ items }: { items: IMenuItem[] }) {
  return (
    <ul className="menu-navegacao">
      {items.map(({ path, label }) => (
        <li key={path}>
          <NavLink to={path} className="menu-navegacao--link">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}


