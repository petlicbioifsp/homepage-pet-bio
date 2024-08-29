import React from "react";
import styles from "./LogoPET.module.css";
import Logo from "../../../resources/logos/logoPet.png";

export default function LogoPET() {
  return (
    <img
      className={styles.PETLogo}
      src={Logo.src}
      alt="Identidade Visual PET/LICBIO"
    />
  );
}
