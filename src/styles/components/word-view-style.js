import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    margin: 20,
  },
  character: {
    fontSize: 35,
    textAlign: "center",
    width: 35,
    height: 35,
    lineHeight: 35,
  },
  characterUnderline: {
    width: 35,
    height: 2,
    backgroundColor: "#000",
    marginTop: 2,
    alignSelf: "center",
  },
});
