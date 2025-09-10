"use client";

import Link from "../../../../Link/Link";
import useFetchPlataformas from "@/hooks/fetch/useFetchPlataformas";
import styles from "./digitalPlataforms.module.css";

// importa os ícones que você vai usar
import { FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

// mapeamento dos nomes do JSON para os componentes de ícone
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  FaInstagram,
  FaYoutube,
  FaGlobe, // para o "Site PET anterior"
};

// interface base (caso já exista IPlatform, vamos extender)
interface Plataforma {
  id: string;
  nome: string;
  url: string;
  icon?: string; // opcional para evitar erro
}

export default function DigitalPlatforms() {
  return useFetchPlataformas({
    render: (plataformas) => (
      <div className={styles.platforms_content}>
        <h3 className={styles.text_section}>Plataformas</h3>
        <ul className={styles.list_platforms}>
          {(plataformas as Plataforma[]).map((item) => {
            const Icon = item.icon ? icons[item.icon] : null;
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
