import Image from "next/image";
import {
  categorySandals,
  categoryBelts,
  categoryBags,
  categoryAccessories,
} from "@/assets/images";

import CustomButton from "../../layout/button";

const DUMMY = [
  {
    id: "c1",
    title: "Sandals",
    image: categorySandals,
  },
  {
    id: "c2",
    title: "Handmade belts",
    image: categoryBelts,
  },
  {
    id: "c3",
    title: "Bags",
    image: categoryBags,
  },
  {
    id: "c4",
    title: "Accessories",
    image: categoryAccessories,
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 w-full p-12">
      {DUMMY.map((item) => {
        return (
          <div key={item.id} className="relative  w-auto h-96">
            <Image
              src={item.image}
              layout="fill"
              objectFit="cover"
              alt={item.title}
            />
            <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2  bottom-10">
              <CustomButton
                label={item.title}
                size={"medium"}
                buttonType="default"
               
                fill={'white'}
                rounded={false}
                underline={false}
                border={false}
               
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryGrid;
