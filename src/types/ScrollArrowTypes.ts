import { Dispatch, SetStateAction } from "react";

type ShowArrowType = [boolean, Dispatch<SetStateAction<boolean>>]

export  interface ScrollArrowProps{
  showArrow: ShowArrowType 
  sectionRef?:React.RefObject<HTMLDivElement>, 
  scrollToSection: () => void,
  customClass1:string, 
  customClass2 :string

}

export default interface ScrollToSectionResult {
    showArrow?: ShowArrowType;
    sectionRef: React.MutableRefObject<HTMLDivElement| null>;
    scrollToSection: () => void;
  }
  