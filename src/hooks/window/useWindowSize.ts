import { useState, useEffect } from "react";

interface innerWidth{ 
  width:number
}

function useWindowSize():innerWidth{
    const [size, setSize] = useState<innerWidth>({
        width : window.innerWidth
    });
    const handleResize = () => {
        setSize({
          width: window.innerWidth,
        });
      };
    
useEffect(() =>{

setSize({
    width:window.innerWidth
})
window.addEventListener('resize', handleResize)

return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

return size;
}

export default useWindowSize;