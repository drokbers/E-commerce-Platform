"use client";
import { IconEye } from "@tabler/icons-react";

import CustomButton from "@/components/layout/button";
import BreadCrumbs from "@/components/layout/breadCrumbs";
import GetStars from "@/components/testimonial/getStars";
import { Product } from "@/types/model";
import ProductData from "@/product.json";

interface productInformationProps {
  id: string;

}

const productInformation = ({ id }: productInformationProps) => {
  const product = ProductData.find((item) => item.id === Number(id));

  const breadCrumbsData = ["Home", `${product?.category}`, `${product?.title}`];

  const iconColors = (color: string) => {
    const colors = product?.colors || [];

    switch (color) {
      case "green":
        return " bg-teal-500";
      case "red":
        return " bg-red-400";
      case "purple":
        return " bg-indigo-200";
      case "black":
        return " bg-black-900";
      default:
        return ` bg-${color}-500`;
    }
  };

  const sizeActiveHandler = (size: string) => {
    const borderColor = "border-black-900";
    const border = "border-2";
  };

  return (
    <div className="flex flex-col gap-8 divide-y divide-black-200 ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <BreadCrumbs items={breadCrumbsData} />
          <span className="text-4xl font-medium">{product?.title}</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-sm text-gray-700  font-normal">
            {product?.description}
          </span>
        </div>
        <div className="flex  items-center gap-2">
          {GetStars(product?.rating)}
          <span className="text-xs  justify-center font-normal ">
            {product?.["reviews"].length} Reviews
          </span>
        </div>
        <div className="flex gap-3 items-center ">
          <span className="text-2xl font-semibold "> ${product?.price}</span>
          <span className="text-base font-normal  text-black-400 line-through ">
            {" "}
            ${product?.discount[0].discountRate}
          </span>
        </div>

        <div className="flex gap-2">
          <IconEye size={24} />
          <span className="text-base text-black-900">
            <b>32</b> people are looking at this product
          </span>
        </div>
      </div>

      <div id="offer">
        <span>Offerrr</span>
      </div>

      <div id="select" className="flex flex-col gap-6">
        <div id="color" className="flex flex-col gap-3">
          <span className="text-xs font-semibold ">Color:</span>
          <div className="flex  gap-3">
            {product?.colors.map((color) => (
              <CustomButton
                key={color}
                size={"xsmall"}
                buttonType="circle"
                className={` ${iconColors(color)}`}
                fill={"black"}
              />
            ))}
          </div>
        </div>

        <div id="size" className="flex  flex-col gap-3">
          <span className="text-xs font-semibold ">Size:</span>
          <div className="flex  gap-3">
            {product?.sizes.map((size) => (
              <CustomButton
                key={size}
                label={size}
                size={"xsmall"}
                buttonType="square"
                fill={"white"}
                border
              />
            ))}
          </div>
        </div>
      </div>

      <div id="addToCart" className="flex flex-col gap-4 font-medium ">
        <div className="flex gap-3 ">
          <div className="flex">
            <CustomButton
              label="-"
              size={"small"}
              buttonType="square"
              fill={"gray"}
              className=" font-semibold "
            />
            <CustomButton
              label="2"
              size={"small"}
              buttonType="square"
              fill={"gray"}
              className=" font-semibold "
            />
            <CustomButton
              label="+"
              size={"small"}
              buttonType="square"
              fill={"gray"}
              className=" font-semibold "
            />
          </div>
          <CustomButton
            label="Add to Cart"
            buttonType="default"
            border
            size={"medium"}
            fill={"white"}
            className="w-full"
          />
        </div>

        <div>
          <CustomButton
            label="Buy Now"
            buttonType="default"
            border
            size={"medium"}
            fill={"black"}
            className="w-full"
          />
        </div>
      </div>

      <div id="wishlist" className="flex gap-8 font-medium">
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Wishlist"
          iconSide="left"
          iconType="heart"
        />
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Ask question"
          iconSide="left"
          iconType="heart"
        />
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Share"
          iconSide="left"
          iconType="heart"
        />
      </div>
    </div>
  );
};
export default productInformation;
