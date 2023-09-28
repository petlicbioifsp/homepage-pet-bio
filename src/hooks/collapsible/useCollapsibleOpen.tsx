import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import '../../components/interactive/Arrow/Arrow.css'
import { AiFillCaretUp } from 'react-icons/ai';
import { Collapsibleprops } from '../../types/CollapsibleTypes';

const CollapsibleOpen = ({ text, page }:Collapsibleprops) => {
  return (
    <div className='conteiner'>
    
      <div>
        {page === 'FAQ' && <AiFillCaretUp/>}
        {page === 'Equipe' && <MdKeyboardArrowUp className='collapsible-arrow'/>}
      </div>
    
      <div className='CollapsibleTriggerContainer'>
        <span>{text}</span>
      </div>
      
    </div>
  );
};

export default CollapsibleOpen;