import React from "react";
import { TextInput, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function InputElement() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search records ..."
        placeholderTextColor="gray"
        style={styles.input}
      />
      <View style={styles.icon}>
        <Ionicons name="list" size={20} color="blue" />
      </View>
      <View style={styles.icon}>
        <FontAwesome6 name="up-down-left-right" size={20} color="blue" />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    padding: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    padding: "4%",
    fontSize: "16@s",
    borderRadius: "8@s",
    flex: 1,
  },
  icon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
});
