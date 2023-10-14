import React from "react";
import "./ScrollArrow.css";
import Arrow from "../../../../components/interactive/Arrow/Arrow";
import { IScrollArrowProps } from "../../../../types/ScrollArrowTypes";

const ScrollArrow = ({ showArrow, sectionRef, scrollToSection, containerClass, arrowClass }: IScrollArrowProps) => {
  return (
    <div className={`${containerClass} ${showArrow && "visible"}`} onClick={scrollToSection}>
      <Arrow customClass={arrowClass} />
    </div>
  );
};

export default ScrollArrow;
