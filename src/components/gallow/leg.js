import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/leg-style";

export function Leg({ visivel, isLeft = false }) {
  if (!visivel) return null;

  return (
    <View
      style={[
        styles.leg,
        {
          top: !isLeft ? 178 : 150,
          left: !isLeft ? 170 : 200,
          transform: [
            {
              rotate: isLeft ? "45deg" : "-45deg",
            },
          ],
        },
      ]}
    />
  );
}
