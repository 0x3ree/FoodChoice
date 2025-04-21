import { useContext } from "react";
import MealsList from "../components/Mealslist/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;
