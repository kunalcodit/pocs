import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "./components/Header";
import InputElement from "./components/InputElement";
import Tabs from "./components/Tabs";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import fetchAllpage, { BASE_URL } from "@/services/users/fetchAllpage";
import axios from "axios";
import CookieManager from "@react-native-cookies/cookies";
import { DashboardData } from "@/types/dashboard/dashboard";

export default function Dashboard({ navigation }) {
  const [data, setdata] = useState<DashboardData>();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const params = {
        all: true,
        is_predefined: false,
        is_in_library: false,
        extra: true,
        datatable: true,
        summary: true,
        sort: "title",
        page: "0,50",
        query_id: "54b4dc23-e794-465f-b443-25f3af7bf37f",
      };

      // const cookieString = await CookieManager.set(BASE_URL, {
      //   name: "adminhtml",
      //   value: "833v3nmbdirp1tll2bjjvmgk10",
      //   domain: "demo2019.tapclicks.com",
      //   path: "/",
      //   expires: "Wed, 24 Apr 2024 10:06:57 GMT",
      //   httpOnly: true,
      //   secure: true,
      // });
      // const response = await CookieManager.get(BASE_URL);
      // const cookiesString = Object.entries(response).map(
      //   ([, value]) => `${value.name}=${value.value}`
      // );
      const { data } = await axios.get(BASE_URL, { params });
      // console.log("label->", data.data.aaData);
      setdata(data.data.aaData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <InputElement />
      <Tabs />
      {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {new Array(10).fill(0).map((_, idx) => (
          <Card key={idx} onPress={() => navigation.navigate("Analysis")} />
        ))}
      </ScrollView> */}
      <FlatList
        data={data}
        renderItem={({ index, item }) => (
          <Card
            key={index}
            data={item}
            onPress={() => navigation.navigate("Analysis")}
          />
        )}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
});
