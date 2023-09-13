import ProductSlider from "./slider";
import ProductInformation from "./information";

interface ProductCardProps {
  id: string;
}

const ProductCard = ({ id }: ProductCardProps) => {
  return (
    <div className="flex  gap-12 p-20 ">
      <ProductSlider id={id} />
      <ProductInformation id={id} />
    </div>
  );
};
export default ProductCard;
