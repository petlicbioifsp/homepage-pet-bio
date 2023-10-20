import React from "react";
import "./ScrollArrow.css";
import Arrow from "../../../../components/interactive/Arrow/Arrow";
import { IScrollArrowProps } from "../../../../types/ScrollArrowTypes";

export default function ScrollArrow({
  showArrow,
  sectionRef,
  scrollToSection,
  containerClass,
  arrowClass,
}: IScrollArrowProps): JSX.Element {
  return (
    <div className={`${containerClass} ${showArrow && "visible"}`} onClick={scrollToSection}>
      <Arrow ArrowShapeClass={arrowClass} />
    </div>
  );
}
