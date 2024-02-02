import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    item: [],
  },
  name: "cart",
  reducers: {},
});
export const cartReducer = cartSlice.reducer;
