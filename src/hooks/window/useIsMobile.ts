import useWindowSize from "./useWindowSize";

export default function useIsMobile ():boolean{
    const {width}  = useWindowSize();
    const isMobile :boolean = width <= 628;
    return isMobile;
}