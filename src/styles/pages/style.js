import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
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
});