import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "@/types/model";

const initialState: CartState = {
  cartItems: [],
  total: 0,
  isFlyoutOpen: false,
  shipping: 0,
};

const calculateTotal = (cartItems: CartItem[]): number =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItem: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
      state.total = calculateTotal(action.payload);
    },

    toggleCartFlyOut: (state, action: PayloadAction<boolean>) => {
      state.isFlyoutOpen = action.payload;
    },

    setShippingOption: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; color: string; size: string }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
      state.total = calculateTotal(state.cartItems);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ index: number; change: number }>
    ) => {
      if (action.payload.index !== -1) {
        const item = state.cartItems[action.payload.index];
        item.quantity = Math.max(item.quantity + action.payload.change, 0);

        state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
        state.total = calculateTotal(state.cartItems);
      }
    },
  },
});

export const {
  
  toggleCartFlyOut,
  setShippingOption,
  updateCartItem,
  removeFromCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
