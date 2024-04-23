import { View, Text } from "react-native";
import React from "react";
import Header from "./components/Header";
import { ScaledSheet } from "react-native-size-matters";

export default function Analysis() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
});
