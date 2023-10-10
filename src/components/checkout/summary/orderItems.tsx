"use client";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "@/components/layout/button";
import { CartItem, CartState } from "@/types/model";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";

const OrderItems = () => {
  const dispatch = useDispatch();
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

  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);

  return (
    <div id="cartItems" className="flex flex-col  overflow-auto">
      {cartItems.map((item: CartItem, index) => (
        <div className="flex flex-col gap-4 ">
          <div className="flex  justify-between">
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

            <div className="flex  gap-2 justify-end items-end">
              <span>{(item.price * item.quantity).toFixed(2)}</span>
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
          <div className="h-[1px] w-full bg-black-300"></div>
        </div>
      ))}
    </div>
  );
};
export default OrderItems;
