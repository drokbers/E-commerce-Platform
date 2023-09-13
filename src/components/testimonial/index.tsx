"use client";

import NavigationDots from "../layout/pagination";
import TestimonialItem from "./testimonialItem";
import useResizeGrid from "../../hooks/useResizeGrid";
import { useEffect, useState } from "react";

const TestimonialBlock = () => {
  const Dummy = [
    {
      id: 1,
      userName: "John D.1",
      rating: 4,
      productID: 123,
      productName: "Tshirt",
      userAvatar: "https://i.imgur.com/W6QMUCr.jpeg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    },
    {
      id: 2,
      userName: "Jane A.2",
      rating: 5,
      productID: 124,
      productName: "Jeans",
      userAvatar: "https://i.imgur.com/YAhQYLn.jpeg",
      review:
        "Ut efficitur mauris ac enim eleifend, quis volutpat quam congue.",
    },
    {
      id: 3,
      userName: "Michael S.3",
      rating: 3,
      productID: 125,
      productName: "Sweater",
      userAvatar: "https://i.imgur.com/YAhQYLn.jpeg",
      review: "Fusce ut erat a turpis aliquam sagittis.",
    },
    {
      id: 4,
      userName: "Emily W.4",
      rating: 4,
      productID: 126,
      productName: "Dress",
      userAvatar: "https://i.imgur.com/YAhQYLn.jpeg",
      review:
        "Pellentesque sit amet justo vel justo condimentum malesuada non a odio.",
    },
    {
      id: 5,
      userName: "David M.5",
      rating: 5,
      productID: 127,
      productName: "Shoes",
      userAvatar: "https://i.imgur.com/YAhQYLn.jpeg",
      review: "Maecenas fringilla quam eu aliquet iaculis.",
    },
    {
      id: 6,
      userName: "Olivia R.6",
      rating: 2,
      productID: 128,
      productName: "Hat",
      userAvatar: "https://i.imgur.com/YAhQYLn.jpeg",
      review: "Suspendisse id elit vel elit faucibus congue.",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState([0, 3]);
  const [currentPage, setCurrentPage] = useState(0);
  const gridCount = useResizeGrid(3);

  const activeIndexHandler = (index: number) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    const startIndex = gridCount * currentPage;
    const endIndex = startIndex + gridCount;
    setItemsToShow([startIndex, endIndex]);
  }, [gridCount, currentPage]);

  return (
    <div className="flex flex-col gap-8 w-full  p-12  ">
      <div className="flex justify-between">
        <span className="text-4xl ">Customers Love</span>

        <NavigationDots
          items={Dummy}
          onActiveIndexChange={activeIndexHandler}
          iconFilled={true}
          isPaginationDots={false}
          gridCount={gridCount}
        />
      </div>

      <div className="flex gap-8 justify-center ">
        {Dummy.slice(itemsToShow[0], itemsToShow[1]).map((item) => (
          <TestimonialItem
            key={item.id}
            userName={item.userName}
            rating={item.rating}
            productName={item.productName}
            review={item.review}
            userAvatar={item.userAvatar}
            id={item.id}
            productID={item.productID}
          />
        ))}
      </div>
      <NavigationDots
        items={Dummy}
        onActiveIndexChange={activeIndexHandler}
        iconFilled={false}
        isPaginationDots={true}
        gridCount={gridCount}
        iconStyle="line"
        isArrow={false}
      />
    </div>
  );
};
export default TestimonialBlock;
