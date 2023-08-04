import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './CollapsibleArrow.css'


const CollapsibleTrigger = ({ text }) => {
  return (
    <div className='CollapsibleTriggerContainer'>
      <MdKeyboardArrowDown className='collapsible-arrow' />
      <span className='spanText'>{text}</span>
    </div>
  );
};

export default CollapsibleTrigger;