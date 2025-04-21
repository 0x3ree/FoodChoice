import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import IconButton from "../components/IconButton";
import List from "../components/MealDetails/List";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  // it enables the mealdetailsscreen to dynamically display content based on the meal id passed from the mealsOverview screen. we can then use this mealId to fetch the data for that meal item from the MEALS array in the dummy-data.js file. we can also use it to navigate to other screens or to get the navigation prop in a functional component. we can also use it to get the route prop in a functional component.
  // (s)we can also use the useNavigation hook to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  // /s/ we can also use it to navigate to other screens or to get the navigation prop in a functional component, but we are using it in the MealsItem component to navigate to the MealDetail screen. we can also use it to get the route prop in a functional component, but we are using it in the MealsOverview screen to get the categoryId passed from the CategoriesScreen.
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // here we add a new const which should be a boolean value which will check if the mealId is in the favoriteMealCtx.ids array or not. if it is then we can remove it from the fav list and if it is not then we can add it to the fav list.
  //(s) here we are using the useContext hook to access the context and then call the methods with the mealId as an argument. we can also use the useContext hook to access the ids array and check if the mealId is in there or not. if it is then we can remove it from the fav list and if it is not then we can add it to the fav list.
  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
  // includes is a method that checks if the mealId is in the array or not. it returns true or false, it works well for primitive values.

  // in here we work on the fav change status
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  }

  //(to use Context) now to change the fav status of the meal we need to access the methods defined in the fav-contxt and the Ids we got from mealId is part of our fav meal ids, comt-
  //-cont (s)so we need to pass the mealId to the addFav and removeFav methods. we can do this by using the useContext hook to access the context and then call the methods with the mealId as an argument. we can also use the useContext hook to access the ids array and check if the mealId is in there or not. if it is then we can remove it from the fav list and if it is not then we can add it to the fav list.
  //(s) we can also use the useContext hook to access the ids array and check if the mealId is in there or not. if it is then we can remove it from the fav list and if it is not then we can add it to the fav list.

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-fill"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
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
    marginBottom: 36,
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
