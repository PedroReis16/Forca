import { Text, View } from "react-native";
import { style } from "../styles/pages/solution-page-style";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { word, wordTip } = useLocalSearchParams();

  return (
    <View style={style.container}>
      <Text children={word}></Text>
      <Text children={wordTip}></Text>
      <Text>Solution Page</Text>
    </View>
  );
}
