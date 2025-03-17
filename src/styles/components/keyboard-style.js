import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  keyboardContainer: {
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
    gap: 8,
  },
  key: {
    padding: 10,
    borderRadius: 5,
    borderColor: "#8B4513",
    borderWidth: 2,
  },
  keyFont: {
    fontSize: 14,
    color: "#8B4513",
  },
  keyDisabled: {
    borderColor: "#A9A9A9",
  },
  keyFontDisabled: {
    color: "#A9A9A9",
  },
});
