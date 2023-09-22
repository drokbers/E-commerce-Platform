"use client";
import { useState } from "react";
import LeftBarFilters from "./filters/leftBarFilters";
import TopBarFilter from "./filters/topBarFilter";
import ProductShopGrid from "./shopGrid";

import ProductData from "@/product.json";

const Shop = () => {
  const [gridCount, setGridCount] = useState(5);
  const [leftFilter, setleftFilter] = useState<boolean>(true);

  const transformedProducts = ProductData.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    discount: product.discount,
    new: product.new,
    description: product.description,
    rating: product.rating,
    photo: product.photos ? product.photos[0] : "/defaultImagePath",
  }));

  const openLeftBar = () => {
    // burada  gridCount === 5 && leftFilter === true yapmak daha mi dogru? designda gostermior
    if (gridCount === 5) {
      return true;
    } else if (leftFilter === true) {
      return true;
    } else if (leftFilter === false) {
      return false;
    }
  };

  console.log("Current gridCount:", gridCount);
  console.log("Current leftFilter:", leftFilter);

  return (
    <div className="flex  pr-4 pl-4 md:pr-12 md:pl-12 ">
      {openLeftBar() && <LeftBarFilters setCloseFilter={setleftFilter} />}
      <div className="flex  flex-col w-full">
        <TopBarFilter
          leftFilterStatus={leftFilter}
          setLeftBar={setleftFilter}
          setParentGridCount={setGridCount}
        />
        <ProductShopGrid gridCount={gridCount} products={transformedProducts} />
      </div>
    </div>
  );
};
export default Shop;
