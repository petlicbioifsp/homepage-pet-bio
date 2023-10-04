import { Dispatch, SetStateAction } from "react";

type ShowArrowType = [boolean, Dispatch<SetStateAction<boolean>>]

export  interface IScrollArrowProps{
  showArrow: ShowArrowType 
  sectionRef?:React.RefObject<HTMLDivElement>, 
  scrollToSection: () => void,
  customClass1:string, 
  customClass2 :string

}

export default interface IScrollToSectionResult {
    showArrow?: ShowArrowType;
    sectionRef: React.MutableRefObject<HTMLDivElement| null>;
    scrollToSection: () => void;
  }
  