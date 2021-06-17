import React from "react";
import { Text } from "@ui-kitten/components";
import { View, Image } from "react-native";

export default function FullColor({ theme }) {
  return (
    <View
      style={{
        minHeight: 500,
        backgroundColor: theme["color-primary-700"],
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", paddingTop: 200 }}>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            category="h3"
            appearance="alternative"
            style={{ textAlign: "center" }}
          >
            Welcome to Wart's exchange
          </Text>

          <View style={{ paddingTop: 10 }} />

          <Text
            category="s1"
            allowFontScaling={false}
            appearance="alternative"
            style={{ textAlign: "center" }}
          >
            Buy, sell and trade cryptocurrency in mintutes.
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 35 }}>
        <Text appearance="alternative" category="h5" style={{}}>
          Start Trading
        </Text>
      </View>
    </View>
  );
}
