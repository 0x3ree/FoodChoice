import { StyleSheet, FlatList, View } from "react-native";
import MealsItem from "./MealsItem";
function MealsList({ displayedmeals }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealProps = {
      id: item.id,
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
        data={displayedmeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
