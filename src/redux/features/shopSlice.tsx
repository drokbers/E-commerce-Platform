import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, ShopState } from "@/types/model";

const initialState: ShopState = {
  filters: {
    category: [],
    color: [],
    size: [],
    style: [],
    price: [],
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
});

export const { updateFilters } = shopSlice.actions;
export default shopSlice.reducer;
