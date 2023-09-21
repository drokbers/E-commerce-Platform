import Image from "next/image";

import GetStars from "@/utils/getStars";
import { Review } from "@/types/model";

const ReviewsItem = (props: Review) => {
  return (
    <div className="flex flex-col gap-3 pt-8 pb-8">
      <div className="flex gap-4 items-center">
        <div className="relative w-[76px] h-[76px] gap-4">
          <Image
            src={props.userAvatar}
            fill
            alt="userPhoto"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex  gap-3 items-center">
            <span className="text-lg font-semibold ">{props.userName}</span>
            <span className="text-sm font-normal text-black-500 ">
              {props.date}
            </span>
          </div>

          <div className="flex  gap-0.5">{GetStars(props.rating, 16)}</div>
        </div>
      </div>

      <span>{props.review}</span>
    </div>
  );
};
export default ReviewsItem;
