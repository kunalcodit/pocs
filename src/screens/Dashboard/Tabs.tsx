import { View, Text } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>All</Text>
        <Text style={styles.inactiveTab}>Shared</Text>
        <Text style={styles.inactiveTab}>Client</Text>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    padding: "4%",
    // backgroundColor: "white",
  },
  tabContainer: {
    backgroundColor: "white",
    padding: "1%",
    borderRadius: "8@ms",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  activeTab: {
    borderWidth: 0.5,
    borderColor: "gray",
    padding: "2%",
    borderRadius: 5,
    fontSize: "18@ms",
    flex: 1,
    textAlign: "center",
    margin: "2%",
  },
  inactiveTab: {
    flex: 1,
    textAlign: "center",
    fontSize: "18@ms",
    backgroundColor: "lightgray",
    padding: "2%",
    margin: "1%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
