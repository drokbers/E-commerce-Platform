import React from "react";
import Link from "next/link";

interface BreadCrumbsProps {
  items: string[];
}

const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
  const allItems = ["Home", ...items];

  return (
    <div className="flex gap-3 text-black-600 text-xs font-normal">
      {allItems.map((item, index) => (
        <span key={index}>
          {index === allItems.length - 1 ? (
            item
          ) : (
            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              {item}{" "}
            </Link>
          )}
          {index < allItems.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
