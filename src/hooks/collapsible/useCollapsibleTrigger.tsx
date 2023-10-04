import React from 'react';
import { AiFillCaretDown} from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ICollapsibleprops } from '../../types/CollapsibleTypes';
import styles from '../../components/interactive/Arrow/Arrow.module.css'

const CollapsibleTrigger = ({ text, page }:ICollapsibleprops) => {
  const isFaq = page =='FAQ'
  return (
    <div className={styles.conteiner}>
      <div> 
        {isFaq ? 'FAQ' && <AiFillCaretDown/>:<MdKeyboardArrowDown className={styles['collapsible-arrow']}/>}
      </div>
    <div  className={styles.CollapsibleTriggerContainer}>
        <span className={styles.spanText}>{text}</span>
    </div>
    
    </div>
  );
};

export default CollapsibleTrigger;