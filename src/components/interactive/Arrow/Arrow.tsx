import React from "react";
import styles from "./Arrow.module.css";

interface ArrowShapeProps {
  ArrowShapeClass: string;
}

const ArrowShape = ({ ArrowShapeClass }: ArrowShapeProps): JSX.Element => {
  return <span className={styles[ArrowShapeClass]} />;
};

export default ArrowShape;
