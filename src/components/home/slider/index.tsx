import Image from "next/image";
import { SliderModel } from "@/assets/images";
import CustomButton from "../../layout/button";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="flex md:flex-row flex-col  h-[700px] ">
      <div className="relative   h-[700px] w-full md:w-1/2">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="https://i.imgur.com/wtcuawk.png"
          alt="SliderModel"
        />
      </div>
      <div className="flex justify-center text-left pt-6 text-white-900  pb-6 pl-4 md:pl-20 gap-7 flex-col  w-full md:w-1/2 bg-pink-500">
        <div className="flex text-left  flex-col gap-2">
          <span className="text-base">New Arrivals</span>
          <span className="text-5xl ">
            Your dream shop <br /> is a click away.
          </span>
          <span className="text-lg">
            Keep your everyday style chic and on-trend with our <br /> selection
            20+ styles to choose from.
          </span>
        </div>
        <div className="">
        <Link href="/shop">
          
          <CustomButton
            label="See Collection"
            buttonType="default"
            size="xlarge"
            fill={"white"}
            iconSide="right"
            rounded={false}
            underline={false}
            border={false}
            iconType="arrow"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Slider;
