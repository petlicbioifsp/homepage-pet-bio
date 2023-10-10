import { useState } from 'react';
import { noBlurStyle, withBlurStyle } from '../../pages/Equipe/SubComponentes/EquipeConst';

function useBlur() {
  const [blurred, setBlur] = useState(noBlurStyle);

  const handleMouseEnter = () => {
    setBlur(withBlurStyle);
  };

  const handleMouseLeave = () => {
    setBlur(noBlurStyle);
  };

  return { blurred, handleMouseEnter, handleMouseLeave };
}

export default useBlur;
