import React from "react";
import styles from "./Button.module.css";
import useScrollToTop from "../../../../hooks/window/useScrollToTop";
import Link from "next/link";

interface IButtonProps {
  value: string;
  to: string;
}

export default function Button({ value, to }: IButtonProps) {
  return (
    <div className={styles.btn_contender}>
      <Link className={styles.btn} type="button" href={to} onClick={useScrollToTop}>
        {value}
      </Link>
    </div>
  );
}
