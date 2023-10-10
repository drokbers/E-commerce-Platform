"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "@/redux/features/cartSlice";
import useLocalStorage from "./useLocalStorage";
import { CartItem, CartState } from "@/types/model";

function useCart() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

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
      dispatch(updateCartItem(updatedCart));
      return;
    }
    setCart([...cart, product]);
    dispatch(updateCartItem([...cart, product]));
  };

  const getCartContent = (): CartItem[] => cart;

  return {
    addProduct,
    getCartContent,
    isProductInCart,
  };
}

export default useCart;
