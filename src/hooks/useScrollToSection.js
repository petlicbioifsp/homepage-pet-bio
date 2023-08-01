import { useEffect, useRef, useState } from 'react';

const useScrollToSection = () => {
  const sectionRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);


  const getOffset = () => {
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.clientHeight;
    return sectionHeight > windowHeight ? windowHeight / 2 : sectionHeight;
  };

  const scrollToSection = () => {
    const offset = getOffset();
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offset });
  };

  useEffect(() => {
    const handleShowArrow = () => {
      if (window.scrollY > getOffset()) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleShowArrow);
    window.addEventListener('resize', handleShowArrow);

    return () => {
      window.removeEventListener('scroll', handleShowArrow);
      window.removeEventListener('resize', handleShowArrow);
    };
  }, []);

  return { showArrow, sectionRef, scrollToSection };
};

export default useScrollToSection;