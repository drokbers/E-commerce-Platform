"use client";
import { useState } from "react";
import CustomForm from "../../layout/form";

import { IconCreditCard } from "@tabler/icons-react";
import { Afterpay } from "@/assets/images";
import Image from "next/image";

const PaymentInformation = () => {
  const [selectedPayment, setSelectedPayment] = useState<{
    id: number;
    title: string;
    input?: JSX.Element;
  } | null>(null);
  const paymentOptions = [
    {
      id: 1,
      title: "Pay by card",
      icon: <IconCreditCard size={24} />,
      input: (
        <div className="flex flex-col pb-8 gap-8">
          <div className="">
            <CustomForm
              inputType="text"
              label="Card number"
              placeholder="1234 5678 1234"
            />
          </div>
          <div className="flex  gap-8 ">
            <CustomForm
              inputType="text"
              label="Expiry date"
              placeholder="MM/YY"
              className="w-1/2"
            />

            <CustomForm
              inputType="text"
              label="CVC code"
              placeholder="CVC"
              className="w-1/2"
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,

      title: "$10 monthly installment",
      icon: (
        <div>
          <Image alt="afterpay" src={Afterpay}></Image>
        </div>
      ),
      input: <div>there is no</div>,
    },
    {
      id: 3,
      title: "PayPal",
      input: <div>there is no</div>,
    },
  ];
  return (
    <div className="flex border rounded-md p-6 border-black-300 flex-col gap-6">
      <span className="text-xl text-left  font-medium">Payment information </span>
      {paymentOptions.map((option) => (
        <div className="flex flex-col gap-4">
          <div
            onClick={() => {
              setSelectedPayment(option);
            }}
            className="flex  border p-4 items-center gap-3 justify-between "
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className={`flex w-3 h-3 justfiy-start ring-black-900 ring-offset-2 ring-2 items-center rounded-full ${
                  selectedPayment?.id === option.id && "border bg-black-900"
                }  `}
              ></div>
              <span> {option.title}</span>
            </div>
            {option.icon}
          </div>

          <div
            className={`  ${
              selectedPayment?.id === option.id ? "visible" : " hidden"
            }`}
          >
            {option.input}

            <div className="h-0.5 w-full bg-black-300"> </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentInformation;
