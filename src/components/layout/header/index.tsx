"use client";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/assets/images";
import {
  IconSearch,
  IconUser,
  IconShoppingBag,
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";

import useCart from "@/hooks/useCart";

const Header = () => {
  const { getCartContent } = useCart();
  const cartLenght = getCartContent().length;
  return (
    <div className="flex  h-16  pl-4 pr-4 md:pl-14  bg-white-100 pt-5 md:pr-14  items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="Logo" />{" "}
      </Link>

      <div className="hidden md:flex  gap-10 ">
        <div className="flex items-center ">
          <Link href="/"> Home </Link>
          <IconChevronDown color="black" size={18} />
        </div>
        <div className="flex items-center">
          <Link href="/shop"> Shop </Link>
          <IconChevronDown color="black" size={18} />
        </div>
        <div className="flex items-center">
          <Link href="/"> Product </Link>
          <IconChevronDown color="black" size={18} />
        </div>
        <div className="flex items-center">
          <Link href="/"> Pages </Link>
          <IconChevronDown color="black" size={18} />
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        <IconSearch color="black" size={28} />
        <IconUser color="black" size={28} />

        <Link href="/cart">
          <div className="flex gap-0.5 items-center">
            <IconShoppingBag color="black" size={28} />

            <div className="flex h-5 w-5 rounded-full items-center justify-center bg-black-900">
              <span className="text-white-100  text-xs">{cartLenght}</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex md:hidden gap-4">
        <Link href="/cart">
          <div className="flex gap-0.5 items-center">
            <IconShoppingBag color="black" size={28} />

            <div className="flex h-5 w-5 rounded-full items-center justify-center bg-black-900">
              <span className="text-white-100  text-xs">{cartLenght}</span>
            </div>
          </div>
        </Link>
        <IconMenu2 color="black" size={28} />
      </div>
    </div>
  );
};
export default Header;
