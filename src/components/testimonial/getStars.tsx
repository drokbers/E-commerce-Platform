import { IconStarFilled } from "@tabler/icons-react";

const GetStars = (rating: number | undefined) => {
  if (rating === undefined) {
    return null;
  }
  
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
   
    const isFilled = i < rating;
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

export default GetStars;
