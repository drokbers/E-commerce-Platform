"use client";
import { IconX } from "@tabler/icons-react";
import CustomButton from "@/components/layout/button";
import CustomRange from "./customRange";
import { useEffect, useState } from "react";
import { Filters, ShopState } from "@/types/model";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "@/redux/features/shopSlice";

const DummyCategory = [
  {
    id: 1,
    name: "Clothing",
  },
  {
    id: 2,
    name: "Sandals",
  },
  {
    id: 3,
    name: "Accessories",
  },
  {
    id: 4,
    name: "Bags",
  },
];

const DummyColor = [
  {
    id: 5,
    name: "red",
  },
  {
    id: 6,
    name: "green",
  },
  {
    id: 7,
    name: "purple",
  },
  {
    id: 8,
    name: "black",
  },
];

const DummySize = [
  {
    id: 9,
    name: "S",
  },
  {
    id: 10,
    name: "M",
  },
  {
    id: 11,
    name: "L",
  },
  {
    id: 12,
    name: "XL",
  },
];

const DummyStyle = [
  {
    id: 1,
    name: "Modern",
  },
  {
    id: 2,
    name: "Streetwear",
  },
  {
    id: 3,
    name: "Colorfull",
  },
  {
    id: 4,
    name: "Patchwork",
  },
  {
    id: 5,
    name: "Minimalist",
  },
];

const iconColors = (color: string) => {
  switch (color) {
    case "green":
      return " bg-teal-500";
    case "red":
      return " bg-red-400";
    case "purple":
      return " bg-indigo-200";
    case "black":
      return " bg-black-900";
    default:
      return ` bg-${color}-500`;
  }
};

type LeftBarFiltersProps = {
  setCloseFilter: (value: boolean) => void;
  onFiltersUpdate: (filters: Filters) => void;
};

const LeftBarFilters: React.FC<LeftBarFiltersProps> = ({
  setCloseFilter,
  onFiltersUpdate,
}) => {
  // const [selectedFilters, setSelectedFilters] = useState<Filters>({
  //   category: [],
  //   color: [],
  //   size: [],
  //   style: [],
  //   price: [],
  // });

  const dispatch = useDispatch();

  const { filters } = useSelector((state: { shop: ShopState }) => state.shop);

  const onPriceRange = (values: number[]) => {
    dispatch(updateFilters({ ...filters, price: values }));
  };

  const filterHandler = (type: keyof Filters, value: string | number[]) => {
    let updatedFilters = { ...filters };
  
    if (type === "price" && Array.isArray(value)) {
      updatedFilters.price = value as number[];
    } else if (typeof value === "string") {
      const currentValues = [...updatedFilters[type] as string[]]; // Burada bir kopya oluşturuyoruz
      const valueIndex = currentValues.indexOf(value);
  
      if (valueIndex > -1) {
        currentValues.splice(valueIndex, 1);
      } else {
        currentValues.push(value);
      }
      
      updatedFilters = { ...updatedFilters, [type]: currentValues }; // Güncellenmiş değerleri kullanarak yeni bir obje oluşturuyoruz
    }
  
    dispatch(updateFilters(updatedFilters));
  };
  

  return (
    <div className="hidden md:flex flex-col   p-6 gap-8">
      <div className="flex justify-between">
        <span className="text-xl font-semibold ">Filter</span>
        <button onClick={() => setCloseFilter(false)}>
          <IconX size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-10">
        <div id="section list" className="flex flex-col gap-4">
          <span className="text-sm font-semibold">CATEGORIES</span>
          <div className="flex flex-col gap-3">
            {DummyCategory.map((category, index) => {
              return (
                <div key={index}>
                  <CustomButton
                    label={category.name}
                    buttonType={"text"}
                    size={"small"}
                    className={` ${
                      filters.category.includes(category.name)
                        ? "underline font-semibold"
                        : "no-underline font-normal"
                    }`}
                    onClick={() => filterHandler("category", category.name)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div id="color" className="flex flex-col gap-4">
          <span className="text-sm font-semibold">COLOR</span>
          <div className="flex  gap-3">
            {DummyColor.map((color) => (
              <CustomButton
                key={color.id}
                size={"xsmall"}
                buttonType="circle"
                className={` ${
                  filters.color.includes(color.name)
                    ? "ring-black-500 ring-offset-2 ring-1"
                    : "rings-offset-0 ring-0"
                }    ${iconColors(color.name)}`}
                fill={"black"}
                onClick={() => filterHandler("color", color.name)}
              />
            ))}
          </div>
        </div>

        <div id="size" className="flex  flex-col gap-4">
          <span className="text-sm font-semibold ">SIZE</span>
          <div className="flex  gap-4">
            {DummySize.map((size) => (
              <CustomButton
                key={size.id}
                label={size.name}
                size={"xsmall"}
                buttonType="square"
                fill={"white"}
                border
                onClick={() => filterHandler("size", size.name)}
                className={` ${
                  filters.size.includes(size.name)
                    ? "border-black-900"
                    : "border-black-300"
                } `}
              />
            ))}
          </div>
        </div>

        <div id="price">
          <span className="text-sm font-semibold ">PRICE</span>
          <CustomRange onPriceRange={onPriceRange} rtl={false} />
        </div>

        <div id="style" className="flex flex-col gap-4">
          <span className="text-sm font-semibold ">STYLE</span>
          <div className="flex flex-col gap-3 overflow-auto">
            {DummyStyle.map((style) => (
              <div className="">
                <CustomButton
                  key={style.id}
                  label={style.name}
                  size={"xsmall"}
                  buttonType="text"
                  onClick={() => filterHandler("style", style.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarFilters;
