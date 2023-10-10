import { PageHeader, Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  ContactInformation,
  ExpressCheckOut,
  ShippingInformation,
  ShippingMethod,
  PaymentInformation,
  OrderItems,
  OrderSummary,
} from "@/components/checkout/";
import CustomButton from "@/components/layout/button";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col ">
      <Header />
      <PageHeader title="Checkout" />
      <div className="flex flex-col md:flex-row justify-center pb-12 pt-6 pl-6 pr-6 gap-8 ">
        <div className="flex text-center flex-col gap-6 w-full md:w-[652px]">
          <span>
            Returning customer? <b>Click here to login</b>
          </span>
          <ExpressCheckOut />
          <ContactInformation />
          <ShippingInformation />
          <ShippingMethod />
          <div className="hidden md:flex flex-col">
            <PaymentInformation />
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <span className="text-black-500">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </span>
            <CustomButton fill="black" size="large" label="Place Order" />
          </div>
        </div>

        <div className="flex  flex-col w-full md:w-[424px] pl-6 pr-6 min-h-min  pb-4 pt-4 gap-4 border">
          <span className="text-xl font-medium ">Order summary</span>
          <OrderItems />
          <OrderSummary />
        </div>

        <div className="flex flex-col gap-4 md:hidden">
            <PaymentInformation />
            <CustomButton fill="black" size="large" label="Place Order" />
          </div>

      </div>

      <Footer />
    </div>
  );
}
