"use client";
import { useState } from "react";
import LeftBarFilters from "./filters/leftBarFilters";
import TopBarFilter from "./filters/topBarFilter";
import ProductShopGrid from "./shopGrid";

import ProductData from "@/product.json";

const Shop = () => {
  const [gridCount, setGridCount] = useState(4);

  
  const transformedProducts = ProductData.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    discount: product.discount,
    new: product.new,
    rating: product.rating,
    photo: product.photos ? product.photos[0] : "/defaultImagePath",
  }));

  console.log("Current gridCount:", gridCount);
  return (
    <div className="flex  pr-12 pl-12 gap-8">
      {/* <LeftBarFilters /> */}
      <div className="flex  flex-col w-full">
        <TopBarFilter   setParentGridCount={setGridCount}   />
        <ProductShopGrid   gridCount={gridCount} products={transformedProducts} />
      </div>
    </div>
  );
};
export default Shop;
