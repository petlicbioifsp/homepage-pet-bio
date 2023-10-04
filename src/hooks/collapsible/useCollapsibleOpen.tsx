import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { ICollapsibleprops } from '../../types/CollapsibleTypes';
import styles from '../../components/interactive/Arrow/Arrow.module.css'

const CollapsibleOpen = ({ text, page }:ICollapsibleprops) => {
  const isFaq = page ==='FAQ'

  return (
    <div className={styles.conteiner}>
    
      <div>
        {isFaq ? 'FAQ' && <AiFillCaretUp/>:
          <MdKeyboardArrowUp className={styles['collapsible-arrow']}/>}
      </div>
    
      <div className={styles.CollapsibleTriggerContainer}>
        <span>{text}</span>
      </div>
      
    </div>
  );
};

export default CollapsibleOpen;