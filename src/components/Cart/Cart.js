import React from "react";

import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numberOfCartItems = useSelector(
    (state) => state.cart.numberOfCartItems
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      {numberOfCartItems === 0 && <p>You cart is empty! Go shopping!</p>}
    </Card>
  );
};

export default Cart;
