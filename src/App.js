import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.isCartShown);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numberOfCartItems = useSelector(
    (state) => state.cart.numberOfCartItems
  );
  const isCartChanged = useSelector((state) => state.cart.isCartChanged);
  const notification = useSelector((state) => state.UI.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (isCartChanged) {
      dispatch(sendCartData(cartItems, numberOfCartItems));
    }
  }, [cartItems, numberOfCartItems, isCartChanged, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
