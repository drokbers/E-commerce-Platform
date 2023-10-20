import { useState, useEffect } from "react";

const useResizeGrid = (initialCount: number) => {
  const [gridCount, setGridCount] = useState(initialCount);

  // debounce ve throttle?

  useEffect(() => {
    const updateGridCount = () => {
      if (window.innerWidth >= 1400) {
        setGridCount(initialCount);
      } else if (window.innerWidth >= 992) {
        setGridCount(initialCount - 1);
      } else if (window.innerWidth >= 768) {
        setGridCount(initialCount - 2);
      } else if (window.innerWidth >= 356) {
        setGridCount(1);
      } else {
        setGridCount(1);
      }
    };

    updateGridCount();

    window.addEventListener("resize", updateGridCount);
    return () => {
      window.removeEventListener("resize", updateGridCount);
    };
  }, []);

  return gridCount;
};

export default useResizeGrid;
