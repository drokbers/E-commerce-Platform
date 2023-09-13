import ProductSlider from "./slider";
import ProductInformation from "./information";

interface ProductCardProps {
  id: string;
}

const ProductCard = ({ id }: ProductCardProps) => {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-20 p-12 ">
      <ProductSlider id={id} />
      <ProductInformation id={id} />
    </div>
  );
};
export default ProductCard;
