import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/head-style";

export function Head({ visivel }) {
  if (!visivel) return null;

  return <View style={styles.head} />;
}
