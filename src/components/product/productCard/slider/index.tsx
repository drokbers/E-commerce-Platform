"use client";

import Image from "next/image";
import { useState } from "react";

import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

import ProductData from "@/product.json";

interface ProductSliderProps {
  id: string;
}

const ProductSlider = ({ id }: ProductSliderProps) => {
  const product = ProductData.find((item) => item.id === Number(id));
  const initialImage = product?.photos?.[0] ?? "https://fallback.url";

  const [currentImage, setCurrentImage] = useState<string>(initialImage);

  const getCurrentImageIndex = () =>
    product?.photos?.indexOf(currentImage) ?? 0;

  const handleNextClick = () => {
    const currentIndex = getCurrentImageIndex();
    const nextImage = product?.photos?.[currentIndex + 1] ?? initialImage;
    setCurrentImage(nextImage);
  };

  const handlePrevClick = () => {
    const currentIndex = getCurrentImageIndex();
    const totalPhotos = product?.photos?.length || 0;

    const prevIndex =
      currentIndex - 1 >= 0 ? currentIndex - 1 : totalPhotos - 1;

    const prevImage = product?.photos?.[prevIndex] ?? initialImage;
    setCurrentImage(prevImage);
  };

  return (
    <div className="flex  gap-2 flex-col">
      <div className="relative   h-[82vw]   md:h-[52vw]">
        <Image src={currentImage} fill alt="product image" />
        <div
          onClick={handlePrevClick}
          className="flex md:hidden absolute  cursor-pointer  top-1/2 left-5   items-center  transform -translate-x-1/2 -translate-y-1/2  "
        >
          <IconCircleArrowLeftFilled size={35} color="white" className="" />
        </div>
        <div
          onClick={handleNextClick}
          className="flex curs md:hidden absolute cursor-pointer right-1 top-1/2  -translate-y-1/2  "
        >
          <IconCircleArrowRightFilled size={35} color="black" />
        </div>
      </div>

      <div className="hidden md:flex gap-2 w-full justify-between ">
        {product?.photos?.map((item, index) => (
          <div className="relative w-[10vw] h-[13vw]">
            <Image
              key={index}
              src={item}
              fill
              alt="product image"
              className="rounded-md hover:ring-4 ring-black-200"
              onClick={() => setCurrentImage(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
