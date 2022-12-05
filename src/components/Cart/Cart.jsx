import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./cart.module.css";
import CartItems from "./CartItems";

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemremoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map(item =>
    <CartItems
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemremoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartItems}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>
          {totalAmount}
        </span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
