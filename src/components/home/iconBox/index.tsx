import Image from "next/image";

import {
  IconTruckDelivery,
  IconCash,
  IconPhone,
  IconLock,
} from "@tabler/icons-react";

const Dummy = [
  {
    icon: <IconTruckDelivery size={24} />,
    textBold: "Free Shipping",
    textNormal: "Orders above $200",
  },
  {
    icon: <IconCash size={24} />,
    textBold: "Money-back",
    textNormal: "30 day Guarantee ",
  },
  {
    icon: <IconPhone size={24} />,
    textBold: "Premium Support",
    textNormal: "Phone and email support",
  },
  {
    icon: <IconLock size={24} />,
    textBold: "Secure Payments",
    textNormal: "Secured by Stripe",
  },
];

const IconBox = () => {
  return (
    <div className="w-full p-12  ">
      <div className="grid  grid-cols-2 bg-white-100 pt-6 pb-6 md:grid-cols-4 w-full gap-8  place-self-center place-items-start md:place-items-stretch   divide-x divide-black-200">
        {Dummy.map((item) => (
          <div className="flex flex-row justify-center gap-3 ">
            <div className="flex w-11 h-11 justify-center items-center rounded-full bg-black-100">
              <span> {item.icon} </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-medium "> {item.textBold} </span>
              <span className="text-sm font-normal  text-black-500">

                {item.textNormal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBox;
