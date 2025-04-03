import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealsItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation(); // this is a hook that allows us to access the navigation prop in a functional component. we can use it to navigate to other screens or to get the navigation prop in a functional component. we can also use it to get the route prop in a functional component.
  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    }); // we put it in this function because we'd call it in the pressable component, earlier it was trigerring as soon as the screen is loaded and not when we click the button. we are passing the mealId as a parameter to the MealDetail screen so we can use it to fetch the data for that meal item.
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler} // this is the function that will be called when the button is pressed. we are passing the function to the onPress prop of the Pressable component. we can also use the onPress prop to call it in the parent component where the function is called(onSelect).
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

//* when using images from the web we have to define the width and the height, unlike when we source it locally and react-native will automatically adjust the size which we can then style.
//(* suggestion) we can also use the ImageBackground component to add a background image to a view, which is a view that has an image as a background.

export default MealsItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
    // for ios
    // shadowOpacity: 0.35,
    //  shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },

  buttonPressed: {
    // opacity: Platform.OS === "ios" ? 0.5 : null, // this is for ios
    opacity: 0.5,
  },
  innerContainer: {
    // this is the container that holds the image and the text and the rounded corners disappeard on ios due to the overflow hidden
    borderRadius: 8,
    overflow: "hidden",
  },
});
