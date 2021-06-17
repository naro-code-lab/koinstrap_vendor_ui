import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useScreenSize from "../../hooks/useScreenSize";

export default function ModalContainer({ children }) {
  const small = useScreenSize();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={[
          styles.container,
          small && {
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: "absolute",
            backgroundColor: "#fff",
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 600,
    top: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "#fff",
  },
});
