import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BlackView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },
  WhiteView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  WhiteText: {
    color: "#FFFFFF",
    backgroundColor: "#242628", // Dark Grey
  },
  BlackText: {
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  GreyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242628", // Dark Grey
    // borderRadius: 10
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
