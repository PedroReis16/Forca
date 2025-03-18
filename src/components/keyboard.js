import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native";
import { styles } from "../styles/components/keyboard-style";

export function TecladoVirtual({ onKeyPress, pressedKeys }) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <View style={styles.keyboardContainer}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              style={[styles.key, pressedKeys.includes(key.toLowerCase()) && styles.disabledKey]}
              disabled={pressedKeys.includes(key.toLowerCase())}
              onPress={() => {
                onKeyPress(key.toLowerCase());
              }}
            >
              <Text style={styles.keyTxt}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
