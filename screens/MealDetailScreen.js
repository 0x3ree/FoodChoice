import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import IconButton from "../components/IconButton";
import List from "../components/MealDetails/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId; // it enables the mealdetailsscreen to dynamically display content based on the meal id passed from the mealsOverview screen. we can then use this mealId to fetch the data for that meal item from the MEALS array in the dummy-data.js file. we can also use it to navigate to other screens or to get the navigation prop in a functional component. we can also use it to get the route prop in a functional component.
  // (s)we can also use the useNavigation hook to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  // /s/ we can also use it to navigate to other screens or to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function HeaderButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={HeaderButtonPressHandler}
          />
        );
      },
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
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
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
