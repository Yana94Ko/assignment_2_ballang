import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.reducer";
import { profileReducer } from "./reducers/profile.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
