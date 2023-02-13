import { Platform, StatusBar, StyleSheet } from "react-native";

export const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8BF5FA",
  },
  wrapper: {
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "inherit",
  },
});
