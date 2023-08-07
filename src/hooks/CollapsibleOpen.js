import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import '../components/Arrow/Arrow.css'
import { AiFillCaretUp } from 'react-icons/ai';
const CollapsibleOpen = ({ text, page }) => {
  return (
    <div className='CollapsibleTriggerContainer'>
      {page === 'FAQ' && <AiFillCaretUp/>}
      {page === 'Equipe' && <MdKeyboardArrowUp className='collapsible-arrow'/>}
      <span>{text}</span>
    </div>
  );
};

export default CollapsibleOpen;