import React, { useContext, useState } from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import {
  Text,
  Icon,
  useTheme,
  Input,
  Button,
  Spinner,
} from "@ui-kitten/components";
import { useAlert } from "react-alert";

import ModalContainer from "./components/ModalContainer";
import { MainApiContext } from "../contexts/ApiContexts";
import { useNavigation } from "@react-navigation/core";

export default function SearchScreen({ navigation }) {
  const theme = useTheme();
  const alert = useAlert();

  const [orderId, setOrderId] = useState("");

  const { searchOrder, loadingGetOrder } = useContext(MainApiContext);

  const onPressSearch = async () => {
    const { status } = await searchOrder(orderId);

    if (!status) {
      return alert.error("Order not found");
    }

    navigation.replace("Overview");
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={onPressSearch}>
      <Icon {...props} name="search-outline" />
    </TouchableWithoutFeedback>
  );

  return (
    <ModalContainer>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <View>
          <Text category="h5">Search</Text>
          <View style={{ height: 5 }} />
          <Text category="s1" appearance="hint">
            Kindly search with transaction reference
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="close-circle-outline"
            height={30}
            width={30}
            fill={theme["color-basic-700"]}
          />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 15, paddingTop: 35 }}>
        <Input
          placeholder="Search reference"
          size="large"
          accessoryRight={renderIcon}
          onChangeText={setOrderId}
          value={orderId}
        />
        <View style={{ paddingTop: 15 }}>
          <View style={{ paddingTop: 15 }}>
            <Button
              size="giant"
              onPress={() => {
                if (loadingGetOrder) {
                  return;
                }
                onPressSearch();
              }}
              accessoryLeft={() => {
                if (!loadingGetOrder) {
                  return <></>;
                }

                return <Spinner size="small" status="control" />;
              }}
            >
              {loadingGetOrder ? "Searching" : "Search"}
            </Button>
          </View>
        </View>
      </View>
    </ModalContainer>
  );
}
