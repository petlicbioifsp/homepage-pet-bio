import { useRef, useState } from 'react';
import ScrollToSectionResult from '../../types/ScrollArrowTypes';


const useScrollToSection = ():ScrollToSectionResult => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const showArrow = useState<boolean>(true);

  const scrollToSection = () => {
    sectionRef.current!.scrollIntoView({ 
      
      behavior: 'smooth',
      block: 'start',  
      inline: 'nearest'
    
    });
  };

  return { showArrow, sectionRef, scrollToSection };
};

export default useScrollToSection;