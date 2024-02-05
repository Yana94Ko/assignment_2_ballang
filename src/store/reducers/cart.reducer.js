import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
  },
  name: "cartSlice",
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      newItem.count = 1;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.option === newItem.option
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += newItem.count;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem(state, action) {
      const { id, option, count } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.option === option
      );

      if (existingItemIndex !== -1) {
        const newCount = state.items[existingItemIndex].count - count;
        if (newCount > 0) {
          state.items[existingItemIndex].count -= count;
        } else {
          state.items.filter((item) => item.id !== existingItemIndex);
        }
      }
    },
    updateCount(state, action) {},
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
