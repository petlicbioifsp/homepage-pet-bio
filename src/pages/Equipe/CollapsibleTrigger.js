import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const CollapsibleTrigger = ({ text, onClick }) => {
  return (
    <div onClick={onClick}>
      <AiFillCaretDown />
      <span>{text}</span>
    </div>
  );
};

export default CollapsibleTrigger;
