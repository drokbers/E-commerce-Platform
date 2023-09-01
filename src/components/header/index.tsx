import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/assets/images";
import {
  IconSearch,
  IconUser,
  IconShoppingBag,
  IconChevronDown,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="flex  h-16  pl-14  pt-5 pr-14  items-center justify-between">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex gap-10 ">
        <div className="flex items-center ">
          <Link href="/"> Home </Link>
          <IconChevronDown color="black" size={18} />
        </div>
        <div className="flex items-center">
          <Link href="/"> Shop </Link>
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
      <div className="flex gap-5">
        <IconSearch color="black" size={28} />
        <IconUser color="black" size={28} />
        <IconShoppingBag color="black" size={28} />
      </div>
    </div>
  );
};
export default Header;
