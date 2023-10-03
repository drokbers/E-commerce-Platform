import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "@/types/model";

const initialState: CartState = {
  cartItems: [],
  total: 0,
  isFlyoutOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeCartItem: (state, action: PayloadAction<CartItem>) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.total -= action.payload.price * action.payload.quantity;
      }
    },
    cartTotal: (state, action: PayloadAction<number>) => {
        state.total = action.payload;
    },
    cartFlyOut: (state, action: PayloadAction<boolean>) => {
      state.isFlyoutOpen = action.payload;
    }

  },
});

export const { addCartItem, removeCartItem, cartTotal,cartFlyOut } = cartSlice.actions;
export default cartSlice.reducer;
