import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "./Header";
import InputElement from "./InputElement";
import Tabs from "./Tabs";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import fetchAllpage, { BASE_URL } from "@/services/users/fetchAllpage";
import axios from "axios";

export default function Dashboard({ navigation }) {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const params = {
      all: true,
      is_predefined: false,
      is_in_library: false,
      extra: true,
      datatable: true,
      summary: true,
      sort: "title",
      page: "0,50",
      query_id: "1056e003-2bc4-4b12-b8fa-c8e62485a065",
    };
    try {
      const response = await axios.get(BASE_URL, {
        withCredentials: true,
        credentials: "include",
        params,
        headers: {
          "Set-Cookie": `_gcl_au=1.1.161431926.1713164067; _uetvid=003f8d90faf511ee9e3067ee3aad6193; __q_state_bam14WurETwzRzHy=eyJ1dWlkIjoiOTg4ODllYzQtN2FiMy00NTdhLTgwMjktN2NkZjA2MDY1OWZkIiwiY29va2llRG9tYWluIjoidGFwY2xpY2tzLmNvbSJ9; __hstc=89745284.e7c6f20605af79c21c2f5bdc8e8d6115.1713164069086.1713164069086.1713164069086.1; hubspotutk=e7c6f20605af79c21c2f5bdc8e8d6115; _ga_53X9Z1YJDR=GS1.1.1713164066.1.1.1713164734.60.0.0; __stripe_mid=9aadf33f-8726-4b55-b881-6312e8621ecd3275da; _ga=GA1.2.1746099497.1713164067; _ga_ZLZV07EHZ4=GS1.2.1713374661.1.0.1713374661.60.0.0; ajs_user_id=erica.lundin@tapclicks.com; ajs_anonymous_id=c47e3ebc-b76c-4227-be2f-97b7a112567b; ajs_group_id=demo2019.tapclicks.com; adminhtml=tcsd9lu6mubgdlcb5slb9ie6ro; __stripe_sid=fc4bcf16-2f74-482a-bda6-17d652db87ec759b55; fs_lua=1.1713760677366; fs_uid=#1LX4#7d67fdf4-7637-49fc-917f-804450c6b98a:dd739b6b-4658-4b2c-8354-d69383503872:1713760354850::2#c2754694#/1744700095`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <InputElement />
      <Tabs />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {new Array(10).fill(0).map((_, idx) => (
          <Card key={idx} onPress={() => navigation.navigate("Analysis")} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
});
