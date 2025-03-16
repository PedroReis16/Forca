import { View } from "react-native";
import { Head } from "./head";
import { Body } from "./body";
import { Arm } from "./arm";
import { Leg } from "./leg";
import { styles } from "../../styles/components/gallow-styles/doll-style";

export function Doll({ erros = 0 }) {
  return (
    <View style={styles.dollContainer}>
      <Head visivel={erros >= 1} />
      <Body visivel={erros > 1} />
      <Arm visivel={erros > 2} isLeft={true} />
      <Arm visivel={erros > 3} />
      <Leg visivel={erros > 4} isLeft={true} />
      <Leg visivel={erros > 5} />
    </View>
  );
}
