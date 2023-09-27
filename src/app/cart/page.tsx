import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartHeader from "@/components/cart/cartHeader";
import CartGoal from "@/components/cart/cartGoal";
import CartItems from "@/components/cart/cartItems";
import CartSummary from "@/components/cart/cartSummary";

export default function CartPage() {
  return (
    <div className="flex flex-col ">
      <Header />
      <CartHeader />
      <CartGoal />
      <div className="flex flex-col md:p-12">
        <CartItems />
        <CartSummary />
      </div>

      <Footer />
    </div>
  );
}
