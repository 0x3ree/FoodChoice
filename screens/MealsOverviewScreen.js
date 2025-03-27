import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/mealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catID = route.params.categoryId; // we are showing the data passed from the CategoriesScreen

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  }); // we start by storing the data we want to display in a const, we are then filtering
  // the meals based on the category id. we then wan to return true if the category id is included in the categoryIds array of the mealItem.
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
