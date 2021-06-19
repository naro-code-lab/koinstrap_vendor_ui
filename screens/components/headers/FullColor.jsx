import React from "react";
import { Text } from "@ui-kitten/components";
import { View, Image } from "react-native";

export default function FullColor({ theme, intro, tagline }) {
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
            {intro}
          </Text>

          <View style={{ paddingTop: 10 }} />

          <Text
            category="s1"
            allowFontScaling={false}
            appearance="alternative"
            style={{ textAlign: "center" }}
          >
            {tagline}
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
