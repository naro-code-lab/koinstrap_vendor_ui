import * as React from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Text, Icon, useTheme, Input, Button } from "@ui-kitten/components";

import ModalContainer from "./components/ModalContainer";

export default function SearchScreen({ navigation }) {
  const theme = useTheme();

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
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
        />
        <View style={{ paddingTop: 15 }}>
          <Button size="large">Search</Button>
        </View>
      </View>
    </ModalContainer>
  );
}
