"use client";
import { useState } from "react";

import ClientOnly from "@/utils/ClientOnly";

import ProductData from "@/product.json";
import AdditionalInfo from "./additionalInfo";
import ProductDescription from "./description";
import ProductReviews from "./reviews";

import ProductQuestions from "./questions";
import CustomAccordion from "@/components/layout/accordion";

interface ProductContentProps {
  id: string;
}

const ProductContent = ({ id }: ProductContentProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const product = ProductData.find((item) => item.id === Number(id));

  const tabs = [
    {
      title: "Description",
      content: (
        <ProductDescription
          description={
            product?.description ?? "There is no product description."
          }
        />
      ),
    },
    {
      title: "Additional Info",
      content: (
        <AdditionalInfo
          color={product?.colors ?? []}
          size={product?.sizes ?? []}
          weight={product?.weight ?? 0}
        />
      ),
    },
    {
      title: `Reviews (${product?.reviews.length ?? 0})`,
      content: (
        <ProductReviews
          rating={product?.rating ?? 0}
          reviews={product?.reviews ?? []}
        />
      ),
    },
    {
      title: `Questions (${product?.questions?.length ?? 0})`,
      content: <ProductQuestions questions={product?.questions ?? []} />,
    },
  ];

  return (
    <div className="p-12 ">
      <div className="hidden md:flex flex-col ">
        <div className="flex border-b gap-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-black-500 text-xl font-medium  ${
                activeTab === index
                  ? "border-b-2 text-black-900 border-black-500"
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"} p-4`}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <ClientOnly>
        <div className="md:hidden ">
          {tabs.map((item) => (
            <CustomAccordion title={item.title} text={item.content} />
          ))}
        </div>
      </ClientOnly>
    </div>
  );
};

export default ProductContent;
