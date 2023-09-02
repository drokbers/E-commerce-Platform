import { useState } from "react";

import {
  IconCircleDot,
  IconPointFilled,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";
import { Product } from "@/types/model";

interface PaginationProps {
  items: Product[];
  onActiveIndexChange: (index: number) => void;
}

const Pagination = ({ items, onActiveIndexChange }: PaginationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalIcons = Math.ceil(items.length / 4);

  const skipIndexHandler = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (activeIndex + 1) % totalIcons
        : (activeIndex - 1 + totalIcons) % totalIcons;
    setActiveIndex(newIndex);
    onActiveIndexChange(newIndex);

  };

  console.log(activeIndex);

  return (
    <div className="flex justify-center items-center gap-2.5">
      <button onClick={() => skipIndexHandler("prev")}>
        <IconArrowLeft color="black" size={24} />
      </button>

      {Array.from({ length: totalIcons }).map((_, index) => {
        if (index === activeIndex) {
          return (
            <IconCircleDot
              key={index}
              color="black"
              size={16}
              onClick={() => setActiveIndex(index)}
            />
          );
        }
        return (
          <IconPointFilled
            key={index}
            color="black"
            size={6}
            onClick={() => setActiveIndex(index)}
          />
        );
      })}
      <button onClick={() => skipIndexHandler("next")}>
        <IconArrowRight color="black" size={24} />
      </button>
    </div>
  );
};
export default Pagination;
