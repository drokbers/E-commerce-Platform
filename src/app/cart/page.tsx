import { PageHeader, Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import {CartSummary,CartItems,CartGoal} from "@/components/cart"

export default function CartPage() {
  return (
    <div className="flex flex-col ">
      <Header />
      <PageHeader title="Cart" />
      <CartGoal />
      <div className="flex flex-col md:p-12">
        <CartItems />
        <CartSummary />
      </div>
      <Footer />
    </div>
  );
}
