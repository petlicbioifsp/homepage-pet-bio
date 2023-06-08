import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';

const CollapsibleOpen = ({ text }) => {
  return (
    <div>
      <AiFillCaretUp />
      <span>{text}</span>
    </div>
  );
};

export default CollapsibleOpen;
