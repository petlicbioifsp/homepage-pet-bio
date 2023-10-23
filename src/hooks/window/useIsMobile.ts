import useWindowSize from "./useWindowSize";

export default function useIsMobile() {
  const { width } = useWindowSize();
  return width <= 628;
}

