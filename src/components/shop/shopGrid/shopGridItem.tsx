import Image from "next/image";
import Link from "next/link";

import GetStars from "@/utils/getStars";
import { Product } from "@/types/model";

type ShopItemProps = Pick<
  Product,
  "id" | "title" | "price" | "discount" | "new" | "rating"
> & {
  photo: string;
  gridCount: number;
};

const ShopItem = (props: ShopItemProps) => {
  const getStyle = () => {
    switch (props.gridCount) {
      case 5:
        return "w-[15.9vw] h-[21.2vw]";
      case 4:
        return "w-[21.5vw] h-[28.5vw]";
      case 3:
        return "w-[29.5vw] h-[39.2vw]";
      case 2:
        return " w-[41.0vw] h-[58.5vw] lg:w-[43.5vw] lg:h-[61vw]";

      default:
        return "w-[21.5vw] h-[28.5vw]";
    }
  };

  return (
    <Link href={`/product/${props.id}`}>
      <div className="flex flex-col    text-black-900 gap-3">
        <div className={`relative ${getStyle()} `}>
          <Image src={props.photo} fill layout="fill" alt="SliderModel" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex">{GetStars(props.rating, 16)}</span>
          <span className="text-base font-medium ">{props.title}</span>
          <div className="flex gap-3">
            <span className="text-sm font-semibold ">{"$" + props.price}</span>
            <span className="text-sm font-semibold  text-black-400 line-through leading-snug">
              {"$" + props.discount[0].discountRate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ShopItem;
