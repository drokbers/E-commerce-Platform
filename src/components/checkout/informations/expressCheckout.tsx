import { Gpay, paypal } from "@/assets/images/index";
import Image from "next/image";
const ExpressCheckOut = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex pl-6 pr-6 pb-6 pt-8 border border-black-300">
        <div className="absolute left-1/2 top-0  text-center transform -translate-x-1/2 -translate-y-1/2 w-[177px] bg-white-100">
          <span className=" text-base text-blue-100 font-normal">
            Express Checkout
          </span>
        </div>

        <div className="flex w-full flex-col gap-4">
          <button className="flex h-[52px] bg-yellow-500 items-center justify-center">
            <Image src={paypal} alt="Paypal"></Image>
          </button>

          <button className="flex h-[52px] bg-white-100 rounded-md border border-black-300 items-center justify-center">
            <Image src={Gpay} alt="GPay"></Image>
          </button>
        </div>
      </div>


      <div className="flex w-full items-center  gap-3.5">
       <div className="h-0.5 w-full bg-black-200"></div>
       <span className="">OR</span>
       <div className="h-0.5 w-full bg-black-200"></div>
        

      </div>
    </div>
  );
};
export default ExpressCheckOut;
