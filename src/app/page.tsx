import CategoryGrid from "@/components/home/categoryGrid";
import Header from "@/components/layout/header";
import ProductCarousel from "@/components/carousels/productCarousel";
import Slider from "@/components/home/slider";
import ProductGrid from "@/components/carousels/productGrid";
import { FeatureSectionPhoto } from "@/components/home/featureSection";
import IconBox from "@/components/home/iconBox";
import Footer from "@/components/layout/footer";

import TestimonialBlock from "@/components/home/testimonial";
import FlyOutCart from "@/components/cart/flyOutCart";
// import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <div className="relative flex flex-col ">
      <Header />
      <Slider />
      <ProductCarousel title="Latest Arrivals" />
      <CategoryGrid />
      <ProductGrid />
      <FeatureSectionPhoto />
      <TestimonialBlock />
      {/* <Newsletter/> */}
     
      <IconBox />
      <Footer />
    </div>
  );
}
