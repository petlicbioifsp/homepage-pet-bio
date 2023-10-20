import React from "react";
import styles from "./Arrow.module.css";

interface ArrowShape {
  ArrowShapeClass: string;
}

const ArrowShape = ({ ArrowShapeClass }: ArrowShape): JSX.Element => {
  return <span className={styles[ArrowShapeClass]} />;
};

export default ArrowShape;
