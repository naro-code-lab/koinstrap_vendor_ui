import React from "react";
import { Text } from "@ui-kitten/components";
import { View, Image } from "react-native";

export default function FullImage({ theme }) {
  return (
    <View
      style={{
        minHeight: 500,
      }}
    >
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <View style={{ height: "100%", width: "100%" }}>
          <Image
            source={require("../../../assets/images/jarritos-mexican-soda-No_34j6QVSQ-unsplash.jpeg")}
            style={{
              flex: 1,
              height: undefined,
              width: undefined,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme["color-primary-600"],
            opacity: 0.4,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
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
    </View>
  );
}
