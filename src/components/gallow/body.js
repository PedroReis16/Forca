import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/body-style";

export function Body({ visivel }) {
  if (!visivel) return null;

  return <View style={styles.body} />;
}
