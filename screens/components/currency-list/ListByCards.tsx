import React from "react";
import { Button, Text, Divider } from "@ui-kitten/components";
import { View, Image } from "react-native";
import useScreenSize from "../../../hooks/useScreenSize";
import { useNavigation } from "@react-navigation/native";

export default function ListByCards({ theme }) {
  const isSmallDevice = useScreenSize();
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 900,
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4, 5].map((hh) => (
          <View
            style={{
              width: isSmallDevice ? "100%" : "49%",
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                backgroundColor: theme["color-basic-100"],
                borderWidth: 1,
                minHeight: 100,
                borderRadius: 10,
                paddingVertical: 15,
                borderColor: theme["outline-color"],
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 15,
                  paddingBottom: 15,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <View style={{ paddingRight: 20 }}>
                  <View style={{ height: 40, width: 40 }}>
                    <Image
                      source={require("../../../assets/images/currencies/bitcoin.png")}
                      style={{ height: undefined, width: undefined, flex: 1 }}
                    />
                  </View>
                </View>

                <View style={{ width: "100%" }}>
                  <Text>Bitcoin (BTC) </Text>

                  <View style={{}}>
                    <Text>NGN 18,000,000.00 </Text>
                    <Text status="danger">-1.77%</Text>
                  </View>
                </View>
              </View>

              <Divider />

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Buy Rate</Text>
                  <Text>1,000,000</Text>
                </View>
                <View
                  style={{
                    width: 1,
                    backgroundColor: theme["outline-color"],
                    height: "100%",
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 15,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Buy Rate</Text>
                  <Text>1,000,000</Text>
                </View>
              </View>

              <Divider />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 15,
                }}
              >
                <Button size="small" onPress={() => navigation.navigate("Buy")}>
                  Trade
                </Button>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
