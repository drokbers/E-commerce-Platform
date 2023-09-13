"use client";

import Image from "next/image";
import { useState } from "react";

import ProductData from "@/product.json";

interface ProductSliderProps {
  id: string;
}

const ProductSlider = ({ id }: ProductSliderProps) => {
  const product = ProductData.find((item) => item.id === Number(id));

  console.log(product);

  const [currentImage, setCurrentImage] = useState(
    product?.photos?.[0] ?? "https://fallback.url"
  );

  return (
    <div className="flex w-[40vw] h-[100vw] gap-2 flex-col">
      <div className="relative  w-[40vw] h-[52vw]">
        <Image src={currentImage} fill alt="product image" />
      </div>

      <div className="flex gap-2 w-full justify-between ">
        {product?.photos?.map((item) => (
          <div className="relative w-[10vw] h-[10vw]">
            <Image
              src={item}
              fill
              alt="product image"
              className=" rounded-md hover:ring-4 ring-black-200"
              onClick={() => setCurrentImage(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
