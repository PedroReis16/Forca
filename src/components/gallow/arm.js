import { View } from "react-native";
import { styles } from "../../styles/components/gallow-styles/arm-style";

export function Arm({ visivel, isLeft = false }) {
  if (!visivel) return null;

  return (
    <View
      style={[
        styles.arm,
        {
          top: isLeft ? 100 : 127.5,
          left: !isLeft ? 170 : 200.5,
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
