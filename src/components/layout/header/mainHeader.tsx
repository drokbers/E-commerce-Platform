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
import { useSelector } from "react-redux";
import { CartState } from "@/types/model";
import SearchPopUp from "@/components/layout/header/search/searchPopup";
import { useState } from "react";

const Header = () => {
  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartLenght = cartItems.length;

  const onShowSearch = (isOpen: boolean) => {
    setIsSearchOpen(isOpen);
  };

  return (
    <div className="relative">
      {isSearchOpen && <SearchPopUp  onShowSearch= {onShowSearch} />}

      <div className="relative flex  h-16  pl-4 pr-4 md:pl-14  bg-white-100 pt-5 md:pr-14  items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
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
          <button
            onClick={() => {
              setIsSearchOpen(true);
            }}
          >
            <IconSearch color="black" size={28} />
          </button>
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
    </div>
  );
};
export default Header;
