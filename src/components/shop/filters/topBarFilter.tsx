"use client";
import CustomButton from "@/components/layout/button";
import CustomBadge from "@/components/layout/badge";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import {
  twoColumn,
  threeColumn,
  fourColumn,
  fiveColumn,
  twoList,
} from "@/assets/icons";
import useResizeGrid from "@/hooks/useResizeGrid";

interface TopBarFilterProps {
  setParentGridCount: (count: number) => void;
  setLeftBar: (isOpen: boolean) => void;
  leftFilterStatus: boolean;
}

const TopBarFilter: React.FC<TopBarFilterProps> = ({
  setParentGridCount,
  setLeftBar,
  leftFilterStatus,
}) => {
  const [selectedFilters, setSelectedFilters] = useState(["Plants", "Cactus"]);
  const [activeGridCount, setActiveGridCount] = useState<number>(5);
  const gridCount = useResizeGrid(4);

  useEffect(() => {
    if (gridCount === 2) {
      setActiveGridCount(2);
      setParentGridCount(2);
      return;
    }
    else if 
    (gridCount === 1) {
      setActiveGridCount(1);
      setParentGridCount(1);
      return;
    }
  }, [gridCount]);

  const gridData = [
    { count: 5, src: fiveColumn },
    { count: 4, src: fourColumn },
    { count: 3, src: threeColumn },
    { count: 2, src: twoColumn },
    { count: 1, src: twoList },
  ];

  const toggleLeftFilter = () => {
    setLeftBar(!leftFilterStatus);
  };

  const gridButtonClasses = (count: number) =>
    `w-11 h-10 px-2.5 py-2 border border-gray-200 justify-center items-center ${
      activeGridCount === count
        ? "bg-black-200 text-white"
        : "bg-gray-100 text-black-500"
    }`;

  return (
    <div className="flex flex-col divide-y gap-4 lg:divide-y-0 pt-4 pb-4 w-full">
      <div className="flex justify-between items-center w-full">
        <span className="text-black-600 text-base font-normal">
          134 products
        </span>
        <div className="hidden gap-8 lg:flex justify-between">
          <CustomButton
            iconSide="right"
            iconType="settings"
            label="Filter"
            size="small"
            buttonType="text"
            className="w-4"
            onclick={toggleLeftFilter}
          />

          <CustomButton
            label="Sort by"
            buttonType="text"
            iconSide="right"
            iconType="ChevronDown"
            size="medium"
          />
          <div className="flex items-center">
            {gridData.map(
              (grid) =>
                grid.count <= 5 && (
                  <button
                    key={grid.count}
                    className={gridButtonClasses(grid.count)}
                    onClick={() => {
                      setParentGridCount(grid.count);
                      setActiveGridCount(grid.count);
                    }}
                  >
                    <Image src={grid.src} alt="grid" />
                  </button>
                )
            )}
          </div>
        </div>
        <div className="flex lg:hidden">
          <CustomButton
            label="Sort by"
            iconSide="right"
            iconType="ChevronDown"
            size="medium"
            buttonType="text"
          />
        </div>
      </div>
      <div className="flex pt-4 gap-4 flex-col">
        <div className="flex justify-between lg:hidden">
          <CustomButton
            iconSide="right"
            iconType="settings"
            label="Filter"
            buttonType="text"
            size="medium"
            className="w-4"
            onclick={toggleLeftFilter}
          />
          <div className="flex items-center">
            {gridData.slice(3, 5).map((grid) => (
              <button
                key={grid.count}
                className={gridButtonClasses(grid.count)}
                onClick={() => {
                  setParentGridCount(grid.count);
                  setActiveGridCount(grid.count);
                }}
              >
                <Image src={grid.src} alt="grid" />
              </button>
            ))}
          </div>
        </div>

        <div id="selectedFilters" className="flex gap-4 items-center">
          {selectedFilters.map((filter) => (
            <Fragment key={filter}>
              <CustomBadge
                label={filter}
                fill="gray"
                iconSide="left"
                size="small"
              />
            </Fragment>
          ))}
          <button className="flex text-xs font-semibold text-black-500 gap-0.5 h-5 justify-start items-center">
            <IconX size={14} color="black" /> Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBarFilter;
