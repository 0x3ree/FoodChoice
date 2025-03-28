import { View, Text, Pressable, Image, StyleSheet } from "react-native";
function MealsItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

//* when using images from the web we have to define the width and the height, unlike when we source it locally and react-native will automatically adjust the size which we can then style.
//(* suggestion) we can also use the ImageBackground component to add a background image to a view, which is a view that has an image as a background.

export default MealsItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
