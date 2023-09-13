"use client";

import { useEffect, useState } from "react";

import useResizeGrid from "../../../hooks/useResizeGrid";
import NavigationDots from "../../layout/pagination";
import ProductItem from "./productItem";

import ProductData from "@/product.json";

const ProductCarousel = () => {
  const [itemsToShow, setItemsToShow] = useState([0, 4]);
  const [currentPage, setCurrentPage] = useState(0);
  const gridCount = useResizeGrid(4);

  const activeIndexHandler = (index: number) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    const startIndex = gridCount * currentPage;
    const endIndex = startIndex + gridCount;
    setItemsToShow([startIndex, endIndex]);
  }, [gridCount, currentPage]);
  console.log(ProductData);
  return (
    <div className="flex flex-col w-full  gap-8  p-12">
      <div className="flex justify-between">
        <span className="text-4xl font-medium leading-9">Latest Arrivals</span>
        <div className="hidden md:flex">
          <NavigationDots
            items={ProductData}
            onActiveIndexChange={activeIndexHandler}
            isArrow={true}
            gridCount={gridCount}
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center  gap-8">
        {ProductData.slice(itemsToShow[0], itemsToShow[1]).map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            photo={item.photos ? item.photos[0] : "/defaultImagePath"}
            title={item.title}
            price={item.price}
            discount={item.discount}
            new={item.new}
            type="productCarousel"
          />
        ))}
      </div>
      <div className="flex md:hidden  justify-start overflow-auto gap-8">
        {ProductData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            photo={item.photos ? item.photos[0] : "/defaultImagePath"}
            title={item.title}
            price={item.price}
            discount={item.discount}
            new={item.new}
            type="productCarousel"
          />
        ))}
      </div>
    </div>
  );
};
export default ProductCarousel;
