import Image from "next/image";

import BreadCrumbs from "../layout/breadCrumbs";
import { shopBannerBG } from "@/assets/images";

const ShopBanner = () => {
  return (
    <div className=" relative flex h-[400px] w-full  p-12 ">
      <Image src={shopBannerBG} alt="shop banner" />
      <div className="absolute top-1/2 items-center  gap-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <BreadCrumbs items={["Shop"]} />
        <span className="text-5xl text-center  font-medium">Shop</span>
        <span className="text-lg font-normal">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis voluptatum deleniti.
        </span>
      </div>
    </div>
  );
};

export default ShopBanner;
