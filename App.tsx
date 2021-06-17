import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

import Template from "./screens";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function App() {
  injectWebCss();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <Template colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    );
  }
}
const noGlow = `
textarea, select, input, button {
	-webkit-appearance: none;
	outline: none!important;
}
textarea:focus, select:focus, input:focus, button:focus {
	-webkit-appearance: none;
	outline: none!important;
}
`;
const injectWebCss = () => {
  // Only on web
  if (Platform.OS != "web") return;

  // Inject style
  const style = document.createElement("style");
  style.textContent = noGlow;
  return document.head.append(style);
};
