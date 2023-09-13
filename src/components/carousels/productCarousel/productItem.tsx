import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/model";

type ProductItemProps = Pick<
  Product,
  "id"  | "title" | "price" | "discount" | "new"
> & {
  photo: string;
  type: string;
};


const ProductItem = (props: ProductItemProps) => {
  const style = {
    size: {
      sizeofGrid:
        props.type === "productGrid"
          ? "w-40 h-56 md:w-80 md:h-96"
          : "w-80 h-96",
    },
  };

  console.log(props);
  return (
    <Link href={`/product/${props.id}`}>
      <div className="flex flex-col items-center  text-black-900 gap-2">
        <div className={`relative ${style.size.sizeofGrid}`}>
          <Image src={props.photo} fill layout="fill" alt="SliderModel" />
        </div>
        <span className="text-base font-medium ">{props.title}</span>
        <div className="flex gap-3">
          <span className="text-sm font-semibold ">{"$" + props.price}</span>
          <span className="text-sm font-semibold  text-black-400 line-through leading-snug">
            {"$" + props.discount[0].discountRate}
           {/* ASD */}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
