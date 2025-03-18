import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c7bcba",
    paddingTop: 5,
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
    marginBottom: 10,
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
  buttonBorder: {
    backgroundColor: "#F0C14B",
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: "#8B4513",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  forcaImg: {
    width: 200,          
    height: 250,         
    resizeMode: "contain",
    alignSelf: "center", 
    marginBottom: 20,    
  },
  txtDica: {
    fontSize:20
  },
  overlay: {
    position: 'absolute',
    top: 250,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  txtAvancar: {
    fontSize: 25
  },
  btnAvancar: {
    backgroundColor: "rgba(57, 233, 115, 0.86)",
    padding: 15,
    borderRadius: 30
  }
});
