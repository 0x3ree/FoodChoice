import { Text, View, Pressable, StyleSheet, Platform } from "react-native";

//* in this function in regards to onPress instead of writing calling it directly in the onpress prop -
// we can use the onPress prop to call it in the parent component where the function is called(onSelect).
function CategoryGridTile({ title, color, onSelect }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onSelect}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
// in the inner view style we put the background color there because of the shadow effect.

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    // for ios
    // shadowOpacity: 0.25,
    //  shadowOffset: { width: 0, height: 2 },
    //   shadowRadius: 8,
    //  backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    // borderRadius: 8, // for IOS due to the corners not being rounded
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5, // this is for ios
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
