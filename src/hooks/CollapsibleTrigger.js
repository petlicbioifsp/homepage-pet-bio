import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';


const CollapsibleTrigger = ({ text }) => {
  return (
    <div>
      <AiFillCaretDown />
      <span>{text}</span>
    </div>
  );
};

export default CollapsibleTrigger;