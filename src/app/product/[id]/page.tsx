"use client";
import {Header} from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product/productCard";
import ProductContent from "@/components/product/content";
import ProductCarousel from "@/components/carousels/productCarousel";
import { CartState } from "@/types/model";
import { useSelector } from "react-redux";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { isFlyoutOpen } = useSelector(
    (state: { cart: CartState }) => state.cart
  );
  return (
    <div
      className={`flex flex-col  ${
        isFlyoutOpen ? "opacity-20" : "opacity-100"
      }`}
    >
      <Header />
      <ProductCard id={params.id} />
      <ProductContent id={params.id} />
      <ProductCarousel title="You might also like" />
      <Footer />
    </div>
  );
}
