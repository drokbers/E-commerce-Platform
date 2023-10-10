"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { CartItem } from "@/types/model";
import Image from "next/image";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";

import CustomButton from "../layout/button";
import useCart from "@/hooks/useCart";
import Link from "next/link";

const CartItems = () => {
  const { getCartContent } = useCart();
  const [cart, setCart] = useState<CartItem[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCart(getCartContent());
  }, [getCartContent]);

  const addToCartButtons = (item: { quantity: number }, index: number) => {
    return (
      <>
        <CustomButton
          label="-"
          size={"xsmall"}
          buttonType="square"
          fill={"white"}
          className=" font-semibold "
          onClick={() => dispatch(updateQuantity({ index, change: -1 }))}
        />
        <CustomButton
          label={`${item.quantity}`}
          size={"xsmall"}
          buttonType="square"
          fill={"white"}
          className=" font-semibold "
        />
        <CustomButton
          label="+"
          size={"xsmall"}
          buttonType="square"
          fill={"white"}
          className=" font-semibold "
          onClick={() => dispatch(updateQuantity({ index, change: 1 }))}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col md:pb-12 p-4 md:pl-32 md:pr-32 divide-y ">
      <div className="flex  text-base font-medium pb-6  ">
        <span className="w-1/2">Product</span>

        <div className="hidden md:flex w-1/2 justify-between items-center">
          <span className="pl-5">Quantity</span>
          <span className="pl-12">Price</span>
          <span>Subtotal</span>
        </div>
      </div>

      <div className="flex divide-y flex-col ">
        {cart.map((item: CartItem, index) => (
          <div className="flex justify-between text-base  pb-6 pt-6  items-center font-medium ">
            <div className="flex md:w-1/2 gap-4">
              <Image
                key={index}
                src={item.image}
                width={77}
                height={102}
                alt={"product image"}
              />

              <div className="flex flex-col gap-2">
                <Link href={`/product/${item.id}`}>
                  <span className="text-sm font-semibold ">{item.title}</span>
                </Link>

                <span className=" text-xs font-normal text-black-600">
                  Size: {item.size}, Color: {item.color}
                </span>
                <div className="hidden md:flex gap-1 text-black-600">
                  <CustomButton
                    buttonType="text"
                    iconType="trash"
                    iconSide="left"
                    label="Remove"
                    size={"small"}
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex md:hidden border">
                  {addToCartButtons(item, index)}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:w-1/2 items-center justify-between">
              <div className="hidden md:flex border">
                {addToCartButtons(item, index)}
              </div>
              <span className="hidden md:flex">{item.price}</span>
              <span>{(item.price * item.quantity).toFixed(2)}</span>
              <div className="flex md:hidden gap-1 text-black-600">
                <CustomButton
                  buttonType="text"
                  iconType="trash"
                  iconSide="left"
                  size={"small"}
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: item.id,
                        color: item.color,
                        size: item.size,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CartItems;
