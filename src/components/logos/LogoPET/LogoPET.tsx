import React from "react";
import styles from "./LogoPET.module.css";
import Logo from "../../../resources/logos/LogoPET.png";

export default function LogoPET() {
  return <img className={styles.PETLogo} src={Logo} alt="Identidade Visual PET/ADS" />;
}
