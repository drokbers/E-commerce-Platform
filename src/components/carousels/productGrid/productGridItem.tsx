import ProductItem from "../productCarousel/productItem";
import { Product } from "@/types/model";

const ProductGridItem = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col w-full  gap-4 md:gap-8  ">
      <div className="grid grid-cols-2 justify-center  xl:grid-cols-4 gap-8">
        {products.map((item) => (
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
  );
};

export default ProductGridItem;
