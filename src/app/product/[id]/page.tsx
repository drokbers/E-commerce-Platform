import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product/productCard";
import ProductContent from "@/components/product/content";
import ProductCarousel from "@/components/carousels/productCarousel";
export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <ProductCard id={params.id} />
      <ProductContent id={params.id} />
      <ProductCarousel title="You might also like"/>
      <Footer />
    </div>
  );
}
