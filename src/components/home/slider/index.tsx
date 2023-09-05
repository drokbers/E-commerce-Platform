import Image from "next/image";
import { SliderModel } from "@/assets/images";
import CustomButton from "../../layout/button";

const Slider = () => {
  return (
    <div className="flex md:flex-row flex-col  h-[700px] ">
      <div className="relative   h-[700px] w-full md:w-1/2">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="https://s3-alpha-sig.figma.com/img/db99/395e/0ed48dd66376f5aa96ffa5561fd66cc3?Expires=1694390400&Signature=J1dZ0dvD59PPDJTCHC0-nkOSnXI8NMMuc4hfI1KzLxZBC1FEKEsm9G9tOl5KcKSn-OSPcr65oliWoFQrtp5B7fQf~viO~W2nrY27YvSDUfyrx1LF0AGnBHfUbOFqA-T1b-yEJvzQoj5~KSrFsW-CCvmMgccvA5nFLma8Txz1wU7E1X9g6SUNVNkPJSYsFjAthMhD9oQHFlxFHxd-Twby6GnVDnwtX1kgFlayc~M0SDzDnjpVIAVlbwkOB78cDOn5dVL4AgFzUIcJAs1maSYjH8ghCXtw1HIM21vJnFCzowkmzLc0XjvFR6Sv6BNULNohiSgwJ1YXNLTvTK05d8KIUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          <CustomButton
            input="See Collection"
            size="xlarge"
            fill={"white"}
            iconSide="right"
            rounded={false}
            underline={false}
            border={false}
            iconType="arrow"

          />
        </div>
      </div>
    </div>
  );
};
export default Slider;
