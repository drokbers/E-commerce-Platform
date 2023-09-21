"use client";
import CustomButton from "@/components/layout/button";
import CustomBadge from "@/components/layout/badge";
import Image from "next/image";
import { useState } from "react";

import { IconX } from "@tabler/icons-react";

import {
  twoColumn,
  threeColumn,
  fourColumn,
  fiveColumn,
  twoList,
} from "@/assets/icons";

type TopBarFilterProps = {
  setParentGridCount: (count: number) => void;
};

const TopBarFilter: React.FC<TopBarFilterProps> = ({ setParentGridCount }) => {
  const [selectedFilters, setSelectedFilters] = useState(["Plants", "Cactus"]);

  const [activeGridCount, setActiveGridCount] = useState<number>();

  const gridCountHandler = (count: number) => {
    setParentGridCount(count);
    setActiveGridCount(count);
  };

  const gridData = [
    { count: 5, src: fiveColumn },
    { count: 4, src: fourColumn },
    { count: 3, src: threeColumn },
    { count: 2, src: twoColumn },
    { count: 1, src: twoList },
  ];

  return (
    <div className="flex flex-col pt-4 pb-4 w-full">
      <div className="flex justify-between items-center w-full">
        <span className="text-black-600 text-base font-normal">
          134 products
        </span>

        <div className="flex">
          <CustomButton
            iconSide="right"
            iconType="settings"
            label="Filter"
            size={"small"}
            className=" w-4"
          />
          <CustomButton
            label="Sort by"
            iconSide="right"
            iconType="ChevronDown"
            size={"small"}
          />

          <div className="flex items-center">
            {gridData.map((grid) => (
              <button
                key={grid.count}
                className={`w-11 h-10 px-2.5 py-2  border border-gray-200 justify-center items-center  ${
                  activeGridCount === grid.count
                    ? "bg-black-200 text-white"
                    : "bg-gray-100 text-black-500"
                }`}
                onClick={() => gridCountHandler(grid.count)}
              >
                <Image src={grid.src} alt="grid" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        id="selectedFilters"
        className="flex gap-4 items-center overflow-auto"
      >
        {selectedFilters.map((filter) => (
          <div className="flex">
            <CustomBadge
              label={filter}
              fill="gray"
              iconSide="left"
              size={"small"}
            />
          </div>
        ))}

        <button className="flex  text-xs font-semibold  text-black-500  gap-0.5 h-5 justify-start items-center ">
          <IconX size={14} color="black" /> Clear All
        </button>
      </div>
    </div>
  );
};

export default TopBarFilter;
