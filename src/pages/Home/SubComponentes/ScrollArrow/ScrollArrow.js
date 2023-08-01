
import React from 'react';
import "./ScrollArrow.css";
import Arrow from '../../../../components/Arrow/Arrow';
const ScrollArrow = ({ showArrow, sectionRef, scrollToSection, customClass}) => {

  return (
    <div className={`scroll-arrow ${showArrow ? 'visible' : ''}`} onClick={scrollToSection}>
    <Arrow customClass={customClass}/>
    </div>
  );
};

export default ScrollArrow;