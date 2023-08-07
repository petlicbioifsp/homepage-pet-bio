import React from 'react';
import '../components/Arrow/Arrow.css'
import { AiFillCaretDown} from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';


const CollapsibleTrigger = ({ text, page }) => {
  return (
    <div className='CollapsibleTriggerContainer'>
       {page === 'Equipe' && <MdKeyboardArrowDown className='collapsible-arrow'/>}
       {page === 'FAQ' && <AiFillCaretDown/>}
      <span className='spanText'>{text}</span>
    </div>
  );
};

export default CollapsibleTrigger;