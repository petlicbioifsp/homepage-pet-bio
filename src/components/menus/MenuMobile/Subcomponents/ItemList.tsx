import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuItem } from "../../../../types/MenuTypes";

export default function ItemList({ items, onClick }: { items: IMenuItem[]; onClick: () => void }) {
    return (
      <div className="list">
        <ul>
          {items.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} className="dropdown-link" onClick={onClick}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }