import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const StackScreens = createNativeStackNavigator(); // this is the navigator, it's an object with two -
//  properteries, screen and navigator in other words it's an object with two properties,-
// where every property holds an object that acts as a component. Also .Screen is a compoenent that
// allows us to register a screen component which will be managed by the .Navigator.
export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <StackScreens.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ff0000" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <StackScreens.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          {/*in here the reason why we don't use the options prop to set title is because for ever other item we click it's the same title so we then set it dynamically which give each options we click a diff header title*/}
          <StackScreens.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //   options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //    return {
            //      title: catId,
            //  }; // this  is one option we  use the navigation prop to set the title dynamically, but we will set the option in the component itself
            //  }}
          />
          <StackScreens.Screen name="MealDetail" component={MealDetailScreen} />
        </StackScreens.Navigator>
      </NavigationContainer>
    </>
  );
}
// navigation container is the root component of the navigation tree, we wrap it around our screen components in the begining but we later destructure them in the stack navigator

// const styles = StyleSheet.create({
// container: {

// });
