import CustomButton from "../../layout/button";
import ProductItem from "../productCarousel/productItem";
import ProductData from "@/product.json";

const productGrid = () => {
  return (
    <div className="flex flex-col   items-center gap-12 p-12">
      <div className="flex  text-2xl font-medium gap-3 items-center justify-center leading-9">
        <span>You’re browsing</span>
        <CustomButton
          label={"Dresses"}
          buttonType="text"
          size={"xlarge"}
          iconSide={"right"}
          fill={"transparent"}
          underline={true}
          iconType="ChevronDown"
        />
        <span>In</span>
        <CustomButton
          label={"Tag"}
          buttonType="text"
          size={"xlarge"}
          iconSide={"right"}
          fill={"transparent"}
          underline={true}
          iconType="ChevronDown"
        />
      </div>
      <div className="flex flex-col w-full  gap-4 md:gap-8  ">
        <div className="grid grid-cols-2 justify-center  xl:grid-cols-4 gap-8">
          {ProductData.slice(0, 8).map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              photo={item.photos ? item.photos[0] : "/defaultImagePath"}
              title={item.title}
              price={item.price}
              discount={item.discount}
              new={item.new}
              type={"productGrid"}
            />
          ))}
        </div>
      </div>
      <CustomButton
        label={"Load more"}
        size={"medium"}
        fill={"black"}
        buttonType={"default"}
      />
    </div>
  );
};
export default productGrid;
