import React from "react";
import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/gallow-style";
import { GallowStructure } from "./gallow-structure";
import { Doll } from "./doll";

export function Gallow({ erros = 0 }) {
  return (
    <View style={styles.container}>
      <GallowStructure />
      <Doll erros={erros} />
    </View>
  );
}
