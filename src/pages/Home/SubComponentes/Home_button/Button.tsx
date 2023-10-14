import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import useScrollToTop from "../../../../hooks/window/useScrollToTop";

interface IButtonProps {
  value: string;
  to: string;
}

export default function Button({ value, to }: IButtonProps) {
  return (
    <div className={styles.btn_contender}>
      <Link className={styles.btn} type="button" to={to} onClick={useScrollToTop}>
        {value}
      </Link>
    </div>
  );
}
