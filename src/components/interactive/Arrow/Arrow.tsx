import React from 'react';
import styles from  './Arrow.module.css'

interface customClassProps{
  customClass : string
}

const ArrowShape = ( {customClass}: customClassProps) => {
  return <span className={ `${styles[customClass]}` } />;
};

export default ArrowShape;
