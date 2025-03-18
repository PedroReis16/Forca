import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c7bcba",
    paddingTop: 64,
    flexGrow: 1,
  },
  pageContent: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  gameLogo: {
    width: 250,
    height: 130,
    marginBottom: 20,
  },
  gameInputs: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "95%",
    height: 60,
    backgroundColor: "#F5DEB3",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#8B4513",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 20,
    fontFamily: "luckiest-guy",
    color: "#8B4513",
    textAlign: "center",
  },
  wordInput: {
    marginBottom: 20,
  },
  randomOption: {
    marginTop: 20,
  },
  randomOptionText: {
    fontSize: 20,
    color: "#8B4513",
    fontFamily: "Luckiest Guy",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
