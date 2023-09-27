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

const Header = () => {
  return (
    <div className="flex  h-16  pl-14  bg-white-100 pt-5 pr-14  items-center justify-between">
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
        <IconShoppingBag color="black" size={28} />
      </div>
      <div className="flex md:hidden gap-4">
        <IconShoppingBag color="black" size={28} />
        <IconMenu2 color="black" size={28} />
      </div>
    </div>
  );
};
export default Header;
