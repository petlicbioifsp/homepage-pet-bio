
import React from 'react';
import "./ScrollArrow.css";
const ScrollArrow = ({ showArrow, sectionRef, scrollToSection }) => {

  return (
    <div className={`scroll-arrow ${showArrow ? 'visible' : ''}`} onClick={scrollToSection}>
      <span className="arrow"></span>
    </div>
  );
};

export default ScrollArrow;