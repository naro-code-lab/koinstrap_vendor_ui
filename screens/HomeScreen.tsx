import React, { useEffect } from "react";
import { Button, Icon, Layout, Text, useTheme } from "@ui-kitten/components";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import FullColor from "./components/headers/FullColor";
import FullImage from "./components/headers/FullImage";
import HalfImage from "./components/headers/HalfImage";
import SplitColor from "./components/headers/SplitColor";
import renderSwitch from "../hooks/renderSwitch";
import ListByTable from "./components/currency-list/ListByTable";
import ListByCards from "./components/currency-list/ListByCards";
import useScreenSize from "../hooks/useScreenSize";
import SingleNav from "./components/navbars/SingleNav";
import SplitNav from "./components/navbars/SplitNav";
import { useNavigation } from "@react-navigation/core";

export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    navigation.navigate("Buy");
  }, []);
  return (
    <Layout style={{ flex: 1 }}>
      <NavBar theme={theme} current="split-nav" />
      <ScrollView
        style={{
          flex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <HeroBanner theme={theme} current="half-image" />

        <CurrencyList theme={theme} current="by-cards" />

        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text category="s1">Footer</Text>
        </View>
      </ScrollView>
    </Layout>
  );
}

function NavBar({ theme, current = "single-nav" }) {
  return renderSwitch(current, {
    "single-nav": <SingleNav theme={theme} />,
    "split-nav": <SplitNav theme={theme} />,
  });
}

function HeroBanner({ theme, current = "full-color" }) {
  return renderSwitch(current, {
    "full-color": <FullColor theme={theme} />,
    "full-image": <FullImage theme={theme} />,
    "half-image": <HalfImage theme={theme} />,
    "split-color": <SplitColor theme={theme} />,
  });
}

function CurrencyList({ theme, current = "by-cards" }) {
  return renderSwitch(current, {
    "by-table": <ListByTable theme={theme} />,
    "by-cards": <ListByCards theme={theme} />,
  });
}
