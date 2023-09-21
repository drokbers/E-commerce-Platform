import ShopItem from "./ShopItem";

import { Product } from "@/types/model";

type ProductShopGridProps = {
  products: Array<
    Pick<Product, "id" | "title" | "price" | "discount" | "new" | "rating"> & {
      photo: string;
     
    }
  
  >;
  gridCount: number;
};

const ProductShopGrid = ({ products, gridCount }: ProductShopGridProps) => {

  const gridClasses = `gap-8 flex flex-wrap justify-between`;

  return (
    <div id="gird" className= {gridClasses}>
      {products.map((product) => (
        <ShopItem
          key={product.id}
          id={product.id}
          photo={product.photo}
          title={product.title}
          price={product.price}
          discount={product.discount}
          new={product.new}
          rating={product.rating}
          gridCount={gridCount}
        />
      ))}
    </div>
  );
};

export default ProductShopGrid;
