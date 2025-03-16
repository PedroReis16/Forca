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
  button: {
    width: 140,
    height: 50,
    backgroundColor: "#8B4513",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: "#C0C0C0", // Cinza para indicar estado desabilitado
    shadowOpacity: 0.2,
    elevation: 2,
  },
  buttonBorder: {
    backgroundColor: "#F0C14B",
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: "#8B4513",
  },
  buttonBorderDisabled: {
    backgroundColor: "#D3D3D3", // Cinza claro
    borderColor: "#A9A9A9",
    opacity: 0.7,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonContentDisabled: {
    backgroundColor: "#D3D3D3",
  },
  buttonText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#8B4513",
    fontFamily: "Luckiest Guy",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonTextDisabled: {
    color: "#808080",
    textShadowColor: "rgba(255, 255, 255, 0.1)",
  },
});
