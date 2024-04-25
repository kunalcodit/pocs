import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "@/theme/Colors";

const tabs = [
  { name: "Executive Summary" },
  { name: "Campaign Breakdown" },
  { name: "Ads Group" },
  { name: "Ads" },
  { name: "Demographics" },
  { name: "Devices" },
  { name: "Leads" },
];

export default function Section() {
  return (
    <FlatList
      data={tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = ScaledSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.gray,
    textAlign: "center",
    height: "40@vs",
    width: "100@s",
    // flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
