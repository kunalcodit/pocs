import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { openDrawer } from "@/navigators/Sidebar";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.rowCenter}>
          <Ionicons name="menu" size={30} onPress={openDrawer} />
          <Text style={styles.headerText}>Dashboards</Text>
        </View>
        <View style={styles.rowCenter}>
          <View style={styles.rightIcon}>
            <Ionicons name="notifications-outline" size={24} />
          </View>
          <View style={styles.rightIcon}>
            <Ionicons name="person" size={24} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: "4%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "medium",
    marginLeft: 10,
  },
  rightIcon: {
    backgroundColor: "lightgray",
    padding: 8,
    borderRadius: 50,
  },
});
