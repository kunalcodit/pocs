import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Card({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Color Options pallete 1</Text>
          <View style={styles.icon}>
            <Ionicons name="list" size={20} color="blue" />
          </View>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800",
          }}
          style={styles.image}
          alt="image1"
        />
        <View style={styles.flexBox}>
          <AntDesign name="clockcircle" size={20} color="blue" />
          <Text> Updated: </Text>
          <Text style={styles.captions}>Jan 20, 2024 | 05:11 AM</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "4%",
    marginBottom: "4%",
  },
  tabContainer: {
    backgroundColor: "#e7e5e4",
    padding: "4%",
    borderRadius: "8@ms",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "3%",
  },
  headertext: {
    color: "#FF8C00",
    fontWeight: "500",
    fontSize: "18@ms",
  },
  icon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "200@ms",
    borderRadius: "8@ms",
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "2%",
  },
  captions: {
    color: "blue",
    fontWeight: "500",
  },
});
