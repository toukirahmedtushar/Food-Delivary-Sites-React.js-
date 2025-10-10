import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    if (!cartItems[item]) {
      setCartItems((prev) => ({ ...prev,[item]:1}));
    } else {
      setCartItems((prev) => ({ ...prev, [item]:prev[item]+1}));
    }
  }
  const removeFromCart = (item) => {
    if (cartItems[item] && cartItems[item] > 0) {
      setCartItems((prev) => ({ ...prev,[item]:prev[item]-1}));
    }
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const storeValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };
  return (
    <StoreContext.Provider value={storeValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
