import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Top-level page</Text>
      <Link href={"/solution-page"}>Go to solution page</Link>
    </View>
  );
}
