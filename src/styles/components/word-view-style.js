import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  character: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  characterUnderline: {
    width: 20,
    height: 2,
    backgroundColor: "#000",
  },
});
