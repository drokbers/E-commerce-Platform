"use client";
import { SetStateAction, useState } from "react";
import LeftBarFilters from "./filters/leftBarFilters";
import TopBarFilter from "./filters/topBarFilter";
import ProductShopGrid from "./shopGrid";

import { Filters } from "@/types/model";
import { useFilters } from "@/hooks/useFilters";

const Shop = () => {
  const [gridCount, setGridCount] = useState(5);
  const [isLeftFilterVisible, setLeftFilterVisible] = useState(true);
  const [shortBy, setShortBy] = useState<string>("");

  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    category: [],
    color: [],
    size: [],
    style: [],
    price: [],
  });

  const onFiltersUpdate = (filters: SetStateAction<Filters>) => {
    setSelectedFilters(filters);
  };

  const onShortByUpdate = (shortBy: SetStateAction<string>) => {
    setShortBy(shortBy);
  };

  const filteredProducts = useFilters(selectedFilters, shortBy);

  const transformedProducts = filteredProducts.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    discount: product.discount,
    new: product.new,
    description: product.description,
    rating: product.rating,
    photo: product.photos ? product.photos[0] : "/defaultImagePath",
  }));
  const isLeftBarOpen = () => gridCount === 5  && isLeftFilterVisible || isLeftFilterVisible;

  console.log(isLeftFilterVisible)
  return (
    <div className="flex  pr-4 pl-4 md:pr-12 md:pl-12 ">
      {isLeftBarOpen() && (
        <LeftBarFilters
          setCloseFilter={setLeftFilterVisible}
          onFiltersUpdate={onFiltersUpdate}
        />
      )}
      <div className="flex  flex-col w-full">
        <TopBarFilter
          leftFilterStatus={isLeftFilterVisible}
          setLeftBar={setLeftFilterVisible}
          setParentGridCount={setGridCount}
          selectedFiltersTop={selectedFilters}
          onShortByUpdate={onShortByUpdate}
        />
        <ProductShopGrid gridCount={gridCount} products={transformedProducts} />
      </div>
    </div>
  );
};
export default Shop;
