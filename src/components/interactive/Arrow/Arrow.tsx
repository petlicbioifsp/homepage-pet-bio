import React from "react";
import styles from "./Arrow.module.css";

interface CustomClassProps {
  customClass: string;
}

const ArrowShape = ({ customClass }: CustomClassProps) => {
  return <span className={styles[customClass]} />;
};

export default ArrowShape;
