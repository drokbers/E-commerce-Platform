"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { cartTotal as cartTotalAction } from "@/redux/features/cartSlice";
import useLocalStorage from "./useLocalStorage";
import { CartItem } from "@/types/model";


function useCart() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const dispatch = useDispatch();


  const calculateCartTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(total);
    dispatch(cartTotalAction(total));

  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const isProductInCart = (id: number, color: string, size: string): boolean =>
    cart.some(
      (product) =>
        product.id === id && product.color === color && product.size === size
    );

  const addProduct = (product: CartItem): void => {
    if (isProductInCart(product.id, product.color, product.size)) {
      const updatedCart = cart.map((p) =>
        p.id === product.id &&
        p.color === product.color &&
        p.size === product.size
          ? { ...p, quantity: p.quantity + product.quantity }
          : p
      );
      setCart(updatedCart);
      return;
    }
    setCart([...cart, product]);
  };

  const removeProduct = (index: number): void => {
    if (index === -1) return;
  
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };
  

  const updateQuantity = (index: number, change: number): void => {
    const updatedCart = cart
      .map((product, i) =>
        i === index
          ? { ...product, quantity: Math.max(product.quantity + change, 0) }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCart(updatedCart);
  };

  const getCartContent = (): CartItem[] => cart;

  return {
    addProduct,
    removeProduct,
    updateQuantity,
    getCartContent,
    isProductInCart,
    cartTotal,
    calculateCartTotal,
  };
}

export default useCart;
