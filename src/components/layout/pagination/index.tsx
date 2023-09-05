import { useState } from "react";
import {
  IconCircleDot,
  IconPointFilled,
  IconArrowRight,
  IconArrowLeft,
  IconMinus,
} from "@tabler/icons-react";
import { Product, Review } from "@/types/model";

interface NavigationDotsProps {
  items: Product[] | Review[];
  onActiveIndexChange?: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  isArrow?: boolean;
  iconStyle?: "dot" | "line";
  isPaginationDots?: boolean;
  iconFilled?: boolean;
  gridCount: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  items,
  onActiveIndexChange,
  orientation,
  isArrow = true,
  iconStyle,
  isPaginationDots = true,
  iconFilled = false,
  gridCount,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPage = Math.ceil(items.length / gridCount);

  const handleIndexChange = (indexChange: number | "next" | "prev") => {
    let newIndex = typeof indexChange === "number" 
      ? indexChange 
      : indexChange === "next" 
        ? (activeIndex + 1) % totalPage 
        : (activeIndex - 1 + totalPage) % totalPage;

    setActiveIndex(newIndex);
    onActiveIndexChange?.(newIndex);
  };

  const IconComponent = iconStyle === "dot" ? IconCircleDot : IconMinus;
  const navOrientation = orientation === "vertical" ? "rotate-90" : "";


  return (
    <div
      className={`flex justify-center items-center gap-2.5 ${navOrientation}`}
    >
      <button
        onClick={() => handleIndexChange("prev")}
        className={`${iconFilled ? "bg-black-100 rounded-full p-3" : ""}`}
      >
        {isArrow && <IconArrowLeft color="black" size={24} />}
      </button>

      {isPaginationDots &&
        Array.from({ length: totalPage }).map((_, index) =>
          index === activeIndex ? (
            <IconComponent
              key={index}
              color="black"
              size={20}
              
            />
          ) : (
            <IconPointFilled
              key={index}
              color="black"
              size={8}
              onClick={() => handleIndexChange?.(index)}
            />
          )
        )}

      <button
        onClick={() => handleIndexChange("next")}
        className={`${iconFilled ? "bg-black-100 rounded-full p-3" : ""}`}
      >
        {isArrow && <IconArrowRight color="black" size={24} />}
      </button>
    </div>
  );
};

export default NavigationDots;
