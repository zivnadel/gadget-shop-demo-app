import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const onIncreaseQuantityClickedHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  const onDecreaseQuantityClickedHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecreaseQuantityClickedHandler}>-</button>
          <button onClick={onIncreaseQuantityClickedHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
