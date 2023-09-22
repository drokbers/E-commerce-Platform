import ShopItem from "./shopGridItem";
import ShopListItem from "./shopListItem";

import { Product } from "@/types/model";

type ProductShopGridProps = {
  products: Array<
    Pick<Product, "id" | "title" | "price" | "discount" | "new" | "rating"> & {
      photo: string;
    }
  >;
  gridCount: number;
};

const ProductShopGrid: React.FC<ProductShopGridProps> = ({ products, gridCount }) => {
  const isListView = gridCount === 1;
  const ComponentToRender = isListView ? ShopListItem : ShopItem;
  const gridClasses = `gap-8 flex ${ !isListView ? "flex-wrap" : "flex-col" } justify-center`;

  return (
    <div id="grid" className={gridClasses}>
      {products.map((product) => (
        <ComponentToRender
          key={product.id}
          {...product}
          gridCount={gridCount}
        />
      ))}
    </div>
  );
};

export default ProductShopGrid;
