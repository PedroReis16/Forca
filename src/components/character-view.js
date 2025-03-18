import { View, Text } from "react-native";
import { styles } from "../styles/components/character-view-style";

export function CharacterView({ characters }) {
  return (
    <View style={styles.characterContainer}>
      {characters.map((character, index) =>
        index != 0 ? (
          <View key={index} style={styles.characterContainer}>
            <Text>-</Text>
            <Text key={index}>{character}</Text>
          </View>
        ) : (
          <View style={styles.characterContainer}>
            <Text>{character}</Text>
          </View>
        )
      )}
    </View>
  );
}
