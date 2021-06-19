import React, { useContext, useEffect } from "react";
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
import { MainApiContext } from "../contexts/ApiContexts";

export default function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();

  const { settings } = useContext(MainApiContext);

  return (
    <Layout style={{ flex: 1 }}>
      <NavBar
        theme={theme}
        current={settings?.theme?.navbar}
        settings={settings}
      />
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
        <HeroBanner
          theme={theme}
          current={settings?.theme?.header}
          settings={settings}
        />

        <CurrencyList
          theme={theme}
          current={settings?.theme?.list}
          settings={settings}
        />

        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text category="s1">{`${
            settings.name
          } ${new Date().getFullYear()}`}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
}

function NavBar({ theme, current = "single-nav", settings }) {
  return renderSwitch(current, {
    "single-nav": <SingleNav theme={theme} />,
    "split-nav": <SplitNav theme={theme} />,
  });
}

function HeroBanner({ theme, current = "full-color", settings }) {
  const { intro, tagline, ...rest } = settings.theme;

  return renderSwitch(current, {
    "full-color": <FullColor theme={theme} {...{ intro, tagline }} />,
    "full-image": <FullImage theme={theme} {...{ intro, tagline }} />,
    "half-image": <HalfImage theme={theme} {...{ intro, tagline }} />,
    "split-color": <SplitColor theme={theme} {...{ intro, tagline }} />,
  });
}

function CurrencyList({ theme, current = "by-cards", settings }) {
  return renderSwitch(current, {
    "by-table": <ListByTable theme={theme} />,
    "by-cards": <ListByCards theme={theme} />,
  });
}
