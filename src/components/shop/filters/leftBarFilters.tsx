import { IconX } from "@tabler/icons-react";
import CustomButton from "@/components/layout/button";
import CustomRange from "./customRange";

const DummyCategory = [
  {
    id: 1,
    name: "Home & Decor",
  },
  {
    id: 2,
    name: "Clothing",
  },
  {
    id: 3,
    name: "Accessories",
  },
  {
    id: 4,
    name: "Outdoor",
  },
];

const DummyColor = [
  {
    id: 1,
    name: "red",
  },
  {
    id: 2,
    name: "green",
  },
  {
    id: 3,
    name: "purple",
  },
  {
    id: 4,
    name: "black",
  },
];

const DummySize = [
  {
    id: 1,
    name: "S",
  },
  {
    id: 2,
    name: "M",
  },
  {
    id: 3,
    name: "L",
  },
  {
    id: 4,
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

const LeftBarFilters = () => {
  return (
    <div className="flex flex-col   p-6 gap-8">
      <div className="flex justify-between">
        <span className="text-xl font-semibold ">Filter</span>
        <button>
          <IconX size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-10">
        <div id="section list" className="flex flex-col gap-4">
          <span className="text-sm font-semibold">CATEGORIES</span>
          <div className="flex flex-col gap-3">
            {DummyCategory.map((item) => {
              return (
                <div>
                  <CustomButton
                    label={item.name}
                    buttonType={"text"}
                    size={"small"}
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
                className={` ${iconColors(color.name)}`}
                fill={"black"}
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
              />
            ))}
          </div>
        </div>

        <div id="price">
          <span className="text-sm font-semibold ">PRICE</span>
          <CustomRange rtl={false} />
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
