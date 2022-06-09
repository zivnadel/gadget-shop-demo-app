import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  numberOfCartItems: 0,
  isCartShown: false,
  isCartChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.numberOfCartItems = action.payload.numberOfCartItems;
    },
    addItemToCart(state, action) {
      const cartItem = action.payload;
      state.isCartChanged = true;
      if (!state.cartItems) {
        state.cartItems = [];
      }
      const exisitingItem = state.cartItems.find(
        (item) => item.id === cartItem.id
      );
      if (exisitingItem) {
        exisitingItem.quantity++;
        exisitingItem.total += cartItem.price;
      } else {
        state.cartItems.push({
          ...cartItem,
          quantity: 1,
          total: cartItem.price,
        });
      }
      state.numberOfCartItems++;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      state.isCartChanged = true;
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      );
      const cartItem = state.cartItems[cartItemIndex];
      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      } else {
        state.cartItems[cartItemIndex] = {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          total: cartItem.total - cartItem.price,
        };
      }
      state.numberOfCartItems--;
    },
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
