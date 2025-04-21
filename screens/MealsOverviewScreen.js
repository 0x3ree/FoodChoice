import { useLayoutEffect } from "react";
import MealsList from "../components/Mealslist/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId; // we are showing the data passed from the CategoriesScreen

  // we are filtering the meals based on the category id which is stored in the mealItem object.
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  }); // we start by storing the data we want to display in a const, we are then filtering
  // the meals based on the category id. we then wan to return true if the category id is included in the categoryIds array of the mealItem.
  //(suggestion) we are using the indexOf method to check if the category id is included in the array, if it is included it will return the index of the first occurrence of the category id in the array, if it is not included it will return -1. so we check if it's greater than or equal to 0.
  // (s)this will return an array of meal items that belong to the selected category.
  // (s)we can also use the filter method to filter the meals based on the category id, but we are using indexOf method to check if the category id is included in the array.

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]); // we are using the useEffect hook to set the title of the screen based on the category id. we are using the find method to find the category object that matches the category id, and then we are setting the title of the screen to the title of that category. we earlier used just the navigation prop to set the title which showed some error due to it not being the proper way so we used useeffect but then it's slow and doesn't load properly so we use layouteffect.
  return <MealsList displayedmeals={displayedMeals} />;
}

export default MealsOverviewScreen;

//const styles = StyleSheet.create({});
