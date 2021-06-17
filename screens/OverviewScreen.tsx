import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Text,
  Icon,
  useTheme,
  Input,
  Button,
  Divider,
} from "@ui-kitten/components";

import ModalContainer from "./components/ModalContainer";

export default function OverviewScreen({ navigation }) {
  const theme = useTheme();

  return (
    <ModalContainer>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Icon
            name="arrow-back-outline"
            height={30}
            width={30}
            fill={theme["color-basic-700"]}
          />
        </TouchableOpacity>

        <View style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Text category="s1">Order Details</Text>
        </View>
      </View>

      <View
        style={{ paddingVertical: 15, paddingHorizontal: 15, marginBottom: 15 }}
      >
        <Text category="p2">
          Kindly escrow your cryptocurrency with the receiving address provided
          below. Your cryptocurrency will only be available for sale after it
          has been successfully escrowed.
        </Text>
      </View>

      <Divider />

      <View
        style={{ paddingVertical: 15, paddingHorizontal: 15, marginBottom: 15 }}
      >
        <View style={{ paddingVertical: 15 }}>
          <Text category="h6">Reference Number</Text>
          <Text category="s1">9U51622238198</Text>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <Text category="h6">Buying Amount</Text>
          <Text category="s1">NGN 120,345,690.00</Text>
          <Text category="p2">Apr ~ 0.00123 BTC</Text>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <Text category="h6">Receiving Address</Text>
          <Text category="s1">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</Text>
        </View>
      </View>

      <Divider />

      <View
        style={{ paddingVertical: 15, paddingHorizontal: 15, marginTop: 15 }}
      >
        <Text category="h6">Receiving Account Details</Text>
        <View style={{ height: 5 }} />
        <Text category="p2">
          Kindly make a Payment of your buying amount to the account details
          provided below. Your cryptocurrency will be relesed into your
          receiving address only when payment has been successfuly verified.
        </Text>
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <Button size="giant">Copy reference</Button>
      </View>
    </ModalContainer>
  );
}
