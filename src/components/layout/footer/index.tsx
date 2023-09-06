"use client";
import Image from "next/image";
import Link from "next/link";

import CustomAccordion from "../accordion";

import { Logo, brandLogo } from "@/assets/images";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import CustomButton from "../button";

const Dummy = [
  {
    title: "Shop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lectus tortor, id lacinia nibh tempus sed. Etiam non justo sagittis, tempus justo sit amet, congue massa.",
  },
  {
    title: "Information",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lectus tortor, id lacinia nibh tempus sed. Etiam non justo sagittis, tempus justo sit amet, congue massa.",
  },
  {
    title: "Company",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique lectus tortor, id lacinia nibh tempus sed. Etiam non justo sagittis, tempus justo sit amet, congue massa.",
  },
];

const SosicalMediaIcons = () => {
  return (
    <div className="flex gap-4">
      <div className="flex  w-9 h-9 justify-center items-center rounded-full bg-white-100">
        <IconBrandFacebook size={18} />
      </div>
      <div className="flex  w-9 h-9 justify-center items-center rounded-full bg-white-100">
        <IconBrandInstagram size={18} />
      </div>
      <div className="flex  w-9 h-9 justify-center items-center rounded-full bg-white-100">
        <IconBrandTwitter size={18} />
      </div>
      <div className="flex  w-9 h-9 justify-center items-center rounded-full bg-white-100">
        <IconMail size={18} />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col  bg-black-50  divide-y md:gap-8 divide-black-200 p-12 justify-between">
      <div className="flex flex-col   md:flex-row gap-6  justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image src={brandLogo} alt="Picture of the author" />
              <Image src={Logo} alt="Picture of the author" />
            </div>

            <span className="text-black-600">
              Experience the future of e-commerce <br /> design with SHOPR
            </span>
          </div>
          <div className="hidden md:flex">
            <SosicalMediaIcons />
          </div>
        </div>

        <div className="hidden md:flex w-[642px] justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium ">Shop</span>
            <div className="flex flex-col gap-3 text-sm font-normal">
              <Link href="/#">My account</Link>
              <Link href="/#">Login</Link>
              <Link href="/#">Wishlist</Link>
              <Link href="/#">Cart</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium ">Information</span>
            <div className="flex flex-col gap-3 text-sm font-normal">
              <Link href="/#">Shipping Policy</Link>
              <Link href="/#">Returns & Refunds</Link>
              <Link href="/#">Cookies Policy</Link>
              <Link href="/#">Frequently asked</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium ">Company</span>
            <div className="flex flex-col gap-3 text-sm font-normal">
              <Link href="/#">About us</Link>
              <Link href="/#">Privacy Policy</Link>
              <Link href="/#">Terms & Conditions</Link>
              <Link href="/#">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="md:hidden ">
          {Dummy.map((item) => (
            <CustomAccordion title={item.title} text={item.text} />
          ))}
        </div>
      </div>

       <div className="flex pt-2 items-center flex-col-reverse gap-8 md:flex-row justify-between">
        <span className="text-sm font-normal text-gray-700 ">
          @2023 Serdar Aksoy
        </span>
        <div className="flex md:hidden">
            <SosicalMediaIcons />
        </div>
        <div className="flex gap-2">
          <CustomButton
            input={"English"}
            size={"textM"}
            iconSide={"right"}
            fill={"transparent"}
            underline={false}
            iconType="ChevronDown"
          />
          <CustomButton
            input={"USD"}
            size={"textM"}
            iconSide={"right"}
            fill={"transparent"}
            underline={false}
            iconType="ChevronDown"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
