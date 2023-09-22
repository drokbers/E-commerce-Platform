import Image from "next/image";
import Link from "next/link";

import GetStars from "@/utils/getStars";
import { Product } from "@/types/model";
import CustomButton from "@/components/layout/button";
import WishlistComponent from "@/components/layout/wishlist";

type ShopListItemProps = Pick<
  Product,
  "id" | "title" | "price" | "discount" | "new" | "rating" | "description"
> & {
  photo: string;
  gridCount: number;
};

const ShopListItem = (props: ShopListItemProps) => {
  return (
    <Link href={`/product/${props.id}`}>
      <div className="flex flex-col  md:flex-row items-center text-black-900 w-full gap-10">
        <div className="relative w-[91.9vw] h-[120.2vw]  md:w-[15.9vw] md:h-[21.2vw]">
          <Image src={props.photo} fill layout="fill" alt="SliderModel" />
        </div>

        <div className="flex flex-col gap-6">
          <div id="header-description" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium ">{props.title}</span>
              <div className="flex gap-3">
                <span className="text-sm font-semibold ">
                  {"$" + props.price}
                </span>
                <span className="text-sm font-semibold  text-black-400 line-through leading-snug">
                  {"$" + props.discount[0].discountRate}
                </span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col">
              <span className="flex">{GetStars(props.rating, 16)}</span>
              <span className="text-base  w-[40vw] text-blue-100 font-normal">
                {props.description?.substring(0, 150) + "..."}
              </span>{" "}
            </div>
          </div>

          <div id="cart" className="hidden md:flex flex-col w-[23vw]">
            <CustomButton
              fill="black"
              buttonType="default"
              label="Select Options"
              size={"small"}
              className="rounded-md"
            />

            <WishlistComponent />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ShopListItem;
