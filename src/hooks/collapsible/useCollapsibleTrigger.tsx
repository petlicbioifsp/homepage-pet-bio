import React from 'react';
import { AiFillCaretDown} from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ICollapsibleprops } from '../../types/CollapsibleTypes';
import styles from '../../components/interactive/Arrow/Arrow.module.css'

export default function  CollapsibleTrigger ({ text, page }:ICollapsibleprops){
  const isFaqPage = page === 'FAQ'
  return (
    <div className={styles.conteiner}>
      <div> 
        {isFaqPage ? (
          'FAQ' && <AiFillCaretDown/>
          ) : (
          <MdKeyboardArrowDown className={styles['collapsible-arrow']}/>
          )}
      </div>
    <div  className={styles.CollapsibleTriggerContainer}>
        <span className={styles.spanText}>{text}</span>
    </div>
    
    </div>
  );
};

