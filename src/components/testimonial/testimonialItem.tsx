import Image from "next/image";
import { Review } from "@/types/model";

import { IconStarFilled } from "@tabler/icons-react";

const TestimonialItem = (props: Review) => {
  const getStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      const isFilled = i < props.rating;
      stars.push(
        <IconStarFilled
          key={i}
          size={16}
          className={isFilled ? "text-orange-500" : "text-gray-400"}
        />
      );
    }

    return stars;
  };

  return (
 
      <div className="flex flex-col w-[424px] h-[294px] gap-4 p-10 bg-white-200">
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

            <div className="flex gap-2 ">{getStars()}</div>
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
