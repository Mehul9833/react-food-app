import React from "react";

// Data
import { DUMMY_MEALS } from "../../dummyData";

// Component
import Card from "../UI/Card";

// css
import classes from "./availableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, key) =>
    <MealItem
      key={key}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
