import { useEffect, useRef, useState } from 'react';

const useScrollToSection = () => {
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    const handleShowArrow = () => {

      if (window.scrollY > window.innerHeight * 0.5) {
        setShowArrow(false);

      }else{
          setShowArrow(true);
      }
    };
  
      window.addEventListener('scroll',handleShowArrow);
      window.addEventListener('resize', handleShowArrow);
  
  }, []);

  return { showArrow, sectionRef, scrollToSection };

};


export default useScrollToSection;