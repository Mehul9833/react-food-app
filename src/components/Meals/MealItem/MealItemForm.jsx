import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./mealItemForm.module.css";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount
      "
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!amountIsValid && <p>please Enter a valid amount between 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
