import styles from  './Arrow.module.css'
import React from 'react';

interface customClass{
  customClass : string
}

const ArrowShape = ( {customClass}:customClass) => {
  return <span className={ `${styles[customClass]}` } />;
};

export default ArrowShape;
