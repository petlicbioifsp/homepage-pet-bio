"use client";

import Link from "../../../../Link/Link";
import useFetchPlataformas from "@/hooks/fetch/useFetchPlataformas";
import styles from "./digitalPlataforms.module.css";

export default function DigitalPlatforms() {
  return useFetchPlataformas({
    render: (plataformas) => (
      <div className={styles.platforms_content}>
        <h3 className={styles.text_section}>Plataformas</h3>
        <ul className={styles.list_platforms}>
          {plataformas.map((item) => (
            <li className={styles.link} key={item.id}>
              <Link
                className="link"
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  });
}
