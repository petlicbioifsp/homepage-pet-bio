import React from "react";
import Link from "next/link";
import "../menuNavegacao.css";
import { IMenuItem } from "@/types/MenuTypes";

export default function MenuDesk({ items }: { items: IMenuItem[] }) {
  return (
    <ul className="menu-navegacao">
      {items.map(({ path, label }) => (
        <li key={path}>
          <Link href={path} className="menu-navegacao--link">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}