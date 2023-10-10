"use client";
import { useState } from "react";
import CustomButton from "../../layout/button";

const ShippingMethod = () => {
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

  const [selectedShipping, setSelectedShipping] = useState<{
    id: number;
    title: string;
    price: number;
  } | null>(null);

  return (
    <div className="flex border rounded-md p-6 border-black-300 flex-col gap-6">
      <span className="text-xl text-left  font-medium">Shipping method </span>

      <div className="flex flex-col gap-8">
        {shipingOptions.map((option) => (
          <div
            onClick={() => {
              setSelectedShipping(option);
            }}
            className="flex border p-4 items-center gap-3 justify-between "
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex w-3 h-3 justfiy-center  ring-black-900 ring-offset-2 ring-2 items-center rounded-full ${
                  selectedShipping?.id === option.id && "border bg-black-900"
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
    </div>
  );
};
export default ShippingMethod;
