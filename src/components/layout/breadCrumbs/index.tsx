import React from "react";
import Link from "next/link";

interface BreadCrumbsProps {
  items: string[];
}

const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
  return (
    <div className="flex gap-3 text-black-600 text-xs font-normal">
      {items.map((item, index) => (
        <span key={index}>
          
          {index === items.length - 1 ? (
            item
          ) : (
            <Link className="" href={`/${item.toLowerCase()}`}>{item} </Link>
          )}
          {index < items.length-1  && " > "}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
