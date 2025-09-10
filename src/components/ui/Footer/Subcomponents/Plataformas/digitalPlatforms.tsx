"use client";

import Link from "../../../../Link/Link";
import useFetchPlataformas from "@/hooks/fetch/useFetchPlataformas";
import styles from "./digitalPlataforms.module.css";

//importa todos que vai usar
import { FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

// cria um "mapa" de strings -> componente
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  FaInstagram,
  FaYoutube,
  FaGlobe, // para o "Site PET anterior"
  };

interface Plataforma {
  id: string;
  nome: string;
  url: string;
  icon: string; // novo campo que você vai colocar no JSON
}

export default function DigitalPlatforms() {
  return useFetchPlataformas({
    render: (plataformas) => (
      <div className={styles.platforms_content}>
        <h3 className={styles.text_section}>Plataformas</h3>
        <ul className={styles.list_platforms}>
          {plataformas.map((item: Plataforma) => {
              const Icon = icons[item.icon]; // pega o ícone certo
              return (
                <li className={styles.link} key={item.id}>
                  <Link
                    className="link"
                    href={item.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {Icon && <Icon className={styles.icon} />} {item.nome}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    ),
  });
}
