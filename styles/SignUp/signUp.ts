import { StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
  container: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 46,
    color: "#205E61",
    marginBottom: 10,
    fontWeight: "bold",
  },
  field: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "#3F979B",
    color: "#FFFFFF",
  },
  label: {
    width: "80%",
    marginBottom: 4,
    marginTop: 8,
  },
  link: {
    color: "blue",
  },
  btn: {
    backgroundColor: "#205E61",
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  error: {
    color: "red",
    marginTop: 2,
  },
});
