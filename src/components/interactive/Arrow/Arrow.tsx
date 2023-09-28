import './Arrow.css'
import React from 'react';

interface customClass{
  customClass : string
}

const ArrowShape = ( {customClass}:customClass) => {
  return <span className={` ${customClass}`} />;
};

export default ArrowShape;
