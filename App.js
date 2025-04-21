import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Octicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const StackScreens = createNativeStackNavigator(); // this is the navigator, it's an object with two -
//  properteries, screen and navigator in other words it's an object with two properties,-
// where every property holds an object that acts as a component. Also .Screen is a compoenent that
// allows us to register a screen component which will be managed by the .Navigator.
const DrawerSetup = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <DrawerSetup.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ff0000" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "white" },
        drawerContentStyle: { backgroundColor: "#ff0000" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
      }}
    >
      <DrawerSetup.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <DrawerSetup.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Octicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </DrawerSetup.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <FavoritesContextProvider>
        <NavigationContainer>
          <StackScreens.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ff0000" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#000" },
            }}
          >
            <StackScreens.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/*in here the reason why we don't use the options prop to set title is because for ever other item we click it's the same title so we then set it dynamically which give each options we click a diff header title*/}
            <StackScreens.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <StackScreens.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: "About The Meal" }}
            />
          </StackScreens.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
// navigation container is the root component of the navigation tree, we wrap it around our screen components in the begining but we later destructure them in the stack navigator
const styles = StyleSheet.create({
  container: {},
});
