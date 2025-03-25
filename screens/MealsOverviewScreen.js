import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealsOverviewScreen() {
  return (
    <View>
      <Text>Meals Overview</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
