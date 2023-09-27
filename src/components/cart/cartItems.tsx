"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/types/model";
import Image from "next/image";

import CustomButton from "../layout/button";

const CartItems = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const initialCart = cartData ? JSON.parse(cartData) : [];
    setCart(initialCart);
  }, []);

  const removeItemFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id.toString() !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addToCartButtons = (item: { quantity: any }) => {
    return (
      <>
        <CustomButton
          label="-"
          size={"xsmall"}
          buttonType="square"
          fill={"white"}
          className=" font-semibold "
          onClick={() => null}
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
          onClick={() => null}
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
        {cart.map((item: CartItem) => (
          <div className="flex justify-between text-base  pb-6 pt-6  items-center font-medium ">
            <div className="flex md:w-1/2 gap-4">
              <Image
                src={item.image}
                width={77}
                height={102}
                alt={"product image"}
              />

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold "> {item.title}</span>
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
                    onClick={() => {
                      removeItemFromCart(item.id.toString());
                    }}
                  />
                </div>
                <div className="flex md:hidden border">
                  {addToCartButtons(item)}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:w-1/2 items-center justify-between">
              <div className="hidden md:flex border">
                {addToCartButtons(item)}
              </div>
              <span className="hidden md:flex">{item.price}</span>
              <span>{item.price * item.quantity}</span>
              <div className="flex md:hidden gap-1 text-black-600">
                <CustomButton
                  buttonType="text"
                  iconType="trash"
                  iconSide="left"
                  size={"small"}
                  onClick={() => {
                    removeItemFromCart(item.id.toString());
                  }}
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
