import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId; // it enables the mealdetailsscreen to dynamically display content based on the meal id passed from the mealsOverview screen. we can then use this mealId to fetch the data for that meal item from the MEALS array in the dummy-data.js file. we can also use it to navigate to other screens or to get the navigation prop in a functional component. we can also use it to get the route prop in a functional component.
  // (s)we can also use the useNavigation hook to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  // /s/ we can also use it to navigate to other screens or to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingridients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
