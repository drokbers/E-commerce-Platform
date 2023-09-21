import ReviewsItem from "./reviewsItem";

import CustomButton from "@/components/layout/button";
import GetStars from "@/utils/getStars";

import { Review } from "@/types/model";

interface ProductReviewsProps {
  rating: number;
  reviews: Review[];
}

const ProductReviews = ({ rating, reviews }: ProductReviewsProps) => {
  return (
    <div className="flex flex-col gap-5 pt-4 md:pt-8 divide-y">
      <div className="flex flex-col  gap-5">
        <h4 className="text-2xl md:text-4xl font-medium ">Customer Reviews</h4>

        <div className="flex  gap-6 flex-col md:flex-row justify-between">
          <div className="flex   items-center gap-2 ">
            <div className="flex gap-0.5 ">{GetStars(rating, 16)}</div>

            <span className="text-base  justify-center font-normal ">
              {reviews.length} Reviews
              {reviews.length > 0
                ? `${reviews.length} Reviews`
                : `There are no reviews yet.`}
            </span>
          </div>

          <div>
            <CustomButton border label="Write review" size={"small"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 divide-y">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            userName={review.userName}
            rating={review.rating}
            productName={review.productName}
            review={review.review}
            userAvatar={review.userAvatar}
            id={review.id}
            productID={review.productID}
            date={review.date}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductReviews;
