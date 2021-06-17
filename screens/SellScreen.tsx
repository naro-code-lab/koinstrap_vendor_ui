import * as React from "react";
import { TouchableOpacity, View, ScrollView } from "react-native";
import {
  Text,
  Icon,
  useTheme,
  Input,
  Button,
  Divider,
  Select,
  SelectItem,
} from "@ui-kitten/components";

import ModalContainer from "./components/ModalContainer";
import useScreenSize from "../hooks/useScreenSize";

export default function SellScreen({ navigation }) {
  const theme = useTheme();
  const small = useScreenSize();

  return (
    <ModalContainer>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          <Text category="h6">What do you want to do?</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="close-circle-outline"
              height={30}
              width={30}
              fill={theme["color-basic-700"]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <View style={{ width: small ? 125 : 175 }}>
            <Button
              style={{ borderRadius: 400 }}
              size={small ? "medium" : "giant"}
            >
              SELL BTC
            </Button>
          </View>
          <View style={{ width: 25 }} />
          <View style={{ width: small ? 125 : 175 }}>
            <Button
              style={{ backgroundColor: "transparent", borderRadius: 400 }}
              size={small ? "medium" : "giant"}
              appearance="outline"
              onPress={() => navigation.replace("Buy")}
            >
              BUY BTC
            </Button>
          </View>
        </View>
        <Divider />
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          <View style={{ marginBottom: 5 }}>
            <Text category="s1">How much do you want to sell?</Text>
          </View>

          <View>
            <Input
              style={{
                borderWidth: 1,
                borderColor: theme["color-primary-600"],
                borderRadius: 5,
              }}
              keyboardType="decimal-pad"
              accessoryRight={() => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    <Button size="tiny">NGN</Button>
                    <View style={{ width: 10 }} />
                    <Button size="tiny" appearance="outline">
                      BTC
                    </Button>
                  </View>
                );
              }}
              size="large"
              placeholder="Enter amount"
            />
          </View>

          <View style={{ marginTop: 5 }}>
            <Text category="s2">Apr ~ 0.0000000 BTC </Text>
          </View>
        </View>
        <View
          style={{ paddingHorizontal: 15, marginTop: 50, marginBottom: 35 }}
        >
          <View style={{ marginBottom: 5 }}>
            <Text category="s1">Escrow Address</Text>
          </View>

          <View>
            <Input
              style={{
                borderWidth: 1,
                borderColor: theme["color-primary-600"],
                borderRadius: 5,
              }}
              accessoryRight={() => {
                return <Button size="tiny">Copy</Button>;
              }}
              size="large"
              placeholder="Enter escrow address"
            />
          </View>
        </View>
        <Divider />
        <View style={{ paddingHorizontal: 15, paddingVertical: 25 }}>
          <Text category="s1">Receiving Account Details</Text>

          <View style={{ height: 5 }} />

          <Text category="p2">
            Kindly provide the account where you want to receive money for your
            crypto.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          {small ? (
            <>
              {" "}
              <View style={{ flex: 1, paddingVertical: 15 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text category="s1">Select Bank</Text>
                </View>

                <Select
                  size="large"
                  placeholder="Select a Bank"
                  style={{
                    borderWidth: 1,
                    borderColor: theme["color-primary-600"],
                    borderRadius: 5,
                  }}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
              </View>
              <View style={{ flex: 1, paddingVertical: 15 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text category="s1">Account Number</Text>
                </View>

                <Input
                  style={{
                    borderWidth: 1,
                    borderColor: theme["color-primary-600"],
                    borderRadius: 5,
                  }}
                  size="large"
                  placeholder="Enter Account Number"
                />
              </View>
            </>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 190 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text category="s1">Select Bank</Text>
                </View>

                <Select
                  size="large"
                  placeholder="Select a Bank"
                  style={{
                    borderWidth: 1,
                    borderColor: theme["color-primary-600"],
                    borderRadius: 5,
                  }}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
              </View>

              <View style={{ width: 10 }} />

              <View style={{ flex: 1 }}>
                <View style={{ marginBottom: 5 }}>
                  <Text category="s1">Account Number</Text>
                </View>

                <Input
                  style={{
                    borderWidth: 1,
                    borderColor: theme["color-primary-600"],
                    borderRadius: 5,
                  }}
                  size="large"
                  placeholder="Enter Account Number"
                />
              </View>
            </View>
          )}

          <View style={{ flex: 1, paddingVertical: 15 }}>
            <View style={{ marginBottom: 5 }}>
              <Text category="s1">Account Name</Text>
            </View>

            <Input
              style={{
                borderWidth: 1,
                borderColor: theme["color-primary-600"],
                borderRadius: 5,
              }}
              size="large"
              placeholder="Enter full Account Name"
            />
          </View>

          <View style={{ paddingTop: 15 }}>
            <Button
              size="giant"
              onPress={() => navigation.navigate("Overview")}
            >
              Proceed to Payment
            </Button>
          </View>
        </View>
      </ScrollView>
    </ModalContainer>
  );
}
