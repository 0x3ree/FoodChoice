import { View, Text, StyleSheet } from "react-native";
function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}
//(*s) data holds the data we want to iterate(repeat) over and display in the list. we can also use the FlatList component to display the data in a list format, but we are using the map method to iterate over the data and display it in a simple list format. we are using the key prop to give each item a unique key, which is required by React to identify each item in the list. we are also using the Text component to display the data in a text format.
// data holds the data we want to iterate(repeat) and then the data.map() does the iteration which shold then produce a list of item which is dataPoint(which is an array in the dummy data file).
export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#333333",
  },
  itemText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
