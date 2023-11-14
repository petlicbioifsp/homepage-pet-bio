import React from "react";
import Link from "next/link";
import styles from"../menuNavegacao.module.css";
import { IMenuItem } from "@/types/MenuTypes";

export default function MenuDesk({ items }: { items: IMenuItem[] }) {
  return (
    <ul className={styles["menu-navegacao"]}>
      {items.map(({ path, label }) => (
        <li key={path}>
          <Link href={path} className={styles["menu-navegacao--link"]}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}