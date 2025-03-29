import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
function MealsItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
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
    // shadowOpacity: 0.25,
    //  shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 8,
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
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  innerContainer: {
    // this is the container that holds the image and the text and the rounded corners disappeard on ios due to the overflow hidden
    borderRadius: 8,
    overflow: "hidden",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
