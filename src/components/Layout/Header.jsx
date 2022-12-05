import React from "react";

// Image
import mealsImage from "../../assets/meals.jpg";

// css
import classes from "./header.module.css";

// Component
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals Table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
