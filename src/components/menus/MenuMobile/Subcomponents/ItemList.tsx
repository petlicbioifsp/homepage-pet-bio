import React from "react";
import { IMenuItem } from "../../../../types/MenuTypes";
import Link from "next/link";

export default function ItemList({ items, onClick }: { items: IMenuItem[]; onClick: () => void }) {
    return (
      <div className="list">
        <ul>
          {items.map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className="dropdown-link" onClick={onClick}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }