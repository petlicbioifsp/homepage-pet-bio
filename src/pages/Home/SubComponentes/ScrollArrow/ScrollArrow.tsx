
import React from 'react';
import "./ScrollArrow.css";
import Arrow from '../../../../components/interactive/Arrow/Arrow';
import { IScrollArrowProps } from '../../../../types/ScrollArrowTypes';


const ScrollArrow = ({ showArrow, sectionRef, scrollToSection, customClass1, customClass2}: IScrollArrowProps) => {

  return (
    <div className={`${ customClass1} ${showArrow ? 'visible' : ''}`} onClick={scrollToSection}>
    <Arrow customClass={customClass2}/>
    </div>
  );
};

export default ScrollArrow;