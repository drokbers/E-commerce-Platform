interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <div className="flex h-32 pt-4 md:pt-8 text-lg font-normal">
      <span className="text-sm md:text-lg ">{description}</span>
    </div>
  );
};
export default ProductDescription;
