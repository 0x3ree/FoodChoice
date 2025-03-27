import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

//* this function is to make the jsxcode(in the flatlist) leaner less congested and cleaner, also it should be called outside of the main function
//* in components that are bound to stackscren (categories/mealsoverview)react nav gives us a prop called navigation which is an object that has a method called navigate which allows us to navigate to a different screen
/*function renderCategoryItem(itemData) {
  function pressHandler() {}
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={pressHandler}
    />
  );
} we moved this into the main function.
*/
//* this is the main function that will be exported, in regards to the NavigationContainer in App.js,-
//  the navigation prop is passed to the Screen component only, it's not passed like children prop
//* in order to use the navigation prop we use it in the pressHandler function either by .bind(this) or by defining in the component function(categoriesscreen)
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id }); //*(passing data between screens) here we are navigating to the MealsOverviewScreen and passing the categoryId as a parameter
      // the first argument is the name of the screen we want to navigate to, the second argument is an object that holds the data we want to pass to the screen we are navigating to,
      //  which is then destured ({navigation}which only happens when a screen is registered) in the target screen, that way we can access the data. We also have access to
      // route prop which is an object that holds the data we passed to the screen it also only works when screen is registered.
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
  //* when creating a list of item they should have and id & key property
}

export default CategoriesScreen;
