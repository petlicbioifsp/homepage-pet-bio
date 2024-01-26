import React from "react";
import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "../../Link/Link";

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <Link
        className="gitIcon"
        href="https://github.com/pet-ads"
        title="Visite nosso github"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub />
      </Link>

      <pre className={styles.footer_content}>
        Desenvolvido com ♥ por{" "}
        <Link className="link" href="/" title="Página inicial">
          PET/ADS
        </Link>{" "}
        @{" "}
        <Link
          className="link"
          href="https://scl.ifsp.edu.br"
          title="Página do IFSP-SCL"
          rel="noreferrer"
          target="_blank"
        >
          IFSP São Carlos.
        </Link>
      </pre>
    </footer>
  );
}
