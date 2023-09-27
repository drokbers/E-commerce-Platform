"use client";

import { useState } from "react";
import CustomButton from "../layout/button";
import CustomForm from "../layout/form";

const CartSummary = () => {
  const [selectedShipping, setSelectedShipping] = useState<Number>();

  const shipingOptions = [
    {
      id: 1,
      title: "Free Shipping",
      price: 0,
    },
    {
      id: 2,
      title: "Standard Shipping",
      price: 10,
    },
  ];

  return (
    <div className="flex  flex-col md:flex-row justify-between md:pt-12 gap-10  p-4 md:pl-32 md:pr-32 ">
      <div
        id="coupon"
        className="flex flex-col max-h-max  gap-3 w-full md:w-[30vw]  "
      >
        <span className="text-xl font-medium">Have a coupon?</span>
        <span className="text-base font-normal text-black-600">
          Add your code for an instant cart discount
        </span>
        <div className="w-full">
          <CustomForm placeholder="Coupon code" buttonLabel="Apply" />
        </div>
      </div>

      <div
        id="checkout"
        className="flex flex-col border w-full md:w-[37.4vw] gap-4 p-4 md:p-6"
      >
        <span className="text-xl font-medium ">Cart summary</span>

        <div className="flex flex-col gap-3">
          {shipingOptions.map((option) => (
            <div
              onClick={() => {
                setSelectedShipping(option.id);
              }}
              className="flex border p-4 items-center gap-3 justify-between "
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex w-3 h-3 justfiy-center  ring-black-900 ring-offset-2 ring-2 items-center rounded-full ${
                    selectedShipping === option.id && "border bg-black-900"
                  }  `}
                ></div>
                <span> {option.title}</span>
              </div>
              <span className="text-base font-normal text-black-600">
                {option.price > 0 && "+"} ${option.price}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col divide-y">
          <div className="flex justify-between p-3">
            <span className="text-base font-normal text-black-900">
              Subtotal
            </span>
            <span className="text-base font-normal text-black-900">$ 100</span>
          </div>
          <div className="flex justify-between p-3">
            <span className="text-lg font-semibold  text-black-900">Total</span>
            <span className="text-lg font-semibold  text-black-900">$ 100</span>
          </div>
        </div>

        <CustomButton fill="black" label="Checkout" size={"medium"} />
      </div>
    </div>
  );
};
export default CartSummary;
