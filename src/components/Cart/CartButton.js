import { useSelector, useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfCartItems = useSelector((state) => state.cart.numberOfCartItems);

  const cartButtonClickedHandler = () => {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button onClick={cartButtonClickedHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
