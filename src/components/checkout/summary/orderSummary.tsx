"use client";
import CustomForm from "@/components/layout/form";
import { CartState } from "@/types/model";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { total, shipping } = useSelector(
    (state: { cart: CartState }) => state.cart
  );
  return (
    <div>
      <CustomForm placeholder="Coupon code" buttonLabel="Apply" />

      <div className="flex flex-col divide-y  pt-3 gap-3">
        <div className="flex justify-between pt-3 ">
          <span className="text-base font-normal">Shipping</span>
          <span className="text-base font-semibold ">
            {shipping === 0 ? "Free" : "$" + shipping}
          </span>
        </div>
        <div className="flex justify-between pt-3 ">
          <span className="text-base font-normal">Subtotal</span>
          <span className="text-base font-semibold ">$ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-3 ">
          <span className="text-lg font-semibold ">Total</span>
          <span className="text-lg font-semibold ">$ {(total + shipping).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
