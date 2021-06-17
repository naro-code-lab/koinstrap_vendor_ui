import React from "react";
import { Button, Text } from "@ui-kitten/components";
import { View, TouchableOpacity, Image } from "react-native";
import useScreenSize from "../../../hooks/useScreenSize";
import { useNavigation } from "@react-navigation/core";

export default function ListByTable({ theme }) {
  const isSmallDevice = useScreenSize();
  const navigation = useNavigation();

  return (
    <View style={[!isSmallDevice && { alignItems: "center" }]}>
      <View
        style={[
          {
            marginTop: 25,
            paddingBottom: 0,
            marginBottom: 25,

            //   alignSelf: "center",
          },
          !isSmallDevice && {
            maxWidth: 1200,
            minWidth: 900,
            borderWidth: 1,
            borderColor: "#ccc",
            marginHorizontal: 10,
            padding: 15,
            borderRadius: 10,
          },
          isSmallDevice && {
            padding: 10,
          },
        ]}
      >
        {[1, 2, 3, 4, 5].map((hh) => (
          <CanPressOrNot
            isSmallDevice={isSmallDevice}
            onPress={() => navigation.navigate("Buy")}
          >
            <View
              style={[
                {
                  flexDirection: "row",
                  marginBottom: 25,
                  alignItems: "center",
                },
              ]}
            >
              <View style={{ paddingRight: 10 }}>
                <View style={{ height: 30, width: 30 }}>
                  <Image
                    source={require("../../../assets/images/currencies/bitcoin.png")}
                    style={{ height: undefined, width: undefined, flex: 1 }}
                  />
                </View>
              </View>

              <View
                style={[
                  { flex: 1, paddingRight: 10 },
                  isSmallDevice && {
                    justifyContent: "space-around",
                  },
                ]}
              >
                <Text category="s1">Bitcoin</Text>
                <View style={{ paddingTop: 5 }} />
                <Text appearance="hint" category="c1">
                  BTC
                </Text>
                {isSmallDevice && <Text>NGN 18,668,970.00</Text>}
              </View>

              <View
                style={[
                  { flex: 1, paddingRight: 10 },
                  isSmallDevice && {
                    justifyContent: "space-around",
                    paddingRight: 0,
                    flex: undefined,
                  },
                ]}
              >
                <Text>Buy: 500/NGN</Text>
                <View style={{ paddingTop: 5 }} />
                <Text>Sell: 502/NGN</Text>
              </View>
              {!isSmallDevice && (
                <>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text>NGN 18,668,970,123.00</Text>
                  </View>

                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text status="danger"> -1.77%</Text>
                  </View>
                </>
              )}

              {!isSmallDevice && (
                <View style={{}}>
                  <Button
                    size="small"
                    onPress={() => navigation.navigate("Buy")}
                  >
                    Trade
                  </Button>
                </View>
              )}
            </View>
          </CanPressOrNot>
        ))}
      </View>
    </View>
  );
}

const CanPressOrNot = ({ onPress, children, isSmallDevice }) => {
  if (isSmallDevice) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
  return <>{children}</>;
};
