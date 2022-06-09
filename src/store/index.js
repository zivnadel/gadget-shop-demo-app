import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import UIReducer from "./UI";

const store = configureStore({
  reducer: { cart: cartReducer, UI: UIReducer },
});

export default store;
