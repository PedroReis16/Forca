import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/gallow-structure-style";

export function GallowStructure() {
  return (
    <View style={styles.gallowContainer}>
      <View style={styles.gallowBase} />
      <View style={styles.gallowPost} />
      <View style={styles.gallowTop} />
      <View style={styles.gallowString} />
    </View>
  );
}
