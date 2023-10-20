import { Logo } from "@/assets/images";
import Image from "next/image";

import { IconX } from "@tabler/icons-react";
import CustomForm from "../../form";
import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";

import ProductGridItem from "../../../carousels/productGrid/productGridItem";
import { Filters } from "@/types/model";
import CustomButton from "../../button";
import Link from "next/link";

interface SearchPopUpProps {
  onShowSearch: (isOpen: boolean) => void;
}

const SearchPopUp = ({ onShowSearch }: SearchPopUpProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quickSearch, setQuickSearch] = useState<Filters>({
    category: [],
    color: [],
    size: [],
    style: [],
    price: [0, 200],
  });

  const quickSearchOptions = [
    { label: "Clothing", value: "Clothing" },
    { label: "Pant", value: "Pant" },
    { label: "Shirt", value: "Shirt" },
    { label: "Sandals", value: "Sandals" },
  ];

  const filteredProducts = useFilters({
    searchTerm,
    selectedFilters: quickSearch,
    sortBy: "Newest",
  }).map((product) => ({
    ...product,
    photo: product.photos
      ? product.photos[0]
      : "https://i.imgur.com/TIhrbBm.png",
  }));

  return (
    <div className="absolute  pl-12 pr-12 pt-5 pb-5 flex z-20 w-full bg-white-100 flex-col">
      <div id="header" className="flex  items-center justify-between">
        <Image src={Logo} alt="Logo" />
        <IconX className=" cursor-pointer" color="black" size={32} onClick={() => {onShowSearch(false)}} />
      </div>

      <div className="flex flex-col items-center  justify-center gap-4 pt-6 pb-6 pl-4 pr-4 ">
        <div className=" w-full md:w-[450px] ">
          <CustomForm
            iconSide="right"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex justify-between text-sm font-normal gap-4">
          <span className="text-black-500 ">Quick Search:</span>
          {quickSearchOptions.map((option) => (
            <span
              key={option.value}
              className={` ${
                quickSearch.category.includes(option.value)
                  ? "text-black-900 underline"
                  : "text-black-500"
              }  cursor-pointer
        }`}
              onClick={() =>
                setQuickSearch((prevState) => {
                  const isAlreadySelected = prevState.category.includes(
                    option.value
                  );
                  const newCategory = isAlreadySelected
                    ? prevState.category.filter((cat) => cat !== option.value)
                    : [option.value];
                  return {
                    ...prevState,
                    category: newCategory,
                  };
                })
              }
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>

      {(searchTerm.length > 0 || quickSearch.category.length > 0) && (
        <div>
          <ProductGridItem products={filteredProducts.slice(0, 8)} />
          <div className="flex items-center justify-center pt-4 ">
            <Link href="/shop">
              <CustomButton label={"See All"} fill="black" size={"medium"} />
            </Link>
          </div>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-2xl">No Results Found</span>
          <span className="text-sm">Try another search term</span>
        </div>
      )}
      <div></div>
    </div>
  );
};
export default SearchPopUp;
