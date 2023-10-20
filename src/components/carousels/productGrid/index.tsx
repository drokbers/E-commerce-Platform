"use client";
import { useState } from "react";
import CustomButton from "../../layout/button";
import ProductData from "@/product.json";
import ProductGridItem from "./productGridItem";

const productGrid = () => {
  const [loadedProducts, setLoadedProducts] = useState<number>(8);

  const loadMoreHandler = () => {
    if (loadedProducts >= ProductData.length) {
      return;
    }
    setLoadedProducts(loadedProducts + 4);
  };

  return (
    <div className="flex flex-col   items-center gap-12 p-12">
      <div className="flex  text-2xl font-medium gap-3 items-center justify-center leading-9">
        <span>You’re browsing</span>
        <CustomButton
          label={"Dresses"}
          buttonType="text"
          size={"xlarge"}
          iconSide={"right"}
          fill={"transparent"}
          underline={true}
          iconType="ChevronDown"
        />
        <span>In</span>
        <CustomButton
          label={"Tag"}
          buttonType="text"
          size={"xlarge"}
          iconSide={"right"}
          fill={"transparent"}
          underline={true}
          iconType="ChevronDown"
        />
      </div>

      <ProductGridItem products={ProductData.slice(0, loadedProducts)} />
      <CustomButton
        label={"Load more"}
        size={"medium"}
        fill={"black"}
        {...(loadedProducts >= ProductData.length && { isDisabled: true })}
        buttonType={"default"}
        onClick={() => loadMoreHandler()}
      />
    </div>
  );
};
export default productGrid;
