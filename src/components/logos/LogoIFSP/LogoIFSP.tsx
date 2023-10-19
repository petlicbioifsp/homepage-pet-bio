import React from "react";
import styles from "./LogoIFSP.module.css";
import IFSPLogo from "../../../resources/logos/LogoIfsp.png";
import Link from "../../interactive/Link/Link";

function LogoIFSP() {
  return (
    <Link href="https://scl.ifsp.edu.br" rel="noreferrer" target="_blank">
      <img className={styles.IFSPLogo} src={IFSPLogo} alt="Identidade visual IFSP/SCL" />
    </Link>
  );
}

export default LogoIFSP;
