"use client";
import { IconEye } from "@tabler/icons-react";
import { toast } from "react-toastify";

import { useState } from "react";
import { CartItem } from "@/types/model";
import useCart from "@/hooks/useCart";
import CustomButton from "@/components/layout/button";
import BreadCrumbs from "@/components/layout/breadCrumbs";
import GetStars from "@/utils/getStars";
import WishlistComponent from "@/components/layout/wishlist";
import ProductData from "@/product.json";
import { useDispatch } from "react-redux";
import { toggleCartFlyOut } from "@/redux/features/cartSlice";



interface ProductInfoProps {
  id: string;
}
type QuantityAction = "add" | "subtract";

const productInformation = ({ id }: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const { addProduct, isProductInCart } = useCart();

  const product = ProductData.find((item) => item.id === Number(id));
  const breadCrumbsData = [`${product?.category}`, `${product?.title}`];

  const dispatch = useDispatch();
  const iconColors = (color: string) => {
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

  const quantityHandler = (action: QuantityAction) => {
    setSelectedQuantity((prevQuantity) => {
      if (action === "add") return prevQuantity + 1;
      if (prevQuantity > 0 && action === "subtract") return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const addToCart = () => {
    if (!product) return;

    if (!selectedColor || !selectedSize) {
      toast.warning("Please select a color and size");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: selectedQuantity,
      color: selectedColor,
      size: selectedSize,
      image: product.photos[0],
    };

    if (isProductInCart(product.id, selectedColor, selectedSize)) {
      toast.warning(
        "This item with the selected attributes is already in the cart."
      );
      return;
    }

    addProduct(cartItem);
    dispatch(toggleCartFlyOut(true));
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
          {GetStars(product?.rating, 20)}
          <span className="text-xs  justify-center font-normal ">
            {product?.["reviews"].length} Reviews
          </span>
        </div>
        <div className="flex gap-3 items-center ">
          <span className="text-2xl font-semibold "> ${product?.price}</span>
          <span className="text-base font-normal  text-black-400 line-through ">
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

      {/* <div id="offer" className="flex pt-6">
        <span>Offer area to be added later</span>
      </div> */}

      <div id="select" className="flex flex-col  pt-6 gap-6">
        <div id="color" className="flex flex-col gap-3">
          <span className="text-xs font-semibold ">Color:</span>
          <div className="flex  gap-3 ">
            {product?.colors.map((color) => (
              <CustomButton
                key={color}
                size={"xsmall"}
                buttonType="circle"
                className={` ${iconColors(color)}  ${
                  selectedColor === color &&
                  "ring-black-500 ring-offset-2 ring-1"
                } 
                `}
                fill={"black"}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <div id="size" className="flex  flex-col gap-3">
          <span className="text-xs font-semibold ">Size:</span>
          <div className="flex gap-3">
            {product?.sizes.map((size) => (
              <CustomButton
                key={size}
                label={size}
                size={"xsmall"}
                buttonType="square"
                fill={"white"}
                border
                className={` border-2 ${
                  selectedSize === size
                    ? "border-black-900"
                    : "border-black-300"
                }`}
                onClick={() => setSelectedSize(size)}
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
              onClick={() => quantityHandler("subtract")}
            />
            <CustomButton
              label={`${selectedQuantity}`}
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
              onClick={() => quantityHandler("add")}
            />
          </div>
          <CustomButton
            label="Add to Cart"
            buttonType="default"
            border
            size={"medium"}
            fill={"white"}
            className="w-full border-black-900"
            onClick={addToCart}
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

      <WishlistComponent />
    </div>
  );
};
export default productInformation;
