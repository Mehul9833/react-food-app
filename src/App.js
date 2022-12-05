import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

// Components
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>

      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
