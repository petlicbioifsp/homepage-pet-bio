import { useState } from "react";
import { noBlurStyle, withBlurStyle } from "../../pages/Equipe/constants/EquipeConst";

export default function useBlur() {
  const [blurred, setBlur] = useState(noBlurStyle);

  const handleMouseEnter = () => {
    setBlur(withBlurStyle);
  };

  const handleMouseLeave = () => {
    setBlur(noBlurStyle);
  };

  return { blurred, handleMouseEnter, handleMouseLeave };
}
