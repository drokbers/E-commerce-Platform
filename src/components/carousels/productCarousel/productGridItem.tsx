import Image from "next/image";


const ProductItem = (props: {
  photo: string;
  title: string;
  price: number;
  discount: number;
  new: boolean;
  type: string;
}) => {

  const style  = { 
    size: {
      sizeofGrid: props.type === "productGrid" ? "w-40 h-56 md:w-80 md:h-96" : "w-80 h-96",
    }
  }

  return (

      <div className="flex flex-col items-center  text-black-900 gap-2">
        <div className={`relative ${style.size.sizeofGrid}`}>
          <Image src={props.photo} fill layout="fill" alt="SliderModel" />
        </div>
        <span className="text-base font-medium ">{props.title}</span>
        <div className="flex gap-3">
        <span className="text-sm font-semibold ">{'$' +props.price}</span>
        <span className="text-sm font-semibold  text-black-400 line-through leading-snug">{'$' + props.discount}</span>


        </div>
        
      </div>

  );
};
export default ProductItem;
