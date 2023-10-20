import { useEffect, useState } from "react";
import { Filters, Product } from "@/types/model";
import ProductData from "@/product.json";

interface UseFiltersOptions {
  selectedFilters?: Filters;
  sortBy?: string;
  searchTerm?: string;
}

export const useFilters = ({
  selectedFilters,
  sortBy,
  searchTerm = "",
}: UseFiltersOptions) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const filterProducts = (product: Product) => {
    const isSearchTermValid =
      !searchTerm.length ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const isCategoryValid =
      !selectedFilters?.category?.length ||
      (product.category &&
        selectedFilters?.category?.includes(product.category));

    const isColorValid =
      !selectedFilters?.color?.length ||
      product.colors?.some((c) => selectedFilters.color.includes(c));
    const isSizeValid =
      !selectedFilters?.size?.length ||
      product.stock?.some((stock) =>
        selectedFilters.size.some((s) => Object.keys(stock.sizes).includes(s))
      );
    const isPriceValid =
      !selectedFilters?.price?.length ||
      (product.price >= selectedFilters.price[0] &&
        product.price <= selectedFilters.price[1]);

    return (
      isSearchTermValid &&
      isCategoryValid &&
      isColorValid &&
      isSizeValid &&
      isPriceValid
    );
  };

  const sortProducts = (a: Product, b: Product) => {
    if (sortBy === "Low to High") {
      return a.price - b.price;
    } else if (sortBy === "High to Low") {
      return b.price - a.price;
    } else if (sortBy === "Newest") {
      return b.id - a.id;
    }
    return 0;
  };

  useEffect(() => {
    const filtered = ProductData.filter(filterProducts);
    const sortedData = sortBy ? [...filtered].sort(sortProducts) : filtered;

    setFilteredProducts(sortedData);
  }, [selectedFilters, sortBy, searchTerm]);

  return filteredProducts;
};
