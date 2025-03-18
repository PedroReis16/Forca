import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c7bcba",
    flex: 1,
  },
  pageContent: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
    flex: 1,
  },
  gameContent: {
    alignItems: "center",
  },
  wordTip: {
    fontSize: 20,
    marginBottom: 20,
  },
  finalGameContainer: {
    alignItems: "center",
  },
  finalGameMessage: {
    fontSize: 32,
    fontFamily: "Luckiest Guy",
    fontWeight: "bold",
    paddingBottom: 8
  },
  tryAgain: {
    paddingVertical: 16,
    fontSize: 18,
    color: "#8B4513",
    fontFamily: "Luckiest Guy",
    fontWeight: "bold",
  },
});
