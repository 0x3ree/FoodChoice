import { View, StyleSheet, FlatList } from "react-native";
import MealsItem from "../components/MealsItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catID = route.params.categoryId; // we are showing the data passed from the CategoriesScreen

  // we are filtering the meals based on the category id which is stored in the mealItem object.
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  }); // we start by storing the data we want to display in a const, we are then filtering
  // the meals based on the category id. we then wan to return true if the category id is included in the categoryIds array of the mealItem.
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealsItem {...mealProps} />;
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
