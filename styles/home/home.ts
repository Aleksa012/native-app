import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#18122B",
    height: "100%",
    position: "relative",
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  footer: {
    backgroundColor: "#393053",
    position: "absolute",
    height: 50,
    width: "100%",
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  field: {
    width: "90%",
    backgroundColor: "#635985",
    height: 40,
    fontSize: 24,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "white",
  },
  btn: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    minHeight: "100%",
  },
});
