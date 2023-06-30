import { useEffect, useRef, useState } from 'react';

const useScrollToSection = () => {
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef(null);

  const checaAltura = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setShowArrow(false);
    }else{
        setShowArrow(true);
    }
  };

  const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 400px)").matches) {
        // Telas menores
        checaAltura()
      } else {
        // Telas maiores
        checaAltura();
      }
    };

    window.addEventListener('scroll', checaAltura);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', checaAltura);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { showArrow, sectionRef, scrollToSection };
};


export default useScrollToSection;