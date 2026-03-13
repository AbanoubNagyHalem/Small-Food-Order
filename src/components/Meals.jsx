import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
      }

      const meals = await response.json();
      setLoadMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
