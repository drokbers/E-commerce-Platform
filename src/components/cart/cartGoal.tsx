"use client";

import { IconTruck } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const CartGoal = () => {
  const [carttotal, setCartTotal] = useState<number>(0);




  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const cart = cartData ? JSON.parse(cartData) : [];
    let total = 0;
    cart.map((item: { price: number; quantity: number }) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total);
  }, []);

  const RANGES = {
    FREE_SHIPPING: 100,
    THREE_QUARTER: 75,
    HALF: 50,
    QUARTER: 25,
    MINIMUM: 10,
  };

  const goalRange = (): string => {
    if (carttotal <= RANGES.MINIMUM) return "left-0";
    if (carttotal <= RANGES.QUARTER) return "left-1/4";
    if (carttotal <= RANGES.HALF) return "left-1/2";
    if (carttotal <= RANGES.THREE_QUARTER) return "left-3/4";
    if (carttotal > RANGES.FREE_SHIPPING) return "right-0";
    return "";
  };
  console.log(goalRange(), "range");

  const goalText = (): JSX.Element => {
    if (carttotal < RANGES.FREE_SHIPPING)
      return (
        <span>
          {"Shop for $"}
          {RANGES.FREE_SHIPPING - carttotal}
          {" more to enjoy "}
          <b>FREE Shipping</b>
        </span>
      );

    if (carttotal > RANGES.FREE_SHIPPING)
      return <span>Enjoy with  <b>FREE Shipping</b></span>;

    return <span></span>;
  };

  return (
    <div className="flex flex-col items-center p-4 justify-center gap-4">
      <span className="text-base md:text-lg  font-normal">{goalText()}</span>

      <div className="relative bg-teal-400 w-[91.5vw] md:w-[33vw] h-2 rounded">
        <div
          className={`absolute -bottom-5 ${goalRange()}  flex rounded-full w-11 h-11  border border-black-100 items-center justify-center bg-white-100 `}
        >
          <IconTruck size={24} color="black" />
        </div>
      </div>
    </div>
  );
};

export default CartGoal;
