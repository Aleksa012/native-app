import { StyleSheet } from "react-native";

export const postScreenStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#18122B",
  },
  post: {
    backgroundColor: "#635985",
    width: "100%",
    minHeight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#205E61",
    padding: 10,
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
    paddingBottom: 50,
    paddingTop: 10,
    minHeight: "100%",
  },
});
