import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ShopBanner from "@/components/shop/banner";
import Shop from "@/components/shop";

export default function ShopPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <ShopBanner />
      <Shop />

      <Footer />
    </div>
  );
}
