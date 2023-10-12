"use client";
import { useEffect, useState } from "react";
import { Filters, Product } from "@/types/model";
import ProductData from "@/product.json";

export const useFilters = (selectedFilters: Filters, shortBy: string) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = ProductData.filter((product) => {
      const { category, color, size } = selectedFilters;

      return (
        (!category.length || category.includes(product.category)) &&
        (!color.length || product.colors.some((c) => color.includes(c))) &&
        (!size.length ||
          product.stock.some((stock) =>
            size.some((s) => Object.keys(stock.sizes).includes(s))
          )) &&
        (!selectedFilters.price.length ||
          (product.price >= selectedFilters.price[0] &&
            product.price <= selectedFilters.price[1]))
      );
    });

    const sortedData = filtered.sort((a, b) => {
      if (shortBy === "Low to High") {
        return a.price - b.price;
      } else if (shortBy === "High to Low") {
        return b.price - a.price;
      } else if (shortBy === "Newest") {
        return b.id - a.id;
      } else {
        return 0;
      }
    });

    setFilteredProducts(sortedData);
  }, [selectedFilters, shortBy]);

  return filteredProducts;
};
