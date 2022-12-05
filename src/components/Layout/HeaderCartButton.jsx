import React, { useContext, useEffect, useState } from "react";

// Components
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

// Css
import classes from "./headerCartButton.module.css";

const HeaderCartButton = props => {
  const [btnIsHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(
    () => {
      if (items.length === 0) {
        return;
      }
      setButtonHighlighted(true);

      const timer = setTimeout(() => {
        setButtonHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    },
    [items]
  );

  const btnClasses = `${classes.button} ${btnIsHighlighted
    ? classes.bump
    : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
