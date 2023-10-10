"use client";
import { CartItem, CartState } from "@/types/model";
import { IconX } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/layout/button";
import CustomForm from "@/components/layout/form";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCartFlyOut,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cartSlice";

const FlyOutCart: React.FC = () => {
  const dispatch = useDispatch();

  const { isFlyoutOpen, cartItems } = useSelector(
    (state: { cart: CartState }) => state.cart
  );

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
    <div
      className={` ${
        isFlyoutOpen ? "fixed" : "hidden"
      }  bg-white-100  z-10 right-0 md:w-[412px] h-full shadow-md justify-between flex flex-col p-6  transition-opacity duration-500 ease-in-out    `}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-4xl font-medium">Cart</span>
          <IconX
            size={32}
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleCartFlyOut(false));
            }}
          />
        </div>

        <div
          id="cartItems"
          className="flex divide-y h-[50vh] flex-col overflow-auto"
        >
          {cartItems.map((item: CartItem, index) => (
            <div className="flex  pt-4 pb-4 justify-between">
              <div className="flex gap-4">
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

                  <div className="flex  border">
                    {addToCartButtons(item, index)}
                  </div>
                </div>
              </div>

              <div className="flex  gap-2 pb- justify-end items-end">
                <span>{(item.price * item.quantity).toFixed(2)}</span>
                <CustomButton
                  buttonType="text"
                  iconType="trash"
                  iconSide="left"
                  size={"small"}
                  onClick={() => dispatch(removeFromCart({ id: item.id, color: item.color, size: item.size }))}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <CustomForm placeholder="Coupon code" buttonLabel="Apply" />

        <div className="flex flex-col  border gap-6 divide-y p-4 rounded-md">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between ">
              <span className="text-base font-normal text-black-900">
                Subtotal
              </span>
              <span className="text-base font-normal text-black-900">
                $ 100
              </span>
            </div>
            <div className="flex justify-between ">
              <span className="text-lg font-semibold  text-black-900">
                Total
              </span>
              <span className="text-lg font-semibold  text-black-900">
                $ 100
              </span>
            </div>
          </div>

          <Link href="/checkout">
            <CustomButton
              fill="black"
              label="Checkout"
              size={"medium"}
              onClick={() => {
                dispatch(toggleCartFlyOut(false));
              }}
            />
          </Link>
        </div>

        <div
          className="flex items-center justify-center"
          onClick={() => {
            dispatch(toggleCartFlyOut(false));
          }}
        >
          <Link href="/cart">
            <span className="text-base font-medium  underline">View cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FlyOutCart;
