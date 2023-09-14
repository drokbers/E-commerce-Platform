import Image from "next/image";
import { Review } from "@/types/model";

import GetStars from "./getStars";

const TestimonialItem = (props: Review) => {
  return (
    <div className="flex flex-col w-[424px] shadow-md h-[294px] gap-4 p-10 bg-white-200">
      <div className="flex gap-4">
        <div className="relative w-[60px] h-[60px] gap-4">
          <Image
            src={props.userAvatar}
            fill
            alt="userPhoto"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-2  ">
          <span className="text-lg text-black-900">{props.userName}</span>

          <div className="flex gap-2 ">{GetStars(props.rating,16)}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-black-500">{props.productName}</span>
        <span>"{props.review}"</span>
      </div>
    </div>
  );
};
export default TestimonialItem;
