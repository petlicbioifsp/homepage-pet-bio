import { useState, useEffect } from "react";

interface IinnerWidth{ 
  width:number
}

function useWindowSize():IinnerWidth{
    const [size, setSize] = useState<IinnerWidth>({width : window.innerWidth});
    
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