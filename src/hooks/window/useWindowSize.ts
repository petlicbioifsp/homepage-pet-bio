import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
}

function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({width:0});

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size || { width: 0 };
}

export default useWindowSize;
