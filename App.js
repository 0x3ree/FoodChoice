import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

const StackScreens = createNativeStackNavigator(); // this is the navigator, it's an object with two -
//  properteries, screen and navigator in other words it's an object with two properties,-
// where every property holds an object that acts as a component. Also .Screen is a compoenent that
// allows us to register a screen component which will be managed by the .Navigator.
export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <StackScreens.Navigator>
          <StackScreens.Screen
            name="MealCategories"
            component={CategoriesScreen}
          />
          <StackScreens.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
        </StackScreens.Navigator>
      </NavigationContainer>
    </>
  );
}
// navigation container is the root component of the navigation tree, we wrap it around our screen components in the begining but we later destructure them in the stack navigator

// const styles = StyleSheet.create({
// container: {

// });
