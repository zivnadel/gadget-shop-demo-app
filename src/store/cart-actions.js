import { UIActions } from "./UI";
import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Couldn't fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          numberOfCartItems: cartData.numberOfCartItems,
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cartItems, numberOfCartItems) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartItems: cartItems,
            numberOfCartItems: numberOfCartItems,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendCartData();

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
