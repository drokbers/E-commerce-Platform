import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import {FlyOutCart} from "@/components/cart"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce | The Global Destination For Modern Luxury",
  description: "The Global Destination For Modern Luxury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white-100 `}>
        <ReduxProvider>
          
          <FlyOutCart />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
